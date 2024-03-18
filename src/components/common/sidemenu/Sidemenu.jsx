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
            <li className="sidebar-item">
              <Link
                className="sidebar-link"
                onClick={() => handleActiveClick("Dashboard")}
                to="/"
              >
                {" "}
                <LuLayoutDashboard className="main_icon" />
                <span
                  className={`${active === "Dashboard" ? `text-white` : ""}`}
                >
                  Dashboard
                </span>
              </Link>
            </li>

            {/* Users */}
            <li className="sidebar-item">
              <li className="sidebar-item ">
                <Link
                  className="sidebar-link"
                  onClick={() => handleActiveClick("users")}
                  to="/userdata"
                >
                  <FaRegUserCircle className="main_icon" />
                  <span className={`${active === "users" ? `text-white` : ""}`}>
                    Users
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
                  className={`${
                    active === "studentmanagement" ? "text-white" : ""
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
                <li
                  className={`sidebar-item ${
                    active === "registrationform" ? "text-white" : ""
                  }`}
                >
                  <Link
                    to={"/registrationform"}
                    className="sidebar-link"
                    onClick={() => handleActiveClick("registrationform")}
                  >
                    <AiOutlineLine className="sub_icon" />
                    Registration Form
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    to="/studentdata"
                    className="sidebar-link"
                    onClick={() => handleActiveClick("enrolledstudents")}
                  >
                    <AiOutlineLine className="sub_icon" />
                    <span
                      className={`${
                        active === "enrolledstudents" ? "text-white" : ""
                      }`}
                    >
                      Enrolled Students
                    </span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    onClick={() => handleActiveClick("feedetails")}
                  >
                    {" "}
                    <AiOutlineLine className="sub_icon" />
                    <span
                      className={`${
                        active === "feedetails" ? "text-white" : ""
                      }`}
                    >
                      Fee Details
                    </span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    onClick={() => handleActiveClick("certificate")}
                  >
                    {" "}
                    <AiOutlineLine className="sub_icon" />
                    <span
                      className={`${
                        active === "certificate" ? "text-white" : ""
                      }`}
                    >
                      Certificate
                    </span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    onClick={() => handleActiveClick("requestedcertificate")}
                  >
                    {" "}
                    <AiOutlineLine className="sub_icon" />
                    <span
                      className={`${
                        active === "requestedcertificate" ? "text-white" : ""
                      }`}
                    >
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
                    {" "}
                    <RiRefund2Line className="main_icon" />
                    <span
                      className={`${active === "refund" ? "text-white" : ""}`}
                    >
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
                        {" "}
                        <AiOutlineLine className="sub_icon" />
                        <span
                          className={`${
                            active === "refundform" ? "text-white" : ""
                          }`}
                        >
                          Refund Form
                        </span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link"
                        onClick={() => handleActiveClick("refunddata")}
                      >
                        {" "}
                        <AiOutlineLine className="sub_icon" />
                        <span
                          className={`${
                            active === "refunddata" ? "text-white" : ""
                          }`}
                        >
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
                {" "}
                <MdOutlineInventory className="main_icon" />
                <span
                  className={`${active === "inventory" ? "text-white" : ""}`}
                >
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
                    {" "}
                    <AiOutlineLine className="sub_icon" />
                    <span
                      className={`${
                        active === "addassets" ? "text-white" : ""
                      }`}
                    >
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
                      className={`${
                        active === "assignassets" ? "text-white" : ""
                      }`}
                    >
                      Assign Assets
                    </span>
                  </Link>
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
                <AiOutlineFileAdd className="main_icon" />
                <span className={`${active === "leads" ? "text-white" : ""}`}>
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
                    {" "}
                    <CgWebsite className="main_icon" />
                    <span
                      className={`${
                        active === "websiteleads" ? "text-white" : ""
                      }`}
                    >
                      {" "}
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
                        {" "}
                        <AiOutlineLine className="sub_icon" />
                        <span
                          className={`${
                            active === "webinar" ? "text-white" : ""
                          }`}
                        >
                          Webinar
                        </span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link"
                        onClick={() => handleActiveClick("whatsapp")}
                      >
                        {" "}
                        <AiOutlineLine className="sub_icon" />
                        <span
                          className={`${
                            active === "whatsapp" ? "text-white" : ""
                          }`}
                        >
                          WhatsApp
                        </span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link"
                        onClick={() => handleActiveClick("downloadsyllbus")}
                      >
                        {" "}
                        <AiOutlineLine className="sub_icon" />
                        <span
                          className={`${
                            active === "downloadsyllbus" ? "text-white" : ""
                          }`}
                        >
                          Download Syllabus
                        </span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link"
                        onClick={() => handleActiveClick("viewcourse")}
                      >
                        {" "}
                        <AiOutlineLine className="sub_icon" />
                        <span
                          className={`${
                            active === "viewcourse" ? "text-white" : ""
                          }`}
                        >
                          View Course
                        </span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link"
                        onClick={() => handleActiveClick("contactus")}
                      >
                        {" "}
                        <AiOutlineLine className="sub_icon" />
                        <span
                          className={`${
                            active === "contactus" ? "text-white" : ""
                          }`}
                        >
                          Contact Us
                        </span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link"
                        onClick={() => handleActiveClick("hlpenquireleads")}
                      >
                        {" "}
                        <AiOutlineLine className="sub_icon" />
                        <span
                          className={`${
                            active === "hlpenquireleads" ? "text-white" : ""
                          }`}
                        >
                          Hlp Enquire Leads
                        </span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link"
                        onClick={() => handleActiveClick("slpenquireleads")}
                      >
                        {" "}
                        <AiOutlineLine className="sub_icon" />
                        <span
                          className={`${
                            active === "slpenquireleads" ? "text-white" : ""
                          }`}
                        >
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
                {" "}
                <TbMessageReport className="main_icon" />
                <span className={`${active === "reports" ? "text-white" : ""}`}>
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
                    {" "}
                    <AiOutlineLine className="sub_icon" />
                    <span
                      className={`${
                        active === "reportsdata" ? "text-white" : ""
                      }`}
                    >
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
                {" "}
                <CiSettings className="main_icon" />
                <span
                  className={`${active === "settings" ? "text-white" : ""}`}
                >
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
                {" "}
                <TbMessageReport className="main_icon" />
                <span className={`${active === "design" ? "text-white" : ""}`}>
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
                    {" "}
                    <AiOutlineLine className="sub_icon" />
                    <span
                      className={`${active === "table" ? "text-white" : ""}`}
                    >
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
                    {" "}
                    <AiOutlineLine className="sub_icon" />
                    <span
                      className={`${active === "card" ? "text-white" : ""}`}
                    >
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
                    {" "}
                    <AiOutlineLine className="sub_icon" />
                    <span
                      className={`${active === "form" ? "text-white" : ""}`}
                    >
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
                    {" "}
                    <AiOutlineLine className="sub_icon" />
                    <span
                      className={`${
                        active === "whatsappchat" ? "text-white" : ""
                      }`}
                    >
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
                    {" "}
                    <AiOutlineLine className="sub_icon" />
                    <span
                      className={`${
                        active === "accordions" ? "text-white" : ""
                      }`}
                    >
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
                    {" "}
                    <AiOutlineLine className="sub_icon" />
                    <span
                      className={`${active === "tabs" ? "text-white" : ""}`}
                    >
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
                    {" "}
                    <AiOutlineLine className="sub_icon" />
                    <span
                      className={`${active === "modal" ? "text-white" : ""}`}
                    >
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
                    {" "}
                    <AiOutlineLine className="sub_icon" />
                    <span
                      className={`${active === "page" ? "text-white" : ""}`}
                    >
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
                    <AiOutlineLine className="sub_icon" />
                    <span
                      className={`${active === "button" ? "text-white" : ""}`}
                    >
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
