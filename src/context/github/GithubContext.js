import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Searches for the users that are input in the "text" as params - go to UserSearch
  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({ q: text });
    const response = await fetch(
      `https://api.github.com/search/users?${params}`,
      {
        headers: {
          Authorization: `token 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`,
        },
      }
    );

    const { items } = await response.json();

    dispatch({
      //Takes a type of objects called "GET_USERS" that fires into the reducer function inside the GithubReducer function
      type: "GET_USERS",
      payload: items, //Sends the data which is the users and send all that as a payload to the reducer
    });
  };

  // Retrives a single user
  const getUser = async (login) => {
    setLoading();
    const response = await fetch(
      `https://api.github.com/search/user/${login}`,
      {
        headers: {
          Authorization: `token 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`,
        },
      }
    );
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();

      dispatch({
        //Takes a type of objects called "GET_USERS" that fires into the reducer function inside the GithubReducer function
        type: "GET_USER",
        payload: data, //Sends the data which is the users and send all that as a payload to the reducer
      });
    }
  };
  //Get user repos
  const getUserRepos = async (login) => {
    setLoading();
    const response = await fetch(
      `https://api.github.com/users/${login}/repos`,
      {
        headers: {
          Authorization: `token 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`,
        },
      }
    );

    const data = await response.json();

    dispatch({
      //Takes a type of objects called "GET_USERS" that fires into the reducer function inside the GithubReducer function
      type: "GET_REPOS",
      payload: data, //Sends the data which is the users and send all that as a payload to the reducer
    });
  };

  //A function that sends a type to the reducer "GithubReducer" and inside the reducer the case called "DELETE_USERS" that sets an empty array for the users
  const clearUsers = () => dispatch({ type: "DELETE_USERS" });

  //A function that sends a type to the reducer "GithubReducer" and inside the reducer the case called "SET_LOADING" that sets the loading to the true
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  return (
    // From the Provider we getting access to the users, loading, searchUsers function and the clearUsers function
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
      // Inside the value we pass all the parameters we want to give a GLOBAL ACCESS when we use this Provider
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
