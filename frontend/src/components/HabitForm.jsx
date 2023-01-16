import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createHabit } from "../features/habits/habitsSlice";

const HabitForm = () => {
  const [habitData, setHabitData] = useState({
    name: "",
    amount: 0,
  });

  const dispatch = useDispatch();

  const { name, amount } = habitData;

  const handleInputChange = (e) => {
    setHabitData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleHabitAdd = (e) => {
    e.preventDefault();

    // Dispatch action
    dispatch(createHabit(habitData));

    // Clear fields
    setHabitData({name: "", amount: 0});
  };

  return (
    <form>
        <h3>Add New Habit</h3>
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
        <label htmlFor="amount" className="form-label">
          Amount:
        </label>
        <input
          id="amount"
          value={amount}
          name="amount"
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleHabitAdd}
      >
        Login
      </button>
    </form>
  );
};

export default HabitForm;
