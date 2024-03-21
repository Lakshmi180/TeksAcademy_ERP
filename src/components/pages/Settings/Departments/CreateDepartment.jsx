import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import { DepartmentContext } from "../../../../context/deparmentContext/DepartmentContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../common/design/Button";
import { useDepartmentContext } from "../../../../hooks/useDepartmentContext";
function CreateDepartment() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { DispatchDepartment, DepartmentState, getAllDeparments } =
    useDepartmentContext();
  const [formData, setFormData] = useState({
    department_name: "",
    description: "",
  });
  const [createdBy, setCreatedBy] = useState(() => {
    const userData = JSON.parse(localStorage.getItem("data"));
    return userData || "";
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/getdepartment/${id}`)
        .then((response) => {
          setFormData({
            department_name: response?.data?.department_name || "",
            description: "",
          });
          console.log(response.data, "response.data");
        })
        .catch((error) => {
          console.error("Error fetching department details:", error);
        });
    }
  }, [id]);

  const handlechange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      department_name: formData.department_name,
      description: formData.description,
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
          axios.post(`${process.env.REACT_APP_API_URL}/adddepartment`, user),
          {
            loading: "Loading...",
            success: "Department created Successfully",
            error: "Department not Created",
          }
        );

        if (status === 201) {
          console.log(data, "branchbb");
          DispatchDepartment({ type: "CREATE_DEPARTMENT", payload: data });
          getAllDeparments();
          navigate("/department");
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (id) {
      try {
        const { data, status } = await toast.promise(
          axios.put(
            `${process.env.REACT_APP_API_URL}/updatedepartment/${id}`,
            user
          ),
          {
            loading: "Loading...",
            success: "Department updated Successfully",
            error: "Department not updated",
          }
        );

        if (status === 201) {
          console.log(data, "branchBB");
          DispatchDepartment({ type: "CREATE_DEPARTMENT", payload: data });
          getAllDeparments();
          navigate("/department");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5">
            <div className="card">
              <div className="card-header">
                <h5>{id ? "Update Department" : "Create Department"}</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="firstNameinput"
                      className="form-label fs-s fw-medium txt-color"
                    >
                      Department Name
                    </label>
                    <input
                      type="text"
                      className="form-control fs-s bg-form txt-color"
                      placeholder="Enter Department Name"
                      id="firstNameinput"
                      name="department_name"
                      value={formData.department_name}
                      onChange={handlechange}
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label
                      htmlFor="description"
                      className="form-label fs-s fw-medium txt-color"
                    >
                      Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control fs-s bg-form txt-color"
                      placeholder="Add your description"
                      id="description"
                      name="description"
                      onChange={handlechange}
                      value={formData?.description}
                    />
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
    </div>
  );
}

export default CreateDepartment;
