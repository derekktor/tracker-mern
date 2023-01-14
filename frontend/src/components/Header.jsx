import React from "react";
import { FaEarlybirds, FaSun, FaMoon, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex">
      <ul className="nav nav-pills me-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home <FaEarlybirds />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/habits">
            Habits <FaSun />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tasks">
            Tasks <FaMoon />
          </Link>
        </li>
      </ul>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login <FaSignInAlt />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logout">
            Logout <FaSignOutAlt />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Register <FaUser />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
