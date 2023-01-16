import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import HabitForm from "../components/HabitForm";
import Spinner from "../components/Spinner";
import HabitsList from "../features/habits/HabitsList";
import { fetchHabits, reset } from "../features/habits/habitsSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const {habits, isLoading, isSuccess, isError, message} = useSelector(state => state.habits);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(fetchHabits());
    
    return () => {
      dispatch(reset());
    }
  }, [navigate, user, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      {user && <h1>Hello, {user.name}</h1>}
      <HabitForm />
    </div>
  );
};

export default Dashboard;
