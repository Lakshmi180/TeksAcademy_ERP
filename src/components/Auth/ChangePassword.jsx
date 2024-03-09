import React, { useContext, useEffect, useState } from "react";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import "../../assets/css/common/Login.css";
import Loginvalidation from "./LoginValidation";
import { AuthContext } from "../../context/AuthContext/AuthContextProvider";

export const ChangePassword = () => {
  const { LoginAdmin, AuthState } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  console.log(AuthState, "AuthState");

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleShowRePassword = () => {
    setShowRePassword((prev) => !prev);
  };

  const [errors, seterrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (values.email) {
      seterrors({ ...errors, email: "" });
    } else if (email_pattern.test(values.email)) {
      seterrors({ ...errors, email: "" });
    }
    if (values.password) {
      seterrors({ ...errors, password: "" });
    }
  }, [values.email, values.password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values, "values");
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!values.email) {
      seterrors((prev) => ({ ...prev, email: "Email is required" }));
      return false;
    } else if (!email_pattern.test(values.email)) {
      seterrors((prev) => ({ ...prev, email: "Invalid email" }));
      return false;
    }
    if (!values.password) {
      seterrors((prev) => ({ ...prev, password: "Password is required" }));
      return false;
    }

    if (!errors.email && !errors.password && values.email && values.password) {
      LoginAdmin(values);
    }
  };

  return (
    <div>
      <div className="login_bg_image vh-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mt-sm-5 mb-1 text-white-50">
                <div>
                  <a
                    className="d-inline-block auth-logo"
                    href="/velzon/react/default"
                  >
                    <img
                      src="https://teksacademy.com/assets/img/logo/mainlogo.svg"
                      alt="Login page logo"
                      height="40"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-content-center row">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="mt-5 card">
                <div className="p-4 card-body">
                  <div className="text-center mt-2">
                    <h5 className="login_welcome_text">Create new password!</h5>
                    <p className="text-mute login_welcome_description">
                      Your new password must be different from previous used
                      password.
                    </p>
                  </div>
                  <div className="p-2 mt-4">
                    <form action="#" className="text-start">
                      <div className="mb-3">
                        <label
                          for="password-input"
                          className="form-label form-label font-size-s font-weight-500"
                        >
                          New Password
                        </label>
                        <div className="position-relative auth-pass-inputgroup mb-3">
                          <input
                            name="password"
                            placeholder="Enter Password"
                            type={showPassword ? "text" : "password"}
                            className="form-control pe-5 form-control font-size-s"
                            aria-invalid="false"
                            onChange={handleInput}
                          />
                          {errors.password && (
                            <span className="text-danger text-start mail error-text">
                              {errors.password}
                            </span>
                          )}
                          <button
                            className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                            type="button"
                            id="password-addon"
                          >
                            {showPassword ? (
                              <FaRegEyeSlash onClick={toggleShowPassword} />
                            ) : (
                              <FaRegEye onClick={toggleShowPassword} />
                            )}
                          </button>
                          <div
                            id="passwordInput"
                            class="form-text mb-3 custom-password-length-text"
                          >
                            Must be at least 8 characters.
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          for="password-input"
                          className="form-label form-label font-size-s font-weight-500"
                        >
                          Confirm Password
                        </label>
                        <div className="position-relative auth-pass-inputgroup mb-3">
                          <input
                            name="password"
                            placeholder="Confirm Password"
                            type={showRePassword ? "text" : "password"}
                            className="form-control pe-5 form-control font-size-s"
                            aria-invalid="false"
                            onChange={handleInput}
                          />
                          {errors.password && (
                            <span className="text-danger text-start mail error-text">
                              {errors.password}
                            </span>
                          )}
                          <button
                            className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                            type="button"
                            id="password-addon"
                          >
                            {showRePassword ? (
                              <FaRegEyeSlash onClick={toggleShowRePassword} />
                            ) : (
                              <FaRegEye onClick={toggleShowRePassword} />
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="btn btn-success w-100 btn btn-success font-size-s font-weight-500"
                          onClick={handleSubmit}
                        >
                          Reset Password
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        <div className="signin-other-title">
                          <h5 className="fs-13  title font-size-s font-weight-500 custom-href">
                            Wait, I remember my password{" "}
                            <a href="#">Click here</a>
                          </h5>
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
