import React from "react";

export const EducationDetails = ({ formData, handleInputChange }) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault(); // Prevent default behavior of arrow keys
    }
  };
  return (
    <>
      <div className="form_title">
        <h5 className="text_color fs-6">Education Details</h5>
      </div>
      <div className="row">
        <div className="form-group text-start col-lg-3">
          <label
            className="form-label fs-s text_color"
            htmlFor="reducationtype"
          >
            Education Type*
          </label>
          <select
            class="form-select form-control"
            aria-label="Default select example"
            id="reducationtype"
            onChange={(e) =>
              handleInputChange({
                name: "reducationtype",
                value: e.target.value,
              })
            }
            value={formData?.reducationtype || ""}
          >
            <option selected="" className="fs-s">
              Select your Qualifications
            </option>
            <option value="B.Tech">B.Tech</option>
            <option value="MCA">MCA</option>
            <option value="SSC">SSC</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rpercentage">
            Percentage*
          </label>
          <input
            className="form-control"
            id="rpercentage"
            type="number"
            name="rpercentage"
            onKeyDown={handleKeyDown}
            placeholder="Enter your percentage"
            onChange={(e) =>
              handleInputChange({
                name: "rpercentage",
                value: e.target.value,
              })
            }
            value={formData?.rpercentage || ""}
          />
        </div>
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="racademicyear">
            Academic Year*
          </label>
          <input
            className="form-control"
            id="racademicyear"
            type="date"
            name="racademicyear"
            onChange={(e) =>
              handleInputChange({
                name: "racademicyear",
                value: e.target.value,
              })
            }
            value={formData?.racademicyear || ""}
          />
        </div>
      </div>
    </>
  );
};
