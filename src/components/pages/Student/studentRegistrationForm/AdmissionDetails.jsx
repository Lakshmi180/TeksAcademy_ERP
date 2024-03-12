import React from "react";

export const AdmissionDetails = () => {
  return (
    <>
      <div className="form_title">
        <h5 className="text_color fs-6">Admission Details</h5>
      </div>
      <div className="row">
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="renqiurydate">
            Enquiry Date
          </label>
          <input
            className="form-control"
            id="renqiurydate"
            type="date"
            name="renqiurydate"
          />
        </div>
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="renqtakeby">
            Enquiry taken by
          </label>
          <input
            className="form-control"
            id="renqtakeby"
            type="text"
            name="renqtakeby"
            placeholder="Enter your Counsellor Name"
          />
        </div>

        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rwhatsappnum">
            Course Package
          </label>
          <select class="form-select " aria-label="Default select example">
            <option selected="">--Select--</option>
            <option value="1">TEKS Job Oriented Program</option>
            <option value="2">Teks Professional Training Program</option>
          </select>
        </div>

        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rwhatsappnum">
            Course
          </label>
          <select class="form-select " aria-label="Default select example">
            <option selected="">--Select--</option>
            <option value="1">one</option>
            <option value="2">Two</option>
          </select>
        </div>
      </div>
      <div className="row mt-3">
        <div className="form-group text-start col-lg-3 ">
          <label className="form-label fs-s text_color" htmlFor="rwhatsappnum">
            Lead Source
          </label>
          <select class="form-select " aria-label="Default select example">
            <option selected="">--Select--</option>
            <option value="1">one</option>
            <option value="2">Two</option>
          </select>
        </div>

        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rwhatsappnum">
            Branch
          </label>
          <select class="form-select " aria-label="Default select example">
            <option selected="">--Select--</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
        </div>

        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rwhatsappnum">
            Mode Of Training
          </label>
          <select class="form-select " aria-label="Default select example">
            <option selected="">--Select--</option>
            <option value="1">one</option>
            <option value="2">Two</option>
          </select>
        </div>

        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="renqiurydate">
            Admission Date
          </label>
          <input
            className="form-control"
            id="renqiurydate"
            type="date"
            name="renqiurydate"
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="renqiurydate">
            Validity Start Date
          </label>
          <input
            className="form-control"
            id="renqiurydate"
            type="date"
            name="renqiurydate"
          />
        </div>

        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="renqiurydate">
            Validity End Date
          </label>
          <input
            className="form-control"
            id="renqiurydate"
            type="date"
            name="renqiurydate"
          />
        </div>
      </div>
    </>
  );
};
