import React from "react";

export const AdmissionDetails = ({ formData, handleInputChange }) => {
  return (
    <>
      <div className="row">
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="renqiurydate">
            Enquiry Date*
          </label>
          <input
            className="form-control"
            id="renqiurydate"
            type="date"
            name="renqiurydate"
            onChange={(e) =>
              handleInputChange({ name: "renqiurydate", value: e.target.value })
            }
            value={formData?.renqiurydate || ""}
          />
        </div>
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="renqtakeby">
            Enquiry taken by*
          </label>
          <input
            className="form-control"
            id="renqtakeby"
            type="text"
            name="renqtakeby"
            placeholder="Enter your Counsellor Name"
            onChange={(e) =>
              handleInputChange({ name: "renqtakeby", value: e.target.value })
            }
            value={formData?.renqtakeby || ""}
          />
        </div>

        <div className="form-group text-start col-lg-3">
          <label
            className="form-label fs-s text_color"
            htmlFor="rcoursepackage"
          >
            Course Package*
          </label>
          <select
            class="form-select form-control"
            aria-label="Default select example"
            id="rcoursepackage"
            onChange={(e) =>
              handleInputChange({
                name: "rcoursepackage",
                value: e.target.value,
              })
            }
            value={formData?.rcoursepackage || ""}
          >
            <option selected="">--Select--</option>
            <option value="1">TEKS Job Oriented Program</option>
            <option value="2">Teks Professional Training Program</option>
          </select>
        </div>

        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rcourse">
            Course*
          </label>
          <select
            class="form-select form-control"
            aria-label="Default select example"
            id="rcourse"
            onChange={(e) =>
              handleInputChange({ name: "rcourse", value: e.target.value })
            }
            value={formData?.rcourse || ""}
          >
            <option selected="">--Select--</option>
            <option value="1">one</option>
            <option value="2">Two</option>
          </select>
        </div>
      </div>
      <div className="row mt-3">
        <div className="form-group text-start col-lg-3 ">
          <label className="form-label fs-s text_color" htmlFor="rleadsource">
            Lead Source*
          </label>
          <select
            class="form-select form-control"
            aria-label="Default select example"
            id="rleadsource"
            onChange={(e) =>
              handleInputChange({ name: "rleadsource", value: e.target.value })
            }
            value={formData?.rleadsource || ""}
          >
            <option selected="">--Select--</option>
            <option value="1">one</option>
            <option value="2">Two</option>
          </select>
        </div>

        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rbranch">
            Branch*
          </label>
          <select
            class="form-select form-control"
            aria-label="Default select example"
            id="rbranch"
            onChange={(e) =>
              handleInputChange({ name: "rbranch", value: e.target.value })
            }
            value={formData?.rbranch || ""}
          >
            <option selected="">--Select--</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
        </div>

        <div className="form-group text-start col-lg-3">
          <label
            className="form-label fs-s text_color"
            htmlFor="rmodeoftraining"
          >
            Mode Of Training*
          </label>
          <select
            class="form-select form-control"
            aria-label="Default select example"
            id="rmodeoftraining"
            onChange={(e) =>
              handleInputChange({
                name: "rmodeoftraining",
                value: e.target.value,
              })
            }
            value={formData?.rmodeoftraining || ""}
          >
            <option selected="">--Select--</option>
            <option value="1">one</option>
            <option value="2">Two</option>
          </select>
        </div>

        <div className="form-group text-start col-lg-3">
          <label
            className="form-label fs-s text_color"
            htmlFor="radmissiondate"
          >
            Admission Date*
          </label>
          <input
            className="form-control"
            id="radmissiondate"
            type="date"
            name="radmissiondate"
            onChange={(e) =>
              handleInputChange({
                name: "radmissiondate",
                value: e.target.value,
              })
            }
            value={formData?.radmissiondate || ""}
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="form-group text-start col-lg-3">
          <label
            className="form-label fs-s text_color"
            htmlFor="rvaliditystartdate"
          >
            Validity Start Date*
          </label>
          <input
            className="form-control"
            id="rvaliditystartdate"
            type="date"
            name="rvaliditystartdate"
            onChange={(e) =>
              handleInputChange({
                name: "rvaliditystartdate",
                value: e.target.value,
              })
            }
            value={formData?.rvaliditystartdate || ""}
          />
        </div>

        <div className="form-group text-start col-lg-3">
          <label
            className="form-label fs-s text_color"
            htmlFor="rvalidityenddate"
          >
            Validity End Date*
          </label>
          <input
            className="form-control"
            id="rvalidityenddate"
            type="date"
            name="rvalidityenddate"
            onChange={(e) =>
              handleInputChange({
                name: "rvalidityenddate",
                value: e.target.value,
              })
            }
            value={formData?.rvalidityenddate || ""}
          />
        </div>
      </div>
    </>
  );
};
