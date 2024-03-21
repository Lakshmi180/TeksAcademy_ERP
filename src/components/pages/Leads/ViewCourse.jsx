import React, { useEffect, useState } from "react";
import "../../../assets/css/common/Table.css";
import { AiFillEye } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { MdLocalPrintshop } from "react-icons/md";
import { FaRegIdCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiMiniPlus } from "react-icons/hi2";
import { useUserContext } from "../../../hooks/useUserContext";
import Usedebounce from "../../../hooks/useDebounce/Usedebounce";

export const ViewCourse = () => {
  // here the adding the filters and pagination------------------------
  const {
    UsersState,
    UsersState: { EnrolledUsers },
    DispatchUsers,
  } = useUserContext();
  console.log(UsersState.EnrolledUsers, "bvjhjkbjbvjb");
  const { debouncesetSearch, debouncesetPage } = Usedebounce(DispatchUsers);

  const handleSearch = (e) => {
    debouncesetSearch({ context: "ENROLLED_USERS", data: e.target.value });
  };
  const HandlePerPage = (e) => {
    const selectedValue = e.target.value;
    DispatchUsers({
      type: "SET_PER_PAGE",
      payload: {
        context: "ENROLLED_USERS",
        data: selectedValue,
      },
    });
  };

  const [filterCriteria, setfilterCriteria] = useState({
    profile: "",
    department: "",
    branch: "",
  });

  const HandleFilterCertria = (e) => {
    const { name, value } = e.target;
    setfilterCriteria((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const filterSubmit = () => {
    console.log("filterCriteriaram", filterCriteria);
    DispatchUsers({
      type: "SET_FILTERS",
      payload: {
        context: "ENROLLED_USERS",
        data: {
          profile: filterCriteria.profile,
          department: filterCriteria.department,
          branch: filterCriteria.branch,
        },
      },
    });
  };

  const FilterReset = () => {
    setfilterCriteria({
      profile: "",
      department: "",
      branch: "",
    });
    filterSubmit();
  };

  useEffect(() => {
    DispatchUsers({
      type: "SET_FILTERS",
      payload: {
        context: "ENROLLED_USERS",
        data: {
          profile: "",
          department: "",
          branch: "",
        },
      },
    });
    debouncesetSearch({ context: "ENROLLED_USERS", data: "" });
    debouncesetPage({ context: "ENROLLED_USERS", data: 1 });
    DispatchUsers({
      type: "SET_PER_PAGE",
      payload: {
        context: "ENROLLED_USERS",
        data: 10,
      },
    });
  }, []);

  const [currentPage, setCurrentPage] = useState(EnrolledUsers.currentPage);

  useEffect(() => {
    debouncesetPage({ context: "ENROLLED_USERS", data: currentPage });
  }, [currentPage]);

  const totalPages = EnrolledUsers.totalPages;

  const changePage = (page) => {
    setCurrentPage(page);
    // Add your logic here to handle page change
    console.log("Current page:", page);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      changePage(currentPage + 1);
    }
  };

  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, startPage + 2);
  if (endPage - startPage < 2) {
    startPage = Math.max(1, endPage - 2);
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-xl-12">
            <div className="card border-0 bg_white">
              <div className="card-header bg_white">
                <div className="row justify-content-between ">
                  <div className="col-sm-4">
                    <div className="search-box">
                      <input
                        type="text"
                        className="form-control search input_bg_color"
                        placeholder="Search for..."
                        name="search"
                        required
                        onChange={handleSearch}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex justify-content-end">
                      <div className="fs-13 me-3 mt-2 text_color">
                        {EnrolledUsers.searchResultUsers} /{" "}
                        {EnrolledUsers.totalUsers}
                      </div>
                      <div className="me-2">
                        <select
                          className="form-select form-control me-3 input_bg_color"
                          aria-label="Default select example"
                          // placeholder="Branch*"
                          // name="branch"
                          // id="branch"
                          required
                          onChange={HandlePerPage}
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="75">75</option>
                          <option value="100">100</option>
                          <option value="200">200</option>
                          <option value="300">300</option>
                          <option value="500">500</option>
                        </select>
                      </div>
                      <button
                        className="btn btn_primary fs-13 me-2"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                      >
                        Filters
                      </button>
                      {/* <button type="button" className="btn btn_primary fs-13 ">
                        <Link to="/createuser" className="btn_primary">
                          <HiMiniPlus />
                          Add User
                        </Link>
                      </button> */}
                    </div>
                  </div>
                </div>
                <div
                  className="offcanvas offcanvas-end mt-5 pt-2 bg_white"
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div className="offcanvas-header">
                    <h5
                      className="offcanvas-title text_color"
                      id="offcanvasRightLabel"
                    >
                      Filters
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body p-2">
                    {/* profile */}
                    <div className="">
                      <label className="form-label fs-s fw-medium txt-color">
                        Profile
                      </label>
                      <select
                        className="form-select form-control input_bg_color"
                        aria-label="Default select example"
                        placeholder="profile*"
                        id="profile"
                        required
                        name="profile"
                        value={filterCriteria.profile}
                        onChange={HandleFilterCertria}
                      >
                        <option value="1">Select Profile</option>
                        <option value="2">Sr. Associate</option>
                        <option value="3">Regional Manager</option>
                        <option value="4">Branch Manager</option>
                        <option value="5">Counsellor</option>
                        <option value="6">Admin</option>
                      </select>
                    </div>
                    {/* branch */}
                    <div className="mt-2">
                      <label className="form-label fs-s fw-medium txt-color">
                        Branch
                      </label>
                      <select
                        className="form-select form-control input_bg_color"
                        aria-label="Default select example"
                        placeholder="Branch*"
                        id="branch"
                        required
                        name="branch"
                        value={filterCriteria.branch}
                        onChange={HandleFilterCertria}
                      >
                        <option value="1">Select Branch</option>
                        <option value="2">Hitech City</option>
                        <option value="3">Kukkatpally</option>
                        <option value="4">Dilsukhnagar</option>
                        <option value="5">Secunderabad</option>
                        <option value="6">Testing</option>
                      </select>
                    </div>
                    {/* department */}
                    <div className="mt-2">
                      <label className="form-label fs-s fw-medium txt-color">
                        Department
                      </label>
                      <select
                        className="form-select form-control input_bg_color"
                        aria-label="Default select example"
                        placeholder="department*"
                        id="department"
                        required
                        name="department"
                        value={filterCriteria.department}
                        onChange={HandleFilterCertria}
                      >
                        <option value="1">Select Department</option>
                        <option value="2">Counsellor</option>
                        <option value="3">Digital Marketing</option>
                        <option value="4">Student Counsellor</option>
                      </select>
                    </div>
                    <div>
                      <div className="position-absolute bottom-0 start-0 ms-2 mb-2">
                        <button
                          className="btn btn_primary"
                          onClick={FilterReset}
                        >
                          Clear
                        </button>
                      </div>
                      <div className="position-absolute bottom-0 end-0 me-2 mb-2">
                        <button
                          className="btn btn_primary"
                          onClick={filterSubmit}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body bg_white">
                <div className="table-responsive table-card border-0 bg_white">
                  <table className="bg_white table table-centered align-middle table-nowrap equal-cell-table ">
                    <thead>
                      <tr className="">
                        {/* <th scope="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="cardtableCheck"
                          />
                          <label
                            className="form-check-label"
                            for="cardtableCheck"
                          ></label>
                        </div>
                      </th> */}
                        <th
                          scope="col"
                          className="fs_13 lh_xs fw_600 text_black "
                        >
                          S.No
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs text_black fw_600  "
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs text_black fw_600  "
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs text_black fw_600  "
                        >
                          Course
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs text_black fw_600  "
                        >
                          Contact Number
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs text_black fw_600  "
                        >
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg_white">
                      <tr>
                        <td className="fs-13 lh-xs fw-semibold text_black">
                          01
                        </td>
                        <td className="fs-13 lh-xs text_black">Rahul</td>
                        <td className="fs-13 lh-xs  text_black">
                          Rahul@Rahul.com
                        </td>
                        <td className="fs-13 lh-xs  text_black">B.tech</td>

                        <td className="fs-13 lh-xs  text_black">1234567890</td>

                        <td className="fs-13 lh-xs text_black">12-04-2012</td>
                      </tr>

                      {/* 1st row */}
                    </tbody>
                  </table>
                </div>
                <div className="align-items-center d-flex justify-content-between row text-center text-sm-start">
                  <div className="col-sm">
                    <div className="text_mute pagination-text">
                      Showing{" "}
                      <span className="fw-semibold">
                        {EnrolledUsers.startUser}
                      </span>
                      {"  "}
                      to{"  "}
                      <span className="fw-semibold">
                        {EnrolledUsers.endUser}
                      </span>
                      {"  "}
                      of{"  "}
                      <span className="fw-semibold">
                        {"  "}
                        {EnrolledUsers.totalUsers}
                      </span>{" "}
                      Results
                    </div>
                  </div>
                  <div className="col-sm-auto mt-3 mt-sm-0 bg_white">
                    <ul className="mt-2 pagination pagination-separated pagination-sm mb-0 justify-content-center">
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "cursor-crosshair" : " "
                        }  p-1`}
                      >
                        <span
                          className={`page-link ${
                            currentPage > 1 ? "cursor-pointer" : ""
                          } `}
                          onClick={previousPage}
                        >
                          ←
                        </span>
                      </li>

                      {/* here the pagintation  */}
                      {/* <li className="page-item p-1">
                      <span href="#" className="page-link">
                        1
                      </span>
                    </li>
                    <li className="page-item active p-1">
                      <span href="#" className="page-link ">
                        2
                      </span>
                    </li>
                    <li className="page-item p-1">
                      <span href="#" className="page-link">
                        3
                      </span>
                    </li> */}
                      {/* ---------- */}

                      {[...Array(endPage - startPage + 1)].map((_, index) => {
                        const page = startPage + index;
                        return (
                          <li
                            key={page}
                            className={`page-item p-1  ${
                              currentPage === page ? "active" : ""
                            }`}
                          >
                            <span
                              className="page-link "
                              style={{ cursor: "pointer" }}
                              onClick={() => changePage(page)}
                            >
                              {page}
                            </span>
                          </li>
                        );
                      })}

                      <li className="page-item p-1">
                        <span href="#" className="page-link" onClick={nextPage}>
                          →
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
