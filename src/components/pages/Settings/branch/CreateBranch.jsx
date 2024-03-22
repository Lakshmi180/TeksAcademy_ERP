import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { BranchContext } from "../../../../context/branchContext/BranchContextProvider";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Button from "../../../common/design/Button";
import { useBranchContext } from "../../../../hooks/useBranchContext";

const CreateBranch = () => {
  const { DispatchBranch, BranchState, getAllBranches } = useBranchContext();
  const { branchId } = useParams();
  const navigate = useNavigate();

  const [createdBy, setCreatedBy] = useState(() => {
    const userData = JSON.parse(localStorage.getItem("data"));
    return userData || "";
  });
  const [formData, setFormData] = useState({
    branch_name: "",
    description: "",
  });
  const [error, setError] = useState({});
  console.log(formData, 121232);

  //   useEffect(() => {
  //     if (branchId) {
  //       const filterbranchid =
  //         BranchState.branches &&
  //         BranchState.branches.filter((branch) => {
  //           return branch.id === branchId;
  //         });
  //       console.log(filterbranchid[0], "filterbranchid");
  //     }
  //   }, [branchId]);

  useEffect(() => {
    if (branchId) {
      // Fetch branch for editing
      axios
        .get(`${process.env.REACT_APP_API_URL}/getbranch/${branchId}`)
        .then((response) => {
          setFormData({
            branch_name: response?.data?.branch_name || "",
            description: "",
          });
          console.log(response.data, "response.data");
        })
        .catch((error) => {
          console.error("Error fetching course details:", error);
        });
    }
  }, [branchId]);

  console.log(formData, "branchName");

  const handlechange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.branch_name ||
      formData.branch_name === "" ||
      formData.description === "" ||
      !formData.description
    ) {
      return setError((prev) => {
        return {
          ...prev,
          branch: "Enter branch name",
          description: "Enter description",
        };
      });
    }

    let user = {
      branch_name: formData.branch_name,
      description: formData.description,
      createdby: createdBy?.user?.fullname,
    };
    user = [user];
    console.log(user, "before");

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
    console.log(user, "after");

    if (!branchId) {
      try {
        const { data, status } = await toast.promise(
          axios.post(`${process.env.REACT_APP_API_URL}/addbranch`, user),
          {
            loading: "Loading...",
            success: "Branch created Successfully",
            error: "Branch not Created",
          }
        );

        if (status === 201) {
          console.log(data, "branchbb");
          DispatchBranch({ type: "CREATE_BRANCH", payload: data });
          getAllBranches();
          navigate("/branch");
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (branchId) {
      try {
        const { data, status } = await toast.promise(
          axios.put(
            `${process.env.REACT_APP_API_URL}/updatebranch/${branchId}`,
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
          DispatchBranch({ type: "CREATE_BRANCH", payload: data });
          getAllBranches();
          navigate("/branch");
        }
      } catch (error) {
        console.log(error);
      }
    }

    // try {
    //   const { data, status } = await toast.promise(
    //     axios.post(`${process.env.REACT_APP_API_URL}/addbranch`, user),
    //     {
    //       loading: "Loading...",
    //       success: "Branch created Successfully",
    //       error: "Branch not Created",
    //     }
    //   );
    //   if (status === 201) {
    //     console.log(data, "hellobb");
    //     DispatchBranch({ type: "CREATE_BRANCH", payload: data });
    //     getAllBranches();
    //     navigate("/branch");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-5">
          <div className="card">
            <div className="card-header">
              <h5 className="fs-16 txt-color">
                {branchId ? `Update Branch` : `Create Branch`}
              </h5>
            </div>
            <div className="card-body">
              <form className="row">
                <div class=" col-lg-12 mb-3">
                  <label
                    for="firstNameinput"
                    className="form-label fs-s fw-medium txt-color"
                  >
                    Branch Name
                  </label>
                  <input
                    type="text"
                    className="form-control fs-s bg-form txt-color"
                    placeholder="Enter Branch Name"
                    id="firstNameinput"
                    name="branch_name"
                    value={formData.branch_name}
                    onChange={handlechange}
                  />
                  {error && error.branch && <p>{error.branch}</p>}
                </div>

                <div class="col-lg-12 mb-3">
                  <label
                    for="description"
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
                  {error && error.description && <p>{error.description}</p>}
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
export default CreateBranch;
