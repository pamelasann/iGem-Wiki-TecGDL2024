import React, { useEffect, ReactNode } from 'react';
import { initCanvas } from '../scripts/Canvas';
import '../styles/Layout.css';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        document.getElementById('loader-wrapper')!.style.display = 'none';
        document.body.classList.remove('no-scroll');
        if (
          /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
            navigator.userAgent
          )
        ) {
          console.log('mobile');
        } else {
          console.log('desktop');
          initCanvas('#gradient-canvas');
        }
      }, 500);
    };

    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <div id="loader-wrapper"></div>
      <div className="background">
        <canvas id="gradient-canvas" data-transition-in></canvas>
        <div className="bg-img"></div>
      </div>
      <div className="pt-4">
        <div className="content white-blur-overlay">
          {children}
        </div>
      </div>
      
    </>
  );
};

export default Layout;
