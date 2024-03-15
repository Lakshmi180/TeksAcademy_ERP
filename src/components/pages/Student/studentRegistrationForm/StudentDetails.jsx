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
            onChange={(e) =>
              handleInputChange({ name: "rname", value: e.target.value })
            }
            value={formData?.rname || ""}
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
            onChange={(e) =>
              handleInputChange({ name: "remail", value: e.target.value })
            }
            value={formData?.remail || ""}
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
            onChange={(e) =>
              handleInputChange({
                name: "rphoto",
                type: "file",
                files: e.target.files,
              })
            }
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
            onChange={(e) =>
              handleInputChange({ name: "rdob", value: e.target.value })
            }
            value={formData?.rdob || ""}
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
            onChange={(e) =>
              handleInputChange({ name: "rcontactnum", value: e.target.value })
            }
            value={formData?.rcontactnum || ""}
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
            onChange={(e) =>
              handleInputChange({ name: "rwhatsappnum", value: e.target.value })
            }
            value={formData?.rwhatsappnum || ""}
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
            name="rgender"
            onChange={(e) =>
              handleInputChange({ name: "rgender", value: e.target.value })
            }
            value={formData?.rgender || ""}
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
            name="rmaritalstatus"
            onChange={(e) =>
              handleInputChange({
                name: "rmaritalstatus",
                value: e.target.value,
              })
            }
            value={formData?.rmaritalstatus || ""}
          >
            <option selected="">Your Marital Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
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
            onChange={(e) =>
              handleInputChange({ name: "rcscname", value: e.target.value })
            }
            value={formData?.rcscname || ""}
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
            onChange={(e) =>
              handleInputChange({ name: "rpincode", value: e.target.value })
            }
            value={formData?.rpincode || ""}
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
            onChange={(e) =>
              handleInputChange({ name: "rcountry", value: e.target.value })
            }
            value={formData?.rcountry || ""}
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
            onChange={(e) =>
              handleInputChange({ name: "rstate", value: e.target.value })
            }
            value={formData?.rstate || ""}
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
            onChange={(e) =>
              handleInputChange({ name: "rnative", value: e.target.value })
            }
            value={formData?.rnative || ""}
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
            onChange={(e) =>
              handleInputChange({ name: "rarea", value: e.target.value })
            }
            value={formData?.rarea || ""}
          />
        </div>
      </div>
    </>
  );
};
