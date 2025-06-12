import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const MasterclassDashboard = () => {
  return (
    <div>
      <header>
        <h1>Masterclass Dashboard</h1>
      </header>
      <nav>
        <Link to="/masterclass">View All</Link>
        <Link to="/masterclass/create">Create</Link>
      </nav>
      <main>
        <div className="card">
          <h2>Example Masterclass Title</h2>
          <p><strong>Date:</strong> 2025-08-20</p>
          <p><strong>Lecturer:</strong> Dr. John Doe</p>
          <div className="buttons">
            <Link to="/masterclass/edit/1">Edit</Link>
            <Link to="/masterclass/delete/1" className="danger">Delete</Link>
          </div>
        </div>
        {/* Repeat cards with map() when dynamic */}
      </main>
    </div>
  );
};

export default MasterclassDashboard;
