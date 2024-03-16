

import axios from "axios";
import React, { useContext, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import { CoursePackageContext } from "../../../../context/coursePackageContext/CoursePackageContext";
import { Navigate, useNavigate } from "react-router-dom";

import Button from "../../../common/design/Button";
import { useCoursePackage } from "../../../../hooks/useCoursePackage";
const CreateCoursePackage=()=>{

const {coursePackageState,getAllCoursePackages, DispatchCourseState}=useCoursePackage();
const navigate = useNavigate();
    const [formdata, setformdata]= useState({
        coursepackages_name:"",
    });

    const handlechange=(e)=>{
        setformdata((prev)=>{
            return {
             ...prev,
                coursepackages_name:e.target.value
            }
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let user={
            coursepackages_name: formdata.coursepackages_name,
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
            toast.promise(axios.post(`${process.env.REACT_APP_API_URL}/addcoursespackages`,  user),{
                loading: "Loading...",
                success: "CoursePackage created Successfully",
                error: "CoursePackage not Created"
            })
            if(status === 201){
                DispatchCourseState({type:"CREATE_COURSE_PACKAGE", payload:data})
                getAllCoursePackages()
                navigate("/coursepackage")
                
            }
          }
          catch(error){
            console.log(error)
          }
    }




    return(
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-5">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="fs-16 txt-color">Create Course Package</h5>
                        </div>
                        <div className="card-body">
                            <form>
                                <div class="mb-3">
                                    <label
                                        for="firstNameinput"
                                        className="form-label fs-s fw-medium txt-color"
                                    >
                                        Package Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control fs-s bg-form txt-color"
                                        placeholder="Enter Package Name"
                                        id="firstNameinput"
                                        value={formdata.coursepackages_name}
                                        onChange={handlechange}
                                    />
                                </div>
                                <div className=" ">
                                    <div className="d-flex justify-content-end">
                                        <Button className={"btn_primary btn-label right"} icon={<FaArrowRight />} onClick={handleSubmit}>
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
export default CreateCoursePackage;