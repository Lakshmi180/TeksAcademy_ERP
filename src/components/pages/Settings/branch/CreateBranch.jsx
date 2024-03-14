import React from "react";


const CreateBranch = () => {
    return (
        <div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-5">
                    <div className="card">
                        <div className="card-header">
                            Create Branch
                        </div>
                        <div className="card-body">
                            <form>
                                <div class="mb-3">
                                    <label
                                        for="firstNameinput"
                                        className="form-label fs-s fw-medium txt-color"
                                    >
                                        Branch Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control fs-s bg-form txt-color"
                                        placeholder="Enter Full Name"
                                        id="firstNameinput"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default CreateBranch;