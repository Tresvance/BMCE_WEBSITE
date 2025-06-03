import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import CollegeAdministrationPage from './pages/Administration/Administration';
import Cse from "./pages/Departments/cse.jsx"; 
import CivilDepartmentPage from "./pages/Departments/civil.jsx";
import CollegeGallery from "./pages/Gallery/gallery.jsx"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="department/csedept" element={<Cse />} /> {/* ✅ Route to cse.jsx */}
        <Route path="department/civildept" element={<CivilDepartmentPage />} /> {/* ✅ Route to cse.jsx */}
        <Route path="administration" element={<CollegeAdministrationPage/>}/>







        <Route path="gallery" element={<CollegeGallery/>}/>
      </Routes>
    </Router>
  );
};

export default App;
