import React from 'react';
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { HiMiniPlus } from "react-icons/hi2";
const AdmissionFee = () => {
  return (
    <div>
          <div className='container-fluid'>
              <div className="row">
                  <div className="col-xl-12">
                      <div className="card border-0">
                          <div className="card-header">
                              <div className="d-flex justify-content-between">
                                  <h5 className="fs-16 txt-color">Branch</h5>
                                  <div>
                                      <button type="button" class="btn btn_success add-btn fs_13 ">
                                          <Link to="/createadmissionfee" className="button_color"><HiMiniPlus /> Add Admission Fee</Link>
                                      </button>
                                  </div>
                              </div>
                          </div>
                          <div className="card-body">
                              <div class="table-responsive table-card border-0">
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
                                                  Description
                                              </th>
                                              <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                                                  Create By
                                              </th>
                                              <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                                                  Create At
                                              </th>
                                              <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                                                  Actions
                                              </th>
                                          </tr>
                                      </thead>
                                      <tbody className=''>
                                          {/* 1st row */}
                                          <tr>
                                              <td className='fs_13 black_color fw_500 lh_xs bg_light '>
                                                  01
                                              </td>
                                              <td className='fs_13 black_color  lh_xs bg_light'>
                                                  Kukkatpally
                                              </td>
                                              <td className='fs_13 black_color  lh_xs bg_light'>
                                                  Description
                                              </td>
                                              <td className='fs_13 black_color  lh_xs bg_light'>
                                                  Bhavitha
                                              </td>
                                              <td className='fs_13 black_color  lh_xs bg_light'>
                                                  12-10-2024
                                              </td>
                                              <td className='fs_13 black_color  lh_xs bg_light '>
                                                  <MdEdit className='text-mute table_icons me-3' />
                                                  <MdDelete className='text-mute table_icons me-3' />
                                              </td>
                                          </tr>
                                          {/* 2nd row */}
                                          <tr>
                                              <td className='fs_13 black_color fw_500 lh_xs bg_light '>
                                                  01
                                              </td>
                                              <td className='fs_13 black_color  lh_xs bg_light'>
                                                  Kukkatpally
                                              </td>
                                              <td className='fs_13 black_color  lh_xs bg_light'>
                                                  Description
                                              </td>
                                              <td className='fs_13 black_color  lh_xs bg_light'>
                                                  Bhavitha
                                              </td>
                                              <td className='fs_13 black_color  lh_xs bg_light'>
                                                  12-10-2024
                                              </td>
                                              <td className='fs_13 black_color  lh_xs bg_light '>
                                                  <MdEdit className='text-mute table_icons me-3' />
                                                  <MdDelete className='text-mute table_icons me-3' />
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
  );
}

export default AdmissionFee;
