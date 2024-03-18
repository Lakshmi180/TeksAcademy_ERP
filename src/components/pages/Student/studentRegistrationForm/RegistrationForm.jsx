import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { StudentDetails } from "./StudentDetails";
import { useTheme } from "../../../../context/themeContext/ThemeContext";
import { EducationDetails } from "./EducationDetails";
import { AdmissionDetails } from "./AdmissionDetails";
import { FeeDetails } from "./FeeDetails";
import { OthersForm } from "./OthersForm";
import { Billing } from "./Billing";
import { ParentsDetails } from "./ParentsDetails";
import { IoMdArrowBack, IoMdCheckmark, IoMdArrowForward } from "react-icons/io";
import { Preview } from "./Preview";
import "./RegistrationForm.css";

function RegistrationForm() {
  const [activeTab, setActiveTab] = useState(1);
  const [isFormValid, setIsFormValid] = useState(false);
  const { theme } = useTheme();

  const handleNext = () => {
    setActiveTab((prevTab) => prevTab + 1);
  };

  const handlePrev = () => {
    setActiveTab((prevTab) => prevTab - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container-fluid">
      <div className="registration_form_section  ">
        <div className="top">
          <div className="registration_form_tabs row">
            {/* <div className="button_grp col-lg-12 p-0">
              {tabs.map((tab, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    className={
                      activeTab === index
                        ? `${
                            theme === "light"
                              ? "form_tab_btn active"
                              : "form_tab_btn dark active"
                          }`
                        : "form_tab_btn "
                    }
                    onClick={() => setActiveTab(index)}
                    disabled={!isFormValid}
                  >
                    {tab.title}
                  </button>
                );
              })}
            </div> */}
            <div className="button_grp col-lg-12 p-0">
              <button
                type="button"
                className={
                  activeTab === 1
                    ? `${
                        theme === "light"
                          ? "form_tab_btn active"
                          : "form_tab_btn dark active"
                      }`
                    : "form_tab_btn "
                }
                disabled={!isFormValid}
              >
                Student Details
              </button>
              <button
                type="button"
                className={
                  activeTab === 2
                    ? `${
                        theme === "light"
                          ? "form_tab_btn active"
                          : "form_tab_btn dark active"
                      }`
                    : "form_tab_btn "
                }
                disabled={!isFormValid}
              >
                Parent Details
              </button>
              <button
                type="button"
                className={
                  activeTab === 3
                    ? `${
                        theme === "light"
                          ? "form_tab_btn active"
                          : "form_tab_btn dark active"
                      }`
                    : "form_tab_btn "
                }
                disabled={!isFormValid}
              >
                Education Details
              </button>
              <button
                type="button"
                className={
                  activeTab === 4
                    ? `${
                        theme === "light"
                          ? "form_tab_btn active"
                          : "form_tab_btn dark active"
                      }`
                    : "form_tab_btn "
                }
                disabled={!isFormValid}
              >
                Admission Details
              </button>
              <button
                type="button"
                className={
                  activeTab === 5
                    ? `${
                        theme === "light"
                          ? "form_tab_btn active"
                          : "form_tab_btn dark active"
                      }`
                    : "form_tab_btn "
                }
                disabled={!isFormValid}
              >
                Fee Details
              </button>
              <button
                type="button"
                className={
                  activeTab === 6
                    ? `${
                        theme === "light"
                          ? "form_tab_btn active"
                          : "form_tab_btn dark active"
                      }`
                    : "form_tab_btn "
                }
                disabled={!isFormValid}
              >
                Billing
              </button>
              <button
                type="button"
                className={
                  activeTab === 7
                    ? `${
                        theme === "light"
                          ? "form_tab_btn active"
                          : "form_tab_btn dark active"
                      }`
                    : "form_tab_btn "
                }
                disabled={!isFormValid}
              >
                Others
              </button>
              <button
                type="button"
                className={
                  activeTab === 8
                    ? `${
                        theme === "light"
                          ? "form_tab_btn active"
                          : "form_tab_btn dark active"
                      }`
                    : "form_tab_btn "
                }
                disabled={!isFormValid}
              >
                Preview
              </button>
            </div>
          </div>
        </div>
        <div className="bottom mt-3">
          <form className="" onSubmit={handleSubmit}>
            {activeTab === 1 && <StudentDetails />}
            {activeTab === 2 && <ParentsDetails />}

            {activeTab === 3 && <EducationDetails />}

            {activeTab === 4 && <AdmissionDetails />}

            {activeTab === 5 && <FeeDetails />}

            {activeTab === 6 && <Billing />}

            {activeTab === 7 && <OthersForm />}
            {activeTab === 8 && <Preview />}

            {/* {tabs[activeTab].content} */}

            <div className="controls d-flex justify-content-between  mt-4">
              <div>
                {activeTab !== 1 && (
                  <button
                    type="button"
                    className="btn control_prev_btn reg_btn"
                    onClick={handlePrev}
                  >
                    <span>
                      <IoMdArrowBack className="button_icons" />
                    </span>
                    Go Back
                  </button>
                )}
              </div>
              <div>
                {activeTab !== 8 && (
                  <button
                    type="button"
                    className="btn btn-label right btn_primary "
                    onClick={handleNext}
                  >
                    Continue
                    <span className="label-icon">
                      <IoMdArrowForward />
                    </span>
                  </button>
                )}
                {activeTab === 8 && (
                  <button
                    type="submit"
                    className="btn btn-label right btn_primary "
                    onClick={handleNext}
                  >
                    Submit
                    <span className="label-icon">
                      <IoMdCheckmark />
                    </span>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
