import React from 'react'

function Register() {
  return (
    <div>
    <div className="container-fluid">
        <div className="card border-0">
            <div className="align-items-center">
                <h5 className="mt-4 fs-16 txt-color ms-3">
                    Add Assets Form
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
                                        Vendor Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control fs-s bg-form txt-color"
                                        placeholder="Vendor Name"
                                        id="vendornameinput"
                                        name="vendorname"
                                        // value={formData.fullname}
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
                                      Designation
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control fs-s bg-form"
                                        placeholder="Designation"
                                        id="designationinput"
                                        name="designation"
                                        // value={formData.email}
                                        // onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label
                                        for="lastNameinput"
                                        className="form-label fs-s fw-medium txt-color"
                                    >Branch
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control fs-s bg-form"
                                        placeholder="Enter Phone Number"
                                        id="branchinput"
                                        name="branch"
                                        // value={formData.phonenumber}
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
                                        Assets Type
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control fs-s bg-form"
                                        placeholder="assets type"
                                        id="assetstypeinput"
                                        name="aasesttype"
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
                                        Assets Code
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control fs-s bg-form"
                                        placeholder="Assets Code"
                                        id="firstNameinput"
                                        name="email"
                                        // value={formData.email}
                                        // onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div class="col-md-4">
                        <div>
                          <div class="form-group text-start">
                            <label
                              class="form-label fs-s txt-color"
                              for="example-text-input "
                            >
                              Issue Date
                            </label>
                            <input
                              class="form-control fs-s bg-form"
                              type="date"
                              id="exampleInputdate"
                            />
                          </div>
                        </div>
                      </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label
                                        for="lastNameinput"
                                        className="form-label fs-s fw-medium txt-color"
                                    >
                                        Quantity
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control fs-s bg-form"
                                        placeholder="Quantity"
                                        id="firstNameinput"
                                        name="phonenumber"
                                        // value={formData.phonenumber}
                                        // onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className=" ">
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn_primary "
                                        // onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
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

export default Register