import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const updateScrollProgress = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress);
    
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollPercentage}%`,
        height: '5px',
        backgroundColor: '#7975d5', // Purple color
        zIndex: 9999,
        transition: 'width 0.4s ease-out', // Smoother transition
      }}
    />
  );
};

export default ScrollProgressBar;
