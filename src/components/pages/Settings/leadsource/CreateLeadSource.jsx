import React, { useContext, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../common/design/Button";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { LeadSourceContext } from "../../../../context/leadSourceContext/LeadSourceContext";
import { useLeadSourceContext } from "../../../../hooks/useLeadSourceContext";
const CreateLeadSource = () => {
  const { leadSourceState, DispatchLeadSource, getAllLeadSource } =
    useLeadSourceContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    leadsource: "",
  });
  const [createdBy, setCreatedBy] = useState(() => {
    const userData = JSON.parse(localStorage.getItem("data"));
    return userData || "";
  });

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Fetch branch for editing
      axios
        .get(`${process.env.REACT_APP_API_URL}/getleadsource/${id}`)
        .then((response) => {
          setFormData({
            leadsource: response?.data?.leadsource || "",
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
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      leadsource: formData.leadsource,
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

    console.log(user, "leaduser");

    if (!id) {
      try {
        const { data, status } = await toast.promise(
          axios.post(`${process.env.REACT_APP_API_URL}/addleadsource`, user),
          {
            loading: "Loading...",
            success: "LeadSource created Successfully",
            error: "LeadSource not Created",
          }
        );

        if (status === 201) {
          console.log(data, "branchbb");
          DispatchLeadSource({ type: "CREATE_LEAD_SOURCE", payload: data });
          getAllLeadSource();
          navigate("/leadsource");
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (id) {
      try {
        const { data, status } = await toast.promise(
          axios.put(
            `${process.env.REACT_APP_API_URL}/updatedleadsource/${id}`,
            user
          ),
          {
            loading: "Loading...",
            success: "LeadSource updated Successfully",
            error: "LeadSource not updated",
          }
        );

        if (status === 201) {
          console.log(data, "branchBB");
          DispatchLeadSource({ type: "CREATE_LEAD_SOURCE", payload: data });
          getAllLeadSource();
          navigate("/leadsource");
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
                {id ? "Update" : "Create"} Lead Source
              </h5>
            </div>
            <div className="card-body">
              <form>
                <div class="mb-3">
                  <label
                    for="firstNameinput"
                    className="form-label fs-s fw-medium txt-color"
                  >
                    Lead Source
                  </label>
                  <input
                    type="text"
                    className="form-control fs-s bg-form txt-color"
                    placeholder="Enter Lead Source"
                    id="firstNameinput"
                    name="leadsource"
                    onChange={handlechange}
                    value={formData.leadsource}
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

export default CreateLeadSource;
