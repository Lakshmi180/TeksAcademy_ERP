import React from "react";

export const OthersForm = () => {
  return (
    <>
      <div className="form_title">
        <h5 className="text_color fs-6">Other Details</h5>
      </div>

      <div className="row">
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rremarks">
            Remarks
          </label>
          <input
            className="form-control"
            id="rremarks"
            type="text"
            name="rremarks"
            placeholder="Enter your Remarks"
          />
        </div>
      </div>
    </>
  );
};
