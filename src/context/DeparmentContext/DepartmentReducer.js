const DepartmentReducer = (state, action) => {
    switch(action.type) {
        case "SET_DEPARTMENTS":
            return {
                ...state,
                departments: [action?.payload]
            };
        case "CREATE_DEPARTMENTS":
            return {
                ...state,
                departments: [...state.departments, action?.payload]
            };
        default:
            return state;
    }
}

export default DepartmentReducer;