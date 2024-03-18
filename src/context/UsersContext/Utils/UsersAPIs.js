import axios from "axios"
import { toast } from "react-toastify";

export const getAllUsers =()=>{
    // const url=`${process.env.REACT_APP_API_URL}/list_user`;
    const url =`${process.env.REACT_APP_API_URL}/userdata`;
    return axios.get(url)
}
export const getPaginatedUsers=(currentPage, perPage, search, filters)=>{
    //  const url =`${process.env.REACT_APP_API_URL}/list_user?page=${currentPage}&pageSize=${perPage}&search=${search}&filter[branch]=${filters.branch}&filter[profile]=${filters.profile}&filter[department]=${filters.department}`

    const url =`${process.env.REACT_APP_API_URL}/list_user?page=${currentPage}&pageSize=${perPage}&search=${search}&filter[branch]=${filters.branch}&filter[profile]=${filters.profile}&filter[department]=${filters.department}`
    return axios.get(url)
    // const url =`${process.env.REACT_APP_API_URL}/list_user?page=${currentPage}&pageSize=${perPage}`
    // const url =`https://atbtmain.infozit.com/user/list`

    return axios.get(url)
}



export const createUser=(createUser)=>{
    const url="";
    return toast.promise()
    // return axios.post(url, createUser)
}

