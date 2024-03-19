import React from "react";
import "../../../../assets/css/common/Table.css";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { PiAtBold } from "react-icons/pi";
function StudentApplicationPrint() {
  return (
    <div>
      <div className="container-fluid">
        <div className="page">
          <div className="application">
            <div className="row">
              <div className="col-12 col-md-5 col-lg-5 col-xl-5">
                <h5 className="text_black fw-600 fs_18 p-0">
                  Kapil Knowledge Hub Private Limited
                </h5>
                <p className="p-0 fs-14"> CIN: U80100TG2018PTC123853</p>
                <p className="p-0 fs-14">
                  {" "}
                  <IoMdMail className="fs-16" /> info@teksacademy.com
                </p>
                <p className="p-0 fs-14">
                  <IoCall className="fs-16" />
                  1800-120-4748{" "}
                </p>
                <p className="p-0 fs-14">
                  {" "}
                  <PiAtBold className="fs-16" />
                  www.teksacademy.com
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-center ">
                <img
                  src="https://www.admin.teksacademy.com/static/media/Teks-Logo-with-Trade.07d75f2c54a71180af08.png"
                  className=" w-75 "
                  alt=""
                />
                <p className="fs-15 mt-4">
                  <b>Branch:</b> Kukatpally
                </p>
              </div>
            </div>

            <div className="card p-2 ">
              <div className="card-title">
                {" "}
                <h5>Student Details</h5>
              </div>
              <div className="row">
                <div className="col-12 col-md-7 col-lg-8 col-xl-8 ">
                  <div className="card-body">
                    <div className="table table-responsive table-card  d-flex">
                      <table className="table align-middle table-nowrap mb-0">
                        <tbody>
                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Name
                            </th>
                            <td className="fs_13 black_color bg-light ">
                              07 Oct, 2021
                            </td>
                          </tr>

                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Parent Name
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                          </tr>
                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Date of Birth
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                          </tr>
                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Gender
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                          </tr>
                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Marital Status
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                          </tr>
                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              College/Company
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className=" col-12 col-md-5 col-lg-4 col-xl-4  text-center mt-2">
                  <img
                    src="https://teksacademyimages.s3.amazonaws.com/IMG_20210303_181534.jpg"
                    className="w-50"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="card p-2 ">
              <div className="card-title">
                {" "}
                <h5>Student Details</h5>
              </div>
              <div className="row">
                <div className="col-12 col-lg-12 col-sm-6 col-md-12">
                  <div className="card-body">
                    <div className="table table-responsive table-card  d-flex">
                      <table className="table align-middle table-nowrap mb-0">
                        <tbody>
                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Country
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>

                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Native Place
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                          </tr>
                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              State
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>

                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Area
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                          </tr>
                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Mobile Number
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>

                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Whatsapp Number
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                          </tr>
                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Present Address
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>

                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Zipcode
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                          </tr>
                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Email Address
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-2 ">
              <div className="card-title">
                {" "}
                <h5>Educational Details</h5>
              </div>
              <div className="row">
                <div className="col-12 col-lg-12 col-sm-6 col-md-12">
                  <div className="card-body">
                    <div className="table table-responsive table-card  d-flex">
                      <table className="table align-middle table-nowrap mb-0">
                        <tbody>
                          <th
                            scope="col"
                            className="fs_14 lh_xs black_color fw_600"
                          >
                            Sr.No
                          </th>
                          <th
                            scope="col"
                            className="fs_14 lh_xs black_color fw_600"
                          >
                            Education
                          </th>
                          <th
                            scope="col"
                            className="fs_14 lh_xs black_color fw_600"
                          >
                            Marks(Percentage)
                          </th>
                          <th
                            scope="col"
                            className="fs_14 lh_xs black_color fw_600"
                          >
                            Academic Year
                          </th>
                          <tr>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-2 ">
              <div className="card-title">
                {" "}
                <h5>Student Details</h5>
              </div>
              <div className="row">
                <div className="col-12 col-lg-12 col-sm-6 col-md-12">
                  <div className="card-body">
                    <div className="table table-responsive table-card  d-flex">
                      <table className="table align-middle table-nowrap mb-0">
                        <tbody>
                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Enquiry Taken
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>

                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Reg Number
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                          </tr>
                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Enquiry Taken By
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>

                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Lead Source
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                          </tr>
                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Course Package
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>

                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Course
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                          </tr>
                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Admission Date
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>

                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Mode Of Training
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                          </tr>
                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Expected End Date
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Course Start Date
                            </th>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-2 ">
              <div className="card-title">
                {" "}
                <h5>Fee Details</h5>
              </div>
              <div className="row">
                <div className="col-12 col-lg-12 col-sm-6 col-md-12">
                  <div className="card-body">
                    <div className="table table-responsive table-card  d-flex">
                      <table className="table align-middle table-nowrap mb-0">
                        <tbody>
                          <th
                            scope="col"
                            className="fs_14 lh_xs black_color fw_600"
                          >
                            Fee Type
                          </th>
                          <th
                            scope="col"
                            className="fs_14 lh_xs black_color fw_600"
                          >
                            Fee Amount
                          </th>
                          <th
                            scope="col"
                            className="fs_14 lh_xs black_color fw_600"
                          >
                            Discount
                          </th>
                          <th
                            scope="col"
                            className="fs_14 lh_xs black_color fw_600"
                          >
                            Tax
                          </th>
                          <th
                            scope="col"
                            className="fs_14 lh_xs black_color fw_600"
                          >
                            Total Fee
                          </th>

                          <tr>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                          </tr>
                          <tr>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                            <td className="fs_13 black_color ">07 Oct, 2021</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-2 ">
              <div className="card-title">
                {" "}
                <h5>Assets</h5>
              </div>
              <div className="row">
                <div className="col-12 col-lg-12 col-sm-6 col-md-12">
                  <div className="card-body">
                    <div className="table table-responsive table-card  d-flex">
                      <table className="table align-middle table-nowrap mb-0">
                        <tbody>
                          <tr>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Provided
                            </th>
                            <td className="fs_13 black_color ">Ims</td>
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Issue Date
                            </th>
                            <td className="fs_13 black_color ">12-march</td>
                          </tr>
                          <tr>
                            {" "}
                            <th
                              scope="col"
                              className="fs_14 lh_xs black_color fw_600"
                            >
                              Comments
                            </th>
                            <td className="fs_13 black_color ">NA</td>
                          </tr>
                          <tr>
                            <td className="fs_13 black_color fw-600 text-start">
                              For Office Purpose
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card">
                  <div className="bg-yellow">
                    <div className="card-body p-5">
                      <div className="text-center">
                        <h3 className="fs-22 fw-500">Terms And Conditions</h3>
                        <p class="mb-0 text-mute fs-14">
                          Last update: 16 Sept, 2022
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <div>
                      <h5 className="fs-14 fw-600"> 1.Admission:</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1. Students must provide all required documents and
                        information during the admission process.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        2. Admission will be confirmed only after payment of the
                        booking amount, as decided by the management from time
                        to time.
                      </p>
                    </div>

                    <div>
                      <h5 className="fs-14 fw-600"> 2. Fees:</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1. Students shall pay the course fees as per the due
                        dates / terms mentioned overleaf. Fees shall not
                        refundable/non-transferable/non-adjustable, under any
                        circumstances.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        2.Late payment of fees shall attract penal interest
                        @1.5% per month.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        3.Teks academy reserves its right to cancel the
                        admission, in case of non-payment of fees, as per the
                        agreed due dates.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        4. Course fees may vary from student to student, based
                        on their merit and other relevant factors as determined
                        by the Teks Academy (“Academy) administration, at its
                        sole discretion.
                      </p>
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600"> 3. Course Material:</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1. The course material provided by the Academy is the
                        intellectual property of Teks Academy and cannot be
                        reproduced or used for commercial purposes without
                        written permission of the Academy.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        2.Any damage or loss of course material will be the
                        responsibility of the student and shall attract
                        additional charges for extra material copy of the course
                        material as decided by the administration from time to
                        time.
                      </p>
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600"> 4. Attendence:</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1. Regular attendance is essential for successfully
                        completing the course and obtaining a certificate.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        2.In case of Continuous absence of 3 classes, without
                        intimation, Academy reserves its right, to terminate the
                        admission.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        3.In case of absence, Make-up / Extra classes may be
                        arranged at the discretion of the Academy and subject to
                        availability of resources. For clarity, the Academy is
                        not obliged to provide the makeup/extra classes.
                      </p>
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">5. Conduct</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1.Students must conduct themselves respectfully towards
                        the Academy staff, fellow students, and not spoil the
                        Academy's property.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        2.Any form of harassment, discrimination, or bullying
                        will not be tolerated and may lead to immediate
                        expulsion of the student from the Academy.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        3.Use of drugs or alcohol within the Academy's premises
                        is strictly prohibited and shall lead to immediate
                        expulsion from the Academy.
                      </p>
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">6. Certification :</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1.Certificates will be awarded to students who
                        successfully complete the course as per the Academy's
                        criteria, as decided by the management from time to
                        time.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        2.The certificate does not guarantee employment or
                        acceptance/admission into any institution.student from
                        the Academy.
                      </p>
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">7. Liablity:</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1.The Academy is not responsible for any injury, loss,
                        or damage to the students or their belongings within the
                        Academy's premises or during any offsite activit
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        2.Students must take responsibility for their personal
                        safety and belongings while attending classes at the
                        Academy or any other location.
                      </p>
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">8. Change in Policies:</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1.The Academy may revise its policies, rules and
                        regulations, course structure, fees, timings, or any
                        other aspect of the Academy at its sole discretion from
                        time to time, without prior notice to the students.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        2.Such revised policies will be applicable to all
                        existing and new students.
                      </p>
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">9. Dispute Resolutions:</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1.Any dispute arising out of or related to these terms
                        and conditions shall be resolved amicably through mutual
                        discussion and agreement between the Academy and the
                        student. Any unresolved dispute shall be subject to the
                        jurisdiction of the courts of Hyderabad, Telangana,
                        India.
                      </p>
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">
                        10. Termination of Admission:
                      </h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1.The Academy reserves the right to terminate the
                        admission of any student at any time, without assigning
                        any reason.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        2.In such cases, Academy may at its sole discretion,
                        refund a portion of the fees that completely depends on
                        Academy’s decision and on the duration of the course
                        completed by the student.
                      </p>
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">
                        11. No Placemets Guarantee
                      </h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1.The Academy does not provide any placement guarantee
                        to the students but may assist them in finding suitable
                        job opportunities through guidance, counseling.
                      </p>
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">12. Using Id Card</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1.Each student will be issued an identification card (ID
                        card) by the Academy, and it must be carried by the
                        student at all times while attending classes or any
                        other activities conducted by the Academy.
                      </p>
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">
                        13. Copiying Institute Content
                      </h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1.Distributing any of the any other Academy's / Coaching
                        centers brochures /course material, including lectures,
                        notes, presentations, or any other content, promoting of
                        any other coaching institutes is strictly prohibited.
                        Any violation of this rule may lead to immediate
                        expulsion from the Academy and legal action may be taken
                        against the student.
                      </p>
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">14. Teaching Staff:</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1.While the Academy will endeavor to provide training
                        with a specific teaching staff member, there is no
                        commitment to do so.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        2.The Academy reserves the right to assign trainers
                        based on availability, and students cannot demand a
                        specific trainer.
                      </p>
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">15. Course Curriculum</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1. The Academy reserves the right to update the course
                        curriculum at its discretion, without any prior notice
                        to the students.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        2.Students are expected to keep themselves updated with
                        any changes in the course curriculum.
                      </p>
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">16. Course Duration:</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1. The course duration may vary from batch to batch, depending on factors such as students' attendance, training methodology, and other relevant factors as determined by the Academy.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        2.The Academy reserves the right to change the course duration at any time without prior notice.
                      </p>
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">17. Paid Internship Support:</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1. The Academy may assist students in finding suitable paid internships based on their skills and interests.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        2.The Academy will not guarantee any specific internship or job placement.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        3.The Academy may charge a separate fee for providing internship support services.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        4.The Academy will not be liable for any issues or disputes that arise between the student and the internship provider.
                      </p>
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">18. Project Assignment:</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1.The Academy may provide practice projects to the students for upgrading their learning and skill development.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        2.The projects assigned may be either Capstone, live or previously completed projects, depending on availability and suitability.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        3.Students must complete the project within the given time frame and submit it to the Academy for evaluation.
                      </p>
                     
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">19. Intellectual Property:</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        1.All intellectual property created by students during the live project or internship belongs to the Academy.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        2.The Academy may use such intellectual property for promotional or educational purposes, at its sole discretion.
                      </p>
                      <p class="text-mute fs-14 ms-3">
                        3.The Academy will not claim any ownership rights over the student's intellectual property.
                      </p>
                     
                    </div>

                    <div> <h5 className="fs-14 fw-600 p-3">Privacy Policy:</h5></div>
                    

                    <div>
                      <h5 className="fs-14 fw-600">1.  Information Collection :</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        We collect personal information such as name, email address, phone number, and other details from students at the time of enrollment.
                      </p>
                      
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">2.  Use Of Information:</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        We use the information collected to contact students regarding course updates, provide course materials, and issue certificates of completion.
                      </p>
                      
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">3. Information Sharing:</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        We do not share personal information with any third parties without the student's consent, except as required by law.
                      </p>
                      
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">4. Security:</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        We take reasonable measures to ensure the security of the personal information collected from students.
                      </p>
                      
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">5. Cookies:</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        We use cookies on our website to track user behavior and improve the user experience. Students can disable cookies in their web browser if they choose to do so.
                      </p>
                      
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">6. Data Retention :</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        We retain personal information for as long as necessary to provide the course and related services, or until the student requests that their information be deleted.
                      </p>
                      
                    </div>
                    <div>
                      <h5 className="fs-14 fw-600">7.Modification:</h5>
                      <p class="text-mute fs-14 ms-3">
                        {" "}
                        We reserve the right to modify this privacy policy at any time without prior notice.
                      </p>
                      
                    </div>
                    <div className="p-2">
                      
                      <p class="text-mute fs-14 ">
                      By signing this form, you acknowledge that you have read, understood, and agree to abide by the terms and conditions and privacy policy. </p>
                       
                      <p class="text-mute fs-14 ">
                      Further I hereby give my consent for Kapil Group of Companies or Teks Academy and its affiliates, to send their promotional emails/communication to me.
                       
                      </p>
                      
                    </div>
                    <div className="row">
                    <div className="col-6"><h6 className="fs-14 fw-600 p-2">Date :</h6><h6 className="fs-14 fw-600 p-2"> Place :</h6></div>
                    <div className="col-6"><h6 className="fs-14 fw-600 p-2">Counsellor Signature : </h6><h6 className="fs-14 fw-600 p-2"> Student Signature : </h6></div></div>
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

export default StudentApplicationPrint;
