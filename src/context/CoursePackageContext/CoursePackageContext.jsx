import React, { createContext, useEffect, useReducer } from 'react'

import CoursePackageReducer from './CoursePackageReducer';



export const CoursePackageContext = createContext();
const CoursePackageContext=()=> {

    const initialState={
        coursepackages:[]
    }

const [coursePackageState, DispatchCourseState] =useReducer(CoursePackageReducer, initialState);


  const createCoursePackage=async(coursepackages)=>{
    try{
        const{data, status}= await axios.post();
        if(status==200){
            DispatchCourseState({type:"CREATE_COURSE_PACKAGE",payload:data})
            getAllCoursePackages();
            
        }
    }
    catch(error){
        console.log(error)
    }
  }

  const getAllCoursePackages=async()=>{
    try{
        const {data, status}= await axios.get();
        if(status==200){
            DispatchCourseState({type:"SET_COURSE_PACKAGES",payload:data})
        }
    }
    catch(error){
        console.log(error)
    }
  }

  useEffect(()=>{
    getAllCoursePackages();
  },[]);

  useEffect(()=>{
    getAllCoursePackages();
  },[coursePackageState?.coursepackages]);


  return (
    <CoursePackageContext.Provider value={{coursePackageState,DispatchCourseState,getAllCoursePackages,createCoursePackage}}>
      {children}
    </CoursePackageContext.Provider>
  )
}

export default CoursePackageContext;