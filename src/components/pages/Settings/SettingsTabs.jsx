import React from 'react';
import { Link } from "react-router-dom";
import "../../../assets/css/common/Settings.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaGift } from "react-icons/fa";
import Branch from "../../../images/setting_tabs_icons/Branch.svg";
import Roles from "../../../images/setting_tabs_icons/Roles.svg";
import courses from "../../../images/setting_tabs_icons/courses.svg";
import departments from "../../../images/setting_tabs_icons/departments.svg";
import fee from "../../../images/setting_tabs_icons/fee.svg";
import course from "../../../images/setting_tabs_icons/course.svg";
import sources from "../../../images/setting_tabs_icons/sources.svg";
import communications from "../../../images/setting_tabs_icons/communications.svg";
import oraganisation from "../../../images/setting_tabs_icons/oraganisation.svg";
import assests from "../../../images/setting_tabs_icons/assests.svg";
import forms from "../../../images/setting_tabs_icons/forms.svg";
import cc from "../../../images/setting_tabs_icons/cc.svg";

export const SettingsTabs = () => {

    const settingsData = [
        {
            name: "Roles",
            icon: Roles,
            link: "/roles"
        },
        {
            name: "Branch",
            icon:  Branch,
            link: "/branch"
        },
        {
            name: "Course Package",
            icon: course,
            link: "/coursepackage"
        },
        {
            name: "Courses",
            icon: courses,
            link: "/course"
        },
        {
            name: "Admission Fee",
            icon: fee,
            link: "/admissionfee"
        }, {
            name: "Departments",
            icon: departments,
            link: "/department"
        },
        {
            name: "Lead Sources",
            icon: sources,
            link: "/leadsource"
        },
        {
            name: "Communication",
            icon: communications,
            link: "/"
        },
        {
            name: "Add Vendor",
            icon: cc,
            link: "/addvendor"
        }, {
            name: "Add Assets Type",
            icon: assests,
            link: "/addassetstype"
        }, {
            name: "Forms",
            icon: forms,
            link: "/"
        }, {
            name: "Organization Profile",
            icon: oraganisation,
            link: "/organizationprofile"
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
                                    <div className='card card_animate'>
                                        <Link to={setting.link}>
                                        <div className="d-flex p-3 justify-content-between">
                                            <div>
                                                <span className="fs_20 fw-500">{setting.name}</span>
                                                <div className='mt-3 fs_14 lh-100 text_underline black_300'>
                                                    <p>Explore <FaArrowRight /></p>
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
                                        </Link>
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
