# Service Desk Application

A modern, responsive Service Desk Application built with React.js and Bootstrap. This app allows users to submit, view, and manage support tickets, with a dedicated agent view for ticket status updates.

## Features

- **Login/Signup:** Secure forms with validation for user authentication (mocked for demo).
- **Dashboard:** View all submitted tickets in a responsive, interactive table with status and priority badges.
- **Create Ticket:** Submit new support tickets with subject, description, category, and priority.
- **Ticket Details:** View full ticket information and a comments thread.
- **Agent View:** Agents can update ticket statuses (Open, In Progress, Resolved).
- **Responsive Design:** Fully mobile-friendly and desktop-ready.
- **Modern UI:** Built with Bootstrap for a clean, professional look.
- **Mock Data:** Uses mock data and local state for demonstration (easy to connect to a backend).

## Tech Stack

- **React.js** (with Hooks and React Router)
- **Bootstrap 5** (via npm)
- **CSS Modules** (for custom styles, if needed)

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd service_desk_application
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage
- **Login/Signup:** Use the navigation bar to access login or signup. (No real authentication; for demo only.)
- **Dashboard:** View all tickets. Click a ticket row to see details.
- **Create Ticket:** Click "+ New Ticket" or use the nav to submit a new ticket.
- **Ticket Details:** View ticket info and comments.
- **Agent View:** Change ticket statuses as an agent.

## Customization
- To connect to a real backend, replace the mock data and state logic in the components with API calls.
- You can further theme the app using Bootstrap utilities or by adding a custom Bootstrap theme.
- For advanced features (notifications, file uploads, etc.), extend the relevant components.

## Folder Structure
```
service_desk_application/
  ├── public/
  ├── src/
  │   ├── App.js
  │   ├── index.js
  │   ├── Dashboard.js
  │   ├── CreateTicket.js
  │   ├── Login.js
  │   ├── Signup.js
  │   ├── TicketDetails.js
  │   ├── AgentView.js
  │   └── ...
  ├── package.json
  └── README.md
```

## License

Made by Anurag Verma.
