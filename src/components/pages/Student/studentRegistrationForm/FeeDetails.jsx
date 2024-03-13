import React from "react";

export const FeeDetails = () => {
  const handleKeyDown = (event) => {
    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault(); // Prevent default behavior of arrow keys
    }
  };
  return (
    <>
      <div className="form_title">
        <h5 className="text_color fs-6">Fee Details</h5>
      </div>
      <div className="row">
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rwhatsappnum">
            Fee Type
          </label>
          <select
            class="form-select form-control"
            aria-label="Default select example"
          >
            <option selected="">--Select--</option>
            <option value="1">one</option>
            <option value="2">Two</option>
          </select>
        </div>

        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rcontactnum">
            Amount
          </label>
          <input
            className="form-control"
            id="rcontactnum"
            type="number"
            name="rcontactnum"
            onKeyDown={handleKeyDown}
            placeholder="Enter Contact Number"
          />
        </div>

        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rcontactnum">
            Discount
          </label>
          <input
            className="form-control"
            id="rcontactnum"
            type="number"
            name="rcontactnum"
            onKeyDown={handleKeyDown}
            placeholder="Enter Contact Number"
          />
        </div>
      </div>
    </>
  );
};
