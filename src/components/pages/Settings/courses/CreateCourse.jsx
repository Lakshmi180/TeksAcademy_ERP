import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import { CourseContext } from "../../../../context/courseContext/CourseContextProvider";

import Button from "../../../common/design/Button";
import { useParams } from "react-router-dom";
import { useCourseContext } from "../../../../hooks/useCourseContext";
const CreateCourse = () => {
  const { DispatchCourse, courseState, getAllCourses } = useCourseContext();
  const { courseId } = useParams();

  const [formdata, setformdata] = useState({
    course_name: "",
    course_package: "",
    fee: "",
    max_discount: "",
  });

  console.log(courseId, "courseId");

  useEffect(() => {
    console.log(courseId, "courseId");
    if (courseId) {
      // Fetch course details for editing
      axios
        .get(`${process.env.REACT_APP_API_URL}/getcourse/${courseId}`)
        .then((response) => {
          setformdata(response.data);
          console.log(response.data, "response.data");
        })
        .catch((error) => {
          console.error("Error fetching course details:", error);
        });
    }
  }, [courseId]);

  const handleChange = (e) => {
    setformdata((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      course_name: formdata.course_name,
      course_package: formdata.course_package,
      fee: formdata.fee,
      max_discount: formdata.max_discount,
    };

    console.log(user, "userfound");
    user = [user];
    const dataWithTitleCase = user.map((item) => {
      const newItem = {};
      for (const key in item) {
        if (Object.prototype.hasOwnProperty.call(item, key)) {
          if (typeof item[key] === "string" && key !== "email") {
            newItem[key] = item[key]
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");
          } else {
            newItem[key] = item[key];
          }
        }
      }
      return newItem;
    });
    user = dataWithTitleCase[0];
    console.log(user, "datatiltecases");

    if (!courseId) {
      try {
        const { data, status } = await toast.promise(
          axios.post(
            `${process.env.REACT_APP_API_URL}/addcourses`,
            JSON.stringify(user)
          ),
          {
            loading: "Loading...",
            success: "Course created Successfully",
            error: "Course not Created",
          }
        );

        if (status === 201) {
          console.log(data, "hellobb");
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (courseId) {
      try {
        const { data, status } = await toast.promise(
          axios.post(
            `${process.env.REACT_APP_API_URL}/updatecourse/${courseId}`,
            JSON.stringify(user)
          ),
          {
            loading: "Loading...",
            success: "Course created Successfully",
            error: "Course not Created",
          }
        );

        if (status === 201) {
          console.log(data, "hellobb");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="">
      <div className="container-fluid">
        <div className="card border-0">
          <div className="align-items-center">
            <div className="card-header">
              <h5 className="fs-16 txt-color">Create Course</h5>
            </div>
          </div>
          <div className="card-body">
            <div className="live-prieview">
              <form>
                <div className="row d-flex">
                  <div className="col-md-4">
                    <div class="mb-3">
                      <label
                        for="firstNameinput"
                        className="form-label fs-s fw-medium txt-color"
                      >
                        Course Name
                      </label>
                      <input
                        type="text"
                        className="form-control fs-s bg-form txt-color"
                        placeholder="Enter Course Name"
                        id="firstNameinput"
                        name="course_name"
                        value={formdata.course_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className=" col-md-4 ">
                    <label className="form-label fs-s fw-medium txt-color">
                      Course Package
                    </label>
                    <select
                      class="form-select form-control  "
                      aria-label="Default select example"
                      placeholder="course_package*"
                      name="course_package"
                      id="course_package"
                      value={formdata.course_package}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Course Package</option>
                      <option>Teks Job Oriented Program</option>
                      <option>Teks Professional Training Program</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        for="lastNameinput"
                        className="form-label fs-s fw-medium txt-color"
                      >
                        Fee
                      </label>
                      <input
                        type="number"
                        className="form-control fs-s bg-form"
                        placeholder="Enter Fee"
                        id="firstNameinput"
                        name="fee"
                        value={formdata.fee}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        for="lastNameinput"
                        className="form-label fs-s fw-medium txt-color"
                      >
                        Max Discount
                      </label>
                      <input
                        type="number"
                        className="form-control fs-s bg-form"
                        placeholder="Enter Max Discount"
                        id="firstNameinput"
                        name="max_discount"
                        value={formdata.max_discount}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className=" ">
                  <div className="d-flex justify-content-end">
                    <Button
                      className={"btn_primary btn-label right"}
                      onClick={handleSubmit}
                      icon={<FaArrowRight />}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateCourse;
