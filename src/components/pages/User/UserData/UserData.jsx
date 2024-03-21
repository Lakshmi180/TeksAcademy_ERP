import React, { useEffect, useState } from "react";
import "../../../../assets/css/common/Table.css";
import { AiFillEye } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { MdLocalPrintshop } from "react-icons/md";
import { FaRegIdCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiMiniPlus } from "react-icons/hi2";
import { useUserContext } from "../../../../hooks/useUserContext";
import Usedebounce from "../../../../hooks/useDebounce/Usedebounce";
import { useRoleContext } from "../../../../hooks/useRoleContext";
import { useBranchContext } from "../../../../hooks/useBranchContext";
import { useDepartmentContext } from "../../../../hooks/useDepartmentContext";

function UserData() {
  // here the adding the filters and pagination------------------------
  const {
    UsersState,
    UsersState: { EnrolledUsers },
    DispatchUsers,
  } = useUserContext();
  const { RoleState, createRole } = useRoleContext();
  const { DispatchBranch, BranchState, getAllBranches } = useBranchContext();
  const { DispatchDepartment, DepartmentState, getAllDeparments } =
    useDepartmentContext();
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

  const totalPages = EnrolledUsers.totalPages;

  const changePage = (page) => {
    debouncesetPage({ context: "ENROLLED_USERS", data: page });
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
        <div className="row">
          <div className="col-xl-12">
            <div className="card border-0">
              <div className="card-header">
                <div className="row justify-content-between">
                  <div className="col-sm-4">
                    <div className="search-box">
                      <input
                        type="text"
                        className="form-control search"
                        placeholder="Search for..."
                        name="search"
                        required
                        onChange={handleSearch}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex justify-content-end">
                      <div className="fs-13 me-3 mt-2">
                        {EnrolledUsers.searchResultUsers} /{" "}
                        {EnrolledUsers.totalUsers}
                      </div>
                      <div className="me-2">
                        <select
                          className="form-select form-control me-3"
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
                      <button type="button" className="btn btn_primary fs-13">
                        <Link to="/createuser" className="btn_primary">
                          <HiMiniPlus />
                          Add User
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="offcanvas offcanvas-end mt-5 pt-2"
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">
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
                        className="form-select form-control"
                        aria-label="Default select example"
                        placeholder="profile*"
                        id="profile"
                        required
                        name="profile"
                        value={filterCriteria.profile}
                        onChange={HandleFilterCertria}
                      >
                        <option value="" disabled selected>
                          {" "}
                          Select Role{" "}
                        </option>
                        {RoleState?.roles && RoleState?.roles.length > 0
                          ? RoleState.roles.map((item, index) => (
                              <option key={index}>{item.role}</option>
                            ))
                          : null}
                      </select>
                    </div>
                    {/* branch */}
                    <div className="mt-2">
                      <label className="form-label fs-s fw-medium txt-color">
                        Branch
                      </label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        placeholder="Branch*"
                        id="branch"
                        required
                        name="branch"
                        value={filterCriteria.branch}
                        onChange={HandleFilterCertria}
                      >
                        <option value="" disabled selected>
                          {" "}
                          Enter Branch{" "}
                        </option>
                        {BranchState.branches &&
                          BranchState.branches.length > 0 &&
                          BranchState.branches.map((item) => (
                            <option>{item.branch_name}</option>
                          ))}
                      </select>
                    </div>
                    {/* department */}
                    <div className="mt-2">
                      <label className="form-label fs-s fw-medium txt-color">
                        Department
                      </label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        placeholder="department*"
                        id="department"
                        required
                        name="department"
                        value={filterCriteria.department}
                        onChange={HandleFilterCertria}
                      >
                        <option value="" disabled selected>
                          {" "}
                          Enter Department{" "}
                        </option>
                        {DepartmentState.departments &&
                          DepartmentState.departments.length > 0 &&
                          DepartmentState.departments.map((item, index) => (
                            <option key={index}>{item.department_name}</option>
                          ))}
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
              <div className="card-body">
                <div className="table-responsive table-card border-0">
                  <div className="table-container">
                    <table className="table table-centered align-middle table-nowrap equal-cell-table">
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
                            className="fs_13 lh_xs fw_600 black_color "
                          >
                            S.No
                          </th>
                          <th
                            scope="col"
                            className="fs_13 lh_xs black_color fw_600  "
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="fs_13 lh_xs black_color fw_600  "
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="fs_13 lh_xs black_color fw_600  "
                          >
                            Phone No
                          </th>
                          <th
                            scope="col"
                            className="fs_13 lh_xs black_color fw_600 "
                          >
                            Designation
                          </th>
                          <th
                            scope="col"
                            className="fs_13 lh_xs black_color fw_600 "
                          >
                            Department
                          </th>
                          <th
                            scope="col"
                            className="fs_13 lh_xs black_color fw_600 "
                          >
                            Report To
                          </th>
                          <th
                            scope="col"
                            className="fs_13 lh_xs black_color fw_600 "
                          >
                            Profile
                          </th>
                          <th
                            scope="col"
                            className="fs_13 lh_xs black_color fw_600 "
                          >
                            Branch
                          </th>
                          <th
                            scope="col"
                            className="fs_13 lh_xs black_color fw_600 "
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="">
                        {EnrolledUsers.PaginatedUsers &&
                        EnrolledUsers.PaginatedUsers.length > 0 ? (
                          EnrolledUsers.PaginatedUsers.map((item, index) => {
                            return (
                              <tr>
                                <td className="fs_13 black_color fw_500 lh_xs bg_light ">
                                  {(currentPage - 1) * EnrolledUsers.perPage +
                                    index +
                                    1}
                                </td>
                                <td className="fs_13 black_color  lh_xs bg_light">
                                  {item.fullname}
                                </td>
                                <td className="fs_13 black_color  lh_xs bg_light">
                                  {item.email}
                                </td>
                                <td className="fs_13 black_color  lh_xs bg_light">
                                  {item.phonenumber}
                                </td>
                                <td className="fs_13 black_color  lh_xs bg_light">
                                  {item.designation}
                                </td>
                                <td className="fs_13 black_color  lh_xs bg_light ">
                                  {item.department}
                                </td>
                                <td className="fs_13 black_color  lh_xs  bg_light">
                                  {item.reportto}
                                </td>
                                <td className="fs_13 black_color  lh_xs  bg_light">
                                  {item.profile}
                                </td>
                                <td className="fs_13 black_color  lh_xs  bg_light">
                                  {item.branch}
                                </td>
                                <td className="fs_14 text_mute bg_light lh_xs d-flex mt-3">
                                  <Link to={`/userview/${item.id}`}>
                                    <AiFillEye className=" table_icons me-3 eye_icon" />
                                  </Link>

                                  <Link to="/createuser">
                                    <MdEdit className=" edit_icon me-3" />
                                  </Link>

                                  <div className="form-check form-switch form-switch-right form-switch-md ">
                                    {/* <label for="FormValidationDefault" className="form-label text-muted">Show Code</label> */}
                                    <input
                                      className="form-check-input code-switcher toggle_btn"
                                      type="checkbox"
                                      id="FormValidationDefault"
                                    />
                                  </div>
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <tr>
                            <td>no data found</td>
                          </tr>
                        )}
                        {/* 1st row */}
                      </tbody>
                    </table>
                  </div>
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
                  <div className="col-sm-auto mt-3 mt-sm-0">
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
                            className={`page-item p-1 ${
                              currentPage === page ? "active" : ""
                            }`}
                          >
                            <span
                              className="page-link"
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
}

export default UserData;
