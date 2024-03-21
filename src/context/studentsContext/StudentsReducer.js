import React from "react";
import * as ActionTypes from "./utils/StudentActiontypes";


const StudentsReducer = (state, action) => {
    
    console.log("ReducerStatestudent", state);

    switch (action.type) {
        case ActionTypes.SET_ALL_STUDENTS_DATA:

            if(action?.payload.context === "ALL_STUDENTS"){
                console.log(action.payload.data, "bdvjbjjvjb");
                return {
                 ...state,
                    TotalStudents: action?.payload.data
                }
            }
            break;


        case ActionTypes.CREATE_STUDENT:
            return {
                ...state,
                TotalStudents: [...state.TotalStudents, action?.payload.data]
            }
            
            break;

        case ActionTypes.SET_LOADING:

            if (action.payload.context === "ENROLLED_STUDENTS") {
                return {
                    ...state,
                    EnrolledStudents: {
                        ...state.EnrolledStudents,
                        loading: !state.EnrolledStudents.loading
                    }
                }
            }
            else if (action.payload.context === "CERTIFICATE_STUDENTS") {
                return {
                    ...state,
                    CertificateStudents: {
                        ...state.CertificateStudents,
                        loading: !state.CertificateStudents.loading
                    }
                }
            }
            
            else if(action.payload.context === "REQUESTED_CERTIFICATE_STUDENTS"){
                return{
                    ...state,
                    Requested_CertificateStudents:{
                        ...state.Requested_CertificateStudents,
                        loading:!state.Requested_CertificateStudents.loading
                    }
                }
            }


            else if (action.payload.context === "FEE_DETAILS_STUDENTS") {
                return {
                    ...state,
                    FeeDetailsStudents: {
                        ...state.FeeDetailsStudents,
                        loading: !state.FeeDetailsStudents.loading
                    }
                }
            }

            else if (action.payload.context === "DASHBOARD_STUDENTS") {
                return {
                    ...state,
                    DashboardStudents: {
                        ...state.DashboardStudents,
                        loading: !state.DashboardStudents.loading
                    }
                }
            }
            break;

            // here the PAGINATED DATA;

        case ActionTypes.SET_PAGINATED_STUDENTS:

            if (action.payload.context === "ENROLLED_STUDENTS") {
                    const reducerData = action.payload.data
                    return {
                        ...state,
                        EnrolledStudents: {
                        ...state.EnrolledStudents,
                        PaginatedStudents: reducerData.students,
                        totalPages: reducerData.totalPages,
                        searchResultStudents: reducerData.searchResultStudents,
                        perPage: reducerData.pageSize,
                        startStudent: reducerData.startStudent,
                        endStudent: reducerData.endStudent,
                        totalStudents: reducerData.totalStudents,
                    }
                }
            }

            else if (action.payload.context === "CERTIFICATE_STUDENTS") {
                const reducerData = action.payload.data
                return {
                    ...state,
                    CertificateStudents: {
                        ...state.CertificateStudents,
                        PaginatedCertificateStudents: reducerData.TotalStudents,
                        currentPage: reducerData.currentPage,
                        totalPages: reducerData.totalPages,
                        perPage: reducerData.perPage,
                        startStudent: reducerData.startStudent,
                        endStudent: reducerData.endStudent,
                        totalStudents: reducerData.totalStudents,
                        searchResultStudents: reducerData.searchResultStudents,
                    }
                }
            }

            else if (action.payload.context === "REQUESTED_CERTIFICATE_STUDENTS") {
                const reducerData = action.payload.data
                return {
                    ...state,
                    Requested_CertificateStudents: {
                        ...state.Requested_CertificateStudents,
                        Paginated_Requested_CertificateStudents: reducerData.TotalStudents,
                        currentPage: reducerData.currentPage,
                        totalPages: reducerData.totalPages,
                        perPage: reducerData.perPage,
                        startStudent: reducerData.startStudent,
                        endStudent: reducerData.endStudent,
                        totalStudents: reducerData.totalStudents,
                        searchResultStudents: reducerData.searchResultStudents,
                    }
                }
            }

            else if (action.payload.contex === "FEE_DETAILS_STUDENTS") {
                const reducerdata = action.payload.data
                return {
                    ...state,
                    FeeDetailsStudents: {
                        ...state.FeeDetailsStudents,
                        PaginatedFeeDetailsStudents: reducerdata.TotalStudents,
                        currentPage: reducerdata.currentPage,
                        totalPages: reducerdata.totalPages,
                        perPage: reducerdata.perPage,
                        startStudent: reducerdata.startStudent,
                        endStudent: reducerdata.endStudent,
                    }
                }
            }

            else if (action.payload.context === "DASHBOARD_STUDENTS") {
                const reducerdata = action.payload.data;
                return {
                    ...state,
                    DashboardStudents: {
                        ...state.DashboardStudents,
                        PaginatedDashboardStudents: reducerdata.TotalStudents,
                        currentPage: reducerdata.currentPage,
                        totalPages: reducerdata.totalPages,
                        perPage: reducerdata.perPage,
                        startStudent: reducerdata.startStudent,
                    }
                }

            }
            break;

            //  Here the handle Search 

        case ActionTypes.SET_SEARCH:
            if (action.payload.context === "ENROLLED_STUDENTS") {
                return {
                    ...state,
                    EnrolledStudents: {
                        ...state.EnrolledStudents,
                        search: action.payload.data,
                        currentPage: 1,
                    }
                }
            }
            else if (action.payload.context === "CERTIFICATE_STUDENTS") {
                return {
                    ...state,
                    CertificateStudents: {
                        ...state.CertificateStudents,
                        search: action.payload.data,
                        currentPage: 1,
                    }
                }
            }

            else if (action.payload.context === "REQUESTED_CERTIFICATE_STUDENTS") {
                return {
                    ...state,
                    Requested_CertificateStudents: {
                        ...state.Requested_CertificateStudents,
                        search: action.payload.data,
                        currentPage: 1,
                    }
                }
            }

            else if (action.payload.context === "FEE_DETAILS_STUDENTS") {
                return {
                    ...state,
                    FeeDetailsStudents: {
                        ...state.FeeDetailsStudents,
                        search: action.payload.data,
                        currentPage: 1,
                    }
                }
            }

            break;

            // here the Handle PerPage

        case ActionTypes.SET_PER_PAGE:
            if (action.payload.context === "ENROLLED_STUDENTS") {
                return {
                    ...state,
                    EnrolledStudents: {
                        ...state.EnrolledStudents,
                        perPage: action.payload.data,
                        currentPage: 1,
                    }
                }
            }

            else if (action.payload.context === "CERTIFICATE_STUDENTS") {
                return {
                    ...state,
                    CertificateStudents: {
                        ...state.CertificateStudents,
                        perPage: action.payload.data,
                    }
                }
            }
            else if (action.payload.context === "REQUESTED_CERTIFICATE_STUDENTS") {
                return {
                    ...state,
                    Requested_CertificateStudents: {
                        ...state.Requested_CertificateStudents,
                        perPage: action.payload.data,
                    }
                }
            }

            else if (action.payload.context === "FEE_DETAILS_STUDENTS") {
                return {
                    ...state,
                    FeeDetailsStudents: {
                        ...state.FeeDetailsStudents,
                        perPage: action.payload.data,
                    }
                }
            }

            break


        case ActionTypes.SET_CUSTOM_PAGE:
            if (action.payload.context === "ENROLLED_STUDENTS") {
                return {
                    ...state,
                    EnrolledStudents: {
                        ...state.EnrolledStudents,
                        currentPage: action.payload.data,
                    }
                }
            }

            else if (action.payload.context === "CERTIFICATE_STUDENTS") {
                return {
                    ...state,
                    CertificateStudents: {
                        ...state.CertificateStudents,
                        currentPage: action.payload.data
                    }
                }
            }

            else if (action.payload.context === "REQUESTED_CERTIFICATE_STUDENTS") {
                return {
                    ...state,
                    Requested_CertificateStudents: {
                        ...state.Requested_CertificateStudents,
                        currentPage: action.payload.data
                    }
                }
            }

            else if (action.payload.context === "FEE_DETAILS_STUDENTS") {
                return {
                    ...state,
                    FeeDetailsStudents: {
                        ...state.FeeDetailsStudents,
                        currentPage: action.payload.data
                    }
                }
            }
            // default to the old state in order not to lose any information

            break

        case ActionTypes.SET_FILTERS:

            if (action.payload.context === "ENROLLED_STUDENTS") {
                console.log(action.payload.data, "filtersreducer")
                return {
                    ...state,
                    EnrolledStudents: {
                        ...state.EnrolledStudents,
                        filters: action.payload.data,
                        currentPage: 1,
                    }
                }
            }

            else if (action.payload.context === "CERTIFICATE_STUDENTS") {
                return {
                    ...state,
                    CertificateStudents: {
                        ...state.CertificateStudents,
                        filters: action.payload.data,
                        currentPage: 1,
                    }
                }
            }

            else if (action.payload.context === "REQUESTED_CERTIFICATE_STUDENTS") {
                return {
                    ...state,
                    Requested_CertificateStudents: {
                        ...state.Requested_CertificateStudents,
                        filters: action.payload.data,
                        currentPage: 1,
                    }
                }
            }


            else if (action.payload.context === "FEE_DETAILS_STUDENTS") {
                return {
                    ...state,
                    FeeDetailsStudents: {
                        ...state.FeeDetailsStudents,
                        filters: action.payload.data,
                        currentPage: 1,
                    }
                }
            }

            break

        default:
            return state;
    }

}




export default StudentsReducer;