import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer"
import { Navigate, redirect, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {

    const navigate = useNavigate();


    const localStrogeData = JSON.parse(localStorage.getItem("data"))
    const localStrogeData1 = JSON.parse(localStorage.getItem("password"));

    const InitialState = {
        user: localStrogeData?.user || {},
        token: localStrogeData?.token || "",
        role: localStrogeData?.role || {},
        password: localStrogeData1?.password || "",
    }

    const [AuthState, DispatchAuth] = useReducer(AuthReducer, InitialState)
    console.log(AuthState, "AthuState99")

   
    
    const LoginAdmin =async(logindata)=>{
        console.log(logindata , "logindatahere")
        // const {data, Status} = await axios.post(`${process.env.REACT_APP_API_URL}/adminlogin`, logindata);

        try {
            const { data, Status } = await toast.promise(axios.post(`${process.env.REACT_APP_API_URL}/adminlogin`, logindata), {
                loading: "Loading...",
                success: "Login Successfully",
                error: "Wrong Credentials 🤯"
            })
            console.log(data, "axiosdata")
            console.log(data?.adminData?.profile, "yytf")
            if (data.Status === "Success") {
                console.log(data, "gggfgfchg")
                localStorage.setItem(
                    "data",
                    JSON.stringify({
                        user: data?.adminData,
                        token: data?.token,
                        role: data?.adminData?.profile,
                    })
                )

                localStorage.setItem("password",
                    JSON.stringify({
                        password: data?.adminData?.password
                    }))
                DispatchAuth({ type: "SET_USER", payload: data?.adminData })
                DispatchAuth({ type: "SET_TOKEN", payload: data?.token })
                DispatchAuth({ type: "SET_ROLE", payload: data?.adminData?.role })
                DispatchAuth({ type: "SET_PASSWORD_LOCALSTORAGE", payload: data?.adminData?.password })
                navigate("/");
            }


        }
        catch (error) {
            console.log(error)
        }
    }

    // const LoginAdmin =async(logindata)=>{
    //     try{
    //         const {data, status} = await toast.promise(axios.post(`${process.env.REACT_APP_API_URL}/adminlogin`, logindata),
    //         {
    //             pending: 'Logging In...',
    //             success: `Login Successful`,
    //             error: 'Wrong Credentials 🤯',
    //           }
    //         )

    //         if(status === "Success"){
    //             localStorage.setItem(
    //                 "data",
    //                 JSON.stringify({
    //                     user: data?.adminData,
    //                     token: data?.token,
    //                     role: data?.adminData.profile,
    //                 })
    //             )
    //             DispatchAuth({type:"SET_USER", payload:data?.adminData})
    //             DispatchAuth({type:"SET_TOKEN", payload:data?.token})
    //             DispatchAuth({type:"SET_ROLE", payload:data?.adminData?.profile})

    //              navigate("/");
    //             // window.location.reload();
    //         }
    //     }
    //     catch (error){
    //         console.log(error);
    //     }

    // }


    const Forgotpassword = async (email) => {
        console.log(email, "forgotemail1")
        try {
            const { status } = await axios.put();
            //here add the put request for changing password with email
            if (status == 200) {
                Swal.fire({
                    title: 'Reset Password Success!',
                    text: 'Check your email for reset instructions.',
                    icon: 'success',
                });
                return redirect('/login');
            }
        }

        catch (error) {
            console.log(error)
        }
    }

    const LockTheScreen = async () => {
        try {
            console.log("hello")
            localStorage.removeItem("password")
            DispatchAuth({ type: "SET_PASSWORD_LOCALSTORAGE", payload: "" })
        }
        catch (error) {
            console.log(error)
        }
    }

    const OpenLockScreen = async(password) => {
        console.log(password, "userpassword")
        try {
            const { data, status } = await axios.post();
            if (status === 200) {
                localStrogeData.setItem("password",
                    JSON.stringify({
                        password: data?.adminData?.password
                    }))
                DispatchAuth({ type: "SET_PASSWORD_LOCALSTORAGE", payload: data?.adminData?.password })
               
            }
            navigate("/")
        }
        catch (error) {
            console.log(error)
        }
    }


    const ChangePasswordfun = async (id, updatedpassword ) => {

        //axios.put(`${process.env.REACT_APP_API_URL}/resetpassword/${id}`, updatedpassword
        console.log(updatedpassword, "changepasswordcontext")
        try {
            const {data, status}= await toast.promise(axios.put(`${process.env.REACT_APP_API_URL}/resetpassword/${id}`, updatedpassword),{
                loading: "Loading...",
                success: "Password Changed Successfully",
                error: "Something went wrong...🤯.        Please try again"
            })

            // if(status==="200pass"){
            //     userLogout();
            //     Swal.fire({
            //         title: 'Reset Password Success!',
            //         text: 'Check your email for reset instructions.',
            //         icon:'success',
            //     });
            //     navigate("/login")
            // }
            userLogout();
            // navigate("/login")
        
        }
        catch (error) {
            console.log(error)
        }
    }

    const userLogout = async () => {
        localStorage.removeItem("data")
        localStorage.removeItem("password")
        DispatchAuth({ type: "SET_USER", payload: {} })
        DispatchAuth({ type: "SET_TOKEN", payload: "" })
        DispatchAuth({ type: "SET_ROLE", payload: {} })
        DispatchAuth({ type: "SET_PASSWORD_LOCALSTORAGE", payload: "" })
        toast.success("logout successfully") 
    }


    useEffect(() => {
        if (localStrogeData) {
            DispatchAuth({ type: "SET_TOKEN", payload: localStrogeData?.token })
            DispatchAuth({ type: "SET_USER", payload: localStrogeData?.user })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ AuthState, DispatchAuth, Forgotpassword, LoginAdmin, ChangePasswordfun, userLogout,OpenLockScreen, LockTheScreen }}>
            {children}
        </AuthContext.Provider>
    )
    
}

export default AuthContextProvider;
