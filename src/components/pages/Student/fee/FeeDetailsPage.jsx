import React from "react";
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
import { FaArrowRight } from "react-icons/fa6";
import cc from "../../../../images/setting_tabs_icons/cc.svg";
import FeeFollowUps from "./FeeFollowUps";
function FeeDetailsPage() {
  return (
    <div>
      <div className="container d-flex justify-content-center">
        <ul class="nav gap-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active card card_animate"
              id="pills-feerecords-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-feerecords"
              type="button"
              role="tab"
              aria-controls="pills-feerecords"
              aria-selected="true"
            >
              <div className="text-start p-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <span className="fs_20 fw-500">Fee Records</span>
                    <div className="mt-3 fs_14 lh-100 text_underline black_300">
                      <p>
                        12,000 <FaArrowRight />
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="avatar-md me-3">
                      <span className="avatar-title bg-danger-subtle rounded-circle fs-1">
                        <img
                          src={cc}
                          className="img-fluid"
                          width="100px"
                          height="100px"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link card card_animate"
              id="pills-duerecords-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-duerecords"
              type="button"
              role="tab"
              aria-controls="pills-duerecords"
              aria-selected="false"
            >
              <div className="text-start p-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <span className="fs_20 fw-500">No Due Records</span>
                    <div className="mt-3 fs_14 lh-100 text_underline black_300">
                      <p>
                        5000 <FaArrowRight />
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="avatar-md me-3">
                      <span className="avatar-title bg-danger-subtle rounded-circle fs-1">
                        <img
                          src={cc}
                          className="img-fluid"
                          width="100px"
                          height="100px"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link card card_animate"
              id="pills-feefollow-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-feefollow"
              type="button"
              role="tab"
              aria-controls="pills-feefollow"
              aria-selected="false"
            >
              <Link to="/feefollowups">
                <div className="p-2 text-start">
                  <div className="d-flex justify-content-between">
                    <div>
                      <span className="fs_20 fw-500">Fee FollowUps</span>
                      <div className="mt-3 fs_14 lh-100 text_underline black_300">
                        <p>
                          1100 <FaArrowRight />
                        </p>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="avatar-md me-3">
                        <span className="avatar-title bg-danger-subtle rounded-circle fs-1">
                          <img
                            src={cc}
                            className="img-fluid"
                            width="100px"
                            height="100px"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link card card_animate"
              id="pills-feereceived-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-feereceived"
              type="button"
              role="tab"
              aria-controls="pills-feereceived"
              aria-selected="false"
            >
              <div className="p-2 text-start">
                <div className="d-flex justify-content-between">
                  <div>
                    <span className="fs_20 fw-500">Fee Received</span>
                    <div className="mt-3 fs_14 lh-100 text_underline black_300">
                      <p>
                        2345 <FaArrowRight />
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="avatar-md me-3">
                      <span className="avatar-title bg-danger-subtle rounded-circle fs-1">
                        <img
                          src={cc}
                          className="img-fluid"
                          width="100px"
                          height="100px"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-feerecords"
          role="tabpanel"
          aria-labelledby="pills-feerecords-tab"
          tabindex="0"
        >
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
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex justify-content-end">
                          <div className="fs-13 me-3 mt-2">10/40</div>
                          <div className="me-2">
                            <select
                              className="form-select form-control me-3"
                              aria-label="Default select example"
                              placeholder="Branch*"
                              name="branch"
                              id="branch"
                              required
                            >
                              <option value="1">10</option>
                              <option value="2">50</option>
                              <option value="3">100</option>
                              <option value="4">150</option>
                              <option value="5">200</option>
                              <option value="6">250</option>
                              <option value="7">500</option>
                              <option value="8">1000</option>
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
                        </div>
                      </div>
                    </div>
                    <div
                      className="offcanvas offcanvas-end mt-5 pt-2 bg_white text_color"
                      id="offcanvasRight"
                      aria-labelledby="offcanvasRightLabel"
                    >
                      <div className="offcanvas-header">
                        <h5
                          className="offcanvas-title"
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
                          />
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
                            required
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
                            Mode Of Training
                          </label>
                          <select
                            className="form-select form-control"
                            aria-label="Default select example"
                            placeholder="Branch*"
                            name="branch"
                            id="branch"
                            required
                          >
                            <option value="1">Select Mode Of Training</option>
                            <option value="2">Counsellor</option>
                            <option value="3">Digital Marketing</option>
                            <option value="4">Student Counsellor</option>
                          </select>
                        </div>
                        <div>
                          <div className="position-absolute bottom-0 start-0 ms-2 mb-2">
                            <button className="btn btn_primary">Clear</button>
                          </div>
                          <div className="position-absolute bottom-0 end-0 me-2 mb-2">
                            <button className="btn btn_primary">Save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div class="table-responsive table-card border-0">
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
                                Name <br />
                                Branch
                                <br />
                                Counsellor
                              </th>
                              <th
                                scope="col"
                                className="fs_13 lh_xs black_color fw_600  "
                              >
                                Contact
                              </th>
                              <th
                                scope="col"
                                className="fs_13 lh_xs black_color fw_600  "
                              >
                                Course
                                <br />
                                Date of Joining
                                <br />
                                Total Fee
                              </th>
                              <th
                                scope="col"
                                className="fs_13 lh_xs black_color fw_600 "
                              >
                                Paid Fee
                                <br />
                                Due Amount
                                <br />
                                Next Due Date
                              </th>
                              <th
                                scope="col"
                                className="fs_13 lh_xs black_color fw_600 "
                              >
                                Total Installments
                              </th>
                              <th
                                scope="col"
                                className="fs_13 lh_xs black_color fw_600 "
                              >
                                Paid Installments
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
                            {/* 1st row */}
                            <tr>
                              <td className="fs_13 black_color fw_500 lh_xs bg_light ">
                                01
                              </td>
                              <td className="fs_13 black_color  lh_xs bg_light">
                                K.Sadik
                                <br />
                                Ameerpet
                                <br />
                                Mohammed Afeeza
                              </td>
                              <td className="fs_13 black_color  lh_xs bg_light">
                                9347690554
                              </td>
                              <td className="fs_13 black_color  lh_xs bg_light">
                                AutoCad + Sketchup With Vray
                                <br />
                                18-Mar-2024
                                <br />
                                8,500
                              </td>
                              <td className="fs_13 black_color  lh_xs bg_light">
                                8,500
                                <br />
                                0<br />
                                No NextDue Date
                              </td>
                              <td className="fs_13 black_color  lh_xs bg_light ">
                                1
                              </td>
                              <td className="fs_13 black_color  lh_xs  bg_light">
                                1
                              </td>
                              <td className="fs_14 text_mute bg_light   lh_xs">
                                <Link to="/feeview">
                                  <AiFillEye className="text-mute table_icons me-3" />
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="align-items-center d-flex justify-content-between row text-center text-sm-start">
                      <div className="col-sm">
                        <div className="text_mute pagination-text">
                          Showing <span className="fw-semibold">5</span> of{" "}
                          <span className="fw-semibold">25</span> Results
                        </div>
                      </div>
                      <div className="col-sm-auto mt-3 mt-sm-0">
                        <ul className="mt-2 pagination pagination-separated pagination-sm mb-0 justify-content-center">
                          <li className="page-item disabled p-1">
                            <a href="#" className="page-link ">
                              ←
                            </a>
                          </li>
                          <li className="page-item p-1">
                            <a href="#" className="page-link">
                              1
                            </a>
                          </li>
                          <li className="page-item active p-1">
                            <a href="#" className="page-link ">
                              2
                            </a>
                          </li>
                          <li className="page-item p-1">
                            <a href="#" className="page-link">
                              3
                            </a>
                          </li>
                          <li className="page-item p-1">
                            <a href="#" className="page-link">
                              →
                            </a>
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
        <div
          class="tab-pane fade"
          id="pills-duerecords"
          role="tabpanel"
          aria-labelledby="pills-duerecords-tab"
          tabindex="0"
        >
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
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex justify-content-end">
                          <div className="fs-13 me-3 mt-2">10/40</div>
                          <div className="me-2">
                            <select
                              className="form-select form-control me-3"
                              aria-label="Default select example"
                              placeholder="Branch*"
                              name="branch"
                              id="branch"
                              required
                            >
                              <option value="1">10</option>
                              <option value="2">50</option>
                              <option value="3">100</option>
                              <option value="4">150</option>
                              <option value="5">200</option>
                              <option value="6">250</option>
                              <option value="7">500</option>
                              <option value="8">1000</option>
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
                        </div>
                      </div>
                    </div>
                    <div
                      className="offcanvas offcanvas-end mt-5 pt-2"
                      id="offcanvasRight"
                      aria-labelledby="offcanvasRightLabel"
                    >
                      <div className="offcanvas-header">
                        <h5
                          className="offcanvas-title"
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
                          />
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
                            required
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
                            Mode Of Training
                          </label>
                          <select
                            className="form-select form-control"
                            aria-label="Default select example"
                            placeholder="Branch*"
                            name="branch"
                            id="branch"
                            required
                          >
                            <option value="1">Select Mode Of Training</option>
                            <option value="2">Counsellor</option>
                            <option value="3">Digital Marketing</option>
                            <option value="4">Student Counsellor</option>
                          </select>
                        </div>
                        <div>
                          <div className="position-absolute bottom-0 start-0 ms-2 mb-2">
                            <button className="btn btn_primary">Clear</button>
                          </div>
                          <div className="position-absolute bottom-0 end-0 me-2 mb-2">
                            <button className="btn btn_primary">Save</button>
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
                              Name <br />
                              Branch
                              <br />
                              Counsellor
                            </th>
                            <th
                              scope="col"
                              className="fs_13 lh_xs black_color fw_600  "
                            >
                              Contact <br />
                              Email
                            </th>
                            <th
                              scope="col"
                              className="fs_13 lh_xs black_color fw_600  "
                            >
                              Course
                              <br />
                              Date of Joining
                              <br />
                              Total Fee
                            </th>
                            <th
                              scope="col"
                              className="fs_13 lh_xs black_color fw_600 "
                            >
                              Paid Fee
                              <br />
                              Due Amount
                              <br />
                              Next Due Date
                            </th>
                            <th
                              scope="col"
                              className="fs_13 lh_xs black_color fw_600 "
                            >
                              Total Installments
                            </th>
                            <th
                              scope="col"
                              className="fs_13 lh_xs black_color fw_600 "
                            >
                              Paid Installments
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
                          {/* 1st row */}
                          <tr>
                            <td className="fs_13 black_color fw_500 lh_xs bg_light ">
                              01
                            </td>
                            <td className="fs_13 black_color  lh_xs bg_light">
                              K.Sadik
                              <br />
                              Ameerpet
                              <br />
                              Mohammed Afeeza
                            </td>
                            <td className="fs_13 black_color  lh_xs bg_light">
                              9347690554
                              <br />
                              kamulurisadik@gmail.com
                            </td>
                            <td className="fs_13 black_color  lh_xs bg_light">
                              AutoCad + Sketchup With Vray
                              <br />
                              18-Mar-2024
                              <br />
                              8,500
                            </td>
                            <td className="fs_13 black_color  lh_xs bg_light">
                              8,500
                              <br />
                              0<br />
                              No NextDue Date
                            </td>
                            <td className="fs_13 black_color  lh_xs bg_light ">
                              1
                            </td>
                            <td className="fs_13 black_color  lh_xs  bg_light">
                              1
                            </td>
                            <td className="fs_14 text_mute bg_light   lh_xs">
                              <Link to="/noduerecords">
                                <AiFillEye className="text-mute table_icons me-3" />
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="align-items-center d-flex justify-content-between row text-center text-sm-start">
                      <div className="col-sm">
                        <div className="text_mute pagination-text">
                          Showing <span className="fw-semibold">5</span> of{" "}
                          <span className="fw-semibold">25</span> Results
                        </div>
                      </div>
                      <div className="col-sm-auto mt-3 mt-sm-0">
                        <ul className="mt-2 pagination pagination-separated pagination-sm mb-0 justify-content-center">
                          <li className="page-item disabled p-1">
                            <a href="#" className="page-link ">
                              ←
                            </a>
                          </li>
                          <li className="page-item p-1">
                            <a href="#" className="page-link">
                              1
                            </a>
                          </li>
                          <li className="page-item active p-1">
                            <a href="#" className="page-link ">
                              2
                            </a>
                          </li>
                          <li className="page-item p-1">
                            <a href="#" className="page-link">
                              3
                            </a>
                          </li>
                          <li className="page-item p-1">
                            <a href="#" className="page-link">
                              →
                            </a>
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
        <div
          class="tab-pane fade"
          id="pills-feefollow"
          role="tabpanel"
          aria-labelledby="pills-feefollow-tab"
          tabindex="0"
        ></div>
        <div
          class="tab-pane fade"
          id="pills-feereceived"
          role="tabpanel"
          aria-labelledby="pills-feereceived-tab"
          tabindex="0"
        >
          ...
        </div>
      </div>
    </div>
  );
}

export default FeeDetailsPage;
