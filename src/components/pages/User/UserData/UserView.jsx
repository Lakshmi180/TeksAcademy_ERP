import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
// import {UserPhoto} from "../../../../images/profile.jpg"
function UserView() {

  const navigate = useNavigate();
  const { courseId } = useParams();
  const [singleUser, setUser] = useState("");
  console.log(singleUser, "juhgjdgjgd")


  useEffect(() => {
    // Make a GET request to your backend API endpoint
    axios
      .get(`${process.env.REACT_APP_API_URL}/viewuser/${courseId}`)
      .then((response) => {
        // Handle the successful response here
        setUser(response.data[0]); // Update the data state with the fetched data
        console.log("studentdata---", response.data[0]);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error fetching data:", error);
      });
  }, [courseId]);



  return (

    <div className="container-fluid ">

      <div className='card'>

        <div className="card-border-0">
          <div className=''>
            <h5 className="mt-5 fs-16 txt-color ms-3 text-center "> User View</h5>
          </div>
          <div className='card-body '>
            <div className="row">
              <div className="col-12 col-md-4 col-lg-3 col-xl-3">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""

                />

              </div>
              <div className="col-12 col-md-4 col-lg-5 col-xl-5 ">
                <tr className="lh-500">
                  <td class="ps-0 black_300  fs-13  " scope="row">
                    User Name
                  </td>
                  <td class="text_black fs-14 ps-2  fw-500  ">  <b className=" fw-500 fs-13 pe-2"> :</b> {singleUser.fullname}</td>
                </tr>
                <tr className="lh-500">
                  <td class="ps-0 black_300  fs-13  " scope="row">
                   Email
                  </td>
                  <td class="text_black fs-14 ps-2  fw-500  ">  <b className=" fw-500 fs-13 pe-2"> :</b> {singleUser.email}</td>
                </tr>
                <tr className="lh-500">
                  <td class="ps-0 black_300  fs-13  " scope="row">
                  Phone No
                  </td>
                  <td class="text_black fs-14 ps-2  fw-500  ">  <b className=" fw-500 fs-13 pe-2"> :</b>{singleUser.phonenumber}</td>
                </tr>
                <tr className="lh-500">
                  <td class="ps-0 black_300  fs-13  " scope="row">
                Designation
                  </td>
                  <td class="text_black fs-14 ps-2  fw-500  ">  <b className=" fw-500 fs-13 pe-2"> :</b> {singleUser.designation}</td>
                </tr>
              </div>
              <div className="col-12 col-md-4 col-lg-4 col-xl-4  ">
              <tr className="lh-500">
                  <td class="ps-0 black_300  fs-13  " scope="row">
                  Department
                  </td>
                  <td class="text_black fs-14 ps-2  fw-500  ">  <b className=" fw-500 fs-13 pe-2"> :</b>{singleUser.department}</td>
                </tr>
                <tr className="lh-500">
                  <td class="ps-0 black_300  fs-13  " scope="row">
                 Report To
                  </td>
                  <td class="text_black fs-14 ps-2  fw-500  ">  <b className=" fw-500 fs-13 pe-2"> :</b>{singleUser.reportto}</td>
                </tr>
                <tr className="lh-500">
                  <td class="ps-0 black_300  fs-13  " scope="row">
               Profile
                  </td>
                  <td class="text_black fs-14 ps-2  fw-500  ">  <b className=" fw-500 fs-13 pe-2"> :</b>{singleUser.profile}</td>
                </tr>
                <tr className="lh-500">
                  <td class="ps-0 black_300  fs-13  " scope="row">
                  Branch
                  </td>
                  <td class="text_black fs-14 ps-2  fw-500  ">  <b className=" fw-500 fs-13 pe-2"> :</b>{singleUser.branch}</td>
                </tr>
                {/* <Link to={`/resetpassword/${id}`}>
                  Change Password
                </Link> */}
              </div>
            </div>
            <div className="" style={{ overflow: "hidden" }}>
              <table size="large" aria-label="a dense table">
                <table>
                  {/* <tr>
                                    <td className="table-cell-heading">
                                        Date
                                    </td>
                                    <td className="table-cell-heading">
                                        Status
                                    </td>
                                    <td className="table-cell-heading">
                                        Remarks
                                    </td>
                                </tr> */}
                </table>
                <tbody>
                  {singleUser.user_remarks_history &&
                    singleUser.user_remarks_history.map((userstatus, index) => {
                      // let date = useFormattedDate(userstatus.date);
                      // const originalDate = new Date(userstatus.date);
                      // const day = String(originalDate.getDate()).padStart(2, "0");
                      // const month = String(originalDate.getMonth() + 1).padStart(
                      //   2,
                      //   "0"
                      // ); // Month is zero-based, so we add 1.
                      // const year = originalDate.getFullYear();

                      // const formattedDate = `${day}-${month}-${year}`;
                      const date = new Date(userstatus.date);
                      const day = date.getUTCDate();
                      const monthIndex = date.getUTCMonth();
                      const year = date.getUTCFullYear();

                      const monthAbbreviations = [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ];

                      // Formatting the date
                      const Formatteddate = `${day < 10 ? "0" : ""}${day}-${monthAbbreviations[monthIndex]
                        }-${year}`;

                      return (
                        <tr
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                          key={index}
                        >
                          <td className="table-cell-heading">
                            {" "}
                            {Formatteddate}
                          </td>

                          {userstatus.Activate_remarks && (
                            <td className="table-cell-heading">
                              Active
                            </td>
                          )}
                          {userstatus.Inactivate_remarks && (
                            <td className="table-cell-heading">
                              Inactive
                            </td>
                          )}
                          {userstatus.Activate_remarks && (
                            <td className="table-cell-heading">
                              {userstatus.Activate_remarks}
                            </td>
                          )}
                          {userstatus.Inactivate_remarks && (
                            <td className="table-cell-heading">
                              {userstatus.Inactivate_remarks}
                            </td>
                          )}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            {/* <div className="backimg">
              <img className="pic" src={profilepic} alt="pic" />
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-xl-6 col-lg-6">
                <p className="text-start"> User Name :{singleUser.fullname}</p>
                <p className="text-start"> Email: {singleUser.email}</p>
                <p className="text-start"> Phone No: {singleUser.phonenumber}</p>
                <p className="text-start"> Designation: {singleUser.designation}</p>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6  text-start ">
                <p >Department : {singleUser.department}</p>
                <p > Report To : {singleUser.reportto}</p>
                <p > Profile : {singleUser.profile} </p>
                <p > Branch: {singleUser.branch}</p>
              </div>
    
              <TableContainer component={Paper} className="my-4">
                <Table
                  sx={{ minWidth: 650 }}
                  size="large"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell className="fs-6 text-center border border-2">
                        Date
                      </TableCell>
                      <TableCell className="fs-6 text-center border border-2">
                        Status
                      </TableCell>
                      <TableCell className="fs-6 text-center border border-2">
                        Remarks
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {singleUser.user_remarks_history &&
                      singleUser.user_remarks_history.map((userstatus, index) => {
                        // let date = useFormattedDate(userstatus.date);
                        // const originalDate = new Date(userstatus.date);
                        // const day = String(originalDate.getDate()).padStart(2, "0");
                        // const month = String(originalDate.getMonth() + 1).padStart(
                        //   2,
                        //   "0"
                        // ); // Month is zero-based, so we add 1.
                        // const year = originalDate.getFullYear();
    
                        // const formattedDate = `${day}-${month}-${year}`;
                        const date = new Date(userstatus.date);
                        const day = date.getUTCDate();
                        const monthIndex = date.getUTCMonth();
                        const year = date.getUTCFullYear();
    
                        const monthAbbreviations = [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ];
    
                        // Formatting the date
                        const Formatteddate = `${day < 10 ? "0" : ""}${day}-${
                          monthAbbreviations[monthIndex]
                        }-${year}`;
    
                        return (
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                            key={index}
                          >
                            <TableCell className="text-center border border-2">
                              {" "}
                              {Formatteddate}
                            </TableCell>
    
                            {userstatus.Activate_remarks && (
                              <TableCell className="text-center border border-2">
                                Active
                              </TableCell>
                            )}
                            {userstatus.Inactivate_remarks && (
                              <TableCell className="text-center border border-2">
                                Inactive
                              </TableCell>
                            )}
                            {userstatus.Activate_remarks && (
                              <TableCell className="text-center border border-2">
                                {userstatus.Activate_remarks}
                              </TableCell>
                            )}
                            {userstatus.Inactivate_remarks && (
                              <TableCell className="text-center border border-2">
                                {userstatus.Inactivate_remarks}
                              </TableCell>
                            )}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )

}

export default UserView