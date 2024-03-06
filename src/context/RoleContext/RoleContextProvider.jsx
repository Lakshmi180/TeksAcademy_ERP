import React, { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import RoleReducer from "./RoleReducer";

export const RoleContext= createContext();

const RoleContextProvider=({children})=>{
    const navigate=useNavigate();

    const [RoleState, DispatchRoleState] = useReducer(RoleReducer, {roles:[]})

    const getAllRoles=async()=>{
        try{
            const {data, status} = await axios.get();
            if(status==200){
                DispatchRoleState({type:"SET_ROLES",payload:data})
            } 
        }catch(error){
            console.log(error)
        }
    }

    const createRole=async(rolestate)=>{
        try{
            const {data, status} = await axios.post();
            if(status=="200"){
                getAllRoles()
                navigate("/roletable")
            } 
            
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        createRole();
        getAllRoles();
    },[])

    useEffect(()=>{
        getALLRoles();
    },[RoleState?.roles])

    
    return(
        <RoleContext.Provider value={{RoleState,DispatchRoleState,getAllRoles,createRole}}>
            {children}
        </RoleContext.Provider>
    )

}
export default RoleContextProvider;