import * as ActionTypes from "./StudentActiontypes"

export const setStudentsData = (data,context) => ({
    type: ActionTypes.SET_ALL_STUDENTS_DATA,
    payload: { context: context, data: data }
});

export const setLoading =(context)=>({
    type: ActionTypes.SET_LOADING,
    payload: {context:context}
})
export const getEnrolledStudents=(data, context)=>({
    type: ActionTypes.SET_PAGINATED_STUDENTS,
    payload:{data:data, context:context}
})
export const getCertificateStudents=(data,context)=>({
    type: ActionTypes.SET_PAGINATED_STUDENTS,
    payload:{data:data, context:context}
})

export const getRequested_CertificateStudents=(data,context)=>({
    type: ActionTypes.SET_PAGINATED_STUDENTS,
    payload:{data:data, context:context}
})

export const getFeeDetailsStudents=(data, context)=>({
    type: ActionTypes.SET_PAGINATED_STUDENTS,
    payload:{data:data, context:context}
})

export const getDashboardStudents=(data, context )=>({
    type: ActionTypes.SET_PAGINATED_STUDENTS,
    payload:{data:data, context:context}
})

export const createStudentRecord=(data, context)=>({
    type: ActionTypes.CREATE_STUDENT,
    payload:{data:data, context:context}
})