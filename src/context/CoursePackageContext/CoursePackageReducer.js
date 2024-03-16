import React from 'react';

const CoursePackageReducer=(state, action)=> {
 
    switch (action.type) {
        case "SET_COURSE_PACKAGES":
            return{
                ...state,
                 coursepackages: action?.payload,

            }
        case "CREATE_COURSE_PACKAGE":
            return {
              ...state,
               coursepackages: [...state.coursepackages, action?.payload],
            };
        default:
            return state;
    }
}

export default CoursePackageReducer;