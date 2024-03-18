
import React from "react";
const LeadSourceReducer = (state, action) => {
    console.log(state,"ghvhgvyftvhg")
    
    switch(action.type) {
        case "SET_LEAD_SOURCE":
            return {
                ...state,
                leadSources: action?.payload
                
            };
        case "CREATE_LEAD_SOURCE":
            return {
                ...state,
                leadSources: [...state.leadSources, action?.payload],
            };
        default:
            return state;
    }
}

export default LeadSourceReducer;