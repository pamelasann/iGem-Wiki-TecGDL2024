import React from "react";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Scroll suave hacia arriba
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px", // Siempre 30px desde abajo
        right: "30px",
        padding: "10px 15px",
        fontSize: "16px",
        borderRadius: "50%",
        backgroundColor: "#7975d5", // Color morado
        color: "#fff",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 9999, // Z-index más alto que el footer
        transition: "opacity 0.4s ease, bottom 0.4s ease", // Transiciones suaves
      }}
    >
      ↑
    </button>
  );
};

export default BackToTop;
