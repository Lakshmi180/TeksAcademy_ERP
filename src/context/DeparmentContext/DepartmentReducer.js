import React from 'react'

const DepartmentReducer=(action, state)=> {
    switch(action.type){
        case "SET_DEPARTMENTS":
            return{
                ...state,
                 departments: [action?.payload]
                
            }
        case "CREATE_DEPARTMENTS":
            return{
                ...state,
                departments:[...state.departments, action?.payload]
            }
    }
  
}

export default DepartmentReducer;