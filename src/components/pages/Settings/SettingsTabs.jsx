import React from 'react';
import { Link } from "react-router-dom";
import "../../../assets/css/common/Settings.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaGift } from "react-icons/fa";

export const SettingsTabs = () => {

    const settingsData = [
        {
            name: "Roles",
            icon: "https://themesbrand.com/velzon/html/default/assets/images/user-illustarator-1.png",
            link: "/roles"
        },
        {
            name: "Branch",
            icon: "https://themesbrand.com/velzon/html/default/assets/images/user-illustarator-1.png",
            link: "/branch"
        },
        {
            name: "Course Package",
            icon: "https://themesbrand.com/velzon/html/default/assets/images/user-illustarator-1.png",
            link: "/coursepackage"
        },
        {
            name: "Courses",
            icon: "https://themesbrand.com/velzon/html/default/assets/images/user-illustarator-1.png",
            link: "/course"
        },
        {
            name: "Admission Fee",
            icon: "https://themesbrand.com/velzon/html/default/assets/images/user-illustarator-1.png",
            link: "/admissionfee"
        }, {
            name: "Departments",
            icon: "https://themesbrand.com/velzon/html/default/assets/images/user-illustarator-1.png",
            link: "/department"
        },
        {
            name: "Lead Sources",
            icon: "https://themesbrand.com/velzon/html/default/assets/images/user-illustarator-1.png",
            link: "/leadsource"
        },
        {
            name: "Communication",
            icon: "https://themesbrand.com/velzon/html/default/assets/images/user-illustarator-1.png",
            link: "/"
        },
        {
            name: "Add Vendor",
            icon: "https://themesbrand.com/velzon/html/default/assets/images/user-illustarator-1.png",
            link: "/addvendor"
        }, {
            name: "Add Assets Type",
            icon: "https://themesbrand.com/velzon/html/default/assets/images/user-illustarator-1.png",
            link: "/addassetstype"
        }, {
            name: "Forms",
            icon: "https://themesbrand.com/velzon/html/default/assets/images/user-illustarator-1.png",
            link: "/"
        }, {
            name: "Organization Profile",
            icon: "https://themesbrand.com/velzon/html/default/assets/images/user-illustarator-1.png",
            link: "/"
        },
    ]

    return (
        <div>
            <div className="container-fluid">
                <h6 className='py-2'>Settings</h6>
                <div className="row">
                    {
                        settingsData.map((setting, index) => {
                            return (
                                <div key={index} className="col-lg-3 col-sm-6">
                                    <div className='card'>
                                        <div className="d-flex p-3 justify-content-between">
                                            <div>
                                                <span className="fs_20 fw-500">{setting.name}</span>
                                                <div className='mt-3 fs_14 lh-100 text_underline black_300'>
                                                    <Link to={setting.link}>Explore <FaArrowRight /></Link>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <div className="avatar-md me-3">
                                                    <span className="avatar-title bg-danger-subtle rounded-circle fs-1">
                                                        <img src={setting.icon} className='img-fluid' width="100px" height="100px" alt="" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default SettingsTabs;
