import React, { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import RoleReducer from "./RoleReducer";
import axios from "axios";

export const RoleContext = createContext();

const RoleContextProvider = ({ children }) => {
    const navigate = useNavigate();

    const initialState = {
        roles: [],
    }

    const [RoleState, DispatchRoleState] = useReducer(RoleReducer, initialState);
    console.log(RoleState, "RoleState")

    const getAllRoles = async () => {
        try {
            // const { data, status } = await axios.get(`${process.env.REACT_APP_API_URL}/getuserroles`);
           
            // if (status === 201) {
            //     console.log(data, "getroledata")
            //     DispatchRoleState({ type: "SET_ROLES", payload: data })
            // }

        } catch (error) {
            console.log(error)
        }
    }

    const createRole = async (roledetails) => {
        console.log(roledetails, "roledetails")
        try {
            const { data, status } = await axios.post(`${process.env.REACT_APP_API_URL}/userroles`,roledetails);
            console.log(data, "axiosdata")  
            if (status === 200) {
                DispatchRoleState({ type: "CREATE_ROLE", payload: data })
                getAllRoles();
            }

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        createRole();
        getAllRoles();
    }, [])

    
    useEffect(() => {
        getAllRoles();
    }, [RoleState?.roles])


    return (
        <RoleContext.Provider value={{ RoleState, DispatchRoleState, getAllRoles, createRole }}>
            {children}
        </RoleContext.Provider>
    )

}
export default RoleContextProvider;