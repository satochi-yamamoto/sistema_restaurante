import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/inventory">Inventory</Link></li>
      <li><Link to="/attendance">Attendance</Link></li>
      <li><Link to="/orders">Orders</Link></li>
      <li><Link to="/self-service">Self Service</Link></li>
    </ul>
  </nav>
);

export default Navbar;
