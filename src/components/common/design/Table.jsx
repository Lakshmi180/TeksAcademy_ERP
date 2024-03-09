import { React } from "react";
import "../../../assets/css/common/Table.css";
import { TiChartBar } from "react-icons/ti";
import { BiSolidReport } from "react-icons/bi";
import { MdOutlineFileDownload, MdPadding, MdWidthFull } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
// import { CiSettings } from "react-icons/ci";
// import { FaUser } from "react-icons/fa";
// import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";
// import { AiOutlineAudioMuted } from "react-icons/ai";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { BiDotsVerticalRounded } from "react-icons/bi";
// import { IoCheckmarkDoneSharp } from "react-icons/io5";
// import { HiDotsHorizontal } from "react-icons/hi";
// import { IoMdSend } from "react-icons/io";
// import { BsReply } from "react-icons/bs";
// import { AiOutlineShareAlt } from "react-icons/ai";
// import { MdContentCopy } from "react-icons/md";
// import { FaRegBookmark } from "react-icons/fa";

function Table() {
  return (
    <div>
      <div className="p-4 container">

        {/* Best Selling Product & top sellers table starts */}
        <div className="row ">
          <div className="col-xl-6  ">
            <div className="card ">
              <div className="card-header  align-items-center d-flex justify-content-between p-3 border-bottom bg-transparent">
                <div className="">
                  <h4 className="card-title tbl-card-header mb-0 flex-grow-1">
                    Best Selling Products
                  </h4>
                </div>
                <div className="flex-shrink-0 d-flex ">
                  <div>
                    <span className="fw-semibold text-uppercase fs-12 sort-by">
                      Sort by:
                    </span>
                  </div>
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle bg-transparent border-0 day-dropdown"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Today
                    </button>
                    <ul className="dropdown-menu table-dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Yesterday
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Last 7 day
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Last 30 days
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Last Month
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <div class="table-responsive table-card">
                  <table className="table table-hover table-centered align-middle table-nowrap mb-0">
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar-sm bg-light rounded p-1 me-2">
                              <img
                                src="https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png"
                                alt=""
                                className="img-fluid d-block product-img"
                              />
                            </div>
                            <div>
                              <h5 className="fs-14 my-1  td-name d-flex   text-start">
                                <a
                                  href="apps-ecommerce-product-details.html"
                                  className="text-reset"
                                >
                                  Branded T-Shirts
                                </a>
                              </h5>
                              <span className="text-muted td-sub-name d-flex   text-start">
                                24 Apr 2021
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            $29.00
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Price
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            62
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Orders
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            510
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Stock
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            $1,798
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Amount
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar-sm bg-light rounded p-1 me-2">
                              <img
                                src="https://themesbrand.com/velzon/html/default/assets/images/products/img-2.png"
                                alt=""
                                className="img-fluid d-block product-img "
                              />
                            </div>
                            <div>
                              <h5 className="fs-14 my-1  td-name d-flex   text-start">
                                <a
                                  href="apps-ecommerce-product-details.html"
                                  className="text-reset"
                                >
                                  Bentwood Chair
                                </a>
                              </h5>
                              <span className="text-muted td-sub-name d-flex   text-start">
                                19 Mar 2021
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            $85.20
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Price
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            35
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Orders
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            <span className="badge bg-danger-subtle text-danger ">
                              Out of stock
                            </span>{" "}
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Stock
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-norma  td-name d-flex   text-start">
                            $2982
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Amount
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar-sm bg-light rounded p-1 me-2">
                              <img
                                src="https://themesbrand.com/velzon/html/default/assets/images/products/img-3.png"
                                alt=""
                                className="img-fluid d-block product-img"
                              />
                            </div>
                            <div>
                              <h5 className="fs-14 my-1  td-name d-flex   text-start">
                                <a
                                  href="apps-ecommerce-product-details.html"
                                  className="text-reset"
                                >
                                  Borosil Paper Cup
                                </a>
                              </h5>
                              <span className="text-muted td-sub-name d-flex   text-start ">
                                01 Mar 2021
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            $14.00
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Price
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            80
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Orders
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start ">
                            749
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Stock
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start ">
                            $1120
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Amount
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar-sm bg-light rounded p-1 me-2">
                              <img
                                src="https://themesbrand.com/velzon/html/default/assets/images/products/img-4.png"
                                alt=""
                                className="img-fluid d-block product-img"
                              />
                            </div>
                            <div>
                              <h5 className="fs-14 my-1  td-name d-flex   text-start">
                                <a
                                  href="apps-ecommerce-product-details.html"
                                  className="text-reset"
                                >
                                  One Seater Sofa
                                </a>
                              </h5>
                              <span className="text-muted td-sub-name d-flex   text-start">
                                11 Feb 2021
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            $127.50
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Price
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            56
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Orders
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            <span className="badge bg-danger-subtle text-danger ">
                              Out of stock
                            </span>
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Stock
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            $7140
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Amount
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar-sm bg-light rounded p-1 me-2">
                              <img
                                src="https://themesbrand.com/velzon/html/default/assets/images/products/img-5.png"
                                alt=""
                                className="img-fluid d-block product-img"
                              />
                            </div>
                            <div>
                              <h5 className="fs-14 my-1  td-name d-flex   text-start">
                                <a
                                  href="apps-ecommerce-product-details.html"
                                  className="text-reset"
                                >
                                  Stillbird Helmet
                                </a>
                              </h5>
                              <span className="text-muted td-sub-name d-flex   text-start">
                                17 Jan 2021
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            $54
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Price
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            74
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Orders
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            805
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Stock
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            $3996
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Amount
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="align-items-center d-flex justify-content-between row text-center text-sm-start p-1  ">
                  <div className="col-sm">
                    <div className="text-muted pagination-text">
                      Showing <span className="fw-semibold">5</span> of{" "}
                      <span className="fw-semibold">25</span> Results
                    </div>
                  </div>
                  <div className="col-sm-auto  mt-3 mt-sm-0">
                    <ul className="pagination pagination-separated pagination-sm mb-0 justify-content-center">
                      <li className="page-item disabled p-1">
                        <a href="#" className="page-link">
                          ←
                        </a>
                      </li>
                      <li className="page-item p-1">
                        <a href="#" className="page-link">
                          1
                        </a>
                      </li>
                      <li className="page-item active p-1">
                        <a href="#" className="page-link">
                          2
                        </a>
                      </li>
                      <li className="page-item p-1">
                        <a href="#" className="page-link">
                          3
                        </a>
                      </li>
                      <li className="page-item p-1">
                        <a href="#" className="page-link">
                          →
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6  ">
            <div className="card ">
              <div className="card-header  align-items-center d-flex justify-content-between p-3 border-bottom bg-transparent">
                <div className="">
                  <h4 className="card-title tbl-card-header mb-0 flex-grow-1">
                    Top Sellers
                  </h4>
                </div>
                <div className="flex-shrink-0 d-flex ">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle bg-transparent border-0 day-dropdown"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Report
                    </button>
                    <ul className="dropdown-menu table-dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Download Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Export
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Import
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <div class="table-responsive table-card">
                  <table className="table table-hover table-centered align-middle table-nowrap mb-0">
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar-sm bg-light rounded p-1 me-2">
                              <img
                                src="https://themesbrand.com/velzon/html/default/assets/images/companies/img-1.png"
                                alt=""
                                className="img-fluid d-block product-img"
                              />
                            </div>
                            <div>
                              <h5 className="fs-14 my-1  td-name d-flex   text-start">
                                <a
                                  href="apps-ecommerce-product-details.html"
                                  className="text-reset"
                                >
                                  iTest Factory
                                </a>
                              </h5>
                              <span className="text-muted td-sub-name d-flex   text-start">
                                Oliver Tyler
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Bags and Wallets
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            8547
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Stock
                          </span>
                        </td>
                        <td>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            $541200
                          </span>
                        </td>
                        <td>
                          <div className="d-flex justify-content-between">
                            <h5 className="fs-14 name-in-table td-name fw-medium d-flex align-items-start">
                              32%
                            </h5>
                            <span className="text-success">
                              <TiChartBar />{" "}
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar-sm bg-light rounded p-1 me-2">
                              <img
                                src="https://themesbrand.com/velzon/html/default/assets/images/companies/img-2.png"
                                alt=""
                                className="img-fluid d-block product-img "
                              />
                            </div>
                            <div>
                              <h5 className="fs-14 my-1  td-name d-flex   text-start">
                                <a
                                  href="apps-ecommerce-product-details.html"
                                  className="text-reset"
                                >
                                  Digitech Galaxy
                                </a>
                              </h5>
                              <span className="text-muted td-sub-name d-flex   text-start">
                                John Robert
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Watches
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            895
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Stock
                          </span>
                        </td>
                        <td>
                          <span className="text-muted td-sub-name d-flex   text-start ">
                            $75030
                          </span>
                        </td>
                        <td>
                          <div className="d-flex justify-content-between">
                            <h5 className="fs-14 name-in-table td-name fw-medium d-flex align-items-start">
                              79%
                            </h5>
                            <span className="text-success">
                              <TiChartBar />{" "}
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar-sm bg-light rounded p-1 me-2">
                              <img
                                src="https://themesbrand.com/velzon/html/default/assets/images/companies/img-3.png"
                                alt=""
                                className="img-fluid d-block product-img"
                              />
                            </div>
                            <div>
                              <h5 className="fs-14 my-1  td-name d-flex   text-start">
                                <a
                                  href="apps-ecommerce-product-details.html"
                                  className="text-reset"
                                >
                                  Nesta Technologies
                                </a>
                              </h5>
                              <span className="text-muted td-sub-name d-flex   text-start ">
                                Harley Fuller
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Bike Accesories
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            3570
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Stock
                          </span>
                        </td>
                        <td>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            $45600
                          </span>
                        </td>
                        <td>
                          <div className="d-flex justify-content-between">
                            <h5 className="fs-14 name-in-table td-name fw-medium d-flex align-items-start">
                              90%
                            </h5>
                            <span className="text-success">
                              <TiChartBar />{" "}
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar-sm bg-light rounded p-1 me-2">
                              <img
                                src="https://themesbrand.com/velzon/html/default/assets/images/companies/img-8.png"
                                alt=""
                                className="img-fluid d-block product-img"
                              />
                            </div>
                            <div>
                              <h5 className="fs-14 my-1  td-name d-flex   text-start">
                                <a
                                  href="apps-ecommerce-product-details.html"
                                  className="text-reset"
                                >
                                  Zoetic Fashion
                                </a>
                              </h5>
                              <span className="text-muted td-sub-name d-flex   text-start">
                                James Bowen
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Clothes
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            5488
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Stock
                          </span>
                        </td>
                        <td>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            $29456
                          </span>
                        </td>
                        <td>
                          <div className="d-flex justify-content-between">
                            <h5 className="fs-14 name-in-table td-name fw-medium d-flex align-items-start">
                              40%
                            </h5>
                            <span className="text-success">
                              <TiChartBar />{" "}
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar-sm bg-light rounded p-1 me-2">
                              <img
                                src="https://themesbrand.com/velzon/html/default/assets/images/companies/img-5.png"
                                alt=""
                                className="img-fluid d-block product-img"
                              />
                            </div>
                            <div>
                              <h5 className="fs-14 my-1  td-name d-flex   text-start">
                                <a
                                  href="apps-ecommerce-product-details.html"
                                  className="text-reset"
                                >
                                  Meta4System
                                </a>
                              </h5>
                              <span className="text-muted td-sub-name d-flex   text-start">
                                Zoe-Dennis
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Furniture
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 my-1 fw-normal  td-name d-flex   text-start">
                            4100
                          </h5>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            Stock
                          </span>
                        </td>
                        <td>
                          <span className="text-muted td-sub-name d-flex   text-start">
                            $11260
                          </span>
                        </td>
                        <td>
                          <div className="d-flex justify-content-between">
                            <h5 className="fs-14 name-in-table td-name fw-medium d-flex align-items-start">
                              57%
                            </h5>
                            <span className="text-success">
                              <TiChartBar />{" "}
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="align-items-center d-flex justify-content-between row text-center text-sm-start p-1 ">
                  <div class="col-sm">
                    <div class="text-muted pagination-text">
                      Showing <span class="fw-semibold">5</span> of{" "}
                      <span class="fw-semibold">25</span> Results
                    </div>
                  </div>
                  <div class="col-sm-auto  mt-3 mt-sm-0">
                    <ul class="pagination pagination-separated pagination-sm mb-0 justify-content-center">
                      <li class="page-item disabled p-1">
                        <a href="#" class="page-link">
                          ←
                        </a>
                      </li>
                      <li class="page-item p-1">
                        <a href="#" class="page-link  ">
                          1
                        </a>
                      </li>
                      <li class="page-item active  p-1">
                        <a href="#" class="page-link">
                          2
                        </a>
                      </li>
                      <li class="page-item p-1">
                        <a href="#" class="page-link">
                          3
                        </a>
                      </li>
                      <li class="page-item p-1">
                        <a href="#" class="page-link">
                          →
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
           

           {/* Recent Order Table start */}
        <div className="row mt-3">
          <div className="col-xl-8">
            <div className="card">
              <div className="card-header align-items-center  d-flex justify-content-between bg-transparent p-3">
                <div>
                  <h4 className="card-title mb-0 flex-grow-1 tbl-card-header">
                    Recent Orders
                  </h4>
                </div>
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className=" btn text-primary bg-primary-subtle border-0 rounded general-report"
                  >
                    <BiSolidReport />
                    Generate Report
                  </button>
                </div>
              </div>

              <div className="card-body p-0">
                <div
                  className="table-responsive table-card "
                  style={{ maxHeight: "275px", overflowY: "scroll", scrollbarWidth:"thin" }}
                >
                  <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                    <thead className="  table-light ">
                      <tr className="shadow-sm bg-body-tertiary rounded  border-bottom  ">
                        <th
                          scope="col"
                          className="text-muted recent-order-sub-name text-start "
                        >
                          Order ID
                        </th>
                        <th
                          scope="col"
                          className="text-muted recent-order-sub-name text-start "
                        >
                          Customer
                        </th>
                        <th
                          scope="col"
                          className="text-muted recent-order-sub-name text-start  "
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          className="text-muted recent-order-sub-name text-start "
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="text-muted recent-order-sub-name text-start "
                        >
                          {" "}
                          Vendor
                        </th>
                        <th
                          scope="col"
                          className="text-muted recent-order-sub-name text-start "
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="text-muted recent-order-sub-name text-start "
                        >
                          Rating
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="">
                        <td className="text-start">
                          <a
                            href="apps-ecommerce-order-details.html"
                            className="fw-medium  order-code text-start "
                          >
                            #VZ2112
                          </a>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-2">
                              <img
                                src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
                                alt=""
                                className="avatar-xs rounded-circle tbl-user-img"
                              />
                            </div>
                            <div className="flex-grow-1 td-sub-name text-black text-start ">
                              Alex Smith
                            </div>
                          </div>
                        </td>
                        <td className="td-sub-name text-start ">Clothes</td>
                        <td>
                          <span className="text-success text-start tbl-amount">
                            $109.00
                          </span>
                        </td>
                        <td className="td-sub-name text-start ">
                          Zoetic Fashion
                        </td>
                        <td className="text-start">
                          <span className="badge bg-success-subtle fw-medium text-success text-start ">
                            Paid
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 fw-medium mb-0 td-name text-black text-start ">
                            5.0
                            <span className="text-muted fs-11 ms-1 votes text-start ">
                              (61 votes)
                            </span>
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start">
                          <a
                            href="apps-ecommerce-order-details.html"
                            className="fw-medium  order-code text-start "
                          >
                            #VZ2111
                          </a>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-2">
                              <img
                                src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-2.jpg"
                                alt=""
                                className="avatar-xs rounded-circle tbl-user-img"
                              />
                            </div>
                            <div className="flex-grow-1 td-sub-name text-black text-start ">
                              Jansh Brown
                            </div>
                          </div>
                        </td>
                        <td className="td-sub-name text-start ">
                          Kitchen Storage
                        </td>
                        <td>
                          <span className="text-success text-start tbl-amount">
                            $149.00
                          </span>
                        </td>
                        <td className="td-sub-name text-start ">
                          Micro Design
                        </td>
                        <td className="text-start">
                          <span className="badge bg-warning-subtle fw-medium text-warning text-start ">
                            Pending
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 fw-medium mb-0 td-name text-black text-start ">
                            4.5
                            <span className="text-muted fs-11 ms-1 votes text-start ">
                              (61 votes)
                            </span>
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start">
                          <a
                            href="apps-ecommerce-order-details.html"
                            className="fw-medium  order-code text-start "
                          >
                            #VZ2109
                          </a>
                        </td>
                        <td>
                          <div className="d-flex align-items-center text-start ">
                            <div className="flex-shrink-0 me-2">
                              <img
                                src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-3.jpg"
                                alt=""
                                className="avatar-xs rounded-circle tbl-user-img"
                              />
                            </div>
                            <div className="flex-grow-1 td-sub-name text-black text-start ">
                              Ayaan Bowen
                            </div>
                          </div>
                        </td>
                        <td className="td-sub-name text-start ">
                          Bike Accessories
                        </td>
                        <td>
                          <span className="text-success text-start tbl-amount ">
                            $215.00
                          </span>
                        </td>
                        <td className="td-sub-name text-start ">
                          Nesta Technologies
                        </td>
                        <td className="text-start">
                          <span className="badge bg-success-subtle fw-medium text-success text-start ">
                            Paid
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 fw-medium mb-0 td-name text-black text-start ">
                            4.9
                            <span className="text-muted fs-11 ms-1 votes text-start ">
                              (89 votes)
                            </span>
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start">
                          <a
                            href="apps-ecommerce-order-details.html"
                            className="fw-medium  order-code text-start "
                          >
                            #VZ2108
                          </a>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-2">
                              <img
                                src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-4.jpg"
                                alt=""
                                className="avatar-xs rounded-circle tbl-user-img"
                              />
                            </div>
                            <div className="flex-grow-1 td-sub-name text-black  text-start ">
                              Prezy Mark
                            </div>
                          </div>
                        </td>
                        <td className="td-sub-name text-start ">Furniture</td>
                        <td>
                          <span className="text-success tbl-amount text-start ">
                            $199.00
                          </span>
                        </td>
                        <td className="td-sub-name text-start ">
                          Syntyce Solutions
                        </td>
                        <td className="text-start">
                          <span className="badge bg-danger-subtle fw-medium text-danger text-start ">
                            Unpaid
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 fw-medium mb-0 td-name text-black text-start ">
                            4.3
                            <span className="text-muted fs-11 ms-1 votes text-start ">
                              (47 votes)
                            </span>
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start">
                          <a
                            href="apps-ecommerce-order-details.html"
                            className="fw-medium order-code  "
                          >
                            #VZ2107
                          </a>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-2">
                              <img
                                src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-6.jpg"
                                alt=""
                                className="avatar-xs rounded-circle tbl-user-img"
                              />
                            </div>
                            <div className="flex-grow-1 td-sub-name text-black text-start ">
                              Vihan Hudda
                            </div>
                          </div>
                        </td>
                        <td className="td-sub-name text-start ">
                          Bags and Wallets
                        </td>
                        <td>
                          <span className="text-success tbl-amount text-start">
                            $330.00
                          </span>
                        </td>
                        <td className="td-sub-name  text-start">
                          iTest Factory
                        </td>
                        <td className="text-start">
                          <span className="badge bg-success-subtle fw-medium text-success  text-start">
                            Paid
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 fw-medium mb-0 td-name text-black  text-start">
                            4.7
                            <span className="text-muted fs-11 ms-1 votes  text-start">
                              (161 votes)
                            </span>
                          </h5>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="text-start">
                          <a
                            href="apps-ecommerce-order-details.html"
                            className="fw-medium  order-code text-start "
                          >
                            #VZ2112
                          </a>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-2">
                              <img
                                src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
                                alt=""
                                className="avatar-xs rounded-circle tbl-user-img"
                              />
                            </div>
                            <div className="flex-grow-1 td-sub-name text-black text-start ">
                              Alex Smith
                            </div>
                          </div>
                        </td>
                        <td className="td-sub-name text-start ">Clothes</td>
                        <td>
                          <span className="text-success text-start tbl-amount">
                            $109.00
                          </span>
                        </td>
                        <td className="td-sub-name text-start ">
                          Zoetic Fashion
                        </td>
                        <td className="text-start">
                          <span className="badge bg-success-subtle fw-medium text-success text-start ">
                            Paid
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 fw-medium mb-0 td-name text-black text-start ">
                            5.0
                            <span className="text-muted fs-11 ms-1 votes text-start ">
                              (61 votes)
                            </span>
                          </h5>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="text-start">
                          <a
                            href="apps-ecommerce-order-details.html"
                            className="fw-medium  order-code text-start "
                          >
                            #VZ2112
                          </a>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-2">
                              <img
                                src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
                                alt=""
                                className="avatar-xs rounded-circle tbl-user-img"
                              />
                            </div>
                            <div className="flex-grow-1 td-sub-name text-black text-start ">
                              Alex Smith
                            </div>
                          </div>
                        </td>
                        <td className="td-sub-name text-start ">Clothes</td>
                        <td>
                          <span className="text-success text-start tbl-amount">
                            $109.00
                          </span>
                        </td>
                        <td className="td-sub-name text-start ">
                          Zoetic Fashion
                        </td>
                        <td className="text-start">
                          <span className="badge bg-success-subtle fw-medium text-success text-start ">
                            Paid
                          </span>
                        </td>
                        <td>
                          <h5 className="fs-14 fw-medium mb-0 td-name text-black text-start ">
                            5.0
                            <span className="text-muted fs-11 ms-1 votes text-start ">
                              (61 votes)
                            </span>
                          </h5>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hoverable Table start */}
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="card card-hover">
              <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1 tbl-card-header">
                  Hoverable Rows
                </h4>
                <div className="flex-shrink-0">
                  <div className="form-check form-switch form-switch-right form-switch-md">
                    <label
                      for="hover-rows-showcode"
                      className="form-label text-muted toggle-showcode"
                    >
                      Show Code
                    </label>
                    <input
                      className="form-check-input code-switcher"
                      type="checkbox"
                      id="hover-rows-showcode"
                    />
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p className="text-muted instruction-line">
                  {" "}
                  Use <code>table hover</code> class to enable hover state on
                  table row with tbody
                </p>
                <div className="live-preview">
                  <div className="row">
                    <div className="col-xl-6 ">
                      <div className="table-responsive">
                        <table className="table table-hover align-midle table-nowrap mb-0">
                          <thead>
                            <tr>
                              <th scope="col">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="checkAll"
                                    value="option1"
                                  />
                                </div>
                              </th>
                              <th scope="col" className="td-name">
                                Order ID
                              </th>
                              <th scope="col" className="td-name">
                                Shop
                              </th>
                              <th scope="col" className="td-name">
                                Customer
                              </th>
                              <th scope="col" className="td-name">
                                Price
                              </th>
                              <th scope="col" className="td-name">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="checkAll"
                                    value="option1"
                                  />
                                </div>
                              </th>
                              <td className="td-sub-name">#541254265</td>
                              <td className="td-sub-name">Amazon</td>
                              <td className="td-sub-name">Cleo Carson</td>
                              <td className="td-sub-name">$4,521</td>
                              <td>
                                <a href="" className="download-icon ">
                                  <MdOutlineFileDownload />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="checkAll"
                                    value="option1"
                                  />
                                </div>
                              </th>
                              <td className="td-sub-name">#744145235</td>
                              <td className="td-sub-name"> Shoppers</td>
                              <td className="td-sub-name"> Juston Eichmann</td>
                              <td className="td-sub-name">$7,546</td>
                              <td>
                                <a href="" className="download-icon ">
                                  <MdOutlineFileDownload />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="checkAll"
                                    value="option1"
                                  />
                                </div>
                              </th>
                              <td className="td-sub-name">#9855126598</td>
                              <td className="td-sub-name"> Flipkart</td>
                              <td className="td-sub-name"> Bettie Johson</td>
                              <td className="td-sub-name"> $1,350</td>
                              <td>
                                <a href="" className="download-icon">
                                  <MdOutlineFileDownload />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="checkAll"
                                    value="option1"
                                  />
                                </div>
                              </th>
                              <td className="td-sub-name">#847512653</td>
                              <td className="td-sub-name">Shoppers</td>
                              <td className="td-sub-name">Maritza Blanda</td>
                              <td className="td-sub-name">$4,521</td>
                              <td>
                                <a href="" className="download-icon ">
                                  <MdOutlineFileDownload />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-xl-6 ">
                      <div className="table-responsive mt-2 ">
                        <table className="table table-hover align-midle table-nowrap mb-0">
                          <thead>
                            <tr>
                              <th scope="col" className="td-name">
                                {" "}
                                ID
                              </th>
                              <th scope="col" className="td-name">
                                Invoice
                              </th>
                              <th scope="col" className="td-name">
                                Amount
                              </th>
                              <th scope="col" className="td-name">
                                Date
                              </th>
                              <th scope="col" className="td-name">
                                Status
                              </th>
                              <th scope="col" className="td-name">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="fw-medium td-sub-name">01</td>
                              <td className="td-sub-name">Basic Plan </td>
                              <td className="td-sub-name">$860</td>
                              <td className="td-sub-name">Nov 22, 2021</td>
                              <td className="td-sub-name">
                                {" "}
                                <span className="text-success f-12 me-1">
                                  <FaRegCheckCircle />
                                </span>{" "}
                                Subscribed
                              </td>
                              <td className="td-sub-name">
                                <div className="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="SwitchCheck1"
                                  />
                                  <label
                                    className="form-check-label ms-2 fw-medium"
                                    for="SwitchCheck1"
                                  >
                                    Yes/No
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="fw-medium td-sub-name">02</td>
                              <td className="td-sub-name">Premium Plan </td>
                              <td className="td-sub-name">$1200</td>
                              <td className="td-sub-name">Nov 22, 2021</td>
                              <td className="td-sub-name">
                                <span className="text-danger me-1">
                                  <RxCrossCircled />
                                </span>
                                Unsubscribed
                              </td>
                              <td className="td-sub-name">
                                <div className="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="SwitchCheck1"
                                  />
                                  <label
                                    className="form-check-label ms-2 fw-medium"
                                    for="SwitchCheck1"
                                  >
                                    Yes/No
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="fw-medium td-sub-name">03</td>
                              <td className="td-sub-name">Basic Plan </td>
                              <td className="td-sub-name">$860</td>
                              <td className="td-sub-name">Nov 22, 2021</td>
                              <td className="td-sub-name">
                                <span className="text-success f-12 me-1">
                                  <FaRegCheckCircle />
                                </span>{" "}
                                Subscribed
                              </td>
                              <td className="td-sub-name">
                                <div className="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="SwitchCheck1"
                                  />
                                  <label
                                    className="form-check-label ms-2 fw-medium"
                                    for="SwitchCheck1"
                                  >
                                    Yes/No
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="fw-medium td-sub-name">04</td>
                              <td className="td-sub-name">Corporate Plan </td>
                              <td className="td-sub-name">$1599</td>
                              <td className="td-sub-name">Nov 22, 2021</td>
                              <td className="td-sub-name ">
                                {" "}
                                <span className="text-success f-12 me-1">
                                  <FaRegCheckCircle />
                                </span>{" "}
                                Subscribed
                              </td>
                              <td className="td-sub-name">
                                <div className="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="SwitchCheck1"
                                  />
                                  <label
                                    className="form-check-label ms-2 fw-medium"
                                    for="SwitchCheck1"
                                  >
                                    Yes/No
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          {/* Card Tables starts */}
          <div className="row mt-3">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header align-items-center d-flex">
                  <h4 className="card-title mb-0 flex-grow-1 tbl-card-header">
                    Card Tables
                  </h4>
                  <div className="flex-shrink-0">
                    <div className="form-check form-switch form-switch-right form-switch-md">
                      <label
                        for="hover-rows-showcode"
                        className="form-label text-muted toggle-showcode"
                      >
                        Show Code
                      </label>
                      <input
                        className="form-check-input code-switcher"
                        type="checkbox"
                        id="hover-rows-showcode"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body ">
                  <p className="text-muted instruction-line">
                    {" "}
                    Use <code>table-cards</code> class to show class based table
                    within a tbody
                  </p>
                </div>
                <div className="live-preview">
                  <div className="table table-responsive table-card ">
                    <table className="table align-middle table-nowrap mb-0">
                      <thead className="table-light">
                        <tr>
                          <th scope="col">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="cardtableCheck"
                              />
                              <label
                                className="form-check-label"
                                for="cardtableCheck"
                              ></label>
                            </div>
                          </th>
                          <th scope="col" className="td-name">
                            ID
                          </th>
                          <th scope="col" className="td-name">
                            Name
                          </th>
                          <th scope="col" className="td-name">
                            Date
                          </th>
                          <th scope="col" className="td-name">
                            Total
                          </th>
                          <th scope="col" className="td-name">
                            Status
                          </th>
                          <th scope="col" className="td-name">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="cardtableCheck01"
                              />
                              <label
                                className="form-check-label"
                                for="cardtableCheck01"
                              ></label>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="fw-medium order-code">
                              #VL2110
                            </a>
                          </td>
                          <td className="td-sub-name">William Elmore</td>
                          <td className="td-sub-name">07 Oct, 2021</td>
                          <td className="td-sub-name">$24.05</td>
                          <td>
                            <span className="badge bg-success">Paid</span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-light detail-btn "
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="cardtableCheck01"
                              />
                              <label
                                className="form-check-label"
                                for="cardtableCheck01"
                              ></label>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="fw-medium order-code">
                              #VL2109
                            </a>
                          </td>
                          <td className="td-sub-name"> Georgie Winters</td>
                          <td className="td-sub-name">07 Oct, 2021</td>
                          <td className="td-sub-name">$26.15</td>
                          <td>
                            <span className="badge bg-success">Paid</span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-light detail-btn"
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="cardtableCheck01"
                              />
                              <label
                                className="form-check-label"
                                for="cardtableCheck01"
                              ></label>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="fw-medium order-code">
                              #VL2108
                            </a>
                          </td>
                          <td className="td-sub-name"> Whitney Meier</td>
                          <td className="td-sub-name">06 Oct, 2021</td>
                          <td className="td-sub-name">$21.25</td>
                          <td>
                            <span className="badge bg-danger">Refund</span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-light detail-btn"
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="cardtableCheck01"
                              />
                              <label
                                className="form-check-label"
                                for="cardtableCheck01"
                              ></label>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="fw-medium order-code">
                              #VL2107
                            </a>
                          </td>
                          <td className="td-sub-name">Justin Maier</td>
                          <td className="td-sub-name">05 Oct, 2021</td>
                          <td className="td-sub-name">$25.03</td>
                          <td>
                            <span className="badge bg-success">Paid</span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-light detail-btn"
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
       

        
      </div>
    </div>
  );
}

export default Table;
