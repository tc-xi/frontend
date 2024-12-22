import React from "react";
import "./App.css";
import Login from "./components/test/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Agenda from "./components/Agenda/Agenda";
import { BrowserRouter, Routes, Route } from "react-router";
import Vacation from "./components/Vacation/vacation";
import TaskManager from "./components/Task/Task";
import Profile from "./components/Profile/Profile";
const getCalendarData = (year, month) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the number of days in the month
  const data = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const status = day % 7 === 0 ? "absent" : day % 5 === 0 ? "late" : "present";
    data.push({ date: day, status });
  }

  return data;
};
const App = () => {

  return (
    <div className="app-container">
      <Routes>
         <Route path="/"  element={<Login />} />
         <Route path="/calendar" 
          element={
          <div>
            <Navbar />
            <Sidebar /> 
            <Agenda
      initialYear={2024}
      initialMonth={11} // December (0-indexed)
      getCalendarData={getCalendarData}
    /> 
            </div>
            } 
          />
         <Route path="/tasks"  element={<div><Navbar /><Sidebar /> <TaskManager /> </div>} />
         <Route path="/Vacation"   element={<div><Navbar /><Sidebar /> <Vacation /> </div>} />
      </Routes>
      {/* <Sidebar />
      <Navbar/>
      <Agenda
      initialYear={2024}
      initialMonth={11} // December (0-indexed)
      getCalendarData={getCalendarData}
    />       */}
    </div>
  );
};

export default App;
