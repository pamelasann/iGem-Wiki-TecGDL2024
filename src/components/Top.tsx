import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Function to handle scrolling
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true); // Show button when scrolled down
    } else {
      setShowButton(false); // Hide button when at the top
    }
  };

  // Function to scroll back to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <button 
          onClick={scrollToTop} 
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            padding: '10px 15px',
            fontSize: '16px',
            borderRadius: '50%',
            backgroundColor: '#d4d2f0', // Purple color
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 9999,
            transition: 'opacity 0.4s ease', // Smooth transition
            opacity: showButton ? 1 : 0, // Smooth fade-in
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default BackToTop;
