import React, { useState } from "react";
import "./RegistrationForm.css";
import { StudentDetails } from "./StudentDetails";
import { ThankYou } from "../../../common/design/ThankYou";
import { useTheme } from "../../../../context/ThemeContext/ThemeContext";
import { EducationDetails } from "./EducationDetails";
import { AdmissionDetails } from "./AdmissionDetails";
import { FeeDetails } from "./FeeDetails";
import { OthersForm } from "./OthersForm";
import { Billing } from "./Billing";
import { ParentsDetails } from "./ParentsDetails";
import { IoMdArrowBack, IoMdCheckmark, IoMdArrowForward } from "react-icons/io";

function RegistrationForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    rname: "",
    // remail,
    // rphoto,
    // rdob,
    // rcontactnum,
    // rwhatsappnum,
    // rgender,
    // rmaritalstatus,
    // rcscname,
    // rpincode,
    // rcountry,
    // rstate,
    // rnative,
    // rarea,
  });
  const { theme } = useTheme();

  const [tabs] = useState([
    {
      title: "Student Details",
      content: <StudentDetails />,
    },
    {
      title: "Parent Details",
      content: <ParentsDetails />,
    },
    {
      title: "Education Details",
      content: <EducationDetails />,
    },
    {
      title: "Admission Details",
      content: <AdmissionDetails />,
    },
    {
      title: "Fee Details",
      content: <FeeDetails />,
    },
    {
      title: "Billing",
      content: <Billing />,
    },
    {
      title: "Others",
      content: <OthersForm />,
    },
    {
      title: "Finish",
      content: (
        <ThankYou
          heading="Thank you!"
          description={"Thank you for registering with us!!"}
        />
      ),
    },
  ]);

  function handleNext() {
    setActiveTab((prevActiveTab) => prevActiveTab + 1);
  }

  const handlePrev = () => {
    setActiveTab((prevActiveTab) => prevActiveTab - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="registration_form_section  ">
      <div className="top">
        <div className="registration_form_tabs row">
          <div className="button_grp col-lg-12 p-0">
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
          </div>
        </div>
      </div>
      <div className="bottom mt-3">
        <form className="row d-flex align-items-center" onSubmit={handleSubmit}>
          {tabs[activeTab].content}

          <div className="controls d-flex justify-content-between  mt-4">
            <div>
              {" "}
              {activeTab !== 0 && (
                <button
                  type="button"
                  className="control_prev_btn reg_btn"
                  onClick={() => setActiveTab(activeTab - 1)}
                >
                  <span>
                    <IoMdArrowBack className="button_icons" />
                  </span>
                  Go Back
                </button>
              )}
            </div>
            <div>
              {activeTab !== tabs.length - 1 && (
                <div className="">
                  <button
                    type="button"
                    className="control_next_btn reg_btn"
                    onClick={handleNext}
                  >
                    Continue
                    <span>
                      <IoMdArrowForward className="button_icons" />
                    </span>
                  </button>
                </div>
              )}
              {activeTab === tabs.length - 1 && (
                <div className="">
                  <button
                    type="submit"
                    className="control_next_btn reg_btn"
                    onClick={handleNext}
                  >
                    Submit
                    <span>
                      <IoMdCheckmark />
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
