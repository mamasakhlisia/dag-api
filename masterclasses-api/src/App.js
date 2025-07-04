import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import MasterclassEdit from "./components/Masterclass/MasterclassEdit";
import MasterclassCreate from "./components/Masterclass/MasterclassCreate";
import MasterclassDashboard from "./components/Masterclass/MasterclassDashboard";

import TemplateList from "./components/Mastertemplate/TemplateList";
import TemplateCreate from "./components/Mastertemplate/TemplateCreate";
import TemplateEdit from "./components/Mastertemplate/TemplateEdit";
import DoctorCreate from "./components/Doctors/DoctorCreate";
import DoctorList from "./components/Doctors/DoctorList";

import HomePageForm from "./components/HomePage/HomePageCreate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/masterclasses/list" element={<MasterclassDashboard />} />
        <Route path="/masterclasses/edit/:id" element={<MasterclassEdit />} />
        <Route path="/masterclasses/create" element={<MasterclassCreate />} />

        <Route path="/templates/list" element={<TemplateList />} />
        <Route path="/templates/edit/:id" element={<TemplateEdit />} />
        <Route path="/templates/create" element={<TemplateCreate />} />

        <Route path="/doctors/create" element={<DoctorCreate />} />
        <Route path="/doctors/list" element={<DoctorList />} />
        {/* <Route path="/dashboard/templates" element={<TemplateList />} />
        <Route path="/dashboard/static" element={<StaticEditor />} /> */}

        <Route path="/homePage/create" element={<HomePageForm />} />
      </Routes>
    </Router>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
