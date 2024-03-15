
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../common/design/Button";
const CreateCourse = () => {
    return (
        <div className="">
            <div className="container-fluid">
                <div className="card border-0">
                    <div className="align-items-center">
                        <div className="card-header">
                            <h5 className="fs-16 txt-color">
                                Create Course
                            </h5>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="live-prieview">
                            <form>
                                <div className="row d-flex">
                                    <div className="col-md-4">
                                        <div class="mb-3">
                                            <label
                                                for="firstNameinput"
                                                className="form-label fs-s fw-medium txt-color"
                                            >
                                                Course Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control fs-s bg-form txt-color"
                                                placeholder="Enter Course Name"
                                                id="firstNameinput"
                                            />
                                        </div>
                                    </div>


                                    <div className=" col-md-4 ">
                                        <label className="form-label fs-s fw-medium txt-color">
                                            Course Package
                                        </label>
                                        <select
                                            class="form-select form-control  "
                                            aria-label="Default select example"
                                            placeholder="Branch*"
                                            name="branch"
                                            id="branch"
                                            required
                                        ><option value="1">Select Course Package</option>
                                            <option value="2">Teks Job Oriented Program</option>
                                            <option value="3">Teks Professional Training Program</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label
                                                for="lastNameinput"
                                                className="form-label fs-s fw-medium txt-color"
                                            >
                                                Fee
                                            </label>
                                            <input
                                                type=""
                                                className="form-control fs-s bg-form"
                                                placeholder="Enter Fee"
                                                id="firstNameinput"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label
                                                for="lastNameinput"
                                                className="form-label fs-s fw-medium txt-color"
                                            >
                                                Max Discount
                                            </label>
                                            <input
                                                type=""
                                                className="form-control fs-s bg-form"
                                                placeholder="Enter Max Discount"
                                                id="firstNameinput"
                                            />
                                        </div>
                                    </div>
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
export default CreateCourse;