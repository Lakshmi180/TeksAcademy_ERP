import React from "react";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrTwitter } from "react-icons/gr";

import "../../assets/css/common/Login.css";
export const Login = () => {
  return (
    <div>
      <div className="login_bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mt-sm-5 mb-1 text-white-50">
                <div className="pb-4 pt-3">
                  <a
                    className="d-inline-block auth-logo"
                    href="/velzon/react/default"
                  >
                    <img
                      src="https://teksacademy.com/assets/img/logo/mainlogo.svg"
                      alt="Login page logo"
                      height="60"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-content-center row">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="mt-1 card">
                <div className="p-4 card-body">
                  <div className="text-center mt-2">
                    <h5 className="login_welcome_text">Welcome Back!</h5>
                    <p className="text-mute login_welcome_description">
                      Sign in to continue to Teks.
                    </p>
                  </div>
                  <div className="p-2 mt-4">
                    <form action="#" className="text-start">
                      <div className="mb-3">
                        <label
                          for="email"
                          className="form-label form-label font-size-sm font-weight-500"
                        >
                          Email
                        </label>
                        <input
                          name="email"
                          placeholder="Enter email"
                          type="email"
                          className="form-control form-control"
                          aria-invalid="false"
                          value="admin@themesbrand.com"
                        />
                      </div>
                      <div className="mb-3">
                        <div className="float-end">
                          <a className="text-mute font-size-sm" href="">
                            Forgot password?
                          </a>
                        </div>
                        <label
                          for="password-input"
                          className="form-label form-label font-size-sm font-weight-500"
                        >
                          Password
                        </label>
                        <div className="position-relative auth-pass-inputgroup mb-3">
                          <input
                            name="password"
                            placeholder="Enter Password"
                            type="password"
                            className="form-control pe-5 form-control"
                            aria-invalid="false"
                            value="123456"
                          />
                          <button
                            className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                            type="button"
                            id="password-addon"
                          >
                            <i className="ri-eye-fill align-middle"></i>
                          </button>
                        </div>
                      </div>
                      <div className="form-check">
                        <input
                          id="auth-remember-check"
                          type="checkbox"
                          className="form-check-input form-check-input"
                          value=""
                        />
                        <label
                          for="auth-remember-check"
                          className="form-check-label form-label font-size-sm font-weight-500"
                        >
                          Remember me
                        </label>
                      </div>
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="btn btn-success w-100 btn btn-success font-size-sm font-weight-500"
                        >
                          Sign In
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        <div className="signin-other-title">
                          <h5 className="fs-13 mb-4 title font-size-sm font-weight-500">
                            Sign In with
                          </h5>
                        </div>
                        <div>
                          <a
                            className="btn btn-primary btn-icon me-1"
                            href="/velzon/react/default/login"
                          >
                            {/* <i className="ri-facebook-fill fs-16"></i> */}
                            <FaFacebookF />
                          </a>
                          <a
                            className="btn btn-danger btn-icon me-1"
                            href="/velzon/react/default/login"
                          >
                            {/* <i className="ri-google-fill fs-16"></i>     */}
                            <FaGoogle />
                          </a>
                          <button className="btn-icon btn btn-dark me-1">
                            {/* <i className="ri-github-fill fs-16"></i> */}
                            <FaGithub />
                          </button>
                          <button className="btn-icon btn btn-info">
                            {/* <i className="ri-twitter-fill fs-16"></i> */}
                            <GrTwitter className="text-white" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
