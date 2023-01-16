import React from "react";
import { useDispatch } from "react-redux";
import Spinner from "../../components/Spinner";
import { deleteHabit } from "./habitsSlice";

const HabitsList = ({ habits, isLoading }) => {
  const dispatch = useDispatch();

  const renderedHabits = habits.map((habit) => (
    <tr key={habit._id}>
      <td>{habit.name}</td>
      <td>{habit.amount}</td>
      <td>{new Date(habit.createdAt).toLocaleString("en-US")}</td>
      <td>{new Date(habit.updatedAt).toLocaleString("en-US")}</td>
      <td>
        <button
          onClick={() => dispatch(deleteHabit(habit._id))}
          className="btn btn-outline-danger"
        >
          X
        </button>
      </td>
    </tr>
  ));

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>Habits</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>{renderedHabits}</tbody>
      </table>
    </div>
  );
};

export default HabitsList;
