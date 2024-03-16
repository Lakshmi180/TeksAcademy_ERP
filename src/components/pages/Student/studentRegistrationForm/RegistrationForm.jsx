import React, { useEffect, useState } from "react";
import "./RegistrationForm.css";
import { StudentDetails } from "./StudentDetails";
import { ThankYou } from "../../../common/design/ThankYou";
import { useTheme } from "../../../../context/themeContext/ThemeContext";
import { EducationDetails } from "./EducationDetails";
import { AdmissionDetails } from "./AdmissionDetails";
import { FeeDetails } from "./FeeDetails";
import { OthersForm } from "./OthersForm";
import { Billing } from "./Billing";
import { ParentsDetails } from "./ParentsDetails";
import { IoMdArrowBack, IoMdCheckmark, IoMdArrowForward } from "react-icons/io";
import { Preview } from "./Preview";

function RegistrationForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState(() => {
    // Intializing local storage to add the form data
    const storedData = JSON.parse(localStorage.getItem("formData"));
    return storedData || [];
  });
  const handleInputChange = (input) => {
    const { name, value, type, files } = input;

    // Handle different types of inputs
    if (type === "file") {
      // For file input, handle differently
      const file = files[0]; // Assuming only single file selection
      setFormData((prevValues) => ({
        ...prevValues,
        [name]: file,
      }));
    } else {
      // For other input types, handle as usual
      setFormData((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };
  const { theme } = useTheme();

  const tabs = [
    {
      title: "Student Details",
      content: (
        <StudentDetails
          formData={formData}
          handleInputChange={handleInputChange}
        />
      ),
    },
    {
      title: "Parent Details",
      content: (
        <ParentsDetails
          formData={formData}
          handleInputChange={handleInputChange}
        />
      ),
    },
    {
      title: "Education Details",
      content: (
        <EducationDetails
          formData={formData}
          handleInputChange={handleInputChange}
        />
      ),
    },
    {
      title: "Admission Details",
      content: (
        <AdmissionDetails
          formData={formData}
          handleInputChange={handleInputChange}
        />
      ),
    },
    {
      title: "Fee Details",
      content: (
        <FeeDetails formData={formData} handleInputChange={handleInputChange} />
      ),
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
      title: "Preview",
      content: <Preview />,
    },
  ];

  function handleNext() {
    localStorage.setItem("formData", JSON.stringify(formData));
    setActiveTab((prevActiveTab) => prevActiveTab + 1);
  }

  const handlePrev = () => {
    setActiveTab((prevActiveTab) => prevActiveTab - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);
  return (
    <div className="container-fluid">
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
          <form className="" onSubmit={handleSubmit}>
            {tabs[activeTab].content}

            <div className="controls d-flex justify-content-between  mt-4">
              <div>
                {activeTab !== 0 && (
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
                {activeTab !== tabs.length - 1 && (
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
                {activeTab === tabs.length - 1 && (
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
