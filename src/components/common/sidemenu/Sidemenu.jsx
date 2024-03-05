import React, { useEffect, useState } from "react";
import { MdDashboard, MdLeaderboard } from "react-icons/md";
import { FaUsers, FaWarehouse } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { FaRupeeSign } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { TbReportAnalytics } from "react-icons/tb";
import { FcBriefcase } from "react-icons/fc";
import "../../../assets/css/common/Sidemenu.css";
import { Topbar } from "../topbar/Topbar";
export const Sidemenu = () => {
    const [open, setOpen] = useState(true);
    const width = window.innerWidth;

    const handleToggle = () => {
        // document.querySelector("#sidebar").classList?.toggle("collapsed");
        // setOpen(!open);
    };

    useEffect(() => {
        if (width < 726) {
            setOpen(!open);
        }
    }, []);

    return (
        <div className="wrapper">
            <aside
                id="sidebar"
                className={`${open ? "sidebar show" : "sidebar hide "}`}
            >
                <div className="h-100">
                    {open ? (
                        <div className="sidebar-logo text-center">
                            <a href="#">Teks Academy</a>
                        </div>
                    ) : (
                        <div className="sidebar-logo text-center">
                            <a href="#">
                                <FcBriefcase
                                    className={open ? "sidebar-icons" : "sidebar-icons big"}
                                />{" "}
                            </a>
                        </div>
                    )}
                    <ul className="sidebar-nav">
                        <li className="sidebar-item mb-2">
                            <a
                                href="#"
                                className={
                                    open
                                        ? "sidebar-link d-flex gap-2 align-items-center"
                                        : "sidebar-link hide-after d-flex gap-2 align-items-center"
                                }
                            >
                                <MdDashboard
                                    className={open ? "sidebar-icons" : "sidebar-icons big"}
                                />
                                {open && `Dashboard`}
                            </a>
                        </li>
                        <li className="sidebar-item mb-2">
                            <a
                                href="#"
                                className={
                                    open
                                        ? "sidebar-link d-flex gap-2 align-items-center"
                                        : "sidebar-link hide-after d-flex gap-2 align-items-center"
                                }
                                data-bs-target="#pages"
                                data-bs-toggle="collapse"
                                aria-expanded="false"
                            >
                                <FaUsers
                                    className={open ? "sidebar-icons" : "sidebar-icons big"}
                                />
                                {open && `User Management`}
                            </a>
                            <ul
                                id="pages"
                                className="sidebar-dropdown list-unstyled collapse"
                                data-bs-parent="#sidebar"
                            >
                                <li className="sidebar-item">
                                    <a href="#" className="sidebar-link">
                                        - Create User
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="#" className="sidebar-link">
                                        - User Details
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item mb-2">
                            <a
                                href="#"
                                className={
                                    open
                                        ? "sidebar-link d-flex gap-2 align-items-center"
                                        : "sidebar-link hide-after d-flex gap-2 align-items-center"
                                }
                                data-bs-target="#posts"
                                data-bs-toggle="collapse"
                                aria-expanded="false"
                            >
                                <PiStudentFill
                                    className={open ? "sidebar-icons" : "sidebar-icons big"}
                                />
                                {open && `Student Management`}
                            </a>
                            <ul
                                id="posts"
                                className="sidebar-dropdown list-unstyled collapse"
                                data-bs-parent="#sidebar"
                            >
                                <li className="sidebar-item">
                                    <a href="#" className="sidebar-link">
                                        - Registration Form
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="#" className="sidebar-link">
                                        - Enrolled Students
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="#" className="sidebar-link">
                                        - Fee Details
                                    </a>
                                </li>

                                <li className="sidebar-item">
                                    <a href="#" className="sidebar-link">
                                        - Certificate
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="#" className="sidebar-link">
                                        - Requested Certificate
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a
                                        href="#"
                                        className="sidebar-link collapsed d-flex align-items-center gap-2"
                                        data-bs-target="#refund"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                    >
                                        <FaRupeeSign />
                                        Refund
                                    </a>

                                    <ul
                                        id="refund"
                                        className="sidebar-dropdown list-unstyled collapse"
                                        data-bs-parent="#sidebar"
                                    >
                                        <li className="sidebar-item">
                                            <a href="#" className="sidebar-link">
                                                - Refund Form
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="#" className="sidebar-link">
                                                - Refund Data
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item mb-2">
                            <a
                                href="#"
                                className={
                                    open
                                        ? "sidebar-link d-flex gap-2 align-items-center"
                                        : "sidebar-link hide-after d-flex gap-2 align-items-center"
                                }
                                data-bs-target="#auth"
                                data-bs-toggle="collapse"
                                aria-expanded="false"
                            >
                                <FaWarehouse
                                    className={open ? "sidebar-icons" : "sidebar-icons big"}
                                />
                                {open && `Inventory`}
                            </a>
                            <ul
                                id="auth"
                                className="sidebar-dropdown list-unstyled collapse"
                                data-bs-parent="#sidebar"
                            >
                                <li className="sidebar-item">
                                    <a href="#" className="sidebar-link">
                                        - Add Assets
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="#" className="sidebar-link">
                                        - Assign Assets
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="#" className="sidebar-link">
                                        - Settings
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item mb-2">
                            <a
                                href="#"
                                className={
                                    open
                                        ? "sidebar-link d-flex gap-2 align-items-center"
                                        : "sidebar-link hide-after d-flex gap-2 align-items-center"
                                }
                                data-bs-target="#multi"
                                data-bs-toggle="collapse"
                                aria-expanded="false"
                            >
                                <MdLeaderboard
                                    className={open ? "sidebar-icons" : "sidebar-icons big"}
                                />
                                {open && `Leads`}
                            </a>
                            <ul
                                id="multi"
                                className="sidebar-dropdown list-unstyled collapse"
                                data-bs-parent="#sidebar"
                            >
                                <li className="sidebar-item">
                                    <a
                                        href="#"
                                        className="sidebar-link collapsed d-flex gap-2 align-items-center"
                                        data-bs-target="#level-1"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                    >
                                        <CgWebsite />
                                        Website Leads
                                    </a>
                                    <ul
                                        id="level-1"
                                        className="sidebar-dropdown list-unstyled collapse"
                                    >
                                        <li className="sidebar-item">
                                            <a href="#" className="sidebar-link">
                                                - Webinar
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="#" className="sidebar-link">
                                                - WhatsApp
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="#" className="sidebar-link">
                                                - Download Syllabus
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="#" className="sidebar-link">
                                                - View Course
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="#" className="sidebar-link">
                                                - Contact Us
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="#" className="sidebar-link">
                                                - HLP Enquiry Leads
                                            </a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="#" className="sidebar-link">
                                                - SLP Enquiry Leads
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="sidebar-item mb-2">
                            <a
                                href="#"
                                className={
                                    open
                                        ? "sidebar-link d-flex gap-2 align-items-center"
                                        : "sidebar-link hide-after d-flex gap-2 align-items-center"
                                }
                                data-bs-target="#reports"
                                data-bs-toggle="collapse"
                                aria-expanded="false"
                            >
                                <TbReportAnalytics
                                    className={open ? "sidebar-icons" : "sidebar-icons big"}
                                />
                                {open && `Reports`}
                            </a>
                            <ul
                                id="reports"
                                className="sidebar-dropdown list-unstyled collapse"
                                data-bs-parent="#sidebar"
                            >
                                <li className="sidebar-item">
                                    <a href="#" className="sidebar-link">
                                        - Report Data
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="main">
                {/* <nav className="navbar navbar-expand px-3 border-bottom">
                    <button
                        className="btn"
                        id="sidebar-toggle"
                        type="button"
                        // onClick={handleToggle}
                        onClick={() => setOpen(!open)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    className="nav-icon pe-md-0"
                                >
                                    <img
                                        src="image/profile.jpg"
                                        className="avatar img-fluid rounded"
                                        alt=""
                                    />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="#" className="dropdown-item">
                                        Profile
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        Setting
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        Logout
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav> */}
                <Topbar open={open} setOpen={setOpen} />
            </div>
        </div>
    );
};
