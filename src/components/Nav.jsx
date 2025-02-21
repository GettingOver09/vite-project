import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">My Notes</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-gray-600 hover:text-pink-600 transition-colors text-lg font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/add-todo"
              className="text-gray-600 hover:text-pink-600 transition-colors text-lg font-medium"
            >
              Add Todo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
