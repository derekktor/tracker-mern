import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";

import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  function handleRegisterClick(e) {
    e.preventDefault();

    // Check if passwords match
    if (password !== password2) {
      toast.error("Passwords don't match!!!");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }

    // Clear inputs
    setFormData({
      name: "",
      email: "",
      password: "",
      password2: "",
    });
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <section>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account!</p>
      </section>

      <section>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              id="name"
              value={name}
              name="name"
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
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
          <div className="mb-3">
            <label htmlFor="password2" className="form-label">
              Repeat password:
            </label>
            <input
              id="password2"
              value={password2}
              name="password2"
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleRegisterClick}
          >
            Register
          </button>
        </form>
      </section>
    </div>
  );
};

export default Register;
