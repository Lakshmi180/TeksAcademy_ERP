import React from 'react'
import logo from "../../../../images/student_idCard_images/Tesks_Logo.png";
import detail from "../../../../images/student_idCard_images/Courses&details.png";
import { useReactToPrint } from 'react-to-print';
import "./StudentIdCard.css"

function StudentIdCard() {

    const componentRefff = React.useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRefff.current,
    });
  
    console.log(`Print ${componentRefff.current}`);
  return (
    <div className='container-fluid'>
<div className='me-2 p-3'>
<button class="btn btn_primary me-2 " onClick={handlePrint}>Print</button>
</div>

<div className="studentid   " ref={componentRefff}>
        <div className="idcard1   ">
          <div className="row">
            <div className=" col-6 col-md-6 col-lg-6 col-xl-6">
              <div className="student-info  ">
                <div className="teksimg">
                  <img className="mb-4 " src={logo} alt="" />
                </div>
                <p className=""> NAME: Vishakha chachane</p>
                <p className=" "> COURSE: Full stack java</p>
                <p className=" ">REG ID: TK123456789</p>
                <p className="">TIMING: 10:30</p>
                <p className=""> BRANCH: Hitech City</p>
              </div>
            </div>
            <div className="studid-photo col-6 col-md-6 col-lg-6 col-xl-6">
            <div className='stuimg'>
           
              <img
                className=" "
                src="https://teksacademyimages.s3.amazonaws.com/WhatsApp%20Image%202024-03-19%20At%207.12.42%20PM.jpeg"
                alt="photo"
              />
            </div>
              <p className="" style={{ color: "#2a619d" }}>
                Valid Upto:
              </p>
            </div>
          </div>

          <div className="idcard2  w-100 m-auto mt-2 ">
          <div className="d-flex flex-column justify-content-center p-4">
            <img className=" tekslogo m-auto " src={logo} alt=""></img>

            <img className="detail  m-auto" src={detail} alt=""></img>
          </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default StudentIdCard