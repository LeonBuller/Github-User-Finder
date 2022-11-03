const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload, // updating the users to be what's in the data
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_USERS":
      return {
        ...state,
        users: [],
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload.repos,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;