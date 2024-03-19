import React from 'react'
import { NavLink } from 'react-router-dom';
import { AiFillEye } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
function Assignassets() {
    return (
        <div className='container-fluid'>
            <div className="d-flex justify-content-between mt-4">
                <h5 className="ms-2"> Add Data</h5>
                <NavLink to="/addassetsform" className="btn btn_primary fs-13">
                    Add Assets
                </NavLink>
            </div>
            <div className="row d-flex mt-4">
                <div className='   col-12 col-md-4 col-lg-2 col-xl-2 mb-1'>
                    <div className=" d-flex justify-content-between rounded">
                        <div className="card-body bg_red ">
                            <div className="d-flex justify-content-between mb-3">
                                <p className=" fw-medium black_300 m-0 fw_400 fs_14">All Branches</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='   col-12 col-md-4 col-lg-2 col-xl-2 mb-1'>
                    <div className="card  d-flex justify-content-between bg_white rounded">
                        <div className="card-body bg_subtle">
                            <div className="d-flex justify-content-between mb-3">
                                <p className=" fw-medium black_300  m-0 fw_400 fs_14">
                                    Secunderabad
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='   col-12 col-md-4 col-lg-2 col-xl-2 mb-1'>
                    <div className="card d-flex justify-content-between bg_white rounded">
                        <div className="card-body bg_yellow">
                            <div className="d-flex justify-content-between mb-3">
                                <p className=" fw-medium black_300  m-0 fw_400 fs_14">Hi-Tech city</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='   col-12 col-md-4 col-lg-2 col-xl-2 mb-1'>
                    <div className="card  d-flex justify-content-between bg_white rounded">
                        <div className="card-body bg_infosubtle">
                            <div className="d-flex justify-content-between mb-3">
                                <p className=" fw-medium black_300  m-0 fw_400 fs_14">Ameerpet</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='   col-12 col-md-4 col-lg-2 col-xl-2 mb-1'>
                    <div className="card  d-flex justify-content-between bg_white rounded">
                        <div className="card-body bg_secondary">
                            <div className="d-flex justify-content-between mb-3">
                                <p className=" fw-medium black_300  m-0 fw_400 fs_14">Dilsukhnagar</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='   col-12 col-md-4 col-lg-2 col-xl-2 mb-1'>
                    <div className="card d-flex justify-content-between bg_white rounded">
                        <div className="card-body bg_infolight">
                            <div className="d-flex justify-content-between mb-3">
                                <p className=" fw-medium black_300  m-0 fw_400 fs_14">Kukatpally</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card-body">
                <div className="table-responsive table-card border-0">
                    <table className="table table-centered align-middle table-nowrap equal-cell-table">
                        <thead>
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
                                 ID
                                </th>
                                <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                                    Name
                                </th>
                                <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                               Branch
                                </th>
                                <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                                    Asset Type
                                </th>
                                <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                                  Brand Name
                                </th>
                                <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                                   Asset Code
                                </th>
                                <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                                   Issue Date
                                </th>
                                <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                               Quantity
                                </th>
                                <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                             Actions
                                </th>
                                
                            </tr>
                            <tr>
                        <td className='fs_13 black_color fw_500 lh_xs bg_light '>
                          1
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                       lipika <br />
                       
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                          Kukkatpally
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                        T-shirt
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light'>
                       
                        </td>
                        <td className='fs_13 black_color  lh_xs bg_light '>
                          8208302537
                        </td>
                        <td className='fs_13 black_color  lh_xs  bg_light'>
                          12-Mar-2023<br />
                       
                        </td>
                        <td className='fs_13 black_color  lh_xs  bg_light'>
                          12-Mar-2023<br />
                        
                        </td>
                        <td className='fs_14 text_mute bg_light   lh_xs'>
                          <AiFillEye className='eye_icon table_icons me-3' />
                          <MdEdit className='edit_icon table_icons me-3' />
                         
                        </td>
                      </tr>
                        </thead>
                       
                    </table>
                </div>

            </div>
        </div>
    );

}

export default Assignassets