import React from 'react';
import { useParams } from 'react-router-dom';

const mockTickets = [
  { id: 1, subject: 'Cannot login', description: 'I am unable to login to my account.', category: 'Access', priority: 'High', status: 'Open', created: '2024-06-01' },
  { id: 2, subject: 'Printer not working', description: 'The office printer is not responding.', category: 'Hardware', priority: 'Medium', status: 'In Progress', created: '2024-06-02' },
  { id: 3, subject: 'VPN setup', description: 'Need help setting up VPN.', category: 'Network', priority: 'Low', status: 'Resolved', created: '2024-06-03' },
];

const mockComments = [
  { id: 1, author: 'Agent', text: 'We are looking into this issue.', date: '2024-06-01' },
  { id: 2, author: 'User', text: 'Thank you for the update.', date: '2024-06-02' },
];

function getStatusBadge(status) {
  if (status === 'Open') return <span className="badge bg-danger">Open</span>;
  if (status === 'In Progress') return <span className="badge bg-warning text-dark">In Progress</span>;
  return <span className="badge bg-success">Resolved</span>;
}

function TicketDetails() {
  const { id } = useParams();
  const ticket = mockTickets.find(t => t.id === Number(id));

  if (!ticket) return <div className="alert alert-danger">Ticket not found.</div>;

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-7">
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h2 className="fw-bold mb-3">Ticket Details</h2>
            <div className="row mb-2">
              <div className="col-5 fw-semibold">Subject:</div>
              <div className="col-7">{ticket.subject}</div>
            </div>
            <div className="row mb-2">
              <div className="col-5 fw-semibold">Description:</div>
              <div className="col-7">{ticket.description}</div>
            </div>
            <div className="row mb-2">
              <div className="col-5 fw-semibold">Category:</div>
              <div className="col-7">{ticket.category}</div>
            </div>
            <div className="row mb-2">
              <div className="col-5 fw-semibold">Priority:</div>
              <div className="col-7">{ticket.priority}</div>
            </div>
            <div className="row mb-2">
              <div className="col-5 fw-semibold">Status:</div>
              <div className="col-7">{getStatusBadge(ticket.status)}</div>
            </div>
            <div className="row mb-2">
              <div className="col-5 fw-semibold">Created:</div>
              <div className="col-7">{ticket.created}</div>
            </div>
          </div>
        </div>
        <div className="card shadow-sm">
          <div className="card-body">
            <h4 className="fw-bold mb-3">Comments</h4>
            {mockComments.map(comment => (
              <div key={comment.id} className="mb-3 p-3 bg-light rounded border">
                <div className="mb-1"><strong>{comment.author}</strong> <span className="text-muted small">{comment.date}</span></div>
                <div>{comment.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketDetails; 