import React from 'react'
import "../../../../assets/css/common/Table.css"
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
      <div className='container'>
        <div className="row">
          <div className="col-xl-12 bg-white">
            <div className="">
              <div class="card-header border-0 p-3 bg_light">
                <div class="row g-4 align-items-center">
                  <div class="col-sm-3">
                    <div class="search-box">
                      {/* < IoIosSearch className='search-icon' /> */}
                      <input type="text" class="form-control search " placeholder="Search for..." />
                    </div>
                  </div>
                  <div class="col-sm-auto ms-auto">
                    <div class="hstack gap-2">
                      <button class="btn btn_soft_danger" id="remove-actions" onclick="deleteMultiple()" > <RiDeleteBin2Line /></button>
                      <button type="button" class="btn btn_info fs_13" data-bs-toggle="offcanvas" href="#offcanvasExample"> Fliters</button>
                      <button type="button" class="btn btn_success add-btn fs_13" data-bs-toggle="modal" id="create-btn" data-bs-target="#showModal"> Add Leads</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body bg_light p-0">
                <div class="table-responsive table-card ">
                  <table className="table table-hover table-centered align-middle table-nowrap mb-0  ">
                    <tbody className=''>
                      <tr className=''>
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
                        <th scope="col" className="fs_13 lh_xs fw_600 black_color ">
                          S.No
                        </th>
                        <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                          Student Name<br />
                          Registration Number
                        </th>
                        <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                          Branch<br />
                          Course

                        </th>
                        <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                          Counsellor<br />
                          Source
                        </th>
                        <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                          Mobile
                        </th>
                        <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                          Joining date<br />
                          Traning Mode
                        </th>
                        <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                          Action
                        </th>
                      </tr>
                      <tr className='py-'>
                        <td className='fs_13 black_color fw_500 lh_xs bg_light '>
                          01
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                          Vishakha chachane <br />
                          TK7689375826572938
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                          Kukkatpally<br />
                          Data Science
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                          Mahitha T
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light '>
                          8208302537
                        </td>
                        <td className='fs_13 black_color  lh_xs  bg_light'>
                          12-Mar-2023<br />
                          (Offline)
                        </td>
                        <td className='fs_14 text_mute bg_light   lh_xs'>
                          <AiFillEye className='text_mute me-3' />
                          <MdEdit className='text_mute me-3' />
                          <FaRupeeSign className='text_mute me-3' />
                          <MdLocalPrintshop className='text_mute me-3' />
                          <FaRegIdCard className='text_mute ' />
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
  )
}

export default Studentdata