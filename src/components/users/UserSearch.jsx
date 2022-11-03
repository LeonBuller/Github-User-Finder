import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function UserSearch() {
  const [text, setText] = useState("");

  //Using the context of GithubContext to access to the users and the output we get from searchUsers
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value); // A function that changes the text that was input in the onChange attribute

  // A hook that handles a text submit INSIDE A FORM ELEMENT that first of all prevents the deault action unless something is wrriten;
  // Searching for users using the searchUsers function and then setting the text to an empty string again
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(text); // Calling the function that searches for the users with the input as text
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-contorl">
            <div className="relative">
              <input
                type="text"
                className="w-full input-bordered pr-40 bg-info/50 input text-black"
                placeholder="Search for a user"
                value={text}
                onChange={handleChange} //onChange gets an attribut that is a function that changes the text to what was input
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn "
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && ( // If the length o the users input is not empty THEN show the clear button
        <div>
          <button
            onClick={clearUsers} //onClick waits for a click and once it happenes; Calls a function clearUsers that deletes all the users and sets a new empty array
            className="btn btn-ghost btn-primary btn-md rounded-btn btn-outline "
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
