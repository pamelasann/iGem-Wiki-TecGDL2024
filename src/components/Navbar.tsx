import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Pages from "../pages.ts";

export function Navbar({ itemSpacing = "10px" }: { itemSpacing?: string }) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [hoverItem, setHoverItem] = useState<number | null>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
    setHoverItem(null); // Reset hoverItem when mouse leaves the dropdown item
    setShowDropdown(false);
  };

  const handleItemMouseEnter = (index: number) => {
    setHoverItem(index);
  };

  const handleItemMouseLeave = () => {
    setHoverItem(null);
  };

  const pages = Pages.map((item, pageIndex) => {
    if ("folder" in item && item.folder) {
      const folderItems = item.folder.map((subpage, subpageIndex) => {
        if (subpage.path) {
          return (
            <NavDropdown.Item
              key={`subpage-${pageIndex}-${subpageIndex}`}
              as={Link}
              to={subpage.path}
              style={{
                margin: "0",
                fontWeight: "bold",
                padding: "5px 15px",
                borderRadius: "10px",
                background: "#8976ec",
                color:
                  hoverIndex === pageIndex && hoverItem === subpageIndex
                    ? "#ff00ff"
                    : "white", // Change font color only when both conditions are met
                transition: "color 0.3s ease-in-out", // Add transition for color change
              }}
              onMouseEnter={() => handleItemMouseEnter(subpageIndex)}
              onMouseLeave={handleItemMouseLeave}
            >
              {subpage.name}
            </NavDropdown.Item>
          );
        }
        return null;
      });

      return (
        <NavDropdown
          key={`page-${pageIndex}`}
          title={item.name}
          id={`basic-nav-dropdown-${pageIndex}`}
          show={showDropdown && hoverIndex === pageIndex} // Show dropdown when showDropdown and hoverIndex match
          onMouseEnter={() => handleMouseEnter(pageIndex)}
          onMouseLeave={handleMouseLeave}
          style={{
            margin: "5px 0",
            fontWeight: "bold",
            position: "relative",
            opacity : showDropdown && hoverIndex === pageIndex ? 1 : 0,
            transition : "opacity 1s ease-in-out",


          }}
        >
          <div
            style={{
              display: "flex",
              height: "",
              borderRadius: "10px",
              background: "#8976ec",
              padding: "0px 0",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              margin: "-15px 0",
              //opacity : showDropdown && hoverIndex === pageIndex ? 1 : 0,
              //transition : "opacity 1s ease-in-out",
            }}
          >
            {folderItems}
          </div>
        </NavDropdown>
      );
    } else if ("path" in item && item.path) {
      return (
        <Nav.Link
          key={`page-${pageIndex}`}
          as={Link}
          to={item.path}
          style={{
            margin: "5px 0",
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Nav.Link>
      );
    }
    return null;
  });

  return (
    <BootstrapNavbar
      expand="lg"
      style={{ backgroundColor: "#e6e5e5", padding: "20px", height: "80px" }}
      fixed="top"
    >
      <Container>
        <Image
          src="src/Logo.png"
          alt="Neotech-e"
          style={{ width: 70, height: 70, marginRight: -5 }}
        />
        <div
          style={{
            color: "#7975d5",
            fontWeight: "bold",
            marginRight: 0,
            fontSize: "24px",
          }}
        >
          NEOTECH-
        </div>
        <div style={{ color: "#82d9b9", fontWeight: "bold", fontSize: "24px" }}>
          E
        </div>
        <BootstrapNavbar.Brand>
          {import.meta.env.VITE_TEAM_NAME}
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="left-aligned">{pages}</Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
