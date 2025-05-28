import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Cse from "./pages/Departments/cse"; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="department/csedept" element={<Cse />} /> {/* ✅ Route to cse.jsx */}
      </Routes>
    </Router>
  );
};

export default App;
