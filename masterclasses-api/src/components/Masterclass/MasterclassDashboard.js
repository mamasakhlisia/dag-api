import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllMasterclasses, deleteMasterclass } from '../../api/api'; // Make sure to import deleteMasterclass
import '../styles.css';

const MasterclassDashboard = () => {
  const [masterclasses, setMasterclasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMasterclasses();
  }, []);

  const fetchMasterclasses = async () => {
    try {
      const response = await getAllMasterclasses();
      setMasterclasses(response.data);
    } catch (err) {
      setError(err.message || 'Failed to load masterclasses');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }
    
    try {
      await deleteMasterclass(id);
      // Remove the deleted masterclass from the state
      setMasterclasses(masterclasses.filter(mc => mc.id !== id));
      // Optional: Show a success message
      alert('Masterclass deleted successfully');
    } catch (err) {
      setError(err.message || 'Failed to delete masterclass');
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) return <div className="loading">Loading masterclasses...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Masterclass Dashboard</h1>
        <nav className="dashboard-nav">
          <Link to="/masterclasses/create" className="create-button">
            + Create New Masterclass
          </Link>
        </nav>
      </header>

      <main className="masterclass-grid">
        {masterclasses.length > 0 ? (
          masterclasses.map((masterclass) => (
            <div key={masterclass.id} className="masterclass-card">
              <div className="card-header">
                <h2>{masterclass.template.title}</h2>
                <span className={`status-badge ${masterclass.definate ? 'confirmed' : 'pending'}`}>
                  {masterclass.definate ? 'Confirmed' : 'Pending'}
                </span>
              </div>
              
              <div className="card-body">
                <div className="info-row">
                  <span className="info-label">Date:</span>
                  <span>{formatDate(masterclass.date)}</span>
                </div>
                
                <div className="info-row">
                  <span className="info-label">Duration:</span>
                  <span>{masterclass.daysLong} day(s)</span>
                </div>
                
                <div className="info-row">
                  <span className="info-label">Lecturer:</span>
                  <span>
                    {masterclass.template.lecturer?.firstName || ''} {masterclass.template.lecturer?.lastName || ''}
                  </span>
                </div>
                
                <div className="info-row">
                  <span className="info-label">Type:</span>
                  <span>{masterclass.theoretical ? 'Theoretical' : 'Practical'}</span>
                </div>
              </div>
              
              <div className="card-footer">
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(masterclass.id, masterclass.template.title);
                  }}
                  className="action-button delete-button"
                >
                  Delete
                </Link>
                {masterclass.link && (
                  <a 
                    href={masterclass.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-button view-button"
                  >
                    View Details
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <p>No masterclasses found.</p>
            <Link to="/masterclass/create" className="create-button">
              Create your first masterclass
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default MasterclassDashboard;