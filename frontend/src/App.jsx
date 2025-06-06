import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import AIDepartmentPage from "./pages/Departments/ai.jsx";
import EceDepartmentPage from "./pages/Departments/ece.jsx";
import EeeDepartmentPage from "./pages/Departments/eee.jsx";
import CollegeAdministrationPage from './pages/Administration/Administration';
import Cse from "./pages/Departments/cse.jsx";
import CivilDepartmentPage from "./pages/Departments/civil.jsx";
import MechDepartmentPage from "./pages/Departments/mech.jsx";
import PlacementPage from "./pages/Placements/cgpu.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="placements/cgpu" element={<PlacementPage />} />
        <Route path="department/csedept" element={<Cse />} />
        <Route path="department/civildept" element={<CivilDepartmentPage />} />
        <Route path="department/mechdept" element={<MechDepartmentPage />} />
        <Route path="administration" element={<CollegeAdministrationPage />} />
        <Route path="department/aidept" element={<AIDepartmentPage />} />
        <Route path="department/ecedept" element={<EceDepartmentPage />} />
        <Route path="department/eeedept" element={<EeeDepartmentPage />} />

      </Routes>
    </Router>
  );
};

export default App;