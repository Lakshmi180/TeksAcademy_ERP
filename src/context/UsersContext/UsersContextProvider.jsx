import React, { createContext, useEffect, useReducer } from "react";

import { InitialState } from "./Utils/UsersInitialState";
import * as Api from "./Utils/UsersAPIs";
import * as Actions from "./Utils/UsersActions"

import axios from "axios";
import UsersReducer from "./UsersReducer";

export const UsersContext = createContext();

const UserContextProvider =({children})=>{
    const [UsersState, DispatchUsers] = useReducer(UsersReducer,InitialState)


    console.log( UsersState, "UsersState99")

    const getAllUsers=async()=>{
        try{
            const {data, status}=await Api.getAllUsers();
            if(status === 201){
                DispatchUsers(Actions.setAllUsers(data))
                console.log(data, "dndvbjdvb")
            }
        }
        catch(error){
            console.log(error)
        }
    }
    
    const PaginatedUsers = async () => {
        const {currentPage, perPage, search,filters} =UsersState.EnrolledUsers;
        DispatchUsers(Actions.setLoading("ENROLLED_USERS"))
        try{
            const{status, data}=await Api.getPaginatedUsers(currentPage, perPage, search,filters);
            console.log("responsedata", data)
            if(status === 200){
                DispatchUsers(Actions.setPaginatedUsers(data, "ENROLLED_USERS"))
            }
        }
        catch(error) {
            console.log(error)
        }
        finally{
            DispatchUsers(Actions.setLoading("ENROLLED_USERS"))
        }
    }

    const CreateUser =async(userdata)=>{
        console.log(userdata, "userdata created")
        try{
            const {data, status}=await Api.createUser(userdata);
            getAllUsers()
            PaginatedUsers()
            if(status==200){
                DispatchUsers(Actions.createUser(data, "ENROLLED_USERS"))
                getAllUsers()
                PaginatedUsers()
            }
        }
        catch(error){
            console.log(error)
        }
    }

    // const getSettingsUsers = async (page, pageSize, sortBy, search, filters, token) => {

    //     const {currentPage, perPage, search} =UsersState.EnrolledUsers;
    //     console.log(`${token} token is present in getSettingsUsers api`);
    //     const url = `https://atbtmain.infozit.com/user/list?page=${page}&pageSize=${pageSize}&sortBy=${sortBy}&search=${search}`;
    //     return axios.post(url, {
    //         filters: {
    //             ...filters
    //         }
    //     }, {
    //         headers: { authorization: token || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzMiwicm9sZUlkIjoyNSwiaWF0IjoxNzA5NjM0MDgwLCJleHAiOjIwMjQ5OTQwODB9.Mdk2PIIOnMqPX06ol5DKbSqp_CStWs3oFqLGqmFBhgo" },
    //     });
    // };
     
    // const getUserById = async (id, token) => {
    //     console.log(`${token} token is present in getUserById api`);
    //     const url = `https://atbtmain.infozit.com/user/list/${id}`;
    //     return axios.get(url, {
    //         headers: { authorization: token ||  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzMiwicm9sZUlkIjoyNSwiaWF0IjoxNzA5NjM0MDgwLCJleHAiOjIwMjQ5OTQwODB9.Mdk2PIIOnMqPX06ol5DKbSqp_CStWs3oFqLGqmFBhgo" },
    //     });
    // };



    

 useEffect(()=>{
    getAllUsers()
    PaginatedUsers()
  
 },[])



 useEffect(()=>{
    
    PaginatedUsers()
 },[UsersState?.EnrolledUsers?.search,
    UsersState?.EnrolledUsers?.currentPage,
    UsersState?.EnrolledUsers?.perPage,
    UsersState?.EnrolledUsers?.filters,
    UsersState?.EnrolledUsers?.filters.branch,
    UsersState?.EnrolledUsers?.filters.profile,
    UsersState?.EnrolledUsers?.filters.department
])


    return(
        <UsersContext.Provider value={{UsersState,DispatchUsers,getAllUsers,PaginatedUsers,CreateUser}}>
            {children}
        </UsersContext.Provider>
    )
}
export default UserContextProvider;





