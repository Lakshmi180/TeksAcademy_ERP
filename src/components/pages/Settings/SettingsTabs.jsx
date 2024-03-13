import React from 'react';
import { Link } from "react-router-dom";
export const SettingsTabs = () => {
    return (
        <div>
            <div className="container">
                <h6 className='py-2'>Settings</h6>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-3 col-sm-6">
                        <Link to="/roles">
                            <button type="button" class="btn btn_primary waves-effect waves-light w-100 py-2">Roles</button>
                        </Link>
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

