import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { BranchContext } from "../../../../context/branchContext/BranchContextProvider";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

import Button from "../../../common/design/Button";
const CreateBranch = () => {

const {DispatchBranch,BranchState, getAllBranches}=useContext(BranchContext)

    const navigate= useNavigate()
    const [formData, setFormData] = useState({
        branch: "",
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
            branch_name: formData.branch,
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

          

    //    let   updateduser = JSON.stringify(user)
    //     console.log(updateduser, "datawithtitilecase")


          try{
            const {data, status} = await 
            toast.promise(axios.post(`${process.env.REACT_APP_API_URL}/addbranch`,  user),{
                loading: "Loading...",
                success: "Branch created Successfully",
                error: "Branch not Created"
            })
            if(status === 201){
                console.log(data, "hellobb")
                DispatchBranch({type:"CREATE_BRANCH", payload:data})
                getAllBranches();
                navigate("/branch")
            }
          }
          catch(error){
            console.log(error)
          }
    }


    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-5">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="fs-16 txt-color">Create Branch</h5>
                        </div>
                        <div className="card-body">
                            <form>
                                <div class="mb-3">
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
                                        name="branch"
                                        onChange={handlechange}
                                    />
                                </div>
                                   
                                <div className=" ">
                                    <div className="d-flex justify-content-end">
                                        <Button className={"btn_primary btn-label right"} onClick={handleSubmit}  icon={<FaArrowRight />} >
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
    )

}
export default CreateBranch;