import React from "react";
import "./../../../assets/css/common/Card.css";
import { HiArrowUpRight } from "react-icons/hi2";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaBagShopping } from "react-icons/fa6";
import { GoArrowDownRight } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { useTheme } from "../../../context/ThemeContext/ThemeContext";
// import "../../../assets/css/common/Card.css"

function Card() {
  const { theme } = useTheme();
  return (
    <div>
      <div className={theme === "light" ? "container" : "darkMode container"}>
        <div className="row d-flex ">
          <div className="col-xl-3 col-md-6  mb-4 ">
            <div className="card Totalearning d-flex justify-content-between bg_white rounded">
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <p className=" fw-medium text-mute m-0 fw_400 fs_14">TOTAL EARNING</p>
                
                  <p className=" fw-medium text-mute m-0">TOTAL EARNING</p>

                  <h5 className="text-success fs-14 fw_400 fs_14">
                    <HiArrowUpRight /> +16.24%
                  </h5>
                </div>
                <div className="d-flex justify-content-between">
                  <h3>
                    {" "}
                    <span className="fs-22 fw_600 fs_22 black_color">$559.25k</span>
                  </h3>
                </div>
                <div className="d-flex justify-content-between">
                  <a
                    href="#"
                    className="link card-link text-decoration-underline"
                  >
                    View net earnings
                  </a>
                  <div className="p-2 border d-flex justify-content-center text-success bg-success-subtle rounded-1">
                    <BiSolidDollarCircle />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" col-xl-3 col-md-6  mb-4 ">
            <div className="card orders  bg_white rounded">
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <p className=" fw-medium text-mute m-0 fw_400 fs_14">ORDERS</p>
                
                  {/* <h5 className="text-danger fs-14 fw_400 fs_14"/>
                  <p className=" fw-medium text-mute m-0">ORDERS</p> */}
                
                  <h5 className="text_danger fs-14 card-number">
                    <GoArrowDownRight /> -3.57%
                  </h5>
                </div>
                <div className="d-flex justify-content-between">
                  <h3>
                    {" "}
                    <span className="fs-22 fw_600 fs_22 black_color">36,849</span>
                  </h3>
                </div>
                <div className="d-flex justify-content-between">
                  <a
                    href="#"
                    className="link card-link text-decoration-underline"
                  >
                    View All orders
                  </a>
                  <div className="p-2 border d-flex justify-content-center text-info bg-info-subtle rounded-1">
                    <FaBagShopping />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" col-xl-3 col-md-6  mb-4">
            <div className="card  customers   bg_white rounded">
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <p className="fw-medium text-mute m-0 fw_400 fs_14">CUSTOMERS</p>
            
                  <p className=" fw-medium text-mute m-0">CUSTOMERS</p>

                  <h5 className="text-success fs-14 fw_400 fs_14 ">
                    <HiArrowUpRight /> +29.08%
                  </h5>
                </div>
                <div className="d-flex justify-content-between">
                  <h3>
                    {" "}
                    <span className="fs-22 fw_600 fs_22 black_color">183.35M</span>
                  </h3>
                </div>
                <div className="d-flex justify-content-between">
                  <a
                    href="#"
                    className="link card-link text-decoration-underline"
                  >
                    View Customers
                  </a>
                  <div className="p-2 border d-flex justify-content-center text-warning bg-warning-subtle rounded-1">
                    <FaRegUserCircle />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6  mb-4">
            <div className="card my-balance  bg_white rounded">
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <p className=" fw-medium text-mute m-0 fw_400 fs_14">MY BALANCE</p>
            
                  <h5 className="text-black-50  fw_400 fs_14 ">+0.00%</h5>
                  <p className=" fw-medium text-mute m-0">MY BALANCE</p>

                  <h5 className="text-black-50  fw_400 fs_14">+0.00%</h5>
                </div>
                <div className="d-flex justify-content-between">
                  <h3>
                    {" "}
                    <span className="fs-22 fw_600 fs_22 black_color">$165.89k</span>
                  </h3>
                </div>
                <div className="d-flex justify-content-between ">
                  <a
                    href="#"
                    className="link card-link  text-decoration-underline"
                  >
                    View My Balance
                  </a>
                  <div className="p-2 border d-flex justify-content-center text-primary bg-primary-subtle rounded-1">
                    <MdOutlineAccountBalanceWallet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={theme === "light" ? "container" : "darkMode container"}>
          <div className="row text-start fsize">
            <div className="col-sm-6 col-xl-3">
              <div className="card bg_white">
                <img
                  className="card-img-top img-fluid"
                  src="https://themesbrand.com/velzon/html/default/assets/images/small/img-1.jpg"
                />
                <div className="card-body">
                  <h4 className="card-title mb-2 fs-6  card-colr">
                    Web Developer
                  </h4>
                  <p className="card-text">
                    At missed advice my it no sister. Miss told ham dull knew
                    see she spot near can. Spirit her entire her called.
                  </p>
                  <div className="text-end">
                    <a href="#" className="btn btn-primary fsize">
                      Submit
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card bg_white">
                <img
                  className="card-img-top img-fluid"
                  src="https://themesbrand.com/velzon/html/default/assets/images/small/img-2.jpg"
                />
                <div className="card-body">
                  <h4 className="card-title mb-2 fs-6  card-colr">
                    How apps is changing the It world
                  </h4>
                  <p className="card-text mb-0">
                    Whether article spirits new her covered hastily sitting her.
                    Money witty books nor son add. Chicken age had evening
                    believe but proceed pretend mrs.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="#"
                    className="card-link link-secodary text-decoration-none "
                  >
                    Read More
                    <IoIosArrowForward />
                  </a>
                  <a
                    href="#"
                    className="card-link link-success text-decoration-none "
                  >
                    Bookmark
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bookmark bookmark-icon m-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card bg_white">
                <img
                  className="card-img-top img-fluid"
                  src="https://themesbrand.com/velzon/html/default/assets/images/small/img-3.jpg"
                />
                <div className="card-body">
                  <p className="card-text mb-0">
                    We quickly learn to fear and thus automatically avoid
                    potentially stressful situations of all kinds, including the
                    most common of all making mistakes.
                  </p>
                </div>
                <ul className="list_bg_white list-group list-group-flush">
                  <li className="list-group-item">An item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card bg_white">
                <div className="card-body">
                  <h4 className="card-title mb-2 fs-6 text-mute">
                    What planning process needs?
                  </h4>
                  <h6 className="card-subtile font-14 text-mute">
                    Development
                  </h6>
                </div>
                <img
                  className="card-img-top img-fluid"
                  src="	https://themesbrand.com/velzon/html/default/assets/images/small/img-4.jpg"
                />
                <div className="card-body">
                  <p className="card-text mb-0">
                    Objectively pursue diverse catalysts for change for
                    interoperable meta-services. Distinctively re-engineer
                    revolutionary meta-services.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="#"
                    className="card-link link-secndary text-decoration-none"
                  >
                    Read More
                    <IoIosArrowForward />
                  </a>
                  <a
                    href="#"
                    className="card-link link-success text-decoration-none"
                  >
                    Bookmark
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bookmark bookmark-icon m-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div
              className={theme === "light" ? "container" : "darkMode container"}
            >
              <div className="row">
                <div className="col-12">
                  <div className="justify-content-between d-flex align-items-center mt-3 mb-4">
                    <h5 className="mb-0 pb-1 text-decoration-underline fs-6 text-mute">
                      Using Grid Markup
                    </h5>
                  </div>
                  <div className="row row-cols-xxl-5 row-cols-lg-3 row-cols-1 text-start">
                    <div className="col mt-3 ">
                      <div className="card card-body fsize bg_white">
                        <div className="d-flex mb-4 align-items-center ">
                          <div className="flex-shrink-0">
                            <img
                              src="	https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
                              alt
                              className="avatar-sm rounded-circle card-imgs"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2">
                            <h5 className="card-title mb-1 fs-6">
                              Oliver Phillips
                            </h5>
                            <p className="text-mute mb-0 fsize">
                              Digital Marketing
                            </p>
                          </div>
                        </div>

                        <h6 className="mb-1 fsize text-mute">$15,548</h6>
                        <p className="card-text text-mute">Expense Account</p>

                        <button className="btn btn-primary btn-sm fsize">
                          See Details
                        </button>
                      </div>
                    </div>
                    <div className="col mt-3">
                      <div className="card card-body fsize bg_white">
                        <div className="d-flex mb-4 align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src="	https://themesbrand.com/velzon/html/default/assets/images/users/avatar-4.jpg"
                              alt
                              className="avatar-sm rounded-circle card-imgs"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2">
                            <h5 className="card-title mb-1 fs-6 ">
                              Natasha Carey
                            </h5>
                            <p className="text-mute mb-0 fsize">Manager</p>
                          </div>
                        </div>
                        <h6 className="mb-1 fsize text-mute">$8,785</h6>
                        <p className="card-text text-mute">Expense Account</p>
                        <a href="#" className="btn btn-primary btn-sm fsize">
                          See Details
                        </a>
                      </div>
                    </div>
                    <div className="col mt-3">
                      <div className="card card-body fsize bg_white">
                        <div className="d-flex mb-4 align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src="	https://themesbrand.com/velzon/html/default/assets/images/users/avatar-3.jpg"
                              alt
                              className="avatar-sm rounded-circle card-imgs"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2">
                            <h5 className="card-title mb-1 fs-6 ">
                              Bethany Johnson
                            </h5>
                            <p className="text-mute mb-0 fsize">Development</p>
                          </div>
                        </div>
                        <h6 className="mb-1 fsize text-mute">$1,542</h6>
                        <p className="card-text text-mute">Expense Account</p>
                        <a href="#" className="btn btn-primary btn-sm fsize">
                          See Details
                        </a>
                      </div>
                    </div>
                    <div className="col mt-3">
                      <div className="card card-body fsize bg_white">
                        <div className="d-flex mb-4 align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src="	https://themesbrand.com/velzon/html/default/assets/images/users/avatar-6.jpg"
                              alt
                              className="avatar-sm rounded-circle card-imgs"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2">
                            <h5 className="card-title mb-1 fs-6 ">
                              Erica Kernan
                            </h5>
                            <p className="text-mute mb-0 fsize">
                              Fashion Designer
                            </p>
                          </div>
                        </div>
                        <h6 className="mb-1 fsize text-mute">$798</h6>
                        <p className="card-text text-mute">Expense Account</p>
                        <a href="#" className="btn btn-primary btn-sm fsize">
                          See Details
                        </a>
                      </div>
                    </div>
                    <div className="col mt-3">
                      <div className="card card-body fsize bg_white">
                        <div className="d-flex mb-4 align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src="		https://themesbrand.com/velzon/html/default/assets/images/users/avatar-5.jpg"
                              alt
                              className="avatar-sm rounded-circle card-imgs"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2">
                            <h5 className="card-title mb-1 fs-6 ">
                              Lewis Pratt
                            </h5>
                            <p className="text-mute mb-0 fsize">Design</p>
                          </div>
                        </div>
                        <h6 className="mb-1 fsize text-mute">$2,856</h6>
                        <p className="card-text text-mute">Expense Account</p>
                        <a href="#" className="btn btn-primary btn-sm fsize">
                          See Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="justify-content-between d-flex align-items-center mt-3 mb-4">
                    <h5 className="mb-0 pb-1 text-decoration-underline fs-6 text-mute">
                      Card Text Alignment
                    </h5>
                  </div>
                  <div className="row fsize">
                    <div className="col-xxl-4 col-lg-6 mt-3">
                      <div className="card card-body text-start bg_white">
                        <div className="avatar-sm mb-3">
                          <div className="avatar-title bg-success-subtle text-success fs-17 rounded d-flex justify-content-center align-items-center text-start phone">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-phone"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                            </svg>
                          </div>
                        </div>
                        <h4 className="card-title fs-6 card-colr ">
                          Text Application
                        </h4>
                        <p className="card-text text-mute">
                          Send a link to apply on mobile device. Appropriately
                          communicate one-to-one technology.
                        </p>
                        <a href="#" className="btn btn-success fsize">
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 mt-3">
                      <div className="card card-body text-center bg_white">
                        <div className="avatar-sm mx-auto mb-3">
                          <div className="avatar-title bg-success-subtle text-success fs-17 rounded d-flex justify-content-center align-items-center phone">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-plus"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                          </div>
                        </div>
                        <h4 className="card-title fs-6 card-colr">
                          Add New Application
                        </h4>
                        <p className="card-text text-mute">
                          Send a link to apply on mobile device. Appropriately
                          communicate one-to-one technology.
                        </p>
                        <a href="#" className="btn btn-success fsize">
                          Add New
                        </a>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 mt-3">
                      <div className="card card-body text-end bg_white">
                        <div className="avatar-sm ms-auto mb-3">
                          <div className="avatar-title bg-success-subtle text-success fs-17 rounded d-flex justify-content-center align-items-center phone">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-gift-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
                            </svg>
                          </div>
                        </div>
                        <h4 className="card-title fs-6 card-colr">
                          Text Application
                        </h4>
                        <p className="card-text text-mute">
                          Send a link to apply on mobile device. Appropriately
                          communicate one-to-one technology.
                        </p>
                        <a href="#" className="btn btn-success fsize">
                          Add New
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
