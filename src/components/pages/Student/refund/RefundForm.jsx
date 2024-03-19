import React from 'react'
import "../../User/CreateUserForm/CreateUserForm.css"
import Button from "../../../common/design/Button";
import { FaArrowRight } from "react-icons/fa";
function RefundForm() {
  return (
    <div>
      <div className='container-fluid'>
         <div className='card border-0'>
         <div >
            <h5 className="mt-4 fs-16 txt-color ms-3">
            Refund Form
            </h5>
          </div>
           <div className='card-body'>
            <div className='live-prieview'>
                <form>

                    <div className='row d-flex'>

                        <div className='col-md-4'>
                            <div className='mb-3'>

                            <label
                        for="registration id"
                        className="form-label fs-s fw-medium txt-color"
                      >
                   Registration Id*
                      </label>
                      <input
                        type="text"
                        className="form-control fs-s bg-form txt-color"
                        placeholder="Enter Registration Id"
                        id="firstNameinput"
                        name="fullname"
                           // value={formData.email}
                        // onChange={handleChange}

                      />


                            </div>
                        </div>
                        <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        for="email"
                        className="form-label fs-s fw-medium txt-color"
                      >
                   Student Name*
                      </label>
                      <input
                        type="studentname"
                        className="form-control fs-s bg-form"
                        placeholder="Enter name"
                        id="firstNameinput"
                        name="email"
                        // value={formData.email}
                        // onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className='col-md-4'>
                            <div className='mb-3'>

                            <label
                        for="registration id"
                        className="form-label fs-s fw-medium txt-color"
                      >
              Phone Number*
                      </label>
                      <input
                        type="text"
                        className="form-control fs-s bg-form txt-color"
                        placeholder="Enter Phone No"
                        id="phoneNumber"
                        name="Phone Number"
                           // value={formData.email}
                        // onChange={handleChange}

                      />


                            </div>
                        </div>
                        <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        for="email"
                        className="form-label fs-s fw-medium txt-color"
                      >
              Email Id*
                      </label>
                      <input
                        type="email"
                        className="form-control fs-s bg-form"
                        placeholder="Enter Email"
                        id="email"
                        name="email"
                        // value={formData.email}
                        // onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-4'>
                            <div className='mb-3'>

                            <label
                        for="enrolled course"
                        className="form-label fs-s fw-medium txt-color"
                      >
               Enrolled Course*
                      </label>
                      <input
                        type="text"
                        className="form-control fs-s bg-form txt-color"
                        placeholder="Enter Enrolled Course"
                        id="enrolledCourse"
                        name="enrolledCourse"
                           // value={formData.email}
                        // onChange={handleChange}

                      />


                            </div>
                        </div>
                        <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        for="branch"
                        className="form-label fs-s fw-medium txt-color"
                      >
             Branch*
                      </label>
                      <input
                        type="text"
                        className="form-control fs-s bg-form"
                        placeholder="Enter Branch"
                        id="branch"
                        name="branch"
                        // value={formData.email}
                        // onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-4'>
                            <div className='mb-3'>

                            <label
                        for="counsellorName"
                        className="form-label fs-s fw-medium txt-color"
                      >
             Counsellor Name*
                      </label>
                      <input
                        type="text"
                        className="form-control fs-s bg-form txt-color"
                        placeholder="Enter Registration Id"
                        id="counsellorName"
                        name="counsellorName"
                           // value={formData.email}
                        // onChange={handleChange}

                      />


                            </div>
                        </div>
                        <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        for="date"
                        className="form-label fs-s fw-medium txt-color"
                      >
               Admission Date*
                      </label>
                      <input
                        type="date"
                        className="form-control fs-s bg-form"
                      
                        id="date"
                        name="email"
                        // value={formData.email}
                        // onChange={handleChange}
                      />
                      





                    </div>
                    
                  </div>
                   
                  <div className='col-md-4'>
                            <div className='mb-3'>

                            <label
                        for="coursefee"
                        className="form-label fs-s fw-medium txt-color"
                      >
              Total Course Fee*
                      </label>
                      <input
                        type="text"
                        className="form-control fs-s bg-form txt-color"
                        placeholder="Total Course Fee"
                        id="coursefee"
                        name="coursefee"
                           // value={formData.email}
                        // onChange={handleChange}

                      />


                            </div>
                        </div>
                        <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        for="feepaid"
                        className="form-label fs-s fw-medium txt-color"
                      >
Fee Paid*
                      </label>
                      <input
                        type="text"
                        className="form-control fs-s bg-form"
                        placeholder="Fee Paid"
                        id="feepaid"
                        name="feepaid"
                        // value={formData.email}
                        // onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-4'>
                            <div className='mb-3'>

                            <label
                        for="dueamount"
                        className="form-label fs-s fw-medium txt-color"
                      >
            Due Amount*
                      </label>
                      <input
                        type="text"
                        className="form-control fs-s bg-form txt-color"
                        placeholder="Due Amount"
                        id="dueamount"
                        name="dueamount"
                           // value={formData.email}
                        // onChange={handleChange}

                      />


                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='mb-3'>

                            <label
                        for="batchtime"
                        className="form-label fs-s fw-medium txt-color"
                      >
                    Batch Timing*
                      </label>
                      <input
                        type="time"
                        className="form-control fs-s bg-form txt-color"
                        placeholder="Batch Time"
                        id="batchtime"
                        name="batchtime"
                           // value={formData.email}
                        // onChange={handleChange}

                      />


                            </div>
                        </div>

                        <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        for="refundreason"
                        className="form-label fs-s fw-medium txt-color"
                      >
           Reason For Refund*
                      </label>
                      <textarea
                        type="text"
                        className="form-control fs-s bg-form"
                        placeholder="Reason For Refund"
                        id="refundreason"
                        rows="3"
                        name="refundreason"
                        // value={formData.email}
                        // onChange={handleChange}
                      />
                    </div>
                  </div>
                        <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        for="trainername"
                        className="form-label fs-s fw-medium txt-color"
                      >
           Trainer Name*
                      </label>
                      <input
                        type="text"
                        className="form-control fs-s bg-form"
                        placeholder="Enter Trainer Name"
                        id="trainername"
                        name="trainername"
                        // value={formData.email}
                        // onChange={handleChange}
                      />
                    </div>
                  </div> 
                 
               

                    </div>

                
                    

                  <div className="d-flex justify-content-end">
                    <Button className={"btn_primary btn-label right"} icon={<FaArrowRight />}
                      onClick=""
                    >
                      Submit
                    </Button>
                  </div>
                 
                </form>
            </div>
           </div>

         </div>

      </div>
    </div>
  )
}

export default RefundForm
