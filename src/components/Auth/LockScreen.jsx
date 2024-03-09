import React, { useContext, useEffect, useState } from "react";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrTwitter } from "react-icons/gr";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import "../../assets/css/common/Login.css";
import Loginvalidation from "./LoginValidation";
import { AuthContext } from "../../context/AuthContext/AuthContextProvider";
import gif from "../../images/GIF_01.gif";


export const LockScreen = () => {
    const { OpenLockScreen, AuthState } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    console.log(AuthState.user.email, "AuthStateefg");

    const [values, setValues] = useState({
        password: "",
    });

    console.log(values, "jhfgjgfv")

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const [errors, seterrors] = useState({
        password: "",
    });

    useEffect(() => {
        if (values.password) {
            seterrors({ ...errors, password: "" });
        }
    }, [values.email, values.password]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values, "values");

        if (!values.password) {
            seterrors((prev) => ({ ...prev, password: "Password is required" }));
            return false;
        }

        if (!errors.password && values.password) {

            console.log(values, "jhfgjgfv")
            OpenLockScreen(values)

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
                            <label
                                for="password-input"
                                className="form-label form-label font-size-s font-weight-500"
                            >
                                Password
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
                                    className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-mute"
                                    type="button"
                                    id="password-addon"
                                >
                                    {showPassword ? (
                                        <FaRegEyeSlash onClick={toggleShowPassword} />
                                    ) : (
                                        <FaRegEye onClick={toggleShowPassword} />
                                    )}
                                </button>
                            </div>
                            <div className="mt-4 ">
                                <button
                                    type="submit"
                                    className="btn btn-success w-100 btn btn-success fs-13 font-size-s  font-weight-500"
                                    onClick={handleSubmit}
                                >
                                    Unlock
                                </button>
                            </div>
                            <div className="mt-4 text-center">
                                <div className="signin-other-title">
                                    <h5 className="fs-13  title font-size-s font-weight-500 custom-href">
                                        Not you? <a href="#">Signin</a>
                                    </h5>
                                </div>
                            </div>
                            <div className="justify-content-center row">
                                <div className="col-md-8 col-lg-6 col-xl-5">
                                    <div className="mt-5 card">
                                        <div className="p-4 card-body">
                                            <div className="text-center mt-2">
                                                <h5 className="login_welcome_text">Lock Screen</h5>
                                                <p className="text-mute login_welcome_description">
                                                    Enter your password to unlock the screen!
                                                </p>
                                            </div>
                                            <div className="p-2 mt-4">
                                                <form action="#" className="text-start">
                                                    <div className="mb-3 text-center d-flex flex-column align-items-center gap-2">
                                                        <img
                                                            src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
                                                            width={80}
                                                            height="auto"
                                                            alt=""
                                                            className="rounded-circle"
                                                        />

                                                        {
                                                            AuthState.user.email && AuthState.user.email ? (
                                                                <h5 className="lock-screen-username ">
                                                                    {AuthState.user.email}
                                                                </h5>
                                                            ) : (
                                                                <h5 className="lock-screen-username ">No User Found</h5>
                                                            )
                                                        }

                                                    </div>

                                                    <label
                                                        for="password-input"
                                                        className="form-label form-label font-size-s font-weight-500"
                                                    >
                                                        Password
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
                                                    </div>
                                                    <div className="mt-4 ">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-success w-100 btn btn-success fs-13 font-size-s  font-weight-500"
                                                            onClick={handleSubmit}
                                                        >
                                                            Unlock
                                                        </button>
                                                    </div>
                                                    <div className="mt-4 text-center">
                                                        <div className="signin-other-title">
                                                            <h5 className="fs-13  title font-size-s font-weight-500 custom-href">
                                                                Not you? <a href="#">Signin</a>
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
            </div>
        </div>
    );
};
