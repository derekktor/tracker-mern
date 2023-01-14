import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  function handleInputChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleRegisterClick(e) {
    e.preventDefault();

    // Clear inputs
    setFormData({
      name: "",
      email: "",
      password: "",
      password2: "",
    });
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
