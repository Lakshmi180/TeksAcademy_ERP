import React, { useContext, useState } from "react";
import { MdFullscreen } from "react-icons/md";
import { IoMdNotificationsOutline, IoIosSettings } from "react-icons/io";

import { CgMenuLeft } from "react-icons/cg";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { HiUserCircle, HiOutlineLogout } from "react-icons/hi";
import { FaLock } from "react-icons/fa";

import "../../../assets/css/common/Topbar.css";
import { Button } from "../design/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext/AuthContextProvider";

export const Topbar = ({ setOpen, open }) => {
const {userLogout,LockTheScreen}= useContext(AuthContext)

    const [isDropdownActive, setIsDropdownActive] = useState(false);
   

    const dropdownHandler = () => {
        setIsDropdownActive((dropdown) => !dropdown);
    };

    return (
        <div className="">
            <nav className="navbar-header">
                <div className="d-flex justify-content-between">
                    {/* left */}
                    <div>
                        <button
                            className="btn"
                            id="sidebar-toggle "
                            type="button"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? (
                                <CgMenuLeft className="icons" />
                            ) : (
                                <GoArrowRight className="icons" />
                            )}
                        </button>
                    </div>
                    {/* Right */}
                    <div className="">
                        <div className="d-flex gap-4 align-items-center">
                            <div className="nav-item">
                                <MdFullscreen className="icons" />
                            </div>

                            <div className="nav-item">
                                <MdOutlineDarkMode className="icons" />
                            </div>
                            <div className="nav-item">
                                <IoMdNotificationsOutline className="icons" />
                            </div>

                            <div
                                className="profile-item nav-item dropdown nav-icon pe-md-0 d-flex gap-2 align-items-center"
                                href="#"
                                onClick={dropdownHandler}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                                    className="avatar img-fluid "
                                    alt="User Avatar"
                                />

                                <div className="details d-flex flex-column position-relative">
                                    <span className="navbar_username">John Doe</span>
                                    <span className="navbar_userrole">Admin</span>
                                </div>
                                {isDropdownActive && (
                                    <div
                                        className={
                                            isDropdownActive ? "dropdown-card show" : "dropdown-card"
                                        }
                                    >
                                        <div id="emailHelp" class="form-text mb-2 small-text">
                                            Welcome John!
                                        </div>
                                        <div className="menu-items">
                                            <a href="#" className="dropdown-item mb-3">
                                                <HiUserCircle className="dropdown-icon align-middle" />
                                                Profile
                                            </a>
                                            <a href="#" className="dropdown-item mb-3 align-middle ">
                                                <IoIosSettings className="dropdown-icon" />
                                                Settings
                                            </a>
                                            <a href="#" className="dropdown-item mb-3 align-middle">
                                                <FaLock className="dropdown-icon" />
                                                <span onClick={LockTheScreen}>
                                                Lockscreen
                                                </span>
                                                
                                            </a>
                                            <a href="#" className="dropdown-item mb-3 align-middle">
                                                <HiOutlineLogout className="dropdown-icon"
                                                />
                                            <span  onClick={userLogout}>
                                            Logout
                                            </span>
                                           
                                            
                                              
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};