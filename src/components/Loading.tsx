import React from "react";
import logo from "../Logo.png"; // Adjust the import path according to your project structure

const Loading = ({ className }: { className?: string }) => {
  return (
    <div className={`loading-screen ${className}`}>
      <img 
        src={logo} 
        alt="Loading..." 
        className="loading-logo" // Added class name
      />
    </div>
  );
};

export default Loading;
