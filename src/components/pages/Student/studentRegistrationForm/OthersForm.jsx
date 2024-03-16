import React from "react";

export const OthersForm = () => {
  return (
    <>
      <div className="row">
        <div className="form-group text-start col-lg-3">
          <label className="form-label fs-s text_color" htmlFor="rremarks">
            Remarks*
          </label>
          <input
            className="form-control"
            id="rremarks"
            type="text"
            name="rremarks"
            placeholder="Enter your Remarks"
          />
        </div>
        <div className="form-group text-start col-lg-3">
          <label
            className="form-check-label fs-s text_color"
            for="cardtableCheck"
          >
            Assets
          </label>

          <div className="w-100 ">
            <div className="form-check ">
              <label
                className="form-check-label fs-s text_color"
                for="cardtableCheck"
              >
                Bag
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="cardtableCheck"
              />
            </div>

            <div className="form-check ">
              <label
                className="form-check-label fs-s text_color"
                for="cardtableCheck"
              >
                Laptop
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="cardtableCheck"
              />
            </div>

            <div className="form-check ">
              <label
                className="form-check-label fs-s text_color"
                for="cardtableCheck"
              >
                LMS
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="cardtableCheck"
              />
            </div>

            <div className="form-check ">
              <label
                className="form-check-label fs-s text_color"
                for="cardtableCheck"
              >
                Course Material
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="cardtableCheck"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
