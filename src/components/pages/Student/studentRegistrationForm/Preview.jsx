import React from "react";

export const Preview = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 text-center">
          <img
            className="img-fluid "
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="user_img"
            width={"50%"}
          />
        </div>
        <div className="col-lg-4">
          <p className="text_color">
            <b className="prev_bold">Name:</b> John Doe
          </p>
          <p className="text_color">
            <b className="prev_bold">Email:</b> johnDoe@example.com
          </p>
          <p className="text_color">
            <b className="prev_bold">Date Of Birth:</b> 12-02-1947
          </p>
          <p className="">
            <b className="prev_bold">Number:</b> 1234567891
          </p>
        </div>
        <div className="col-lg-4">
          <p className="text_color">
            <b className="prev_bold">WhatsApp Number:</b> 1234567891
          </p>
          <p className="text_color">
            <b className="prev_bold">Gender:</b> Male
          </p>
          <p className="text_color">
            <b className="prev_bold">Marital Status:</b> Single
          </p>
          <p className="text_color">
            <b className="prev_bold">College/School/Company:</b> St John's
            University
          </p>
        </div>


        <div className="col-lg-4">
          <p className="text_color">
            <b className="prev_bold">Pincode:</b> 12345
          </p>
          <p className="text_color">
            <b className="prev_bold">Country:</b> USA
          </p>
          <p className="text_color">
            <b className="prev_bold">Native Place:</b> USA
          </p>
          <p className="text_color">
            <b className="prev_bold">Area:</b> USA
          </p>
        </div>
        <div className="col-lg-4">
          <p className="text_color">
            <b className="prev_bold">Parent's Name:</b> Blah Blah
          </p>
          <p className="text_color">
            <b className="prev_bold">Parent's Number:</b> USA
          </p>
          <p className="text_color">
            <b className="prev_bold">Relation:</b> Other
          </p>
        </div>

        <div className="col-lg-4">
          <p className="text_color">
            <b className="prev_bold">Education Type:</b> 12345
          </p>
          <p className="text_color">
            <b className="prev_bold">Qualifications:</b> USA
          </p>
          <p className="text_color">
            <b className="prev_bold">Percentage:</b> USA
          </p>
          <p className="text_color">
            <b className="prev_bold">Academic Year:</b> USA
          </p>
        </div>

        <div className="col-lg-4">
          <p className="text_color">
            <b className="prev_bold">Enquiry Date:</b> 12345
          </p>
          <p className="text_color">
            <b className="prev_bold">Enquiry taken by:</b> USA
          </p>
          <p className="text_color">
            <b className="prev_bold">Course Package:</b> USA
          </p>
          <p className="text_color">
            <b className="prev_bold">Course:</b> USA
          </p>
        </div>

        <div className="col-lg-4">
          <p className="text_color">
            <b className="prev_bold">Lead Source:</b> 12345
          </p>
          <p className="text_color">
            <b className="prev_bold">Branch:</b> USA
          </p>
          <p className="text_color">
            <b className="prev_bold">Mode Of Training:</b> USA
          </p>
          <p className="text_color">
            <b className="prev_bold">Admission Date:</b> USA
          </p>
        </div>

        <div className="col-lg-4">
          <p className="text_color">
            <b className="prev_bold"> Validity Start Date:</b> 12345
          </p>
          <p className="text_color">
            <b className="prev_bold">Validity End Date:</b> USA
          </p>
        </div>
        <div className="col-lg-12">
          <div className="table-responsive mt-2 ">
            <table className="table table-hover align-midle table-nowrap mb-0">
              <thead>
                <tr>
                  <th scope="col" className="fs_14 lh_xs black_color">
                    ID
                  </th>
                  <th scope="col" className="fs_14 lh_xs black_color fw_600">
                    Fee Type
                  </th>
                  <th scope="col" className="fs_14 lh_xs black_color fw_600">
                    Fee (Excl. of GST)
                  </th>
                  <th scope="col" className="fs_14 lh_xs black_color fw_600">
                    Tax
                  </th>
                  <th scope="col" className="fs_14 lh_xs black_color fw_600">
                    Fee (Incl. of GST)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-medium fs_13 ">01</td>
                  <td className="fs_13 ">Course Fee</td>
                  <td className="fs_13 ">6482.37</td>
                  <td className="fs_13 ">1166.83</td>
                  <td className="fs_13 ">7649.2</td>
                </tr>
                <tr>
                  <td className="fw-medium fs_13 ">02</td>
                  <td className="fs_13 ">Admission Fee</td>
                  <td className="fs_13 ">395.76</td>
                  <td className="fs_13 ">71.24</td>
                  <td className="fs_13 ">467</td>
                </tr>
                <tr>
                  <td className="fw-medium fs_13 ">03</td>
                  <td className="fs_13 ">Sub Total</td>
                  <td className="fs_13 ">6878.14</td>
                  <td className="fs_13 ">1238.06</td>
                  <td className="fs_13 ">8116.2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-lg-12">
          <p className="text_color">
            <b className="prev_bold"> Remarks:</b> 12345
          </p>
          <p className="text_color">
            <b className="prev_bold">Assets:</b> USA
          </p>
        </div>
      </div>
    </div>
  );
};
