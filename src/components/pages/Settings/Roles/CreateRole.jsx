import React, { useContext, useState } from 'react'
import { RoleContext } from '../../../../context/RoleContext/RoleContextProvider'



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
      <div className="card  border-0 p-2">
        <h6>Create Role</h6>
        <div class="row gy-4 ">
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
                  id="example-text-input"
                  name="roleDescription"
                  value={fromData.roleDescription}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className=''>
            <button type="button" class="btn btn_primary waves-effect waves-light"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
