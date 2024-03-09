import React, { createContext, useEffect, useReducer } from 'react'
import DepartmentReducer from './DepartmentReducer';



export const DepartmentContext = createContext();

const DepartmentContextProvider=({children})=> {
    
    const initialState={
        departments:[]
    }

    const[DepartmentState, DispatchDepartment]= useReducer(DepartmentReducer, initialState )

    const CreateDepartment=async(department)=>{
        try{
            const {data, status}= await axios.post();
            if(status==200){
                DispatchDepartment({type:"CREATE_DEPARTMENTS",payload:data})
            }
        }
        catch(error){
            console.log("error")
        }
    }

    const getAllDeparments =async()=>{
        try{
            const {data, status}=await axios.get(``)
            if(status==200){
                DispatchDepartment({type: "SET_DEPARTMENTS", payload:data})
            }
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getAllDeparments();
    })

    useEffect(()=>{
        getAllDeparments();
    },[DepartmentState?.departments])

  return (
    <DepartmentContext.Provider value={{DepartmentState, DispatchDepartment, CreateDepartment,getAllDeparments}}>
      {children}
    </DepartmentContext.Provider>
    
  )
}

export default DepartmentContextProvider;