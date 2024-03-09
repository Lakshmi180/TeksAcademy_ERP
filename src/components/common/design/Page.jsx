import React from 'react'
import { IoCloseCircle } from "react-icons/io5";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { MdHome } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import "../../../assets/css/common/Page.css"
function Page() {
    return (
        <div>
            <div class="container">

                <div class="row mt-5">
                    <div class="d-inline-flex justify-content-center">
                        <ul class="nav nav-pills arrow-navtabs plan-nav rounded mb-3 p-1 " id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link fw-semibold " id="month-tab" data-bs-toggle="pill" data-bs-target="#month" type="button" role="tab" aria-selected="false" tabindex="-1">Monthly</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link fw-semibold active" id="annual-tab" data-bs-toggle="pill" data-bs-target="#annual" type="button" role="tab" aria-selected="true">Annually <span class="badge bg-success">25% Off</span></button>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xxl-3 col-lg-4 mt-3">
                        <div class="card pricing-box">
                            <div class="card-body bg-light m-2 p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="flex-grow-1">
                                        <h5 class="mb-0 fw-semibold fs-6">Starter</h5>
                                    </div>
                                    <div class="ms-auto  fsize">
                                        <h2 class="month mb-0 ">$19 <small class="fs-13 text-muted fsize">/Month</small></h2>
                                    </div>
                                </div>
                                <p class="text-muted fsize">The perfect way to get started and get used to our tools.</p>
                                <ul class="list-unstyled vstack gap-3 fsize">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>3</b> Projects
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1  ms-2">
                                                <b>299</b> Customers
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                Scalable Bandwidth
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>5</b> FTP Login
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-danger me-1">
                                                <IoCloseCircle />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>24/7</b> Support
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-danger me-1">
                                                <IoCloseCircle />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>Unlimited</b> Storage
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-danger me-1">
                                                <IoCloseCircle />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                Domain
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="mt-2 pt-4">
                                    <a href="javascript:void(0);" class="btn btn-danger disabled w-100">Your Current Plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-lg-4 mt-3">
                        <div class="card pricing-box">
                            <div class="card-body bg-light m-2 p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="flex-grow-1">
                                        <h5 class="mb-0 fw-semibold fs-6">Professional</h5>
                                    </div>
                                    <div class="ms-auto ">
                                        <h2 class="month mb-0 fs-3" >$29 <small class="fs-13 text-muted fsize ">/Month</small></h2>

                                    </div>
                                </div>
                                <p class="text-muted fsize">Excellent for scalling teams to build culture. Special plan for professional business.</p>
                                <ul class="list-unstyled vstack gap-3 fsize">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>8</b> Projects
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>449</b> Customers
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                Scalable Bandwidth
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>7</b> FTP Login
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>24/7</b> Support
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-danger me-1">
                                                <IoCloseCircle />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>Unlimited</b> Storage
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-danger me-1">
                                                <IoCloseCircle />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                Domain
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="mt-3 pt-2">
                                    <a href="javascript:void(0);" class="btn info-col w-100">Change Plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-lg-4 mt-3">
                        <div class="card pricing-box ribbon-box right">
                            <div class="card-body bg-light m-2 p-4">
                                <div class="ribbon-two ribbon-two-danger">
                                    <span>popular</span>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <div class="flex-grow-1">
                                        <h5 class="mb-0 fw-semibold fs-6">Enterprise</h5>
                                    </div>
                                    <div class="ms-auto ">
                                        <h2 class="month mb-0 fs-3" >$39 <small class="fs-13 text-muted fsize">/Month</small></h2>

                                    </div>
                                </div>
                                <p class="text-muted fsize">This plan is for those who have a team alredy and running a large business.</p>
                                <ul class="list-unstyled vstack gap-3 fsize">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>15</b> Projects
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>Unlimited</b> Customers
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                Scalable Bandwidth
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>12</b> FTP Login
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>24/7</b> Support
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>35GB</b> Storage
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-danger me-1">
                                                <IoCloseCircle />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                Domain
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="mt-3 pt-2">
                                    <a href="javascript:void(0);" class="btn info-col w-100">Change Plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-lg-4 mt-3">
                        <div class="card pricing-box">
                            <div class="card-body bg-light m-2 p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="flex-grow-1">
                                        <h5 class="mb-0 fw-semibold fs-6">Unlimited</h5>
                                    </div>
                                    <div class="ms-auto">
                                        <h2 class="month mb-0" >$49 <small class="fs-13 text-muted fsize">/Month</small></h2>
                                    </div>
                                </div>
                                <p class="text-muted fsize">For most businesses that want to optimize web queries.</p>
                                <ul class="list-unstyled vstack gap-3 fsize">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>Unlimited</b> Projects
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>Unlimited</b> Customers
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                Scalable Bandwidth
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>Unlimited</b> FTP Login
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>24/7</b> Support
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b>Unlimited</b> Storage
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 text-success me-1">
                                                <RiCheckboxCircleFill />
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                Domain
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="mt-3 pt-4">
                                    <a href="javascript:void(0);" class="btn info-col w-100">Change Plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" mt-4">
                <div class="auth-one-bg" id="auth-particles">
                    <div class="auth-page-content">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="text-center mt-sm-5 pt-4">
                                        <div class="mb-5 text-white-50">
                                            <h1 class="display-5 coming-soon-text">Site is Under Maintenance</h1>
                                            <p class="fs-14">Please check back in sometime</p>
                                            <div class="mt-4 pt-2">
                                                <a href="index.html" class="btn btn-success back-col"><MdHome /> Back to Home</a>
                                            </div>
                                        </div>
                                        <div class="row justify-content-center">
                                            <div class="col-xl-4 col-lg-8">
                                                <div class="rocket-img">
                                                    <img src="https://themesbrand.com/velzon/html/default/assets/images/maintenance.png" alt="" class="img-fluid rocket-img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer class="footer mb-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="text-center">
                                            <p class="mb-0 text-muted fsize">©
                                                <script>document.write(new Date().getFullYear())</script>2024 Velzon. Crafted with <FaHeart
                                                    class="text-danger" /> by Themesbrand
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page