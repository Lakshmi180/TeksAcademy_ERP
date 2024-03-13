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

function Studentdata() {
  return (
    <div>
      <div className="container">
        <div className="row  ">
          <div className="col-xl-12   ">
            <div className="card  ">
              <div class="card-header border-0 p-3 bg_light">
                <div class="row g-4 align-items-center">
                  <div class="col-sm-3">
                    <div class="search-box">
                      {/* < IoIosSearch className='search-icon' /> */}
                      <input
                        type="text"
                        class="form-control search "
                        placeholder="Search for..."
                      />
                    </div>
                  </div>
                  <div class="col-sm-auto ms-auto">
                    <div class="hstack gap-2">
                      <button
                        class="btn btn_soft_danger"
                        id="remove-actions"
                        onclick="deleteMultiple()"
                      >
                        {" "}
                        <RiDeleteBin2Line />
                      </button>
                      <button
                        type="button"
                        class="btn btn_info fs_13"
                        data-bs-toggle="offcanvas"
                        href="#offcanvasExample"
                      >
                        {" "}
                        Fliters
                      </button>
                      <button
                        type="button"
                        class="btn btn_success add-btn fs_13"
                        data-bs-toggle="modal"
                        id="create-btn"
                        data-bs-target="#showModal"
                      >
                        {" "}
                        Add Leads
                      </button>
                      {/* <span class="dropdown">
                <button class="btn btn_soft_info btn-icon fs-14" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <IoSettingsOutline />
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                    <li><a class="dropdown-item" href="#">Copy</a></li>
                    <li><a class="dropdown-item" href="#">Move to pipline</a></li>
                    <li><a class="dropdown-item" href="#">Add to exceptions</a></li>
                    <li><a class="dropdown-item" href="#">Switch to common form view</a></li>
                    <li><a class="dropdown-item" href="#">Reset form view to default</a></li>
                </ul>
            </span> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-body bg_light p-0">
                <div class="table-responsive table-card ">
                  <table className="table table-hover table-centered align-middle table-nowrap mb-0  ">
                    <tbody className="">
                      <tr className="">
                        <th scope="col">
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
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs fw_600 black_color "
                        >
                          Sr.No
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600  "
                        >
                          Student Name <br />
                          Registration Number
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600  "
                        >
                          Branch <br />
                          Course
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600 "
                        >
                          Counsellor <br />
                          Source
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600 "
                        >
                          Contact Number <br />
                          Email
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600 "
                        >
                          Joining date <br />
                          Traning Mode
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600 "
                        >
                          Action
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600 "
                        >
                          Student Id Card
                        </th>
                      </tr>

                      <tr>
                        <td scope="col">
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
                        </td>
                        <td className="fs_13 black_color fw_500 lh_xs bg_light ">
                          01
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>Vishakha chachane</p>
                          <p>TK7689375826572938</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>Kukkatpally</p>
                          <p>Data Science</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>Mahitha T</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light ">
                          <p>8208302537</p>
                          <p>vishakhachachane@gmail.com</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs  bg_light">
                          <p>12-Mar-2023</p>
                          <p>Offline</p>
                        </td>

                        <td className="fs_14 text_mute bg_light   lh_xs">
                          <AiFillEye className="text_mute me-3" />
                          <MdEdit className="text_mute me-3" />
                          <FaRupeeSign className="text_mute   me-3" />
                          <MdLocalPrintshop className="text_mute " />
                        </td>
                        <td className="fs_14 text_mute   lh_xs">
                          <FaRegIdCard className="text_mute " />
                        </td>
                      </tr>

                      <tr>
                        <td scope="col">
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
                        </td>
                        <td className="fs_13 black_color fw_500 lh_xs bg_light">
                          02
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>Vishakha chachane</p>
                          <p>TK7689375826572938</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>Kukkatpally</p>
                          <p>Data Science</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>Mahitha T</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>8208302537</p>
                          <p>vishakhachachane@gmail.com</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>12-Mar-2023</p>
                          <p>Offline</p>
                        </td>

                        <td className="fs_14 text_mute bg_light  lh_xs">
                          <AiFillEye className="text_mute me-3" />
                          <MdEdit className="text_mute  me-3" />
                          <FaRupeeSign className="text_mute me-3" />
                          <MdLocalPrintshop className="text_mute " />
                        </td>
                        <td className="fs_14 text_mute   lh_xs">
                          <FaRegIdCard className="text_mute " />
                        </td>
                      </tr>
                      <tr>
                        <td scope="col">
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
                        </td>
                        <td className="fs_13 black_color fw_500 lh_xs bg_light">
                          03
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>Vishakha chachane</p>
                          <p>TK7689375826572938</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>Kukkatpally</p>
                          <p>Data Science</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>Mahitha T</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>8208302537</p>
                          <p>vishakhachachane@gmail.com</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>12-Mar-2023</p>
                          <p>Offline</p>
                        </td>

                        <td className="fs_14 text_mute bg_light  lh_xs">
                          <AiFillEye className="text_mute  me-3" />
                          <MdEdit className="text_mute  me-3" />
                          <FaRupeeSign className="text_mute  me-3" />
                          <MdLocalPrintshop className="text_mute " />
                        </td>
                        <td className="fs_14 text_mute  bg_light  lh_xs">
                          <FaRegIdCard className="text_mute" />
                        </td>
                      </tr>
                      <tr>
                        <td scope="col">
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
                        </td>
                        <td className="fs_13 black_color fw_500 lh_xs bg_light">
                          04
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>Vishakha chachane</p>
                          <p>TK7689375826572938</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>Kukkatpally</p>
                          <p>Data Science</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>Mahitha T</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>8208302537</p>
                          <p>vishakhachachane@gmail.com</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>12-Mar-2023</p>
                          <p>Offline</p>
                        </td>

                        <td className="fs_14 text_mute bg_light   lh_xs">
                          <AiFillEye className="text_mute  me-3" />
                          <MdEdit className="text_mute  me-3" />
                          <FaRupeeSign className="text_mute  me-3" />
                          <MdLocalPrintshop className="text_mute b" />
                        </td>
                        <td className="fs_14 text_mute bg_light  lh_xs">
                          <FaRegIdCard className="text_mute " />
                        </td>
                      </tr>
                      <tr>
                        <td scope="col">
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
                        </td>
                        <td className="fs_13 black_color fw_500  lh_xs bg_light">
                          05
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>Vishakha chachane</p>
                          <p>TK7689375826572938</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>Kukkatpally</p>
                          <p>Data Science</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>Mahitha T</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>8208302537</p>
                          <p>vishakhachachane@gmail.com</p>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <p>12-Mar-2023</p>
                          <p>Offline</p>
                        </td>

                        <td className="fs_14 text_mute lh_xs bg_light   ">
                          <AiFillEye className="text_mute me-3" />
                          <MdEdit className="text_mute  me-3" />
                          <FaRupeeSign className="text_mute me-3" />
                          <MdLocalPrintshop className="text_mute " />
                        </td>
                        <td className="fs_14 text_mute bg_light  lh_xs ">
                          <FaRegIdCard className="text_mute " />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="align-items-center d-flex justify-content-between row text-center text-sm-start p-1  ">
                  <div className="col-sm">
                    <div className="text_mute pagination-text">
                      Showing <span className="fw-semibold">5</span> of{" "}
                      <span className="fw-semibold">25</span> Results
                    </div>
                  </div>
                  <div className="col-sm-auto  mt-3 mt-sm-0">
                    <ul className="pagination pagination-separated pagination-sm mb-0 justify-content-center">
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
  );
}

export default Studentdata;
