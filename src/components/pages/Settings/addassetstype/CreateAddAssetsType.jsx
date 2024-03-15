import React from 'react';
import { FaArrowRight } from "react-icons/fa";
const CreateAddAssetsType = () => {
    return (
        <div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-5">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="fs-16 txt-color">Create Asset Type</h5>
                        </div>
                        <div className="card-body">
                            <form>
                                <div class="mb-3">
                                    <label
                                        for="firstNameinput"
                                        className="form-label fs-s fw-medium txt-color"
                                    >
                                        Asset Type
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control fs-s bg-form txt-color"
                                        placeholder="Enter Asset Type"
                                        id="firstNameinput"
                                    />
                                </div>
                                <div className=" ">
                                    <div className="d-flex justify-content-end">
                                        <button
                                            type="button"
                                            class="btn btn_primary waves-effect waves-light btn-label right fs_13"
                                        >
                                            Submit
                                            <span className="label-icon"><FaArrowRight /></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateAddAssetsType;