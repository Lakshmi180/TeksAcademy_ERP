import React from "react";
import "../../../assets/css/common/Forms.css";

export const Input = ({
  element,
  name,
  id,
  cols = "30",
  rows = "10",
  required = true,
  placeholder,
  type,
  onChange,
  label,
  className = "",
  children
}) => {
  let inputElement = null;

  switch (element) {
    case "textarea":
      inputElement = (
        <>
          {label && (
            <label htmlFor={id} className="form-label fs-s text_color">
              {label}
            </label>
          )}
          <textarea
            name={name}
            id={id}
            cols={cols}
            rows={rows}
            onChange={onChange}
            className="bg-form form-control text_color input_bg_color"
            placeholder={placeholder}
            required={required}
          ></textarea>
        </>
      );
      break;

    case "select":
      inputElement = (
        <>
          {label && (
            <label htmlFor={id} className="form-label fs-s text_color">
              {label}
            </label>
          )}
          <select
            name={name}
            id={id}
            onChange={onChange}
            className="form-select mb-3 bg-form form-control text_color input_bg_color"
            required={required}
          >
            {children}
          </select>
        </>
      );
      break;

    default:
      inputElement = (
        <div className="form-group text-start ">
          {label && (
            <label htmlFor={id} className="form-label fs-s text_color">
              {label}
            </label>
          )}
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            className={`${className} form-control bg-form text_color input_bg_color`}
          />
        </div>
      );
      break;
  }

  return inputElement;
};
