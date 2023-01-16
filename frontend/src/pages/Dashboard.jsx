import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HabitForm from "../components/HabitForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  return (
    <div>
      {user && <h1>Hello, {user.name}</h1>}
      <HabitForm />
    </div>
  );
};

export default Dashboard;
