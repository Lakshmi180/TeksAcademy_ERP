import React from "react";

export const ThankYou = ({ description, heading }) => {
  return (
    <div className="thank_you_section text-center">
      <div className="thank_you_container">
        <div className="thank_you_title ">
          <h1 className="text_color">{heading}</h1>
        </div>
        <div className="thank_you_text">
          <p className="text_color">{description}</p>
        </div>
      </div>
    </div>
  );
};
