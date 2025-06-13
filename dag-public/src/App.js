import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MasterclassesList from './pages/MasterclassList/MasterclassList';
import { useState, useEffect } from 'react';
import { MasterclassAPI } from './api';

function App() {
  const [masterclasses, setMasterclasses] = useState([]);

  useEffect(() => {
    const fetchMasterclasses = async () => {
      try {
        const data = await MasterclassAPI.getAllMasterclasses();
        console.log(data);
        setMasterclasses(data);
      } catch (error) {
        console.error('Error fetching masterclasses:', error);
      }
    };

    fetchMasterclasses();
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/masterclasses" element={<MasterclassesList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;