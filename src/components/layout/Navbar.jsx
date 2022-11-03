import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-focus">
      <div className="container mx-auto text-white">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl text-info" />
          <Link to="/" className="text-lg text-info font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end ">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.defaultProps = {
  title: "Github User Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
