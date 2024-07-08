import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import InventoryPage from './pages/InventoryPage';
import AttendancePage from './pages/AttendancePage';
import OrdersPage from './pages/OrdersPage';
import SelfServicePage from './pages/SelfServicePage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/inventory" component={InventoryPage} />
      <Route path="/attendance" component={AttendancePage} />
      <Route path="/orders" component={OrdersPage} />
      <Route path="/self-service" component={SelfServicePage} />
    </Switch>
  </Router>
);

export default App;
