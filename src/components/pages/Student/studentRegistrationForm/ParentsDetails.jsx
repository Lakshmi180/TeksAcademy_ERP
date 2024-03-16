import React from "react";

export const ParentsDetails = ({ formData, handleInputChange }) => {
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
            className="form-control input_bg_color"
            id="rparentname"
            type="text"
            name="rparentname"
            placeholder="Enter your Parent's Name"
            onChange={(e) =>
              handleInputChange({ name: "rparentname", value: e.target.value })
            }
            value={formData?.rparentname || ""}
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
            className="form-control input_bg_color"
            id="rparentscontact"
            type="number"
            name="rparentscontact"
            onKeyDown={handleKeyDown}
            placeholder="Enter your Parent's contact"
            onChange={(e) =>
              handleInputChange({
                name: "rparentscontact",
                value: e.target.value,
              })
            }
            value={formData?.rparentscontact || ""}
          />
        </div>

        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rgender">
            Relation*
          </label>
          <select
            class="form-select form-control input_bg_color"
            aria-label="Default select example"
            id="rrelation"
            onChange={(e) =>
              handleInputChange({ name: "rrelation", value: e.target.value })
            }
            value={formData?.rrelation || ""}
          >
            <option selected="" className="fs-s">
              --Select--
            </option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
            <option value="Brother">Brother</option>
            <option value="Sister">Sister</option>
            <option value="Uncle">Uncle</option>
            <option value="Aunt">Aunt</option>
          </select>
        </div>
      </div>
    </>
  );
};
