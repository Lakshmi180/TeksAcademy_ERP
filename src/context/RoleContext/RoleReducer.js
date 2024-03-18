 const RoleReducer = (state, action) => {
  
  console.log(state, "rolereducer")
    switch (action.type) {
      case "SET_ROLES":
        return {
          roles: action.payload,
        };
      case "CREATE_ROLE":
        
        return {
          roles: [...state?.roles, action?.payload]
        };

      default:
        return state;
    }
  };

  export default RoleReducer;