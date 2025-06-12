import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MasterclassEdit from './components/Masterclass/MasterclassEdit';
import MasterclassCreate from './components/Masterclass/MasterclassCreate';
import MasterclassDashboard from './components/Masterclass/MasterclassDashboard';

import TemplateList from './components/Mastertemplate/TemplateList';
import TemplateCreate from './components/Mastertemplate/TemplateCreate';
import TemplateEdit from './components/Mastertemplate/TemplateEdit';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/masterclasses" element={<MasterclassDashboard />} />
        <Route path="/masterclasses/edit/:id" element={<MasterclassEdit />} />
        <Route path="/masterclasses/create" element={<MasterclassCreate />} />

        <Route path="/templates" element={<TemplateList />} />
        <Route path="/templates/edit/:id" element={<TemplateEdit />} />
        <Route path="/templates/create" element={<TemplateCreate />} />
        {/* <Route path="/dashboard/templates" element={<TemplateList />} />
        <Route path="/dashboard/static" element={<StaticEditor />} /> */}
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
