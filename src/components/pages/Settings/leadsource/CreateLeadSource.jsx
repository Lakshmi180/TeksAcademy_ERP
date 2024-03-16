import React, { useContext, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../common/design/Button";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LeadSourceContext } from '../../../../context/leadSourceContext/LeadSourceContext';
import { useLeadSourceContext } from '../../../../hooks/useLeadSourceContext';
const CreateLeadSource = () => {

    const {leadSourceState,DispatchLeadSource,getAllLeadSource}=useLeadSourceContext();
    const navigate= useNavigate()
    const [formData, setFormData] = useState({
        leadsource: "",
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
            leadsource: formData.leadsource,
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

          

          console.log(user, "leaduser")
    //    let   updateduser = JSON.stringify(user)
    //     console.log(updateduser, "datawithtitilecase")

          try{
            const {data, status} = await 
            toast.promise(axios.post(`${process.env.REACT_APP_API_URL}/addleadsource`,  user),{
                loading: "Loading...",
                success: "LeadSource created Successfully",
                error: "LeadSource not Created"
            })

            console.log(status,data, "dkjbfjbvfv")
            if(status === 201){
                DispatchLeadSource({type:"CREATE_LEAD_SOURCE", payload:data})
                getAllLeadSource();
                navigate("/leadsource")
            }
          }
          catch(error){
            console.log(error)
          }
    }
  return (
    <div className='container'>
          <div className="row d-flex justify-content-center">
              <div className="col-lg-5">
                  <div className="card">
                      <div className="card-header">
                          <h5 className="fs-16 txt-color">Create Lead Source</h5>
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
                                  />
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

export default CreateLeadSource;
