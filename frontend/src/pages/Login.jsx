import React, { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  function handleInputChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleLoginClick(e) {
    e.preventDefault();

    // Check if fields are empty
    if (!email || !password) {
      toast.error("Please fill in all fields!");
    } else {
      const userData = {
        email,
        password,
      };

      dispatch(login(userData));
    }

    // Clear inputs
    setFormData({
      email: "",
      password: "",
    });
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <section>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please log in!</p>
      </section>

      <section>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              id="email"
              value={email}
              name="email"
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              id="password"
              value={password}
              name="password"
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
