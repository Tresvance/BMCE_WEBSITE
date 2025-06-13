import React from 'react';
import './underwork.css';

const UnderConstruction = () => {
  return (
    <div className="uc-container">
      <div className="uc-content">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
          alt="Under Construction"
          className="uc-image"
        />
        <h1>We're Building Something Awesome!</h1>
        <p>This page is currently under construction. Please check back soon.</p>

      </div>
    </div>
  );
};

export default UnderConstruction;
