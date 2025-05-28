import React from "react";
import Navbar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CollegeAdministrationPage from './pages/Administration/Administration';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="administration" element={<CollegeAdministrationPage/>}/>
      </Routes>
    </Router>
    
  );
};

export default App;
