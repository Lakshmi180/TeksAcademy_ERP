

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../common/design/Button";
const CreateCoursePackage=()=>{
    return(
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-5">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="fs-16 txt-color">Create Course Package</h5>
                        </div>
                        <div className="card-body">
                            <form>
                                <div class="mb-3">
                                    <label
                                        for="firstNameinput"
                                        className="form-label fs-s fw-medium txt-color"
                                    >
                                        Package Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control fs-s bg-form txt-color"
                                        placeholder="Enter Package Name"
                                        id="firstNameinput"
                                    />
                                </div>
                                <div className=" ">
                                    <div className="d-flex justify-content-end">
                                        <Button className={"btn_primary btn-label right"} icon={<FaArrowRight />} >
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default CreateCoursePackage;