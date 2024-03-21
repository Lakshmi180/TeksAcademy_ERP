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
import { useNavigate, useParams } from "react-router";
function CreateUserForm() {
  const { DispatchBranch, BranchState, getAllBranches } = useBranchContext();
  const { DispatchDepartment, DepartmentState, getAllDeparments } = useDepartmentContext();
  const { RoleState, createRole } = useRoleContext();
  const { UsersState, getAllUsers,DispatchUsers } = useUserContext();

  const navigate = useNavigate();
  const { id } = useParams();


  console.log(UsersState, "showusersatevvf")

  const [UsersDropDown, setUsersDropDown] = useState();

  useEffect(() => {
    if (UsersState.TotalUsers) {
      const filteredUsers = UsersState.TotalUsers.filter(user =>{
        return user.profile && user.profile.toLowerCase() !== "counsellor";
      })

      setUsersDropDown(filteredUsers)
    }
  }, [UsersState?.TotalUsers])


  // useEffect(() => {
  //   if (id) {
  //     const filtereduserid = UsersState.TotalUsers.find(user => user.user_id === id)
  //     console.log(filtereduserid, "dbjudsvhjvjfv")
  //     setFormData(filtereduserid)
  //   }
  // }, [id]);



//   useEffect(() => {
//     if (id && UsersState.TotalUsers.length > 0) {
      
//       id = parseInt(id);
//         const filteredUser = UsersState.TotalUsers.find(user => user.id === id);
//         console.log(filteredUser, "FilteredUser");
//         if (filteredUser) {
//             console.log(filteredUser, "FilteredUser"); 
//             setFormData(filteredUser);
//         } else {  
//             console.log("No user found with the id:", id); 
//         }
//     }

// }, [id]);

useEffect(() => {
  console.log(id,"getuserdata")
  if (id) {
    // Fetch course details for editing
    axios.get(`${process.env.REACT_APP_API_URL}/userdata/${id}`)
      .then(response => {
        setFormData(response.data);
          console.log(response.data, "userresponceid");
      })
      .catch(error => {
        console.error("Error fetching course details:", error);
      });
  }
}, [id]);




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


   if(!id){
    try {
      const { data, status } = await toast.promise(axios.post(`${process.env.REACT_APP_API_URL}/createUser`, user), {
          loading: "Loading...",
          success: "User created Successfully",
          error: "User not Created"
        })

      if (status === 201) {
        console.log(data, "hellobb")
        getAllUsers();
        DispatchUsers({type:"CREATE_USER", payload:data})
        getAllUsers();
        navigate("/userdata")
        
      }
    }
    catch (error) {
      console.log(error)
    }

   }
    

   
      
    

  if(id){
    try {
      const { data, status } = await
        toast.promise(axios.put(`${process.env.REACT_APP_API_URL}/updateuser/${id}`, user), {
          loading: "Loading...",
          success: "User created Successfully",
          error: "User not Created"
        })

      if (status === 200) {
        getAllUsers();
        navigate("/userdata")
        DispatchUsers({type:"CREATE_USER", payload:data})
      }
    }
    catch (error) {
      console.log(error)
    }
  }  
     
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="card border-0">
          <div className="align-items-center">
            <h5 className="mt-4 fs-16 black_color ms-3">
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
                        className="form-label fs-s fw-medium black_color"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control fs-s bg-form black_color"
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
                        className="form-label fs-s fw-medium black_color"
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
                        className="form-label fs-s fw-medium black_color"
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
                        className="form-label fs-s fw-medium black_color"
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
                    <label className="form-label fs-s fw-medium black_color">
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
                    <label className="form-label fs-s fw-medium black_color">
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
                    <label className="form-label fs-s fw-medium black_color">
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
                        RoleState?.roles && RoleState?.roles.length > 0 && RoleState.roles.map((item, index) => (
                          <option key={index} value={item.role}>{item.role}</option>
                        )) 
                      }

                    </select>
                  </div>
                  <div className=" col-md-4 ">
                    <label className="form-label fs-s fw-medium black_color">
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
