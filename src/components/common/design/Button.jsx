import React from 'react'
import "../../../assets/css/common/Button.css"
 function Button() {
    return (
        <div>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                            <button type="button" class="btn btn-primary waves-effect waves-light  ">Primary</button>
                            <button type="button" class="btn btn-outline-primary waves-effect waves-light ">Primary</button>
                            <button type="button" class="btn rounded-pill btn-primary waves-effect waves-light ">Primary</button>
                            <button type="button" class="btn btn-ghost-primary waves-effect waves-light ">Primary</button>
                            <button class="btn btn-outline-primary btn-load ">
                                <span class="d-flex align-items-center">
                                    <span class="spinner-border flex-shrink-0 fs-6" role="status">
                                    </span>
                                    <span class="flex-grow-1 ms-2">
                                        Loading...
                                    </span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Button
