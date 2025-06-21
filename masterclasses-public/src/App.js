import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import MasterclassList from "./components/MasterClassList";
import MasterclassDetail from "./components/MasterClassDetails";
import DoctorsPage from "./components/DoctorsPage";

function AppContent() {
  const location = useLocation();
  const showNavbar = !location.pathname.startsWith("/masterclasses/");

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/masterclasses" element={<MasterclassList />} />
          <Route path="/masterclasses/:id" element={<MasterclassDetail />} />
          <Route path="/doctors" element={<DoctorsPage />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;