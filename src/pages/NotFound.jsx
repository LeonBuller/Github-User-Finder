import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div children="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8 text-error">Oops!</h1>
          <p className="text-5xl mb-8 text-error">404 - Page Not Found!</p>
          <Link to="/" className="btn btn-info btn-lg">
            <FaHome className="mr-2" /> Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
