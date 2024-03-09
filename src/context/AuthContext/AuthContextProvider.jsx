import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer"
import { redirect, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export const AuthContext = createContext();
const AuthContextProvider=({children})=>{

    const navigate=useNavigate();


    const localStrogeData =JSON.parse(localStorage.getItem("data"))

    const  InitialState={
        user: localStrogeData?.user || {},
        token: localStrogeData?.token || "",
        role: localStrogeData?.role || {},
    }

    const [AuthState, DispatchAuth] = useReducer(AuthReducer,InitialState)
    console.log(AuthState, "AthuState99")
    
    const LoginAdmin =async(logindata)=>{
        console.log(logindata , "logindatahere")
        // const {data, Status} = await axios.post(`${process.env.REACT_APP_API_URL}/adminlogin`, logindata);

        try{
            const {data, Status}= await toast.promise(axios.post(`${process.env.REACT_APP_API_URL}/adminlogin`, logindata),{
                loading: "Loading...",
                success: "Login Successfully",
                error: "Wrong Credentials 🤯"
            })
            if(data.Status === "Success"){
                console.log(data, "gggfgfchg")
                localStorage.setItem(
                    "data",
                    JSON.stringify({
                        user: data?.adminData,
                        token: data?.token,
                        role: data?.adminData?.profile,
                    })
                )
                DispatchAuth({type:"SET_USER", payload:data?.adminData})
                DispatchAuth({type:"SET_TOKEN", payload:data?.token})
                DispatchAuth({type:"SET_ROLE", payload:data?.role})
                navigate("/");
            }
            

        }
        catch(error){
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

    
    const changePassword =async({email})=>{
        try{
            const {status}=await axios.put();
               //here add the put request for changing password with email
               if(status==200){
                Swal.fire({
                    title: 'Reset Password Success!',
                    text: 'Check your email for reset instructions.',
                    icon: 'success',
                  });
                  return redirect('/login');
               }
        }
        
        catch(error){
            console.log(error)
        }
    }
    

    const ResetPassword=async({id, password})=>{
        try{
            const{status, data}= await axios.put()
            //put the  reset password here and add toast
            if(status=="200"){
                return redirect("/login")
            }
        }
        catch(error){
            console.log(error)
        }
    }

    const userLogout=async()=>{
        console.log("hello")
       
        // localStorage.removeItem("data")
        DispatchAuth({type:"SET_USER", payload:{}})
        DispatchAuth({type:"SET_TOKEN", payload:""})
        return redirect("/")
      
    }

    useEffect(()=>{
        if(localStrogeData){
            DispatchAuth({type:"SET_TOKEN", payload:localStrogeData?.token})
            DispatchAuth({type:"SET_USER", payload:localStrogeData?.user})
        }
    },[])
    
    return(
        <AuthContext.Provider value={{AuthState,DispatchAuth,changePassword,LoginAdmin,ResetPassword,userLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;