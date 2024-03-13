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
import Dashboard from "../../pages/dashboard/Dashboard";

// icons end
export const Sidemenu = ({ isExpanded }) => {
  const [active, setActive] = useState("");
  console.log(active, "activeItem");

  const handleActiveClick = (activeItem) => {
    setActive(activeItem);
  };

  return (
    <div className="text-white">
      <div className="wrapper">
        <aside id="sidebar" className={`sidebar ${isExpanded ? "expand" : ""}`}>
          <div className="mt-3">
            <div className="text-center">
              <Link>
                <img
                  src="https://www.admin.teksacademy.com/static/media/Teks-Logo-with-Trade.07d75f2c54a71180af08.png"
                  className="img-fluid h-50 w-75"
                />
              </Link>
            </div>
          </div>
          <ul className="sidebar-nav">
            {/* Dashboard */}
            <li className="sidebar-item ">
              <Link
                className="sidebar-link"
                onClick={() => handleActiveClick("Dashboard")}
                to="/"
              >
                <span
                  className={`${active === "Dashboard" ? `text-white` : ""}`}
                >
                  <LuLayoutDashboard className="main_icon" />
                  Dashboard{" "}
                </span>
              </Link>
            </li>

            {/* Users */}
            <li className="sidebar-item text-danger ">
              <li className="sidebar-item ">
                <Link
                  className="sidebar-link"
                  onClick={() => handleActiveClick("users")}
                  to="/createuser"
                >
                  <span className={`${active === "users" ? `text-white` : ""}`}>
                    <FaRegUserCircle className="main_icon" />
                    Users{" "}
                  </span>
                </Link>
              </li>
            </li>
            {/* Student Management */}
            <li className="sidebar-item">
              <Link
                onClick={() => handleActiveClick("studentmanagement")}
                className="sidebar-link has-dropdown collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#student"
                aria-expanded="false"
                aria-controls="student"
              >
                <PiStudentFill className="main_icon" />
                <span
                  className={`${active === "studentmanagement" ? "text-white" : ""
                    }`}
                >
                  Student Management
                </span>
              </Link>
              <ul
                id="student"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <Link
                    to={"/registrationform"}
                    className="sidebar-link"
                    onClick={() => handleActiveClick("registrationform")}
                  >
                    <span
                      className={`${active === "registrationform" ? "text-white" : ""
                        }`}
                    >
                      <AiOutlineLine className="sub_icon" />
                      Registration Form
                    </span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/studentdata"
                    className="sidebar-link"
                    onClick={() => handleActiveClick("enrolledstudents")}
                  >
                    <span
                      className={`${active === "enrolledstudents" ? "text-white" : ""
                        }`}
                    >
                      <AiOutlineLine className="sub_icon" />
                      Enrolled Students
                    </span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    onClick={() => handleActiveClick("feedetails")}
                  >
                    <span
                      className={`${active === "feedetails" ? "text-white" : ""
                        }`}
                    >
                      <AiOutlineLine className="sub_icon" />
                      Fee Details
                    </span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    onClick={() => handleActiveClick("certificate")}
                  >
                    <span
                      className={`${active === "certificate" ? "text-white" : ""
                        }`}
                    >
                      <AiOutlineLine className="sub_icon" />
                      Certificate
                    </span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    onClick={() => handleActiveClick("requestedcertificate")}
                  >
                    <span
                      className={`${active === "requestedcertificate" ? "text-white" : ""
                        }`}
                    >
                      <AiOutlineLine className="sub_icon" />
                      Requested Certificate
                    </span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    onClick={() => handleActiveClick("refund")}
                    className="sidebar-link has-dropdown collapsed "
                    data-bs-toggle="collapse"
                    data-bs-target="#refund"
                    aria-expanded="false"
                    aria-controls="refund"
                  >
                    <span
                      className={`${active === "refund" ? "text-white" : ""}`}
                    >
                      <RiRefund2Line className="main_icon" />
                      Refund
                    </span>
                  </Link>
                  <ul
                    id="refund"
                    className="sidebar-dropdown list-unstyled collapse"
                  >
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link"
                        onClick={() => handleActiveClick("refundform")}
                      >
                        <span
                          className={`${active === "refundform" ? "text-white" : ""
                            }`}
                        >
                          <AiOutlineLine className="sub_icon" />
                          Refund Form
                        </span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link"
                        onClick={() => handleActiveClick("refunddata")}
                      >
                        <span
                          className={`${active === "refunddata" ? "text-white" : ""
                            }`}
                        >
                          <AiOutlineLine className="sub_icon" />
                          Refund Data
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* Inventory */}
            <li className="sidebar-item">
              <Link
                onClick={() => handleActiveClick("inventory")}
                className="sidebar-link has-dropdown collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#inventory"
                aria-expanded="false"
                aria-controls="inventory"
              >
                <span
                  className={`${active === "inventory" ? "text-white" : ""}`}
                >
                  <MdOutlineInventory className="main_icon" />
                  Inventory
                </span>
              </Link>
              <ul
                id="inventory"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    onClick={() => handleActiveClick("addassets")}
                  >
                    <span
                      className={`${active === "addassets" ? "text-white" : ""
                        }`}
                    >
                      <AiOutlineLine className="sub_icon" />
                      Add Assets
                    </span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    onClick={() => handleActiveClick("assignassets")}
                  >
                    <AiOutlineLine className="sub_icon" />
                    <span
                      className={`${active === "assignassets" ? "text-white" : ""
                        }`}
                    >
                      Assign Assets
                    </span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    onClick={() => handleActiveClick("settings")}
                    className="sidebar-link has-dropdown collapsed "
                    data-bs-toggle="collapse"
                    data-bs-target="#setting"
                    aria-expanded="false"
                    aria-controls="setting"
                  >
                    <span
                      className={`${active === "settings" ? "text-white" : ""}`}
                    >
                      <PiStudentFill className="main_icon" />
                      Settings
                    </span>
                  </Link>
                  <ul
                    id="setting"
                    className="sidebar-dropdown list-unstyled collapse"
                  >
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link"
                        onClick={() => handleActiveClick("addassetstype")}
                      >
                        <span
                          className={`${active === "addassetstype" ? "text-white" : ""
                            }`}
                        >
                          <AiOutlineLine className="sub_icon" />
                          Add Assets Type
                        </span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link"
                        onClick={() => handleActiveClick("addvendor")}
                      >
                        <span
                          className={`${active === "addvendor" ? "text-white" : ""
                            }`}
                        >
                          <AiOutlineLine className="sub_icon" />
                          Add Vendor
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Leads */}
            <li className="sidebar-item">
              <Link
                onClick={() => handleActiveClick("leads")}
                className="sidebar-link has-dropdown collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#leads"
                aria-expanded="false"
                aria-controls="leads"
              >
                <span className={`${active === "leads" ? "text-white" : ""}`}>
                  <AiOutlineFileAdd className="main_icon" />
                  Leads
                </span>
              </Link>
              <ul
                id="leads"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <Link
                    onClick={() => handleActiveClick("websiteleads")}
                    className="sidebar-link has-dropdown collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#websiteleads"
                    aria-expanded="false"
                    aria-controls="websiteleads"
                  >
                    <span
                      className={`${active === "websiteleads" ? "text-white" : ""
                        }`}
                    >
                      <CgWebsite className="main_icon" />
                      Website Leads
                    </span>
                  </Link>
                  <ul
                    id="websiteleads"
                    className="sidebar-dropdown list-unstyled collapse "
                  >
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link"
                        onClick={() => handleActiveClick("webinar")}
                      >
                        <span
                          className={`${active === "webinar" ? "text-white" : ""
                            }`}
                        >
                          <AiOutlineLine className="sub_icon" />
                          Webinar
                        </span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link"
                        onClick={() => handleActiveClick("whatsapp")}
                      >
                        <span
                          className={`${active === "whatsapp" ? "text-white" : ""
                            }`}
                        >
                          <AiOutlineLine className="sub_icon" />
                          WhatsApp
                        </span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link"
                        onClick={() => handleActiveClick("downloadsyllbus")}
                      >
                        <span
                          className={`${active === "downloadsyllbus" ? "text-white" : ""
                            }`}
                        >
                          <AiOutlineLine className="sub_icon" />
                          Download Syllabus
                        </span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link"
                        onClick={() => handleActiveClick("viewcourse")}
                      >
                        <span
                          className={`${active === "viewcourse" ? "text-white" : ""
                            }`}
                        >
                          <AiOutlineLine className="sub_icon" />
                          View Course
                        </span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link"
                        onClick={() => handleActiveClick("contactus")}
                      >
                        <span
                          className={`${active === "contactus" ? "text-white" : ""
                            }`}
                        >
                          <AiOutlineLine className="sub_icon" />
                          Contact Us
                        </span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link"
                        onClick={() => handleActiveClick("hlpenquireleads")}
                      >
                        <span
                          className={`${active === "hlpenquireleads" ? "text-white" : ""
                            }`}
                        >
                          <AiOutlineLine className="sub_icon" />
                          Hlp Enquire Leads
                        </span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link"
                        onClick={() => handleActiveClick("slpenquireleads")}
                      >
                        <span
                          className={`${active === "slpenquireleads" ? "text-white" : ""
                            }`}
                        >
                          <AiOutlineLine className="sub_icon" />
                          Slp Enquire Leads
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* Reports */}
            <li className="sidebar-item">
              <Link
                onClick={() => handleActiveClick("reports")}
                className="sidebar-link has-dropdown collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#reports"
                aria-expanded="false"
                aria-controls="reports"
              >
                <span className={`${active === "reports" ? "text-white" : ""}`}>
                  <TbMessageReport className="main_icon" />
                  Reports
                </span>
              </Link>
              <ul
                id="reports"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    onClick={() => handleActiveClick("reportsdata")}
                  >
                    <span
                      className={`${active === "reportsdata" ? "text-white" : ""
                        }`}
                    >
                      <AiOutlineLine className="sub_icon" />
                      Reports Data
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            {/* Settings */}
            <li className="sidebar-item">
              <Link
                to="/settingstabs"
                className="sidebar-link"
                onClick={() => handleActiveClick("settings")}
              >
                <span
                  className={`${active === "settings" ? "text-white" : ""}`}
                >
                  <CiSettings className="main_icon" />
                  Settings
                </span>
              </Link>
            </li>
            <li className="sidebar-item mb-2">
              <Link
                onClick={() => handleActiveClick("design")}
                className="sidebar-link has-dropdown collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#design"
                aria-expanded="false"
                aria-controls="design"
              >
                <span className={`${active === "design" ? "text-white" : ""}`}>
                  <TbMessageReport className="main_icon" />
                  Design
                </span>
              </Link>
              <ul
                id="design"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <Link
                    to="/table"
                    className="sidebar-link"
                    onClick={() => handleActiveClick("table")}
                  >
                    <span
                      className={`${active === "table" ? "text-white" : ""}`}
                    >
                      <AiOutlineLine className="sub_icon" />
                      Table
                    </span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    to="/card"
                    className="sidebar-link"
                    onClick={() => handleActiveClick("card")}
                  >
                    <span
                      className={`${active === "card" ? "text-white" : ""}`}
                    >
                      <AiOutlineLine className="sub_icon" />
                      Card
                    </span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    to="/forms"
                    className="sidebar-link"
                    onClick={() => handleActiveClick("form")}
                  >
                    <span
                      className={`${active === "form" ? "text-white" : ""}`}
                    >
                      <AiOutlineLine className="sub_icon" />
                      Forms
                    </span>
                  </Link>
                </li>

                <li className="sidebar-item">
                  <Link
                    to="/whatsapp"
                    className="sidebar-link"
                    onClick={() => handleActiveClick("whatsappchat")}
                  >
                    <span
                      className={`${active === "whatsappchat" ? "text-white" : ""
                        }`}
                    >
                      <AiOutlineLine className="sub_icon" />
                      Whatsapp Chat
                    </span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    to="/accordian"
                    className="sidebar-link"
                    onClick={() => handleActiveClick("accordions")}
                  >
                    <span
                      className={`${active === "accordions" ? "text-white" : ""
                        }`}
                    >
                      <AiOutlineLine className="sub_icon" />
                      Accordions
                    </span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    to="/tabs"
                    className="sidebar-link"
                    onClick={() => handleActiveClick("tabs")}
                  >
                    <span
                      className={`${active === "tabs" ? "text-white" : ""}`}
                    >
                      <AiOutlineLine className="sub_icon" />
                      Tabs
                    </span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    to="/modal"
                    className="sidebar-link"
                    onClick={() => handleActiveClick("modal")}
                  >
                    <span
                      className={`${active === "modal" ? "text-white" : ""}`}
                    >
                      <AiOutlineLine className="sub_icon" />
                      Modal
                    </span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    to="/page"
                    className="sidebar-link"
                    onClick={() => handleActiveClick("page")}
                  >
                    <span
                      className={`${active === "page" ? "text-white" : ""}`}
                    >
                      <AiOutlineLine className="sub_icon" />
                      Page
                    </span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    to="/button"
                    className="sidebar-link"
                    onClick={() => handleActiveClick("button")}
                  >
                    <span
                      className={`${active === "button" ? "text-white" : ""}`}
                    >
                      <AiOutlineLine className="sub_icon" />
                      Button
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          {/* <div className='sidebar-footer'>
                        <Link className="sidebar-link">
                            <span>logout</span>
                        </Link>
                    </div> */}
        </aside>
      </div>
    </div>
  );
};
