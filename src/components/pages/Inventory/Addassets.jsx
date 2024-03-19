import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Addassests.css";
function Addassets() {
    return (
        <div className='container-fluid'>
            <div className="d-flex justify-content-between mt-4">
                <h5 className="ms-2 "> Add Assets</h5>
                <NavLink to="/addassetsform" className="btn btn_primary fs-13">
                    Add Assets
                </NavLink>
            </div>
            <div className="row d-flex mt-4">
                <div className='   col-12 col-md-4 col-lg-2 col-xl-2 mb-1'>
                    <div className=" d-flex justify-content-between rounded">
                        <div className="card-body bg_red ">
                            <div className="d-flex justify-content-between mb-3">
                                <p className=" fw-medium  m-0 fw_400 fs_14 black_300">Total Laptops:</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='   col-12 col-md-4 col-lg-2 col-xl-2 mb-1'>
                    <div className="card  d-flex justify-content-between bg_white rounded">
                        <div className="card-body bg_subtle">
                            <div className="d-flex justify-content-between mb-3">
                                <p className=" fw-medium  m-0 fw_400 fs_14 black_300">Total T-shirts</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='   col-12 col-md-4 col-lg-2 col-xl-2 mb-1'>
                    <div className="card d-flex justify-content-between bg_white rounded">
                        <div className="card-body bg_yellow">
                            <div className="d-flex justify-content-between mb-3">
                                <p className=" fw-medium black_300 m-0 fw_400 fs_14">Total shirt:</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='   col-12 col-md-4 col-lg-2 col-xl-2 mb-1'>
                    <div className="card  d-flex justify-content-between bg_white rounded">
                        <div className="card-body bg_infosubtle">
                            <div className="d-flex justify-content-between mb-3">
                                <p className=" fw-medium black_300 m-0 fw_400 fs_14">Total Charger:</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='   col-12 col-md-4 col-lg-2 col-xl-2 mb-1'>
                    <div className="card  d-flex justify-content-between bg_white rounded">
                        <div className="card-body bg_secondary">
                            <div className="d-flex justify-content-between mb-3">
                                <p className=" fw-medium black_300 m-0 fw_400 fs_14">Total Mouse:</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='   col-12 col-md-4 col-lg-2 col-xl-2 mb-1'>
                    <div className="card d-flex justify-content-between bg_white rounded">
                        <div className="card-body bg_infolight">
                            <div className="d-flex justify-content-between mb-3">
                                <p className=" fw-medium black_300 m-0 fw_400 fs_14">Total Bags:</p>
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
                                   Vendor Name
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
                                  Quantity
                                </th>
                                <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                        Status
                                </th>
                                <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                             Action
                                </th>
                                
                            </tr>
                            
                        </thead>
                       
                    </table>
                </div>

            </div>

        </div>
    );

}

export default Addassets