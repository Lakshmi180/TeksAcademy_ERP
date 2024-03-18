import React, { useEffect, useState } from "react";
import "./CreateUserForm.css";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../common/design/Button";
import { IoMdArrowBack, IoMdCheckmark, IoMdArrowForward } from "react-icons/io";
import { useBranchContext } from "../../../../hooks/useBranchContext";
import { useDepartmentContext } from "../../../../hooks/useDepartmentContext";
import { useRoleContext } from "../../../../hooks/useRoleContext";
import { toast } from "react-toastify";
import axios from "axios";
import { useUserContext } from "../../../../hooks/useUserContext";
function CreateUserForm() {
  const { DispatchBranch, BranchState, getAllBranches } = useBranchContext();
  const { DispatchDepartment, DepartmentState, getAllDeparments } = useDepartmentContext();
  const { RoleState, createRole } = useRoleContext();
  const { UsersState, getAllUsers } = useUserContext();

  console.log(UsersState,getAllUsers, "showusersate")

  const [UsersDropDown, setUsersDropDown] = useState();

  useEffect(() => {
    if (UsersState.TotalUsers) {
      const filteredUsers = UsersState.TotalUsers.filter(user => user.profile.toLowerCase() !== "counsellor")
      setUsersDropDown(filteredUsers)
    }
  }, [UsersState?.TotalUsers])


  const [formData, setFormData] = useState({
    branch: "",
    fullname: "",
    email: "",
    phonenumber: "",
    designation: "",
    department: "",
    reportto: "",
    branch: "",
  })

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      branch: formData.branch,
      fullname: formData.fullname,
      email: formData.email,
      phonenumber: formData.phonenumber,
      designation: formData.designation,
      department: formData.department,
      reportto: formData.reportto,
    }
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
    console.log(user, "ibdcjsbjvgfjv")

    try {
      const { data, status } = await
        toast.promise(axios.post(`${process.env.REACT_APP_API_URL}/createUser`, user), {
          loading: "Loading...",
          success: "User created Successfully",
          error: "User not Created"
        })

      if (status === 201) {
        console.log(data, "hellobb")
        getAllUsers();
        // DispatchDepartment({type:"CREATE_DEPARTMENT", payload:data})
        // getAllDeparments();
        // navigate("/department")
      }
    }
    catch (error) {
      console.log(error)
    }






  }

  return (
    <div>
      <div className="container-fluid">
        <div className="card border-0">
          <div className="align-items-center">
            <h5 className="mt-4 fs-16 txt-color ms-3">
              User Creation Form
            </h5>
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
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control fs-s bg-form txt-color"
                        placeholder="Enter Full Name"
                        id="firstNameinput"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}

                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        for="email"
                        className="form-label fs-s fw-medium txt-color"
                      >
                        Email Id
                      </label>
                      <input
                        type="email"
                        className="form-control fs-s bg-form"
                        placeholder="Enter Email Id"
                        id="firstNameinput"
                        name="email"
                        value={formData.email}
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
                        Phone Number
                      </label>
                      <input
                        type="number"
                        className="form-control fs-s bg-form"
                        placeholder="Enter Phone Number"
                        id="firstNameinput"
                        name="phonenumber"
                        value={formData.phonenumber}
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
                        Designation
                      </label>
                      <input
                        type="text"
                        className="form-control form-fs-s bg-form"
                        placeholder="Enter Designation"
                        id="designationNameinput"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className=" col-md-4 ">
                    <label className="form-label fs-s fw-medium txt-color">
                      Department
                    </label>
                    <select
                      class="form-select form-control  "
                      aria-label=""
                      placeholder="Enter department"
                      name="department"
                      id="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled selected> Enter the Department </option>
                    {
                        DepartmentState.departments && DepartmentState.departments.length > 0 && DepartmentState.departments.map((item, index) => (
                          <option key={index}>{item.department_name}</option>
                        ))

                      }
                    </select>
                  </div>
                  <div className=" col-md-4 ">
                    <label className="form-label fs-s fw-medium txt-color">
                      Report To
                    </label>
                    <select
                      class="form-select form-control  "
                      aria-label="Default select example"
                      placeholder="Report To*"
                      name="reportto"
                      id="reportto"
                      value={formData.reportto}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled selected> Enter Report To </option>
                      {
                        UsersDropDown && UsersDropDown.length > 0 ? UsersDropDown.map((item, index) => (
                          <option key={index}>{item.fullname}</option>
                        )) : null
                      }
                      {/* <option >Select Report</option>
                      <option >Report 1</option>
                      <option >Report 2</option> */}
                    </select>
                  </div>
                  <div className=" col-md-4 ">
                    <label className="form-label fs-s fw-medium txt-color">
                      Role
                    </label>
                    <select
                      class="form-select form-control  "
                      aria-label="Default select example"
                      placeholder="profile*"
                      name="profile"
                      id="profile"
                      value={formData.profile}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled selected> Enter Role </option>
                      {
                        RoleState?.roles && RoleState?.roles.length > 0 ? RoleState.roles.map((item, index) => (
                          <option key={index}>{item.role}</option>
                        )) : null
                      }

                    </select>
                  </div>
                  <div className=" col-md-4 ">
                    <label className="form-label fs-s fw-medium txt-color">
                      Branch
                    </label>
                    <select
                      class="form-select  form-control "
                      aria-label="Default select example"
                      placeholder="branch*"
                      name="branch"
                      id="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled selected> Enter Branch </option>
                      {
                        BranchState.branches && BranchState.branches.length > 0 && BranchState.branches.map((item) => (
                          <option >{item.branch_name}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
                <div className=" ">
                  <div className="d-flex justify-content-end">
                    <Button className={"btn_primary btn-label right"} icon={<FaArrowRight />}
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
}

export default CreateUserForm;
