import React, { useEffect, useState } from "react";
import "../../../assets/css/common/Sidemenu.css";
import { Link } from "react-router-dom";
import Table from "../design/Table";
import Card from "../design/Card";
import { Login } from "../../Auth/Login";
import Forms from "../design/Forms";
import Page from "../design/Page";
import Modal from "../design/Modal";
import Tab from "../design/Tab";
import Accordian from "../design/Accordian";

// icons start
import { CiSettings } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";
import { PiStudentFill } from "react-icons/pi";
import { RiRefund2Line } from "react-icons/ri";
import { MdOutlineInventory } from "react-icons/md";
import { AiOutlineFileAdd } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { TbMessageReport } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { ForgotPassword } from "../../Auth/ForgotPassword";
import { LockScreen } from "../../Auth/LockScreen";
import { ChangePassword } from "../../Auth/ChangePassword";
// icons end
export const Sidemenu = ({ isExpanded }) => {
    return (
        <div className='text-white'>
            <div className='wrapper'>
                <aside id='sidebar' className={`sidebar ${isExpanded ? 'expand' : ''}`}>
                    <div className='mt-3'>
                        <div className='text-center'>
                            <a href='#'>
                                <img src="https://www.admin.teksacademy.com/static/media/Teks-Logo-with-Trade.07d75f2c54a71180af08.png" className="img-fluid h-50 w-75" />
                            </a>
                        </div>
                    </div>
                    <ul className="sidebar-nav">
                        {/* Dashboard */}
                        <li className="sidebar-item">
                            <a href="#" className='sidebar-link'>
                                <LuLayoutDashboard className="main_icon" />
                                <span>Dashboard</span>
                            </a>
                        </li>
                        {/* User Management */}
                        <li className="sidebar-item">
                            <a href="#" className='sidebar-link has-dropdown collapsed' data-bs-toggle="collapse" data-bs-target="#user"
                                aria-expanded="false" aria-controls="user">
                                <FaRegUserCircle className="main_icon" />
                                <span>User Management</span>
                            </a>
                            <ul id='user' className='sidebar-dropdown list-unstyled collapse' data-bs-parent="#sidebar">

                                <li className='sidebar-item'>
                                    <a href="#" className="sidebar-link"><AiOutlineLine className="sub_icon" />Create User</a>
                                </li>
                                <li className='sidebar-item'>
                                    <a href="#" className="sidebar-link"><AiOutlineLine className="sub_icon" />User Details</a>
                                </li>
                            </ul>
                        </li>
                        {/* Student Management */}
                        <li className='sidebar-item'>
                            <a href="#" className="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#student"
                                aria-expanded="false" aria-controls="student">
                                <PiStudentFill className="main_icon" />
                                <span>Student Management</span>
                            </a>
                            <ul id='student' className='sidebar-dropdown list-unstyled collapse' data-bs-parent="#sidebar">
                                <li className='sidebar-item'>
                                    <a href='' className='sidebar-link'><AiOutlineLine className="sub_icon" />Registration Form</a>
                                </li>
                                <li className='sidebar-item'>
                                    <a href='' className='sidebar-link'><AiOutlineLine className="sub_icon" />Enrolled Students</a>
                                </li>
                                <li className='sidebar-item'>
                                    <a href='' className='sidebar-link'><AiOutlineLine className="sub_icon" />Fee Details</a>
                                </li>
                                <li className='sidebar-item'>
                                    <a href='' className='sidebar-link'><AiOutlineLine className="sub_icon" />Certificate</a>
                                </li>
                                <li className='sidebar-item'>
                                    <a href='' className='sidebar-link'><AiOutlineLine className="sub_icon" />Requested Certificate</a>
                                </li>
                                <li className='sidebar-item'>
                                    <a href="#" className="sidebar-link has-dropdown collapsed " data-bs-toggle="collapse" data-bs-target="#refund"
                                        aria-expanded="false" aria-controls="refund">
                                        <RiRefund2Line className="main_icon" />
                                        Refund
                                    </a>
                                    <ul id='refund' className='sidebar-dropdown list-unstyled collapse'>
                                        <li className='sidebar-item'>
                                            <a href='' className='sidebar-link'><AiOutlineLine className="sub_icon" />Refund Form</a>
                                        </li>
                                        <li className='sidebar-item'>
                                            <a href='' className='sidebar-link'><AiOutlineLine className="sub_icon" />Refund Data</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        {/* Inventory */}
                        <li className='sidebar-item'>
                            <a href="#" className="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#inventory"
                                aria-expanded="false" aria-controls="inventory">
                                <MdOutlineInventory className="main_icon" />
                                <span>Inventory</span>
                            </a>
                            <ul id='inventory' className='sidebar-dropdown list-unstyled collapse' data-bs-parent="#sidebar">
                                <li className='sidebar-item'>
                                    <a href='' className='sidebar-link'><AiOutlineLine className="sub_icon" />Add Assets</a>
                                </li>
                                <li className='sidebar-item'>
                                    <a href='' className='sidebar-link'><AiOutlineLine className="sub_icon" />Assign Assets</a>
                                </li>
                                <li className='sidebar-item'>
                                    <a href="#" className="sidebar-link has-dropdown collapsed " data-bs-toggle="collapse" data-bs-target="#setting"
                                        aria-expanded="false" aria-controls="setting">
                                        <PiStudentFill className="main_icon" />
                                        Settings
                                    </a>
                                    <ul id='setting' className='sidebar-dropdown list-unstyled collapse'>
                                        <li className='sidebar-item'>
                                            <a href='' className='sidebar-link'><AiOutlineLine className="sub_icon" />Add Assets Type</a>
                                        </li>
                                        <li className='sidebar-item'>
                                            <a href='' className='sidebar-link'><AiOutlineLine className="sub_icon" />Add Vendor</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        {/* Leads */}
                        <li className='sidebar-item'>
                            <a href="#" className="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#leads"
                                aria-expanded="false" aria-controls="leads">
                                <AiOutlineFileAdd className="main_icon" />
                                <span>Leads</span>
                            </a>
                            <ul id='leads' className='sidebar-dropdown list-unstyled collapse' data-bs-parent="#sidebar">
                                <li className='sidebar-item'>
                                    <a href="#" className="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#websiteleads"
                                        aria-expanded="false" aria-controls="websiteleads">
                                        <CgWebsite className="main_icon" />
                                        <span>Website Leads</span>
                                    </a>
                                    <ul id='websiteleads' className='sidebar-dropdown list-unstyled collapse '>
                                        <li className='sidebar-item'>
                                            <a href='' className='sidebar-link'><AiOutlineLine className="sub_icon" />Webinar</a>
                                        </li>
                                        <li className='sidebar-item'>
                                            <a href='' className='sidebar-link'><AiOutlineLine className="sub_icon" />WhatsApp</a>
                                        </li>
                                        <li className='sidebar-item'>
                                            <a href='' className='sidebar-link'><AiOutlineLine className="sub_icon" />Download Syllabus</a>
                                        </li>
                                        <li className='sidebar-item'>
                                            <a href='' className='sidebar-link'><AiOutlineLine className="sub_icon" />View Course</a>
                                        </li>
                                        <li className='sidebar-item'>
                                            <a href='' className='sidebar-link'><AiOutlineLine className="sub_icon" />Contact Us</a>
                                        </li>
                                        <li className='sidebar-item'>
                                            <a href='' className='sidebar-link'><AiOutlineLine className="sub_icon" />Hlp Enquire Leads</a>
                                        </li>
                                        <li className='sidebar-item'>
                                            <a href='' className='sidebar-link'><AiOutlineLine className="sub_icon" />Slp Enquire Leads</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        {/* Reports */}
                        <li className="sidebar-item">
                            <a href="#" className='sidebar-link has-dropdown collapsed' data-bs-toggle="collapse" data-bs-target="#reports"
                                aria-expanded="false" aria-controls="reports">
                                <TbMessageReport className="main_icon" />
                                <span>Reports</span>
                            </a>
                            <ul id='reports' className='sidebar-dropdown list-unstyled collapse' data-bs-parent="#sidebar">
                                <li className='sidebar-item'>
                                    <a href="#" className="sidebar-link"><AiOutlineLine className="sub_icon" />Reports Data</a>
                                </li>
                            </ul>
                        </li>
                        {/* Settings */}
                        <li className="sidebar-item">
                            <a href="#" className='sidebar-link'>
                                <CiSettings className="main_icon" />
                                <span>Settings</span>
                            </a>
                        </li>
                        <li className="sidebar-item mb-2">
                            <a href="#" className='sidebar-link has-dropdown collapsed' data-bs-toggle="collapse" data-bs-target="#design"
                                aria-expanded="false" aria-controls="design">
                                <TbMessageReport className="main_icon" />
                                <span>Design</span>
                            </a>
                            <ul
                                id="design"
                                className="sidebar-dropdown list-unstyled collapse"
                                data-bs-parent="#sidebar"
                            >
                                <li className="sidebar-item">
                                    <Link to="/table" className="sidebar-link">
                                        <AiOutlineLine className="sub_icon" />Table
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link to="/card" className="sidebar-link">
                                        <AiOutlineLine className="sub_icon" />Card
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link to="/forms" className="sidebar-link">
                                        <AiOutlineLine className="sub_icon" />Forms
                                    </Link>
                                </li>

                                <li className="sidebar-item">
                                    <Link to="/whatsapp" className="sidebar-link">
                                        <AiOutlineLine className="sub_icon" />Whatsapp Chat
                                    </Link>
                                </li>

                                <li className="sidebar-item">
                                    <Link to="/accordian" className="sidebar-link">
                                        <AiOutlineLine className="sub_icon" />Accordions
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link to="/tabs" className="sidebar-link">
                                        <AiOutlineLine className="sub_icon" />Tabs
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link to="/modal" className="sidebar-link">
                                        <AiOutlineLine className="sub_icon" />Modal
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link to="/page" className="sidebar-link">
                                        <AiOutlineLine className="sub_icon" />Page
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link to="/button" className="sidebar-link">
                                        <AiOutlineLine className="sub_icon" />Button
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link to="/button" className="sidebar-link">
                                        <AiOutlineLine className="sub_icon" />Button
                                    </Link>
                                </li>
                            </ul>

                        </li>
                    </ul>

                    {/* <div className='sidebar-footer'>
                        <a href="" className="sidebar-link">
                            <span>logout</span>
                        </a>
                    </div> */}
                </aside>


            </div>
        </div>
    );
};
