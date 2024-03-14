import React from "react";

export const ParentsDetails = () => {
  const handleKeyDown = (event) => {
    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault(); // Prevent default behavior of arrow keys
    }
  };
  return (
    <>
      <div className="form_title">
        <h5 className="text_color fs-6">Parent / Guardian Details</h5>
      </div>
      <div className="row">
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rparentname">
            Parent's Name*
          </label>
          <input
            className="form-control"
            id="rparentname"
            type="text"
            name="rparentname"
            placeholder="Enter your Parent's Name"
          />
        </div>

        <div className="form-group text-start col-lg-3">
          <label
            className="form-label fs-s text_color"
            htmlFor="rparentscontact"
          >
            Parent's Contact*
          </label>
          <input
            className="form-control"
            id="rparentscontact"
            type="number"
            name="rparentscontact"
            onKeyDown={handleKeyDown}
            placeholder="Enter your Parent's contact"
          />
        </div>

        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rgender">
            Relation*
          </label>
          <select
            class="form-select form-control"
            aria-label="Default select example"
            id="rgender"
          >
            <option selected="" className="fs-s">
              --Select--
            </option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </select>
        </div>
      </div>
    </>
  );
};
