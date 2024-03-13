import React from "react";

export const Billing = () => {
  return (
    <div>
      <div className="form_title">
        <h5 className="text_color fs-6">Billing Details</h5>
      </div>
      <div className="row">
        <div className="col-xl-12 ">
          <div className="table-responsive ">
            <table className="table table-hover align-midle table-nowrap mb-0">
              <thead>
                <tr>
                  <th scope="col" className="fs_14 lh_xs black_color">
                    ID
                  </th>
                  <th scope="col" className="fs_14 lh_xs black_color fw_600">
                    Gross Total
                  </th>
                  <th scope="col" className="fs_14 lh_xs black_color fw_600">
                    Total Discount
                  </th>
                  <th scope="col" className="fs_14 lh_xs black_color fw_600">
                    Total Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-medium fs_13 ">01</td>
                  <td className="fs_13 ">12499</td>
                  <td className="fs_13 ">0</td>
                  <td className="fs_13 ">12235.2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-xl-12 ">
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
      </div>
    </div>
  );
};
