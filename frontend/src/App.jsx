import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import AIDepartmentPage from "./pages/Departments/ai.jsx";
import EceDepartmentPage from "./pages/Departments/ece.jsx";
import EeeDepartmentPage from "./pages/Departments/eee.jsx";
import CollegeAdministrationPage from "./pages/Administration/Administration";
import Cse from "./pages/Departments/cse.jsx";
import CivilDepartmentPage from "./pages/Departments/civil.jsx";
import MechDepartmentPage from "./pages/Departments/mech.jsx";
import PlacementPage from "./pages/Placements/cgpu.jsx";
import CollegeGallery from "./pages/Gallery/gallery.jsx";
import About from "./pages/About/about.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import ContactPage from "./pages/Contact/contact.jsx";
import OurCampus from "./pages/About/OurCampus";
import Accrediation from "./pages/About/Accreditation";
import Disclosure from "./pages/About/Disclosure";
import IEDC from "./pages/Activities/IEDC";
import NSS from "./pages/Activities/NSS";

const App = () => {
  return (
    <Router>
      <Header />
      <Sidebar />
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

        <Route path="gallery" element={<CollegeGallery />} />

        <Route path="about" element={<About />} />

        <Route path="contact" element={<ContactPage />} />
        <Route path="/our-campus" element={<OurCampus />} />
        <Route path="/accreditation" element={<Accrediation />} />
        <Route path="/disclosure" element={<Disclosure />} />
        <Route path="/iedc" element={<IEDC />} />
        <Route path="/nss" element={<NSS />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
