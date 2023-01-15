import React from "react";
import {
  FaEarlybirds,
  FaSun,
  FaMoon,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  }

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
        {user ? (
          <li className="nav-item">
            <button className="btn btn-outline-primary" onClick={handleLogout}>
              Logout <FaSignOutAlt />
            </button>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login <FaSignInAlt />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register <FaUser />
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
