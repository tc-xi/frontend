import React from "react";
import "./Attendance.css";

const AttendanceTable = () => {
  const data = [
    { firstName: "name1", secondName: "s1", email: "employer1@gmail.com", checkIn: "8h", checkOut: "17h", status: "Present" },
    { firstName: "name2", secondName: "s2", email: "employer2@gmail.com", checkIn: "8h", checkOut: "17:02h", status: "Present" },
    { firstName: "name3", secondName: "s3", email: "employer3@gmail.com", checkIn: "/", checkOut: "/", status: "Absent" },
    { firstName: "name4", secondName: "s4", email: "employer4@gmail.com", checkIn: "8h", checkOut: "17:04h", status: "Present" },
    { firstName: "name5", secondName: "Bold text column", email: "employer5@gmail.com", checkIn: "/", checkOut: "/", status: "Absent" },
    { firstName: "name6", secondName: "Bold text column", email: "employer6@gmail.com", checkIn: "8h", checkOut: "17h", status: "Present" },
    { firstName: "name7", secondName: "Bold text column", email: "employer7@gmail.com", checkIn: "8h", checkOut: "17h", status: "Present" },
    { firstName: "name8", secondName: "Bold text column", email: "employer8@gmail.com", checkIn: "8:30h", checkOut: "17h", status: "Late" },
    { firstName: "name9", secondName: "Bold text column", email: "employer9@gmail.com", checkIn: "8h", checkOut: "17h", status: "Present" },
    { firstName: "name10", secondName: "Bold text column", email: "employer10@gmail.com", checkIn: "8h", checkOut: "17h", status: "Present" },
  ];

  return (
    <div className="attendance-container">
      <div className="date-header">12-Janvier-2025</div>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>First name</th>
            <th>Second name</th>
            <th>Email</th>
            <th>Check IN</th>
            <th>Check OUT</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.firstName}</td>
              <td>{row.secondName}</td>
              <td>{row.email}</td>
              <td>{row.checkIn}</td>
              <td>{row.checkOut}</td>
              <td className={`status ${row.status.toLowerCase()}`}>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
