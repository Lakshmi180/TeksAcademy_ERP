import React from 'react'

function Addassetsform() {
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
                                                placeholder="Enter Full Name"
                                                id="firstNameinput"
                                                name="fullname"
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
                                                Assets Type
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control fs-s bg-form"
                                                placeholder="Enter Email Id"
                                                id="firstNameinput"
                                                name="email"
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
                                            >
                                                Quantity
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control fs-s bg-form"
                                                placeholder="Enter Phone Number"
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

export default Addassetsform