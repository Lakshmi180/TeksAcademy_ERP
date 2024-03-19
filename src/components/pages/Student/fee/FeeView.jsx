import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
const FeeView = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="card border-0">
                    <div class="card-header">
                        <div className='d-flex justify-content-between'>
                            <h4>Lakshmi Fee Details</h4>
                            <button className='btn btn_primary'>Extra Discount</button>
                        </div>
                    </div>
                    <div className="card-body">
                        {/* first table */}
                        <div class="table-responsive table-card border-0">
                            <table className="table table-centered align-middle table-nowrap equal-cell-table">
                                <thead>
                                    <tr className=''>
                                        <th scope="col" className="fs_13 lh_xs fw_600 black_color ">
                                            Total Amount
                                        </th>
                                        <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                                            Paid Amount
                                        </th>
                                        <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                                            Due Amount
                                        </th>
                                        <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                                            Extra Discount
                                        </th>
                                        <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                                            Paid Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {/* 1st row */}
                                    <tr>
                                        <td className='fs_13 black_color fw_500 lh_xs bg_light '>
                                            24,500
                                        </td>
                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                            0
                                        </td>
                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                            0
                                        </td>
                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                            0
                                        </td>
                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                            1/1 <FaCheckCircle />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="container">
                                <h4>Installment 2</h4>
                                <form>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div class="mb-3">
                                                <label
                                                    for="firstNameinput"
                                                    className="form-label fs-s fw-medium txt-color">
                                                    Installment Date
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control fs-s bg-form txt-color"
                                                    placeholder="Installment Date"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div class="mb-3">
                                                <label
                                                    for="firstNameinput"
                                                    className="form-label fs-s fw-medium txt-color">
                                                    Installment Amount
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control fs-s bg-form txt-color"
                                                    placeholder="Installment Amount"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div class="mb-3">
                                                <label
                                                    for="firstNameinput"
                                                    className="form-label fs-s fw-medium txt-color">
                                                    Paid Date
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control fs-s bg-form txt-color"
                                                    placeholder="Paid Date"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div class="mb-3">
                                                <label
                                                    for="firstNameinput"
                                                    className="form-label fs-s fw-medium txt-color">
                                                    Paid Amount
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control fs-s bg-form txt-color"
                                                    placeholder="Paid Amount"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div class="mb-3">
                                                <label
                                                    for="firstNameinput"
                                                    className="form-label fs-s fw-medium txt-color">
                                                    Mode Of Payement
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control fs-s bg-form txt-color"
                                                    placeholder=" Mode Of Payement"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div class="mb-3">
                                                <label
                                                    for="firstNameinput"
                                                    className="form-label fs-s fw-medium txt-color">
                                                    Transation ID
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control fs-s bg-form txt-color"
                                                    placeholder="Transation ID"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button className='btn btn_primary'>Update</button>
                                </form>
                                <form>
                                    <h4 className='mt-5'>Fee Installments</h4>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div class="mb-3">
                                                <label
                                                    for="firstNameinput"
                                                    className="form-label fs-s fw-medium txt-color">
                                                    Enter No.of Installments
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control fs-s bg-form txt-color"
                                                    placeholder="Enter No.of Installments"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-3 mb-3">
                                            <button className='btn btn_primary'>Add No. of Installments</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="mt-5"></div>
                        {/* second table */}
                        <div class="table-responsive table-card border-0">
                            <table className="table table-centered align-middle table-nowrap equal-cell-table">
                                <thead>
                                    <tr className=''>
                                        <th scope="col" className="fs_13 lh_xs fw_600 black_color ">
                                            Admission Fee
                                        </th>
                                        <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                                            Paid Date
                                        </th>
                                        <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                                            Mode of Payment
                                        </th>
                                        <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                                            Transition ID
                                        </th>
                                        <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                                            Invoice
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {/* 1st row */}
                                    <tr>
                                        <td className='fs_13 black_color fw_500 lh_xs bg_light '>
                                            500
                                        </td>
                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                            18-Mar-2024
                                        </td>
                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                            UPI
                                        </td>
                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                            202403181523310045
                                        </td>
                                        <td className='fs_13 black_color lh_xs bg_light flex-row d-flex'>
                                            <div className='me-2' data-bs-toggle="tooltip" data-bs-placement="top" title="Admin">
                                                <FaFileInvoice />
                                            </div>
                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Student">
                                                <FaFileInvoice />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className="mt-5"></div>
                        {/* third table */}
                        <div class="table-responsive table-card border-0">
                            <table className="table table-centered align-middle table-nowrap equal-cell-table">
                                <thead>
                                    <tr className=''>
                                        <th scope="col" className="fs_13 lh_xs fw_600 black_color ">
                                            Installment
                                        </th>
                                        <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                                            Due Date
                                        </th>
                                        <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                                            Due Amount
                                        </th>
                                        <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                                            Paid Date
                                        </th>
                                        <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                                            Paid Amount
                                        </th>
                                        <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                                            Mode of Payment
                                        </th>
                                        <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                                            Transition ID
                                        </th>
                                        <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                                            Invoice
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {/* 1st row */}
                                    <tr>
                                        <td className='fs_13 black_color fw_500 lh_xs bg_light '>
                                            Installment 1
                                        </td>
                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                            18-Mar-2024
                                        </td>
                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                            24,000
                                        </td>
                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                            18-Mar-2024
                                        </td>
                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                            24,000
                                        </td>
                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                            UPI
                                        </td>
                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                            202403181523310045
                                        </td>
                                        <td className='fs_13 black_color  lh_xs bg_light flex-row d-flex'>
                                            <div className='me-2' data-bs-toggle="tooltip" data-bs-placement="top" title="Admin">
                                                <FaFileInvoice />
                                            </div>
                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Student">
                                                <FaFileInvoice />
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
    );
}

export default FeeView;
