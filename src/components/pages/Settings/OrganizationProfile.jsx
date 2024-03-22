import React from 'react'
import "./OrganizationProfile.css"
import profilebgimg from "../../../images/web-images 1.png"
import { FaCamera } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
import { IoMdAdd } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaDribbble } from "react-icons/fa6";
import { ImPinterest2 } from "react-icons/im";
function OrganizationProfile()
{
  return (
    <div>
        <div className='container-fluid'>
            <div className=' '>
                <div className='profile-wid-bg profile-setting-img '>
                    <img src={profilebgimg} className='profile-wid-img ' alt="" />

                    {/* <div class="overlay-content">
                                <div class="text-end p-3">
                                    <div class="p-0 ms-auto rounded-circle profile-photo-edit">
                                        <input id="profile-foreground-img-file-input" type="file" class="profile-foreground-img-file-input"/>
                                        <label for="profile-foreground-img-file-input" class="profile-photo-edit btn btn-light">
                                            <i class="ri-image-edit-line align-bottom me-1"></i> Change Cover
                                        </label>
                                    </div>
                                </div>
                            </div> */}
                </div>
            
            </div> 


            <div className='row ' >
              
                <div className='col-lg-3 col-xl-3 col-md-3 col-lg-3 col-sm-3 profile-img-card m-2' >
                    <div className='card mt-n5 d-flex '>
                        <div className='card-body p-4'>
                            <div className='text-center'>
                                <div className='position-relative d-inline-block mx-auto mb-4'>
                                    <img src="	https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg" alt="" className='rounded-circle avatar-xl img-thumbnail user-profile-image'/>
                                    <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                                                <input id="profile-img-file-input" type="file" className="profile-img-file-input"/>
                                                <label for="profile-img-file-input" className="profile-photo-edit avatar-xs">
                                                    <span className="avatar-title rounded-circle bg-light text-body">
                                                    <FaCamera />
                                                    </span>
                                                </label>
                                            </div>
                                </div>
                                <h5 className="fs-16 ">Anna Adame</h5>
                                <p className="text-mute fs-14  mb-0">Lead Designer / Developer</p>

                            </div>
                        </div>
                    </div>
                    <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-5">
                                        <div className="flex-grow-1">
                                            <h5 className="card-title mb-0 ">Complete Your Profile</h5>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <a href="javascript:void(0);" class="badge bg-light text-primary fs-12"><TiEdit className='align-bottom me-1' /> Edit</a>
                                        </div>
                                    </div>
                                    <div className="progress animated-progress custom-progress progress-label">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width:"30%", ariaValuenow:"30", ariaValuemin:"0", ariaValuemax:"100"}}>
                                            <div class="label">30%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card-body">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="flex-grow-1">
                                            <h5 className="card-title mb-0">Portfolio</h5>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <a href="javascript:void(0);" className="badge bg-light text-primary fs-12"><IoMdAdd /> Add</a>
                                        </div>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-18 bg-body text-body">
                                            <FaGithub />
                                            </span>
                                        </div>
                                        <input type="email" className="form-control" id="gitUsername" placeholder="Username" value="@daveadame"/>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-18 bg-primary">
                                                <CiGlobe />
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" id="websiteInput" placeholder="www.example.com" value="www.velzon.com"/>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-18 bg-success">
                                                < FaDribbble />
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" id="dribbleName" placeholder="Username" value="@dave_adame"/>
                                    </div>
                                    <div className="d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-18 bg-danger">
                                            <ImPinterest2 />
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" id="pinterestName" placeholder="Username" value="Advance Dave"/>
                                    </div>
                                </div>
                </div>
                {/* <div className='col-lg-9 col-md-9 col-xl-9 col-lg-9 '>

                    <div className='card'>
                    <div class="card-header">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
  </li>
</ul>
                                </div>

                    </div>

                </div> */}
             
            </div>
        </div>

    </div>
  )
}





export default OrganizationProfile