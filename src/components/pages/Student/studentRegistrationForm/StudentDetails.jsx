import React, { useState } from "react";
import "../../../../assets/css/common/Login.css";
export const StudentDetails = ({ getFormData }) => {
  const [value, setValues] = useState({
    email: "ghe",
    username: "df",
  });
  const handleKeyDown = (event) => {
    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault(); // Prevent default behavior of arrow keys
    }
  };

  return (
    <>
      <div className="form_title">
        <h5 className="text_color fs-6">Student Details</h5>
      </div>
      <div className="form-group text-start col-lg-3">
        <label className="form-label fs-s text_color" htmlFor="remail">
          Email
        </label>
        <input
          className="form-control"
          id="remail"
          type="email"
          name="remail"
          placeholder="Enter your email address"
        />
      </div>
      <div className="form-group text-start col-lg-3">
        <label className="form-label fs-s text_color" htmlFor="rusername">
          Username
        </label>
        <input
          className="form-control"
          id="rusername"
          type="text"
          name="rusername"
          placeholder="Enter your username"
        />
      </div>
      <div className="form-group text-start col-lg-3">
        <label htmlhtmlFor="rphoto" className="form-label fs-s text_color">
          Choose your photo
        </label>
        <input className="form-control" id="rphoto" type="file" name="rphoto" />
      </div>
      <div className="form-group text-start col-lg-3">
        <label className="form-label fs-s text_color" htmlFor="rphone">
          Phone
        </label>
        <input
          className="form-control"
          id="rphone"
          type="number"
          name="rphone"
          placeholder="Enter your phone number"
          onKeyDown={handleKeyDown}
        />
      </div>
      {/* <div className="col-lg-3 input_grp d-flex gap-2 flex-column">
        <label htmlhtmlFor="remail" className="text_color">
          Email
        </label>
        <input
          type="email"
          name="remail"
          id="remail"
          className="custom_reg_input"
          placeholder="Enter your email address"
        />
      </div> */}

      {/* <div className="col-lg-3 input_grp d-flex gap-2 flex-column">
        <label htmlhtmlFor="rusername" className="text_color">
          Username
        </label>
        <input
          type="text"
          name="rusername"
          id="rusername"
          className="custom_reg_input"
          placeholder="Enter your username"
        />
      </div>
      <div className="col-lg-3 input_grp d-flex gap-2 flex-column">
        <input
          type="file"
          name="rphoto"
          id="rphoto"
          className="custom_reg_input"
        />
      </div>
      <div className="col-lg-3 input_grp d-flex gap-2 flex-column">
        <label htmlhtmlFor="rusername" className="text_color">
          Username
        </label>
        <input
          type="text"
          name="rusername"
          id="rusername"
          className="custom_reg_input"
          placeholder="Enter username"
        />
      </div> */}
    </>
  );
};
