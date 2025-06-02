import React from "react";
import Footer from "../../components/Footer/Footer"; // adjust path as needed
import "./Home.css";

const Home = () => {
  return (
    <div className="page-container">
      <div className="content">
        <h1>Welcome to the Home Page</h1>
        <p>This is some sample content.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
