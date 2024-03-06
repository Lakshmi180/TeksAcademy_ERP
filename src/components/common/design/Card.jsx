import React from 'react'
import "./../../../assets/css/common/Card.css"
import { HiArrowUpRight } from "react-icons/hi2";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaBagShopping } from "react-icons/fa6";
import { GoArrowDownRight } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

function Card() {
  return (
      <div className='container'>
    <div className="row d-flex ">
    <div className="col-xl-3 col-md-6  mb-4 ">
      <div className="card Totalearning d-flex justify-content-between shadow   bg-body-tertiary rounded">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className=" fw-medium text-black-50 head">TOTAL EARNING</p>
            <h5 className="text-success fs-14 card-number">
              <HiArrowUpRight /> +16.24%
            </h5>
          </div>
          <div className="d-flex justify-content-between">
            <h3>
              {" "}
              <span className="fs-22 dollar">$559.25k</span>
            </h3>
          </div>
          <div className="d-flex justify-content-between">
            <a href="#" className="link card-link">
              View net earnings
            </a>
            <div className="p-2 border d-flex justify-content-center text-success bg-success-subtle">
              <BiSolidDollarCircle />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className=" col-xl-3 col-md-6  mb-4 ">
      <div className="card orders shadow   bg-body-tertiary rounded">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className=" fw-medium head text-black-50">ORDERS</p>
            <h5 className="text-danger fs-14 card-number">
              <GoArrowDownRight /> -3.57%
            </h5>
          </div>
          <div className="d-flex justify-content-between">
            <h3>
              {" "}
              <span className="fs-22 dollar">36,849</span>
            </h3>
          </div>
          <div className="d-flex justify-content-between">
            <a href="#" className="link card-link">
              View All orders
            </a>
            <div className="p-2 border d-flex justify-content-center text-info bg-info-subtle">
              <FaBagShopping />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className=" col-xl-3 col-md-6  mb-4">
      <div className="card  customers shadow   bg-body-tertiary rounded">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className="fw-medium head text-black-50">CUSTOMERS</p>
            <h5 className="text-success fs-14 card-number ">
              <HiArrowUpRight /> +29.08%
            </h5>
          </div>
          <div className="d-flex justify-content-between">
            <h3>
              {" "}
              <span className="fs-22 dollar">183.35M</span>
            </h3>
          </div>
          <div className="d-flex justify-content-between">
            <a href="#" className="link card-link">
              View Customers
            </a>
            <div className="p-2 border d-flex justify-content-center text-warning bg-warning-subtle">
              <FaRegUserCircle />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-md-6  mb-4">
      <div className="card my-balance shadow   bg-body-tertiary rounded">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className=" fw-medium text-black-50">MY BALANCE</p>
            <h5 className="text-black-50 fs-14 card-number">+0.00%</h5>
          </div>
          <div className="d-flex justify-content-between">
            <h3>
              {" "}
              <span className="fs-22 dollar">$165.89k</span>
            </h3>
          </div>
          <div className="d-flex justify-content-between ">
            <a href="#" className="link card-link">
              View My Balance
            </a>
            <div className="p-2 border d-flex justify-content-center text-primary bg-primary-subtle">
              <MdOutlineAccountBalanceWallet />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Card
