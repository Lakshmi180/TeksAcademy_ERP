import React, { useState } from "react";
import "../../../../assets/css/common/Table.css";
import { AiFillEye } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { MdLocalPrintshop } from "react-icons/md";
import { FaRegIdCard } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { RiDeleteBin2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HiMiniPlus } from "react-icons/hi2";
import { useStudentsContext } from "../../../../hooks/useStudentsContext";
import Usedebounce from "../../../../hooks/useDebounce/Usedebounce";

function RequestedCertificate() {
  const {
    studentState,
    studentState: { Requested_CertificateStudents },
    Dispatchstudents,
    getPaginatedCertificateData,
  } = useStudentsContext();

  console.log(
    Requested_CertificateStudents,
    "Requested_CertificateStudentsher"
  );
  //here adding the filters

  const { debouncesetSearch, debouncesetPage } = Usedebounce(Dispatchstudents);

  const handleSearch = (e) => {
    debouncesetSearch({
      context: "REQUESTED_CERTIFICATE_STUDENTS",
      data: e.target.value,
    });
  };

  const handlePerPage = (e) => {
    const selectedvalue = parseInt(e.target.value, 10);
    Dispatchstudents({
      type: "SET_PER_PAGE",
      payload: {
        context: "REQUESTED_CERTIFICATE_STUDENTS",
        data: selectedvalue,
      },
    });
  };

  // filter

  const [filterCriteria, setfilterCriteria] = useState({
    fromDate: "",
    toDate: "",
    course: "",
    branch: "",
  });

  console.log(filterCriteria, "herervvvvadvvcvm");

  const HandleFilterCertria = (e) => {
    const { name, value } = e.target;
    setfilterCriteria((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const FilterReset = () => {
    setfilterCriteria({
      fromDate: "",
      toDate: "",
      course: "",
      branch: "",
    });
  };

  const filterSubmit = () => {
    console.log("filterCrddddgiteria", filterCriteria);
    Dispatchstudents({
      type: "SET_FILTERS",
      payload: {
        context: "REQUESTED_CERTIFICATE_STUDENTS",
        data: {
          fromDate: filterCriteria.fromDate,
          toDate: filterCriteria.toDate,
          course: filterCriteria.course,
          branch: filterCriteria.branch,
        },
      },
    });
  };

  //here the pagination

  let currentPage = Requested_CertificateStudents.currentPage;
  const totalPages = Requested_CertificateStudents.totalPages;

  console.log(
    currentPage,
    totalPages,
    "cuurentpdgfgageherdfdfe ",
    Requested_CertificateStudents.currentPage
  );

  const changePage = (page) => {
    debouncesetPage({ context: "REQUESTED_CERTIFICATE_STUDENTS", data: page });
    currentPage = page;
    // setCurrentPage(page);
    // Add your logic here to handle page change
    console.log("Currentcpage:", page);
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
              <div class="card-header">
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
                      <div className="fs-13 me-3 mt-2">{/* 10/40 */}</div>
                      <div className="me-2">
                        <select
                          className="form-select form-control me-3"
                          aria-label="Default select example"
                          placeholder="Branch*"
                          name="branch"
                          required
                          onChange={handlePerPage}
                        >
                          <option value="10">10</option>
                          <option value="20">20</option>
                          <option value="30">30</option>
                          <option value="40">40</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                          <option value="150">150</option>
                          <option value="200">200</option>
                          <option value="500">500</option>
                          <option value="750">750</option>
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
                        <Link to="/issuedcertificates" className="btn_primary">
                          Issued Certificates
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
                    {/* from calendar */}
                    <div class="form-group text-start">
                      <label
                        class="form-label fs-s txt-color"
                        for="example-text-input "
                      >
                        From Date
                      </label>
                      <input
                        class="form-control fs-s bg-form"
                        type="date"
                        id="exampleInputdate"
                        name="fromDate"
                        value={filterCriteria.fromDate}
                        onChange={HandleFilterCertria}
                        required
                      />
                    </div>
                    {/* to calendar */}
                    <div class="form-group text-start mt-2">
                      <label
                        class="form-label fs-s txt-color"
                        for="example-text-input "
                      >
                        To Date
                      </label>
                      <input
                        class="form-control fs-s bg-form"
                        type="date"
                        id="exampleInputdate"
                        value={filterCriteria.toDate}
                        onChange={HandleFilterCertria}
                        name="toDate"
                        required
                      />
                    </div>
                    {/* course */}
                    <div className="">
                      <label className="form-label fs-s fw-medium txt-color">
                        Course
                      </label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        placeholder="course*"
                        name="course"
                        id="course"
                        value={filterCriteria.course}
                        onChange={HandleFilterCertria}
                        required
                      >
                        <option value="1">java</option>
                        <option value="2">python</option>
                        <option value="3">react</option>
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
                        className="form-select form-control"
                        aria-label="Default select example"
                        placeholder="Branch*"
                        name="branch"
                        id="branch"
                        value={filterCriteria.branch}
                        onChange={HandleFilterCertria}
                        required
                      >
                        <option value="1">Select Branch</option>
                        <option value="2">Hitech City</option>
                        <option value="3">Kukkatpally</option>
                        <option value="4">Dilsukhnagar</option>
                        <option value="5">Secunderabad</option>
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
                <div class="table-responsive table-card border-0">
                  <table className="table table-centered align-middle table-nowrap equal-cell-table">
                    <thead>
                      <tr className="">
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
                          Course
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600  "
                        >
                          Registration ID
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600 "
                        >
                          Course StartDate
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600 "
                        >
                          Course EndDate
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600 "
                        >
                          Certificate
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {Requested_CertificateStudents.Paginated_Requested_CertificateStudents &&
                      Requested_CertificateStudents
                        .Paginated_Requested_CertificateStudents.length > 0 ? (
                        Requested_CertificateStudents.loading ? (
                          "loading ..."
                        ) : (
                          Requested_CertificateStudents.Paginated_Requested_CertificateStudents.map(
                            (item, index) => {
                              return (
                                <tr>
                                  <td className="fs_13 black_color fw_500 lh_xs bg_light ">
                                    1
                                  </td>
                                  <td className="fs_13 black_color  lh_xs bg_light">
                                    -fdf
                                  </td>
                                  <td className="fs_13 black_color  lh_xs bg_light">
                                    -dgg
                                  </td>
                                  <td className="fs_13 black_color  lh_xs bg_light">
                                    -fg
                                  </td>
                                  <td className="fs_13 black_color  lh_xs bg_light">
                                    -jhy
                                  </td>
                                  <td className="fs_13 black_color  lh_xs bg_light ">
                                    -
                                  </td>
                                  <td className="fs_13 black_color  lh_xs  bg_light">
                                    -
                                  </td>
                                </tr>
                              );
                            }
                          )
                        )
                      ) : (
                        <tr>
                          <td>no data found</td>
                        </tr>
                      )}

                      {/* 1st row */}
                      <tr>
                        <td className="fs_13 black_color fw_500 lh_xs bg_light ">
                          1
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          -fdf
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          -dgg
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          -fg
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          -jhy
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light ">
                          -
                        </td>
                        <td className="fs_13 black_color  lh_xs  bg_light">
                          -
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="align-items-center d-flex justify-content-between row text-center text-sm-start">
                  <div className="col-sm">
                    {Requested_CertificateStudents.Paginated_Requested_CertificateStudents &&
                    Requested_CertificateStudents
                      .Paginated_Requested_CertificateStudents.length > 0 ? (
                      Requested_CertificateStudents?.loading ? (
                        <div className="text_mute pagination-text">
                          Showing data is Loading ....
                        </div>
                      ) : (
                        <div className="text_mute pagination-text">
                          Showing{" "}
                          <span className="fw-semibold">
                            {Requested_CertificateStudents.startStudent}
                          </span>
                          {"  "}
                          to{"  "}
                          <span className="fw-semibold">
                            {Requested_CertificateStudents.endStudent}
                          </span>
                          {"  "}
                          of{"  "}
                          <span className="fw-semibold">
                            {"  "}
                            {Requested_CertificateStudents.searchResultStudents}
                          </span>{" "}
                          Results
                        </div>
                      )
                    ) : (
                      <div className="text_mute pagination-text">
                        Showing <span className="fw-semibold">0</span>
                        {"  "}
                        to{"  "}
                        <span className="fw-semibold">0</span>
                        {"  "}
                        of{"  "}
                        <span className="fw-semibold">
                          {"  "}
                          {Requested_CertificateStudents.searchResultStudents}
                        </span>{" "}
                        Results
                      </div>
                    )}

                    {/* <div className="text_mute pagination-text">
                                            Showing <span className="fw-semibold">5</span> of{" "}
                                            <span className="fw-semibold">25</span> Results
                                        </div> */}
                  </div>
                  <div className="col-sm-auto mt-3 mt-sm-0">
                    <ul className="mt-2 pagination pagination-separated pagination-sm mb-0 justify-content-center">
                      {/* left arrow */}
                      <li className="page-item p-1">
                        <button
                          onClick={previousPage}
                          disabled={
                            Requested_CertificateStudents.loading
                              ? true
                              : false ||
                                Requested_CertificateStudents.currentPage === 1
                          }
                          style={{
                            cursor:
                              Requested_CertificateStudents.loading ||
                              Requested_CertificateStudents.currentPage === 1
                                ? "not-allowed"
                                : "auto",
                          }}
                          className={`border border-1 ${
                            Requested_CertificateStudents.loading
                              ? "disabled"
                              : Requested_CertificateStudents.currentPage === 1
                              ? "disabled"
                              : "cursor-auto"
                          }`}
                        >
                          <span className="">←</span>
                        </button>
                      </li>

                      {/* {middle buttons} */}

                      {/* {[...Array(endPage - startPage + 1)].map((_, index) => {
                                                const page = startPage + index;
                                                return (

                                                    <li className={`page-item p-1`}>
                                                        <button key={page}

                                                            onClick={() => changePage(currentPage === 1 && page === startPage ? 1 : page)}
                                                            disabled={Requested_CertificateStudents?.loading ? true : false}
                                                            className={`border page-link border-1 ${currentPage === page || (currentPage === 1 && page === startPage) ? 'active' : ''}`}
                                                        >
                                                            <span className=''>{page} </span>
                                                        </button>
                                                    </li>
                                                );
                                            })} */}

                      {/* right arrow */}
                      <li className="page-item p-1">
                        <button
                          onClick={nextPage}
                          disabled={
                            Requested_CertificateStudents.loading
                              ? true
                              : false ||
                                Requested_CertificateStudents.currentPage ===
                                  Requested_CertificateStudents.totalPages
                          }
                          style={{
                            cursor:
                              Requested_CertificateStudents.loading ||
                              Requested_CertificateStudents.currentPage ===
                                Requested_CertificateStudents.totalPages
                                ? "not-allowed"
                                : "auto",
                          }}
                          className={`border border-1${
                            Requested_CertificateStudents.loading
                              ? "disabled"
                              : Requested_CertificateStudents.currentPage ===
                                Requested_CertificateStudents.totalPages
                              ? "disabled"
                              : "cursor-auto"
                          }`}
                        >
                          <span className="">→</span>
                        </button>
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

export default RequestedCertificate;
