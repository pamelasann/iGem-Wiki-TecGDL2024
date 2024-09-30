import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;

    // Mostrar el botón después de haber hecho scroll 300px hacia abajo
    if (scrollPosition > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Scroll suave hacia arriba
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px", // Siempre 30px desde abajo
            right: "30px",
            padding: "10px 15px",
            fontSize: "16px",
            borderRadius: "50%",
            backgroundColor: "#d4d2f0", // Color morado
            color: "#fff",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000, // Elevado z-index para que esté siempre sobre el footer
            transition: "opacity 0.4s ease, bottom 0.4s ease", // Transiciones suaves
            opacity: showButton ? 1 : 0, // Efecto de desvanecimiento suave
          }}
        >
          ↑
        </button>
      )}
    </>
  );
};

export default BackToTop;
