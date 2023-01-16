import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import HabitsList from "./features/habits/HabitsList";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/habits" element={<HabitsList />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
