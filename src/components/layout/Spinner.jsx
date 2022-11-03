import React from "react";
import spinner from "./assets/Spinner.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        src={spinner}
        alt="Loading..."
        className="text-center mx-auto"
        width={180}
      ></img>
    </div>
  );
}

export default Spinner;
