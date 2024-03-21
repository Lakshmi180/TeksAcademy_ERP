import { current } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


export const getAllStudents = async () => {
    const url=`${process.env.REACT_APP_API_URL}/getstudent_data`
    return axios.get(url)
};

export const getEnrolledStudents = async(currentPage,perPage,search,filters)=>{
    
    // const url =`${process.env.REACT_APP_API_URL}list_students?page=${currentPage}&pageSize=${perPage}&search=${search}&filter[admissionFromDate]=${filters.fromDate}&filter[admissiontoDate]=${filters.toDate}&filter[enquiryTakenby]=${filters.enquiryTakenby}&filter[modeOfTraining]=${filters.modeOfTraining}&filter[branch]=${filters.branch}`

    // const searchParams = new URLSearchParams();
   
    console.log(filters, "hjdbsjbvfj")


    // const url= `${process.env.REACT_APP_API_URL}/list_students?page=${currentPage}&pageSize=${perPage}&search=${search}&filter[admissionFromDate]=${filters.fromDate}&filter[admissiontoDate]=${filters.toDate}&filter[enquiryTakenby]=${filters.enquiryTakenby}&filter[modeOfTraining]=${filters.modeOfTraining}&filter[branch]=${filters.branch}`
    // return axios.get(url)

// WORKING
    const url= `${process.env.REACT_APP_API_URL}/list_students?page=${currentPage}&pageSize=${perPage}&search=${search}&filter[admissionFromDate]=${filters.fromDate}&filter[admissiontoDate]=${filters.toDate}&filter[modeOfTraining]=${filters.modeOfTraining}&filter[branch]=${filters.branch}`
    return axios.get(url)
}


export const getCertificateStudents = async(currentPage,perPage,search,filters)=>{
    console.log(currentPage,perPage,search,filters, "jvjfvjf" )
    const url =""
    return axios.get(url)
}

export const getRequested_CertificateStudents = async (currentPage,perPage,search,filters) => {
    const url =""
    return axios.get(url)
}

export const getFeeDetailsStudents=async(currentPage,perPage,search,filters)=>{
    const url =""
    return axios.get(url)
}
export const getDashboardStudents = async(currentPage,perPage,search,filters)=>{
    const url ="";
    return axios.get(url)
}


export const createStudentRecord= async(studentdata)=>{
    //reqiure toast
    const url=`${process.env.REACT_APP_API_URL}/student_form`;

    return await toast.promise(
        axios.post(url, studentdata ),
        {
            pending: 'verifying data',
            success: {
                render(data) {
                    return `Student Enrolled Successfully`
                }
            },
            error: 'Error in creating Student Record 🤯',
        }
    )
  // return axios.post(url, studentdata)   
}

export const getStudentById =async(studentId)=>{
    // const url=`${process.env.REACT_APP_API_URL}/getstudent_data/${studentId}`
    const url ="";
    return axios.get(url)
}

export const UpdateStudentdata=async(student)=>{
    // axios.put(`${process.env.REACT_APP_API_URL}/updatestudentdata/${id}`, student)
    //reqire toast
    const url ="";
    return axios.put(url, student)
}

