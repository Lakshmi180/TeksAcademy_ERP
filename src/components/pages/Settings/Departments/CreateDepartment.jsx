import axios from 'axios';
import React, { useContext, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { toast } from 'react-toastify';
import { DepartmentContext } from '../../../../context/deparmentContext/DepartmentContextProvider';
import { useNavigate } from 'react-router-dom';
import Button from "../../../common/design/Button";
import { useDepartmentContext } from '../../../../hooks/useDepartmentContext';
function CreateDepartment() {
  const navigate = useNavigate();

  const {DispatchDepartment,DepartmentState, getAllDeparments}=useDepartmentContext();

  const [formData, setFormData] = useState({
    department: "",
  });

  const handlechange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    let user={
      department_name: formData.department,
    }
    user=[user];
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
      user=dataWithTitleCase[0];
      


      try{
        const {data, status} = await 
        toast.promise(axios.post(`${process.env.REACT_APP_API_URL}/adddepartment`, user),{
            loading: "Loading...",
            success: "department created Successfully",
            error: "department not Created"
        })

        if(status === 201){
            console.log(data, "hellobb")
            DispatchDepartment({type:"CREATE_DEPARTMENT", payload:data})
            getAllDeparments();
            navigate("/department")
        }
      }
      catch(error){
        console.log(error)
      }
}

  return (
    <div>
      <div className='container'>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5">
            <div className="card">
              <div className="card-header">
                <h5>Create Department</h5>
              </div>
              <div className="card-body">
                <form>
                  <div class="mb-3">
                    <label
                      for="firstNameinput"
                      className="form-label fs-s fw-medium txt-color"
                    >
                      Department Name
                    </label>
                    <input
                      type="text"
                      className="form-control fs-s bg-form txt-color"
                      placeholder="Enter Department Name"
                      id="firstNameinput"
                      name="department"
                      vaule={formData.department}
                      onChange={handlechange}
                    />
                  </div>
                  <div className=" ">
                    <div className="d-flex justify-content-end">
                      <Button className={"btn_primary btn-label right"}  onClick={handleSubmit} icon={<FaArrowRight />} >
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
  )
}

export default CreateDepartment;