import React from "react";
import "../../../assets/css/common/Button.css";
import { FaArrowRight } from "react-icons/fa";
function Button({ type, disabled, onClick, children, className, icon }) {
  return (
    <>
      {/* <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                            <button type="button" class="btn btn_primary waves-effect waves-light">Primary</button>
                            <button type="button" class="btn btn_outline_primary waves-effect waves-light ">Primary</button>
                            <button type="button" class="btn rounded-pill btn_primary waves-effect waves-light ">Primary</button>
                            <button type="button" class="btn btn-ghost-primary waves-effect waves-light ">Primary</button>
                            <button class="btn btn_outline_primary btn-load ">
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
            </div> */}
      <div className=" ">
        <button
          type={"button" || type}
          class={`${className} btn`}
          onClick={onClick}
        >
          {children}
          {icon && <span className="label-icon">{icon}</span>}
        </button>
      </div>
    </>
  );
}
export default Button;
