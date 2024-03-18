


export const setAllUsers=(data)=>({
    type: "SET_ALL_USERS",
    payload:data,
})


export const setLoading=(data)=>{
    return {
        type: "SET_LOADING",
        payload:{context:data},
    }
}

export const setPaginatedUsers =(data, context)=>{
    console.log( data, "herekrishna")
    return {
        type: "SET_PAGINATED_USERS",
        payload:{  context:context, data:data}
    }
}

export const createUser=(data, context)=>({
    type: "CREATE_USER",
    payload:{data:data, context:context}
})