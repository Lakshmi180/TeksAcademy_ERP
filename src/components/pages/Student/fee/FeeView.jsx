import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import GaugeChart from './GaugeChart';
const FeeView = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="card border-0">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-lg-7 mt-3">
                                <div className="row d-flex justify-content-between">
                                    <div className="col-6">
                                        <label
                                            for="firstNameinput"
                                            className="form-label fs-s fw-medium txt-color">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control fs-s bg-form txt-color"
                                            placeholder="Lakshmi"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label
                                            for="firstNameinput"
                                            className="form-label fs-s fw-medium txt-color">
                                            Course
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control fs-s bg-form txt-color"
                                            placeholder="Testing"
                                        />
                                    </div>
                                    <div className="col-6 mt-3">
                                        <label
                                            for="firstNameinput"
                                            className="form-label fs-s fw-medium txt-color">
                                            Paid Amount
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control fs-s bg-form txt-color"
                                            placeholder="5000"
                                        />
                                    </div>
                                    <div className="col-6 mt-3">
                                        <label
                                            for="firstNameinput"
                                            className="form-label fs-s fw-medium txt-color">
                                            Extra Discount
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control fs-s bg-form txt-color"
                                            placeholder="10%"
                                        />
                                    </div>
                                    <div className="col d-flex justify-content-end mt-3">
                                        <button className='btn btn_primary'>Add Discount</button>
                                    </div>
                                </div>
                                <div class="accordion mt-3" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingFive">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                Admission Fee
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <div className="table-responsive table-card border-0">
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

                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className=''>
                                                            {/* 1st row */}
                                                            <tr>
                                                                <td className='fs_13 black_color fw_500 lh_xs bg_light '>
                                                                    <input type='number' className='w-100 form-control fs-s bg-form txt-color' placeholder='500' />
                                                                </td>
                                                                <td className='fs_13 black_color  lh_xs bg_light'>
                                                                    <input type='number' className='w-100 form-control fs-s bg-form txt-color' placeholder='18-Mar-2024' />
                                                                </td>
                                                                <td className='fs_13 black_color  lh_xs bg_light'>
                                                                    <select class="form-select form-select-lg mb-3 fs_13 mt-3" aria-label=".form-select-lg example">
                                                                        <option selected>Select UPI</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>

                                                                </td>
                                                                <td className='fs_13 black_color  lh_xs bg_light'>
                                                                    <input type='number' className='w-100 form-control fs-s bg-form txt-color' placeholder='202403181523310045' />

                                                                </td>
                                                                <td className='fs_13 black_color lh_xs bg_light flex-row d-flex mt-3'>
                                                                    <button className='btn btn_primary'>Update</button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="card border mt-3">
                                        <div className="flex-row d-flex justify-content-start my-2">
                                            <div className="ms-3">
                                                <label
                                                    for="firstNameinput"
                                                    className="form-label fs-s fw-medium txt-color mt-2">
                                                    <h6> Fee Installments :</h6>
                                                </label>
                                            </div>
                                            <div className='ms-3'>
                                                <input
                                                    type="text"
                                                    className="form-control fs-s bg-form txt-color"
                                                    placeholder="Enter No.of Installments"
                                                />
                                            </div>
                                            <div className="ms-3">
                                                <button className='btn btn_primary'>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 p-0">
                                <div className='d-flex justify-content-center'>
                                    <GaugeChart />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <div className="accordion" id="accordionExampleOne">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                        Installment 1
                                    </button>
                                </h2>
                                <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExampleOne">
                                    <div className="accordion-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <div className="mb-3">
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
                                                    <div className="mb-3">
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
                                                    <div className="mb-3">
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
                                                    <div className="mb-3">
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
                                                    <div className="mb-3">
                                                        <label
                                                            for="firstNameinput"
                                                            className="form-label fs-s fw-medium txt-color">
                                                            Mode Of Payement
                                                        </label>
                                                        <select class="form-select form-select-lg mb-3 fs_13" aria-label=".form-select-lg example">
                                                            <option selected>select</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="mb-3">
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
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Installment 2
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse p-3" aria-labelledby="headingThree" data-bs-parent="#headingThree">
                                    <div className="accordion-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <div className="mb-3">
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
                                                    <div className="mb-3">
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
                                                    <div className="mb-3">
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
                                                    <div className="mb-3">
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
                                                    <div className="mb-3">
                                                        <label
                                                            for="firstNameinput"
                                                            className="form-label fs-s fw-medium txt-color">
                                                            Mode Of Payement
                                                        </label>
                                                        <select class="form-select form-select-lg mb-3 fs_13" aria-label=".form-select-lg example">
                                                            <option selected> select</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="mb-3">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div class="accordion" id="accordionExam">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
                                        Paid Fee
                                    </button>
                                </h2>
                                <div id="collapseTwenty" className="accordion-collapse collapse p-3" aria-labelledby="headingThree" data-bs-parent="#accordionExam">
                                    <div className="accordion-body">
                                        <div className="table-responsive table-card border-0">
                                            <table className="table table-centered align-middle table-nowrap equal-cell-table">
                                                <thead>
                                                    <tr className=''>
                                                        <th scope="col" className="fs_13 lh_xs fw_600 black_color ">
                                                            S.No
                                                        </th>
                                                        <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                                                            Fee Type
                                                        </th>
                                                        <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                                                            Due Date
                                                        </th>
                                                        <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                                                            Due Amount
                                                        </th>
                                                        <th scope="col" className="fs_13 lh_xs black_color fw_600  ">
                                                            Paid Amount
                                                        </th>
                                                        <th scope="col" className="fs_13 lh_xs black_color fw_600 ">
                                                            Paid Date
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
                                                            1
                                                        </td>
                                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                                            ADmission Fee
                                                        </td>
                                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                                            12-2-2024
                                                        </td>
                                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                                            15000
                                                        </td>
                                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                                            499
                                                        </td>
                                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                                            1-2-2024
                                                        </td>
                                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                                            Cash
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
                                                    {/* 2nd row */}
                                                    <tr>
                                                        <td className='fs_13 black_color fw_500 lh_xs bg_light '>
                                                            2
                                                        </td>
                                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                                            Installment
                                                        </td>
                                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                                            12-2-2024
                                                        </td>
                                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                                            10000
                                                        </td>
                                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                                            10000
                                                        </td>
                                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                                            1-2-2024
                                                        </td>
                                                        <td className='fs_13 black_color  lh_xs bg_light'>
                                                            Cash
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeeView;
