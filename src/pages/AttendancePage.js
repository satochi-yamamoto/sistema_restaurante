import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendancePage = () => {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/attendance`);
        setAttendances(response.data);
      } catch (error) {
        console.error('Error fetching attendances:', error);
      }
    };

    fetchAttendances();
  }, []);

  return (
    <div>
      <h1>Attendance</h1>
      <ul>
        {attendances.map(attendance => (
          <li key={attendance.id}>{attendance.customerName} - {attendance.service} - {new Date(attendance.date).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default AttendancePage;
