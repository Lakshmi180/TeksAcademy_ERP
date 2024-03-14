import React, { useEffect, useState } from "react";
import "../../../../assets/css/common/Login.css";
export const StudentDetails = ({ handleInputChange, formData }) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault(); // Prevent default behavior of arrow keys
    }
  };

  return (
    <>
      <div className="form_title">
        {/* <h5 className="text_color fs-6">Student Details</h5> */}
      </div>

      <div className="row">
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rname">
            Name*
          </label>
          <input
            className="form-control"
            id="rname"
            type="text"
            name="rname"
            placeholder="Enter your name"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="remail">
            Email*
          </label>
          <input
            className="form-control"
            id="remail"
            type="email"
            name="remail"
            placeholder="Enter your email address"
            // onBlur={handleInputChange}
          />
        </div>

        <div className="form-group text-start col-lg-3">
          <label htmlhtmlFor="rphoto" className="form-label fs-s text_color">
            Choose your photo*
          </label>
          <input
            className="form-control"
            id="rphoto"
            type="file"
            name="rphoto"
            // onBlur={handleInputChange}
          />
        </div>
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rdob">
            Date of Birth*
          </label>
          <input
            className="form-control"
            id="rdob"
            type="date"
            name="rdob"
            onKeyDown={handleKeyDown}
            // onBlur={handleInputChange}
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rcontactnum">
            Contact Number*
          </label>
          <input
            className="form-control"
            id="rcontactnum"
            type="number"
            name="rcontactnum"
            onKeyDown={handleKeyDown}
            placeholder="Enter Contact Number"
            // onBlur={handleInputChange}
          />
        </div>

        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rwhatsappnum">
            Whatsapp Number*
          </label>
          <input
            className="form-control"
            id="rwhatsappnum"
            type="number"
            name="rwhatsappnum"
            onKeyDown={handleKeyDown}
            placeholder="Enter WhatsApp number"
            // onBlur={handleInputChange}
          />
        </div>
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rgender">
            Gender*
          </label>
          <select
            class="form-select form-control"
            aria-label="Default select example"
            id="rgender"
            // onChange={handleInputChange}
            name="rgender"
          >
            <option selected="" className="fs-s">
              Select your Gender
            </option>
            <option value="male">Male</option>
            <option value="femal">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group text-start col-lg-3">
          <label
            className="form-label fs-s text_color"
            htmlFor="rmaritalstatus"
          >
            Marital Status*
          </label>
          <select
            class="form-select form-control"
            aria-label="Default select example"
            id="rmaritalstatus"
            // onChange={handleInputChange}
            name="rmaritalstatus"
          >
            <option selected="">Your Marital Status</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </select>
        </div>
      </div>

      <div className="row mt-3">
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rcscname">
            College/School/Company*
          </label>
          <input
            className="form-control"
            id="rcscname"
            type="text"
            name="rcscname"
            onKeyDown={handleKeyDown}
            placeholder="College/School/Company"
            // onBlur={handleInputChange}
          />
        </div>
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rpincode">
            Pincode*
          </label>
          <input
            className="form-control"
            id="rpincode"
            type="number"
            name="rpincode"
            onKeyDown={handleKeyDown}
            placeholder="Enter your pincode"
            // onBlur={handleInputChange}
          />
        </div>
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rcountry">
            Country*
          </label>
          <input
            className="form-control"
            id="rcountry"
            type="text"
            name="rcountry"
            placeholder="Enter your Country"
            // onBlur={handleInputChange}
          />
        </div>
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rstate">
            State*
          </label>
          <input
            className="form-control"
            id="rstate"
            type="text"
            name="rstate"
            placeholder="Enter your State"
            // onBlur={handleInputChange}
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rnative">
            Native Place*
          </label>
          <input
            className="form-control"
            id="rnative"
            type="text"
            name="rnative"
            placeholder="Enter your Native Place"
            // onBlur={handleInputChange}
          />
        </div>
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rarea">
            Area*
          </label>
          <input
            className="form-control"
            id="rarea"
            type="text"
            name="rarea"
            placeholder="Enter your Area"
            // onBlur={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};
