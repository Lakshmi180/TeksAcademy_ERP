import React, { useContext, useState } from 'react'
import { RoleContext } from '../../../../context/RoleContext/RoleContextProvider'
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../common/design/Button";
export const CreateRole = () => {

  const{RoleState, createRole}=useContext(RoleContext)
  console.log(RoleState, "RoleState")

  const [fromData, setFormData] = useState({
    role: "",
    roleDescription: "",
  })




  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let user = {
      role: fromData.role,
      roleDescription: fromData.roleDescription,
    }

   
    user=[user]
   
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

    user =dataWithTitleCase[0];

   console.log(user, "datawithtitilecase")

   createRole(user);

  }

  return (
    <div className='container'>
      <div className="card">
        <div className="card-header">
          <h5 className="fs-16 txt-color">Create Role</h5>
        </div>
        <div className="card-body">
        <div class="row">
          <div class="col-xxl-3 col-md-6">
            <div>
              <div className="form-group text-start">
                <label
                  className="form-label fs-s "
                  for="example-text-input"
                >
                  Role Name
                </label>
                <input
                  class="form-control"
                    type="text"
                    placeholder='Enter Role Name'
                  id="example-text-input"
                  name="role"
                  value={fromData.role}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-md-6">
            <div>
              <div class="form-group text-start">
                <label class="form-label fs-s" for="example-text-input ">
                  Role Description
                </label>
                <input
                  class="form-control"
                    type="text"
                    placeholder='Enter Role Discription'
                  id="example-text-input"
                  name="roleDescription"
                  value={fromData.roleDescription}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="d-flex justify-content-end">
                <Button className={"btn_primary btn-label right"} icon={<FaArrowRight />} >
                  Submit
                </Button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
