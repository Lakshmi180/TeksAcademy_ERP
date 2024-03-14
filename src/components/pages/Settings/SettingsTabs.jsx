import React from 'react';
import { Link } from "react-router-dom";
import "../../../assets/css/common/Settings.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaGift } from "react-icons/fa";

export const SettingsTabs = () => {
    return (
        <div>
            <div className="container-fluid">
                <h6 className='py-2'>Settings</h6>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-3 col-sm-6">
                        <div className='card'>
                            <div class="d-flex p-2">
                                <div class="flex-shrink-0">
                                    <div class="avatar-md me-3">
                                        <span class="avatar-title mt-3 bg-danger-subtle rounded-circle fs-1">
                                            <FaGift />
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <p class="fs_13 lh-base">Personalized <span class="fw-semibold">Gift Boxes</span>, with attitude, Let's collect your Xmas box <FaArrowRight /></p>
                                    <div class="mt-3">
                                        <Link to="/roles">
                                            <button type="button" class="btn btn_primary waves-effect waves-light w-100 py-2">Roles</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Link to="/branch">
                            <button type="button" class="btn btn_primary waves-effect waves-light w-100 py-2">Branch</button>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Link to="/department">
                            <button type="button" class="btn btn_primary waves-effect waves-light w-100 py-2">Department</button>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Link to="/course">
                            <button type="button" class="btn btn_primary waves-effect waves-light w-100 py-2">Course</button>
                        </Link>
                    </div>

                </div>
                <div className="row d-flex justify-content-center mt-3">
                    <div className="col-lg-3 col-sm-6">
                        <Link to="/coursepackage">
                            <button type="button" class="btn btn_primary waves-effect waves-light w-100 py-2">Course Package</button>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Link to="/">
                            <button type="button" class="btn btn_primary waves-effect waves-light w-100 py-2">Admission fee</button>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Link to="/">
                            <button type="button" class="btn btn_primary waves-effect waves-light w-100 py-2">Communication</button>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Link to="/">
                            <button type="button" class="btn btn_primary waves-effect waves-light w-100 py-2">Lead Source</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

