import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import CreateTicket from './CreateTicket';
import Login from './Login';
import Signup from './Signup';
import TicketDetails from './TicketDetails';
import AgentView from './AgentView';

function App() {
  return (
    <Router>
      <div className="App bg-light min-vh-100">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
          <div className="container">
            <NavLink className="navbar-brand fw-bold" to="/">ServiceDesk</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><NavLink className="nav-link" to="/">Dashboard</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/create">Create Ticket</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/agent">Agent View</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/signup">Signup</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container py-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<CreateTicket />} />
            <Route path="/ticket/:id" element={<TicketDetails />} />
            <Route path="/agent" element={<AgentView />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
