import React from "react";

const Loading = ({ className }: { className?: string }) => {
  return (
    <div className={`loading-screen ${className}`}>
      <h2>Loading...</h2>
      {/* You can also add a spinner or animation here */}
    </div>
  );
};

export default Loading;
