import React from "react";
import Navbar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import CollegeAdministrationPage from './pages/Administration/Administration';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <CollegeAdministrationPage />
    </>
  );
};

export default App;
