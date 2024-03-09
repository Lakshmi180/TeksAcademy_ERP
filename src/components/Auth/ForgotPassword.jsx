import React, { useContext, useEffect, useState } from "react";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrTwitter } from "react-icons/gr";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import "../../assets/css/common/Login.css";
import Loginvalidation from "./LoginValidation";
import { AuthContext } from "../../context/AuthContext/AuthContextProvider";
import gif from "../../images/GIF_01.gif";
export const ForgotPassword = () => {
  const { LoginAdmin, AuthState } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
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
                    <h5 className="login_welcome_text">Forgot Password?</h5>
                    <p className="text-mute login_welcome_description">
                      Reset password with us.
                    </p>
                  </div>
                  <div className="p-2 mt-4">
                    <form action="#" className="text-start">
                      <div className="mb-3 text-center d-flex flex-column align-items-center gap-2">
                        <img src={gif} width={100} height="auto" alt="" />
                        <span className="reset-password-message mt-3">
                          Enter your email and instructions will be sent to you!
                        </span>
                      </div>

                      <div className="mb-3">
                        <label
                          for="email"
                          className="form-label font-size-s font-weight-500"
                        >
                          Email
                        </label>
                        <input
                          name="email"
                          placeholder="Enter email"
                          type="email"
                          className="form-control form-control font-size-s"
                          aria-invalid={errors.email ? "true" : "false"}
                          onChange={handleInput}
                        />
                        {errors.email && (
                          <span
                            className={`text-danger text-start mail error-text ${
                              errors.email ? "visible" : "invisible"
                            }`}
                          >
                            {errors.email}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 ">
                        <button
                          type="submit"
                          className="btn btn-success w-100 btn btn-success fs-13 font-size-s  font-weight-500"
                          onClick={handleSubmit}
                        >
                          Send Reset Link
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
