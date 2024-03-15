import React from "react";
import "./CreateUserForm.css";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../common/design/Button";
import { IoMdArrowBack, IoMdCheckmark, IoMdArrowForward } from "react-icons/io";
function CreateUserForm() {
  return (
    <div>
      <div className="container-fluid">
        <div className="card border-0">
          <div className="align-items-center">
            <h5 className="mt-4 fs-16 txt-color ms-3">
              User Creation Form
            </h5>
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
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control fs-s bg-form txt-color"
                        placeholder="Enter Full Name"
                        id="firstNameinput"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        for="email"
                        className="form-label fs-s fw-medium txt-color"
                      >
                        Email Id
                      </label>
                      <input
                        type="email"
                        className="form-control fs-s bg-form"
                        placeholder="Enter Email Id"
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
                        Phone Number
                      </label>
                      <input
                        type=""
                        className="form-control fs-s bg-form"
                        placeholder="Enter Phone Number"
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
                        Designation
                      </label>
                      <input
                        type="text"
                        className="form-control form-fs-s bg-form"
                        placeholder="Enter Designation"
                        id="designationNameinput"
                      />
                    </div>
                  </div>
                  <div className=" col-md-4 ">
                    <label className="form-label fs-s fw-medium txt-color">
                      Department
                    </label>
                    <select
                      class="form-select form-control  "
                      aria-label="Default select example"
                      placeholder="Branch*"
                      name="branch"
                      id="branch"
                      required
                    ><option value="1">Select Department</option>
                      <option value="2">Department 1</option>
                      <option value="3">Department 2</option>
                    </select>
                  </div>
                  <div className=" col-md-4 ">
                    <label className="form-label fs-s fw-medium txt-color">
                      Report To
                    </label>
                    <select
                      class="form-select form-control  "
                      aria-label="Default select example"
                      placeholder="Report To*"
                      name="branch"
                      id="branch"
                      required
                    >
                      <option value="1">Select Report</option>
                      <option value="2">Report 1</option>
                      <option value="3">Report 2</option>
                    </select>
                  </div>
                  <div className=" col-md-4 ">
                    <label className="form-label fs-s fw-medium txt-color">
                      Role
                    </label>
                    <select
                      class="form-select form-control  "
                      aria-label="Default select example"
                      placeholder="Role*"
                      name="branch"
                      id="branch"
                      required
                    >
                      <option value="1">Select Role</option>
                      <option value="2">Role</option>
                      <option value="3">Role</option>
                    </select>
                  </div>
                  <div className=" col-md-4 ">
                    <label className="form-label fs-s fw-medium txt-color">
                      Branch
                    </label>
                    <select
                      class="form-select  form-control "
                      aria-label="Default select example"
                      placeholder="Branch*"
                      name="branch"
                      id="branch"
                      required
                    >
                      <option value="1">Select Branch</option>
                      <option value="2">Branch</option>
                      <option value="3">Branch</option>
                    </select>
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
  );
}

export default CreateUserForm;
