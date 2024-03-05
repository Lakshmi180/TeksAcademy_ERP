
const BranchReducer = (state, action) => {
    switch (action.type) {
      case "SET_BRANCHES":
        return {
        ...state,
          branches:[action?.payload]
        };
      case "CREATE_BRANCH":
        return {
          branches: [...state.branches, action?.payload]
        };
      default:
        return state;
    }
  };
export default BranchReducer;