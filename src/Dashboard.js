import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const mockTickets = [
  { id: 1, subject: 'Cannot login', category: 'Access', priority: 'High', status: 'Open', created: '2024-06-01' },
  { id: 2, subject: 'Printer not working', category: 'Hardware', priority: 'Medium', status: 'In Progress', created: '2024-06-02' },
  { id: 3, subject: 'VPN setup', category: 'Network', priority: 'Low', status: 'Resolved', created: '2024-06-03' },
];

function getPriorityBadge(priority) {
  if (priority === 'High') return <span className="badge bg-danger">High</span>;
  if (priority === 'Medium') return <span className="badge bg-warning text-dark">Medium</span>;
  return <span className="badge bg-success">Low</span>;
}

function getStatusBadge(status) {
  if (status === 'Open') return <span className="badge bg-danger">Open</span>;
  if (status === 'In Progress') return <span className="badge bg-warning text-dark">In Progress</span>;
  return <span className="badge bg-success">Resolved</span>;
}

function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching tickets from localStorage or API
    setTickets(mockTickets);
  }, []);

  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Submitted Tickets</h2>
        <button className="btn btn-primary" onClick={() => navigate('/create')}>+ New Ticket</button>
      </div>
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Subject</th>
                  <th>Category</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Created</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map(ticket => (
                  <tr
                    key={ticket.id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/ticket/${ticket.id}`)}
                  >
                    <td className="fw-semibold">{ticket.subject}</td>
                    <td>{ticket.category}</td>
                    <td>{getPriorityBadge(ticket.priority)}</td>
                    <td>{getStatusBadge(ticket.status)}</td>
                    <td>{ticket.created}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 