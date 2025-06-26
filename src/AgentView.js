import React, { useState } from 'react';

const initialTickets = [
  { id: 1, subject: 'Cannot login', status: 'Open' },
  { id: 2, subject: 'Printer not working', status: 'In Progress' },
  { id: 3, subject: 'VPN setup', status: 'Resolved' },
];

const statusOptions = ['Open', 'In Progress', 'Resolved'];

function AgentView() {
  const [tickets, setTickets] = useState(initialTickets);

  const handleStatusChange = (id, newStatus) => {
    setTickets(tickets.map(ticket =>
      ticket.id === id ? { ...ticket, status: newStatus } : ticket
    ));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="fw-bold mb-4">Agent Ticket Management</h2>
            {tickets.map(ticket => (
              <div key={ticket.id} className="d-flex align-items-center justify-content-between mb-3 p-3 bg-light rounded border">
                <span className="fw-semibold">{ticket.subject}</span>
                <select
                  className="form-select w-auto ms-3"
                  value={ticket.status}
                  onChange={e => handleStatusChange(ticket.id, e.target.value)}
                >
                  {statusOptions.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentView; 