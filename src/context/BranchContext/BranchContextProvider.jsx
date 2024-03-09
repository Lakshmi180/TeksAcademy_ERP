import { createContext, useEffect, useReducer } from "react"

import axios from "axios";
import BranchReducer from "./BranchReducer";


export const BranchContext = createContext();
const BranchContextProvider=({children})=>{
    const [BranchState, DispatchBranch]=useReducer(BranchReducer, {branches:[]})
    
    const getAllBranches=async()=>{

        try{
            const{status, data}= await axios.get() 
            if(status==200){
                DispatchBranch({type:"SET_BRANCHES",payload:data})
            }
        }
        catch(error){
            console.log(error)
        }
    }

    
    const createBranch  =async(branch)=>{
        try{
            const{status, data}= await axios.post() 
            if(status==200){
                DispatchBranch({type:"CREATE_BRANCHES",payload:data})
                getAllBranches();

                // navigate to role table 
            }
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getAllBranches();
    },[]);

    useEffect(()=>{
        getAllBranches();
    },[BranchState?.branches]);

    return(
        <BranchContext.Provider value={{BranchState,DispatchBranch,getAllBranches,createBranch}}>
            {children}
        </BranchContext.Provider>
    )
}

export default BranchContextProvider;