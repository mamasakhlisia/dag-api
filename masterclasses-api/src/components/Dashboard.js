import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </header>

      <main className="dashboard-main">
        <section className="dashboard-grid">
          <Link to="/masterclasses" className="dashboard-card">
            <h2>Masterclasses</h2>
            <p>View, edit, or delete masterclasses</p>
          </Link>

          <Link to="/masterclasses/create" className="dashboard-card">
            <h2>Create Masterclass</h2>
            <p>Start a new masterclass</p>
          </Link>

          <Link to="/templates" className="dashboard-card">
            <h2>Templates</h2>
            <p>View, edit, or delete masterclasses</p>
          </Link>
          <Link to="/templates/create" className="dashboard-card">
            <h2>Create Template</h2>
            <p>Create a new masterclass template</p>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
