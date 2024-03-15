import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../common/design/Button";
function CreateDepartment() {
  return (
    <div>
      <div className='container'>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5">
            <div className="card">
              <div className="card-header">
                <h5>Create Department</h5>
              </div>
              <div className="card-body">
                <form>
                  <div class="mb-3">
                    <label
                      for="firstNameinput"
                      className="form-label fs-s fw-medium txt-color"
                    >
                      Department Name
                    </label>
                    <input
                      type="text"
                      className="form-control fs-s bg-form txt-color"
                      placeholder="Enter Department Name"
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
    </div>
  )
}

export default CreateDepartment;