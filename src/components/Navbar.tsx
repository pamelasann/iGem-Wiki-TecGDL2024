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

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
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
                margin: `0 ${itemSpacing}`,
                fontWeight: "bold",
                color: "white",
                padding: "10px 20px",
                
              }}
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
          show={hoverIndex === pageIndex}
          onMouseEnter={() => handleMouseEnter(pageIndex)}
          onMouseLeave={handleMouseLeave}
          style={{ 
            margin: "5px 0", 
            fontWeight: "bold",
            position: "relative"
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#8976ec",
              padding: "0 0",
              position: "absolute",
              left: "50%",   // Centers the dropdown menu
              transform: "translateX(-50%)",  // Adjusts the position to the center
              margin: "-10px 0" //I cheesed this so hard omg
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
          style={{ margin: "5px 50px", fontWeight: "bold" }}
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
