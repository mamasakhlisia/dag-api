import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/doctor/list');
        setDoctors(response.data);
      } catch (err) {
        setError('Failed to load doctors');
        console.error('Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (isLoading) return <div>Loading doctors...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Doctors</h1>
        <Link to="/doctors/create" style={{
          padding: '8px 12px',
          background: '#28a745',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px'
        }}>
          Add New Doctor
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {doctors.map(doctor => (
          <div key={doctor.id} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img 
                src={`http://localhost:8080/api/doctor/image/${doctor.imagePath}`} 
                alt={`${doctor.firstName} ${doctor.lastName}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '15px' }}>
              <h2 style={{ margin: '0 0 10px 0' }}>{doctor.firstName} {doctor.lastName}</h2>
              <p style={{ color: '#666', margin: '0 0 10px 0' }}>{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;