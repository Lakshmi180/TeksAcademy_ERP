import React, { useState } from "react";
import { useContext } from "react";
import { BranchContext } from "../../../../context/BranchContext/BranchContextProvider";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";

const CreateBranch = () => {

const {DispatchBranch,BranchState, getAllBranches}=useContext(BranchContext)

    
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
          console.log(user, "datawithtitilecase")

          try{
            const {data, status} = await axios.post(`${process.env.REACT_APP_API_URL}/addbranch`, user)
           

            if(status === 201){
                console.log(data, "hellobb")
                DispatchBranch({type:"CREATE_BRANCH", payload:data})
                getAllBranches();
            }

          }
          catch(error){
            console.log(error)
          }
        


        //   const data = await fetch(`${process.env.REACT_APP_API_URL}/addbranch`,{
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(user),
        //   })        
        // createBranch(user)



    }


    return (
        <div>
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
                                <div className=''>
                                    <button type="button" class="btn btn_primary waves-effect waves-light"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                    </div>
                                <div className=" ">
                                    <div className="d-flex justify-content-end">
                                        <button
                                            type="button"
                                            class="btn btn_primary waves-effect waves-light btn-label right fs_13"
                                        >
                                            Submit
                                            <span className="label-icon"><FaArrowRight /></span>
                                        </button>
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