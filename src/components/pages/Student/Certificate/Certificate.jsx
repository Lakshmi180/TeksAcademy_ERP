import React, { useState } from 'react'
import "../../../../assets/css/common/Table.css"
import { AiFillEye } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { MdLocalPrintshop } from "react-icons/md";
import { FaRegIdCard } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { RiDeleteBin2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useStudentsContext } from '../../../../hooks/useStudentsContext';
import Usedebounce from '../../../../hooks/useDebounce/Usedebounce';
import { toast } from 'react-toastify';
import axios from 'axios';



function Certificate() {



  const { studentState, studentState: { CertificateStudents }, Dispatchstudents, getPaginatedCertificateData } = useStudentsContext();

  const [courseEndDate, setcourseEndDate] = useState();
  const [courseStartDate, setcourseStartDate] = useState();
  console.log(courseEndDate, "setcourseStartDatedf")


  console.log()

  const handleRequest = async (studentid) => {

    console.log(courseStartDate, courseEndDate, "requestedcourssesdates")

    if (!courseStartDate) {
      toast.error("Course Start Date is required")
      return false;
    }
    else if (!courseEndDate) {
      toast.error("Course End Date is required")
      return false
    }
    else if (courseStartDate > courseEndDate) {
      toast.error("CourseEndDate should be greater than CourseStartDate")
      return false;
    }

    else if (courseStartDate && courseEndDate) {
      if (courseStartDate < courseEndDate) {

        let certificate_status = [
          {
            courseStartDate: courseStartDate,
            courseEndDate: courseEndDate,
            certificateStatus: "request Submitted",
          },
        ];

        console.log(certificate_status, "certificate_status")
        const updatedData = {
          certificate_status,
        };

        const uploadcontext = { certificate_status, studentid };

        console.log("certificate_status", updatedData);
        console.log("id", studentid);

        try {
          const { data, status } = await toast.promise(axios.put(`${process.env.REACT_APP_API_URL}/certificatestatus/610`, updatedData), {
            loading: "Loading...",
            success: "Certificate Request Submitted Successfully",
            error: "Something went wrong Please try again"
          })

          console.log(data, status, "certificatestsufgh")

          if (status === 200) {
            getPaginatedCertificateData();
            setcourseEndDate("")
            setcourseStartDate("")
          }

        }
        catch (error) {
          console.log(error)
        }
      }
    }
  }






  // here the pagination, search, and filters------------------
  const { debouncesetSearch, debouncesetPage } = Usedebounce(Dispatchstudents);

  const handleSearch = (e) => {
    debouncesetSearch({ context: "CERTIFICATE_STUDENTS", data: e.target.value })
  }

  const handlePerPage = (e) => {
    const selectedvalue = parseInt(e.target.value, 10);
    Dispatchstudents({
      type: "SET_PER_PAGE",
      payload: {
        context: "CERTIFICATE_STUDENTS",
        data: selectedvalue,
      }
    })
  }
  //filter

  const [filterCriteria, setfilterCriteria] = useState({
    fromDate: "",
    toDate: "",
    course: "",
    enquiryTakenBy: "",
    branch: "",
    certificateStatus: "",
  })

  console.log(filterCriteria, "hereradvvcvm")
  const HandleFilterCertria = (e) => {
    const { name, value } = e.target;
    setfilterCriteria((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const FilterReset = () => {
    setfilterCriteria({
      fromDate: "",
      toDate: "",
      course: "",
      enquiryTakenBy: "",
      branch: "",
      certificateStatus: "",
    })
  }

  const filterSubmit = () => {
    console.log("filterCriteria", filterCriteria)
    Dispatchstudents({
      type: "SET_FILTERS",
      payload: {
        context: "CERTIFICATE_STUDENTS",
        data: {
          fromDate: filterCriteria.fromDate,
          toDate: filterCriteria.toDate,
          course: filterCriteria.course,
          enquiryTakenBy: filterCriteria.enquiryTakenBy,
          branch: filterCriteria.branch,
          certificateStatus: filterCriteria.certificateStatus
        }
      }
    })
  }


  //here the pagination 

  let currentPage = CertificateStudents.currentPage
  const totalPages = CertificateStudents.totalPages;

  console.log(currentPage, "cuurentpageherdfdfe ", CertificateStudents.currentPage)



  const changePage = (page) => {
    debouncesetPage({ context: "CERTIFICATE_STUDENTS", data: page })
    currentPage = page;
    // setCurrentPage(page);
    // Add your logic here to handle page change
    console.log("Currentcpage:", page);
  };



  const previousPage = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      changePage(currentPage + 1);
    }
  };


  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, startPage + 2);
  if (endPage - startPage < 2) {
    startPage = Math.max(1, endPage - 2);
  }




  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="card border-0">
              <div class="card-header">
                <div className="row justify-content-between">
                  <div className="col-sm-4">
                    <div className="search-box">
                      <input type="text"
                        className="form-control search"
                        placeholder="Search for..."
                        name="search"
                        required
                        onChange={handleSearch}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex justify-content-end">
                      <div className="fs-13 me-3 mt-2">10/40</div>
                      <div className="me-2">
                        <select
                          className="form-select form-control me-3"
                          aria-label="Default select example"
                          placeholder="Branch*"
                          name="branch"
                          id="branch"

                          required
                          onChange={handlePerPage}
                        >
                          <option value="10">10</option>
                          <option value="20">20</option>
                          <option value="30">30</option>
                          <option value="40">40</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                          <option value="150">150</option>
                          <option value="200">200</option>
                          <option value="500">500</option>
                          <option value="750">750</option>
                        </select>
                      </div>
                      <button
                        className="btn btn_primary fs-13 me-2"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                      >
                        Filters
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="offcanvas offcanvas-end mt-5 pt-2 bg_white"
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div className="offcanvas-header">
                    <h5
                      className="offcanvas-title text_color"
                      id="offcanvasRightLabel"
                    >
                      Filters
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body p-2">
                    {/* from calendar */}
                    <div class="form-group text-start">
                      <label
                        class="form-label fs-s txt-color"
                        for="example-text-input "
                      >
                        From Date
                      </label>
                      <input
                        class="form-control fs-s bg-form"
                        type="date"
                        id="exampleInputdate"
                        name="fromDate"
                        value={filterCriteria.fromDate}
                        onChange={HandleFilterCertria}
                        required
                      />
                    </div>
                    {/* to calendar */}
                    <div class="form-group text-start mt-2">
                      <label
                        class="form-label fs-s txt-color"
                        for="example-text-input "
                      >
                        To Date
                      </label>
                      <input
                        class="form-control fs-s bg-form"
                        type="date"
                        id="exampleInputdate"
                        value={filterCriteria.toDate}
                        onChange={HandleFilterCertria}
                        name="toDate"
                        required
                      />
                    </div>
                    {/* Course */}
                    <div className="">
                      <label className="form-label fs-s fw-medium txt-color">
                        Course
                      </label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        placeholder="course*"
                        name="course"
                        id="course"
                        value={filterCriteria.course}
                        onChange={HandleFilterCertria}
                        required

                      >
                        <option value="1">Select Course</option>
                        <option value="2">Sr. Associate</option>
                        <option value="3">Regional Manager</option>
                        <option value="4">Branch Manager</option>
                        <option value="5">Counsellor</option>
                        <option value="6">Admin</option>
                      </select>
                    </div>

                    {/* Consellor */}
                    <div className="">
                      <label className="form-label fs-s fw-medium txt-color">
                        Consellor
                      </label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        placeholder="enquiryTakenBy*"
                        name="enquiryTakenBy"
                        id="enquiryTakenBy"
                        value={filterCriteria.enquiryTakenBy}
                        onChange={HandleFilterCertria}
                        required
                      >
                        <option value="1">Select Consellors</option>
                        <option value="2">Sr. Associate</option>
                        <option value="3">Regional Manager</option>
                        <option value="4">Branch Manager</option>
                        <option value="5">Counsellor</option>
                        <option value="6">Admin</option>
                      </select>
                    </div>
                    {/* branch */}
                    <div className="mt-2">
                      <label className="form-label fs-s fw-medium txt-color">
                        Branch
                      </label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        placeholder="branch*"
                        name="branch"
                        id="branch"
                        value={filterCriteria.branch}
                        onChange={HandleFilterCertria}
                        required
                      >
                        <option value="1">Select Branch</option>
                        <option value="2">Hitech City</option>
                        <option value="3">Kukkatpally</option>
                        <option value="4">Dilsukhnagar</option>
                        <option value="5">Secunderabad</option>
                        <option value="6">Testing</option>
                      </select>
                    </div>
                    {/* ceritificateSatus */}
                    <div className="mt-2">
                      <label className="form-label fs-s fw-medium txt-color">
                        Certificate Status
                      </label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        placeholder="certificateStatus*"
                        name="certificateStatus"
                        id="certificateStatus"
                        value={filterCriteria.certificateStatus}
                        onChange={HandleFilterCertria}
                        required
                      >
                        <option value="issued">issued</option>
                        <option value="not issued">not issued </option>
                        <option value="pending">pending </option>

                      </select>
                    </div>
                    <div>
                      <div className="position-absolute bottom-0 start-0 ms-2 mb-2">
                        <button className="btn btn_primary"
                          onClick={FilterReset}
                        >
                          Clear
                        </button>
                      </div>
                      <div className="position-absolute bottom-0 end-0 me-2 mb-2">
                        <button className="btn btn_primary"
                          onClick={filterSubmit}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div class="table-responsive table-card border-0">
                  <table className="table table-centered align-middle table-nowrap equal-cell-table">
                    <thead>
                      <tr className="">
                        {/* <th scope="col">
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
                        </th> */}
                        <th
                          scope="col"
                          className="fs_13 lh_xs fw_600 black_color "
                        >
                          S.No
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600  "
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600  "
                        >
                          Course
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600  "
                        >
                          Registration ID
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600 "
                        >
                          Course StartDate
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600 "
                        >
                          Course EndDate
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600 "
                        >
                          Certificate Status
                        </th>
                        <th
                          scope="col"
                          className="fs_13 lh_xs black_color fw_600 "
                        >
                          PDF
                        </th>
                      </tr>
                    </thead>
                    <tbody className=''>

                      {
                        CertificateStudents.PaginatedCertificateStudents && CertificateStudents.PaginatedCertificateStudents.length > 0 ? CertificateStudents.loading ? "" :
                          CertificateStudents.PaginatedCertificateStudents.map((item, index) => {

                            const certificate_Status = CertificateStudents.PaginatedCertificateStudents.certificate_status;

                            const courseStartDate = certificate_Status
                              .map((item) => item.courseStartDate)
                              .join(", ");
                            const courseEndDate = certificate_Status
                              .map((item) => item.courseEndDate)
                              .join(", ");
                            const certificateStatus = certificate_Status
                              .map((item) => item.certificateStatus)
                              .join(", ");

                            return (
                              <tr>
                                <td className='fs_13 black_color fw_500 lh_xs bg_light '>
                                  01
                                </td>
                                <td className='fs_13 black_color  lh_xs bg_light'>
                                  Lakshmi
                                </td>
                                <td className='fs_13 black_color  lh_xs bg_light'>
                                  DM
                                </td>
                                <td className='fs_13 black_color  lh_xs bg_light'>
                                  TASJDFJ12345
                                </td>
                                <td className='fs_13 black_color  lh_xs bg_light'>
                                  <div class="text-start">
                                    <input
                                      class="form-control fs-s bg-form w-75"
                                      type="date"
                                      id="exampleInputdate"
                                      name="courseStartDate"
                                      onChange={(e) => setcourseStartDate(e.target.value)}
                                      required
                                      value={courseStartDate !== "" ? courseStartDate : undefined}

                                    />
                                  </div>
                                </td>
                                <td className='fs_13 black_color  lh_xs bg_light '>
                                  <div class="text-start">
                                    <input
                                      class="form-control fs-s bg-form w-75"
                                      type="date"
                                      id="exampleInputdate border_none"
                                      name="courseEndDate"
                                      onChange={(e) => setcourseEndDate(e.target.value)}
                                      required
                                      value={courseEndDate !== "" ? courseEndDate : undefined}
                                    />
                                  </div>
                                </td>
                                <td className='fs_13 black_color lh_xs  bg_light'>
                                  {/* here the request the cerificate */}
                                  {
                                    certificateStatus === "" && (
                                      <button className="border border-1"
                                        type='button'
                                        onClick={handleRequest}

                                      >
                                        <span className='badge btn_primary fw_500'>Request Certificate</span>
                                      </button>
                                    )
                                  }

                                  {/* here the Request submitted */}

                                  {
                                    certificateStatus === "request Submitted" && (
                                      <button className="border border-1"
                                        type='button'

                                      >
                                        <span className='badge btn_primary fw_500'>Request Submitted</span>
                                      </button>
                                    )
                                  }

                                  {/* here the request issued */}


                                  {
                                    certificateStatus === "issued" && (
                                      <button className="border border-1"
                                        type='button'
                                      >
                                        <span className='badge btn_primary fw_500'>Issued Cerificate</span>
                                      </button>
                                    )
                                  }

                                </td>
                                <td className='fs_14 text_mute bg_light   lh_xs'>

                                </td>
                              </tr>

                            )
                          })
                          : <tr>
                            <td>
                              no data found
                            </td>

                          </tr>
                      }


                      {/* 1st row */}



                      {


                      }

                      <tr>
                        <td className="fs_13 black_color fw_500 lh_xs bg_light ">
                          01
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          Lakshmi
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          DM
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          TASJDFJ12345
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light">
                          <div class="text-start">
                            <input
                              class="form-control fs-s bg-form w-75"
                              type="date"
                              id="exampleInputdate"
                              onChange={(e) => setcourseStartDate(e.target.value)}
                              required
                            />
                          </div>
                        </td>
                        <td className="fs_13 black_color  lh_xs bg_light ">
                          <div class="text-start">
                            <input
                              class="form-control fs-s bg-form w-75"
                              type="date"
                              id="exampleInputdate border_none"
                              name="courseEndDate"
                              onChange={(e) => setcourseEndDate(e.target.value)}
                              required
                            />
                          </div>
                        </td>
                        <td className='fs_13 black_color lh_xs  bg_light'>

                          <button className='border border-0'
                            onClick={handleRequest}
                          >
                            <span className='badge btn_primary fw_500'>Request Certificate</span>
                          </button>

                        </td>
                        <td className='fs_14 text_mute bg_light   lh_xs'>

                        </td>
                        <td className="fs_14 text_mute bg_light   lh_xs"></td>
                      </tr>





                    </tbody>
                  </table>
                </div>
                <div className="align-items-center d-flex justify-content-between row text-center text-sm-start">
                  <div className="col-sm">

                  {
                      CertificateStudents.PaginatedCertificateStudents && CertificateStudents.PaginatedCertificateStudents.length > 0?
                      CertificateStudents?.loading ?
                       <div className="text_mute pagination-text">
                       Showing data is Loading ....
                       </div>
                       :
                      <div className="text_mute pagination-text">
                      Showing {" "}
                      <span className="fw-semibold">{CertificateStudents.startStudent}</span>{"  "}
                      to{"  "}
                      <span className="fw-semibold">{CertificateStudents.endStudent}</span>{"  "}
                      of{"  "}
                      <span className="fw-semibold">{"  "}
                        {CertificateStudents.searchResultStudents}
                      </span> Results
                    </div>
                      :
                      <div className="text_mute pagination-text">
                      Showing {" "}
                      <span className="fw-semibold">0</span>{"  "}
                      to{"  "}
                      <span className="fw-semibold">0</span>{"  "}
                      of{"  "}
                      <span className="fw-semibold">{"  "}
                      {CertificateStudents.searchResultStudents}
                      </span> Results
                    </div>
                    }


                    {/* <div className="text_mute pagination-text">
                      Showing <span className="fw-semibold">5</span> of{" "}
                      <span className="fw-semibold">25</span> Results
                    </div> */}
                  </div>
                  <div className="col-sm-auto mt-3 mt-sm-0">
                    <ul className="mt-2 pagination pagination-separated pagination-sm mb-0 justify-content-center">

                      <li className='page-item p-1'>
                        <button
                          onClick={previousPage}
                          disabled={CertificateStudents.loading ? true : false || CertificateStudents.currentPage === 1}
                          style={{ cursor: CertificateStudents.loading || CertificateStudents.currentPage === 1 ? 'not-allowed' : 'auto' }}
                          className={`border border-1 ${CertificateStudents.loading ? 'disabled' : CertificateStudents.currentPage === 1 ? 'disabled' : 'cursor-auto'}`}
                        >
                          <span className="">
                            ←
                          </span>
                        </button>
                      </li>

                      {/* {[...Array(endPage - startPage + 1)].map((_, index) => {
                        const page = startPage + index;
                        return (

                          <li className={`page-item p-1`}>
                            <button key={page}
                              
                              onClick={() => changePage(currentPage === 1 && page === startPage ? 1 : page)}
                              disabled={CertificateStudents?.loading ? true : false}
                              className={`border page-link border-1 ${currentPage === page || (currentPage === 1 && page === startPage) ? 'active' : ''}`}
                            >
                              <span className=''>{page} </span>
                            </button>
                          </li>
                        );
                      })} */}


                      <li className='page-item p-1'>
                        <button
                          onClick={nextPage}
                          disabled={CertificateStudents.loading ? true : false || CertificateStudents.currentPage ===
                            CertificateStudents.totalPages}
                          style={{ cursor: CertificateStudents.loading || CertificateStudents.currentPage === CertificateStudents.totalPages ? 'not-allowed' : 'auto' }}
                          className={`border border-1${CertificateStudents.loading ? 'disabled' : CertificateStudents.currentPage === CertificateStudents.totalPages ? 'disabled' : 'cursor-auto'}`}
                        >
                          <span className="">
                            →
                          </span>
                        </button>
                      </li>



                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )

}

export default Certificate;
