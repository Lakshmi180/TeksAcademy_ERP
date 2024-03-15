const CourseReducer = (state,action) => {
    console.log(state, "coursereducer")
    
        switch (action.type) {
            case "SET_COURSES":
                return {
                    ...state,
                    courses: [action?.payload],
                };
            case "CREATE_COURSE":
                return {
                    ...state,
                    courses: [...state.getcourses, action.payload],
                };

            case "UPDATE_COURSE":
                return {
                    ...state,
                    courses: [...state.getcourses, action.payload],
                };
            default:
                return state;
        }
    
}
export default CourseReducer;