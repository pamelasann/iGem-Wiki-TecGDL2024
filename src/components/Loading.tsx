//import React from "react";

const Loading = ({ className }: { className?: string }) => {
  return (
    <div className={`loading-screen ${className} fade-in`}>
      <img 
        src={'https://static.igem.wiki/teams/5439/logo.png'} 
        alt="Loading..." 
        className="loading-logo" 
      />
    </div>
  );
};

export default Loading;
