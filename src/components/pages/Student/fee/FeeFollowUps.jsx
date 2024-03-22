
import { FaArrowRight } from "react-icons/fa6";
import cc from "../../../../images/setting_tabs_icons/cc.svg";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../../../../assets/css/common/Table.css"
import { AiFillEye } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { MdLocalPrintshop } from "react-icons/md";
import { FaRegIdCard } from "react-icons/fa";
import { HiMiniPlus } from "react-icons/hi2";
const FeeFollowUps = () => {
  return (
    <div>
      <div className='container d-flex justify-content-center'>
        <ul class="nav gap-3 nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-overdue-tab" data-bs-toggle="pill"
              data-bs-target="#pills-overdue" type="button" role="tab" aria-controls="pills-overdue" aria-selected="true">
              <div className='text-start p-2'>
                <div className="d-flex justify-content-between">
                  <div>
                    <span className="fs_20 fw-500 me-3">Today</span>
                    <div className='mt-3 fs_14 lh-100 black_300'>
                      <p>5000 /-</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="avatar-md me-3">
                      <span className="avatar-title bg-danger-subtle rounded-circle fs-1">
                        <img src={cc} className='img-fluid' width="100px" height="100px" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-today-tab" data-bs-toggle="pill" data-bs-target="#pills-today"
              type="button" role="tab" aria-controls="pills-today" aria-selected="false">
              <div className='text-start p-2'>
                <div className="d-flex justify-content-between">
                  <div>
                    <span className="fs_20 fw-500">Upcoming</span>
                    <div className='mt-3 fs_14 lh-100 black_300'>
                      <p>5000 /-</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="avatar-md me-3">
                      <span className="avatar-title bg-danger-subtle rounded-circle fs-1">
                        <img src={cc} className='img-fluid' width="100px" height="100px" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-upcoming-tab" data-bs-toggle="pill" data-bs-target="#pills-upcoming"
              type="button" role="tab" aria-controls="pills-upcoming" aria-selected="false">
              <div className='text-start p-2'>
                <div className="d-flex justify-content-between">
                  <div>
                    <span className="fs_20 fw-500">Over Due</span>
                    <div className='mt-3 fs_14 lh-100 black_300'>
                      <p>5000 /-</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="avatar-md me-3">
                      <span className="avatar-title bg-danger-subtle rounded-circle fs-1">
                        <img src={cc} className='img-fluid' width="100px" height="100px" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </li>
        </ul>
      </div>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-xl-12">
            <div className="card border-0">
              <div className="card-header">
                <div className="row justify-content-between">
                  <div className="col-sm-4">
                    <div className="search-box">
                      <input type="text"
                        className="form-control search"
                        placeholder="Search for..."
                        name="search"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex justify-content-end">
                      <div className="fs-13 me-3 mt-2">
                        1/5
                      </div>
                      <div className="me-2">
                        <select
                          className="form-select form-control me-3"
                          aria-label="Default select example"
                          required
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
                      <button className="btn btn_primary fs-13 me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Filters</button>

                    </div>
                  </div>
                </div>
                <div className="offcanvas offcanvas-end mt-5 pt-2" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Filters</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body p-2">
                    {/* profile */}
                    <div className="">
                      <label className="form-label fs-s fw-medium txt-color">Profile</label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        placeholder="profile*"
                        id="profile"
                        required
                        name="profile"
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
                      <label className="form-label fs-s fw-medium txt-color">Branch</label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        placeholder="Branch*"
                        id="branch"
                        required
                        name="branch"

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
                      <label className="form-label fs-s fw-medium txt-color">Department</label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        placeholder="department*"
                        id="department"
                        required
                        name="department"

                      >
                        <option value="1">Select Department</option>
                        <option value="2">Counsellor</option>
                        <option value="3">Digital Marketing</option>
                        <option value="4">Student Counsellor</option>
                      </select>
                    </div>
                    <div>
                      <div className="position-absolute bottom-0 start-0 ms-2 mb-2">
                        <button className="btn btn_primary"

                        >Clear
                        </button>
                      </div>
                      <div className="position-absolute bottom-0 end-0 me-2 mb-2">
                        <button className="btn btn_primary"

                        >Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-content" id="pills-tabContent">
                {/* overdue */}
                <div class="tab-pane fade show active" id="pills-overdue" role="tabpanel" aria-labelledby="pills-overdue-tab" tabindex="0">
                  <div className="card-body">
                    <div className="table-responsive table-card border-0">
                      <table className="table table-centered align-middle table-nowrap equal-cell-table">
                        <thead>
                          <tr className=''>
                            <th scope="col" className="fs_13 lh_xs fw_600 black_color ">
                              S.No
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                              Name
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                              Branch
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                              Counsellor
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                              Contact
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                              Course
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                              Due Date
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                              Due Amount
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                              Paid Status
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                              View
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='fs_13 black_color fw_500 lh_xs bg_light '>
                              1
                            </td>
                            <td className='fs_13 black_color  lh_xs bg_light'>
                              Karemgar Vaibhav
                            </td>
                            <td className='fs_13 black_color  lh_xs bg_light'>
                              Secunderabad
                            </td>
                            <td className='fs_13 black_color  lh_xs bg_light'>
                              Usha Kiran
                            </td>
                            <td className='fs_13 black_color  lh_xs bg_light'>
                              9067373129
                            </td>
                            <td className='fs_13 black_color  lh_xs bg_light'>
                              AWS + Devops
                            </td>
                            <td className='fs_13 black_color  lh_xs bg_light '>
                              2024-03-19
                            </td>
                            <td className='fs_13 black_color  lh_xs  bg_light'>
                              17,000
                            </td>
                            <td className='fs_13 black_color  lh_xs  bg_light'>
                              -
                            </td>

                            <td className='fs_14 text_mute bg_light lh_xs d-flex mt-2'>
                              <Link to="/feeview">
                                <AiFillEye className='text-mute table_icons me-3' />
                              </Link>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* today */}
                <div class="tab-pane fade" id="pills-today" role="tabpanel" aria-labelledby="pills-today-tab" tabindex="0">
                  <div className="card-body">
                    <div className="table-responsive table-card border-0">
                      <table className="table table-centered align-middle table-nowrap equal-cell-table">
                        <thead>
                          <tr className=''>
                            <th scope="col" className="fs_13 lh_xs fw_600 black_color ">
                              S.No
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                              Name
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                              Branch
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                              Counsellor
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                              Contact
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                              Course
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                              Due Date
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                              Due Amount
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                              Paid Status
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600">
                              View
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='fs_13 black_color fw_500 lh_xs bg_light '>
                              1
                            </td>
                            <td className='fs_13 black_color  lh_xs bg_light'>
                              Karemgar Vaibhav
                            </td>
                            <td className='fs_13 black_color  lh_xs bg_light'>
                              Secunderabad
                            </td>
                            <td className='fs_13 black_color  lh_xs bg_light'>
                              Usha Kiran
                            </td>
                            <td className='fs_13 black_color  lh_xs bg_light'>
                              9067373129
                            </td>
                            <td className='fs_13 black_color  lh_xs bg_light'>
                              AWS + Devops
                            </td>
                            <td className='fs_13 black_color  lh_xs bg_light '>
                              2024-03-19
                            </td>
                            <td className='fs_13 black_color  lh_xs  bg_light'>
                              17,000
                            </td>
                            <td className='fs_13 black_color  lh_xs  bg_light'>
                              -
                            </td>
                            <td className='fs_14 text_mute bg_light lh_xs d-flex mt-2'>
                              <Link to="/feeview">
                                <AiFillEye className='text-mute table_icons me-3' />
                              </Link>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* upcoming */}
                <div class="tab-pane fade" id="pills-upcoming" role="tabpanel" aria-labelledby="pills-upcoming-tab" tabindex="0">
                  <div className="card-body">
                    <div className="table-responsive table-card border-0">
                      <table className="table table-centered align-middle table-nowrap equal-cell-table">
                        <thead>
                          <tr className=''>
                            <th scope="col" className="fs_13 lh_xs fw_600 black_color ">
                              S.No
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                              Name
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                              Branch
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                              Counsellor
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                              Contact
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                              Course
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                              Due Date
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                              Due Amount
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                              Paid Status
                            </th>
                            <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                              View
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='fs_13 black_color fw_500 lh_xs bg_light '>
                              1
                            </td>
                            <td className='fs_13 black_color  lh_xs bg_light'>
                              Karemgar Vaibhav
                            </td>
                            <td className='fs_13 black_color  lh_xs bg_light'>
                              Secunderabad
                            </td>
                            <td className='fs_13 black_color  lh_xs bg_light'>
                              Usha Kiran
                            </td>
                            <td className='fs_13 black_color  lh_xs bg_light'>
                              9067373129
                            </td>
                            <td className='fs_13 black_color  lh_xs bg_light'>
                              AWS + Devops
                            </td>
                            <td className='fs_13 black_color  lh_xs bg_light '>
                              2024-03-19
                            </td>
                            <td className='fs_13 black_color  lh_xs  bg_light'>
                              17,000
                            </td>
                            <td className='fs_13 black_color  lh_xs  bg_light'>
                              -
                            </td>

                            <td className='fs_14 text_mute bg_light lh_xs d-flex mt-2'>
                              <Link to="/feeview">
                                <AiFillEye className='text-mute table_icons me-3' />
                              </Link>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
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

export default FeeFollowUps;
