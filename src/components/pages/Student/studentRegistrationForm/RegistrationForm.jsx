import React, { useState } from "react";
import "./RegistrationForm.css";
import { StudentDetails } from "./StudentDetails";
import { ThankYou } from "../../../common/design/ThankYou";
import { useTheme } from "../../../../context/ThemeContext/ThemeContext";
function RegistrationForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({});
  const { theme } = useTheme();

  const getFormData = (data) => {
    setFormData(data);
  };

  const tabs = [
    {
      title: "General",
      content: <StudentDetails getFormData={getFormData} />,
    },
    {
      title: "Description",
      content: <StudentDetails />,
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
  ];

  const handleNext = () => {
    if (isFormValid) {
    }
    return setActiveTab((prevActiveTab) => prevActiveTab + 1);
  };

  const handlePrev = () => {
    setActiveTab((prevActiveTab) => prevActiveTab - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="registration_form_section d-flex flex-column justify-content-center gap-3">
      <div className="top d-flex flex-column justify-content-center align-items-center gap-4">
        <div className="registration_img">
          <img
            src="https://www.admin.teksacademy.com/static/media/Teks-Logo-with-Trade.07d75f2c54a71180af08.png"
            alt=""
            width={100}
          />
        </div>

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

          <div className="controls d-flex justify-content-between align-items-center mt-4">
            {activeTab !== 0 && (
              <button
                type="button"
                className="control_prev_btn"
                onClick={() => setActiveTab(activeTab - 1)}
              >
                Go Back
              </button>
            )}

            <button
              type="button"
              className="control_next_btn"
              onClick={handleNext}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
