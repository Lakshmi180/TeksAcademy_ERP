import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import { CoursePackageContext } from "../../../../context/coursePackageContext/CoursePackageContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import Button from "../../../common/design/Button";
import { useCoursePackage } from "../../../../hooks/useCoursePackage";
const CreateCoursePackage = () => {
  const { coursePackageState, getAllCoursePackages, DispatchCourseState } =
    useCoursePackage();
  const navigate = useNavigate();
  const [createdBy, setCreatedBy] = useState(() => {
    const userData = JSON.parse(localStorage.getItem("data"));
    return userData || "";
  });
  const [formData, setFormData] = useState({
    coursepackages_name: "",
  });

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Fetch branch for editing
      axios
        .get(`${process.env.REACT_APP_API_URL}/getcoursepackages/${id}`)
        .then((response) => {
          setFormData({
            coursepackages_name: response?.data?.coursepackages_name || "",
          });
          console.log(response.data, "response.data");
        })
        .catch((error) => {
          console.error("Error fetching course details:", error);
        });
    }
  }, [id]);

  const handlechange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        coursepackages_name: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      coursepackages_name: formData.coursepackages_name,
      createdby: createdBy?.user?.fullname,
    };
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

    if (!id) {
      try {
        const { data, status } = await toast.promise(
          axios.post(
            `${process.env.REACT_APP_API_URL}/addcoursespackages`,
            user
          ),
          {
            loading: "Loading...",
            success: "Branch created Successfully",
            error: "Branch not Created",
          }
        );

        if (status === 201) {
          console.log(data, "branchbb");
          DispatchCourseState({ type: "CREATE_COURSE_PACKAGE", payload: data });
          getAllCoursePackages();
          navigate("/coursepackage");
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (id) {
      try {
        const { data, status } = await toast.promise(
          axios.put(
            `${process.env.REACT_APP_API_URL}/updatecoursepackages/${id}`,
            user
          ),
          {
            loading: "Loading...",
            success: "Branch created Successfully",
            error: "Branch not Created",
          }
        );

        if (status === 201) {
          console.log(data, "branchBB");
          DispatchCourseState({ type: "CREATE_COURSE_PACKAGE", payload: data });
          getAllCoursePackages();
          navigate("/coursepackage");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-5">
          <div className="card">
            <div className="card-header">
              <h5 className="fs-16 txt-color">
                {id ? "Update Course Package" : "Create Course Package"}
              </h5>
            </div>
            <div className="card-body">
              <form>
                <div class="mb-3">
                  <label
                    for="firstNameinput"
                    className="form-label fs-s fw-medium txt-color"
                  >
                    Package Name
                  </label>
                  <input
                    type="text"
                    className="form-control fs-s bg-form txt-color"
                    placeholder="Enter Package Name"
                    id="firstNameinput"
                    value={formData.coursepackages_name}
                    onChange={handlechange}
                  />
                </div>
                <div className=" ">
                  <div className="d-flex justify-content-end">
                    <Button
                      className={"btn_primary btn-label right"}
                      icon={<FaArrowRight />}
                      onClick={handleSubmit}
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
export default CreateCoursePackage;
