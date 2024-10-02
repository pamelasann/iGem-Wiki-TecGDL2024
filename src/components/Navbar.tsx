import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Pages from "../pages.ts";

export function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  const pages = Pages.map((item, pageIndex) => {
    if (item.folder) {
      const folderItems = item.folder.map((subpage, subpageIndex) => (
        subpage.path ? (
          <NavDropdown.Item
            key={`subpage-${pageIndex}-${subpageIndex}`}
            as={Link}
            to={subpage.path}
            onClick={handleClose}
          >
            {subpage.name}
          </NavDropdown.Item>
        ) : null
      ));

      return (
        <NavDropdown
          key={`page-${pageIndex}`}
          title={item.name}
          id={`basic-nav-dropdown-${pageIndex}`}
        >
          {folderItems}
        </NavDropdown>
      );
    } else if (item.path) {
      return (
        <Nav.Link
          key={`page-${pageIndex}`}
          as={Link}
          to={item.path}
          onClick={handleClose}
        >
          {item.name}
        </Nav.Link>
      );
    }
    return null;
  });

  return (
    <>
      <BootstrapNavbar
        expand="lg"
        className="custom-navbar"
        style={{ backgroundColor: "#e6e5e5", padding: "20px", height: "80px" }}
        fixed="top"
        expanded={expanded}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <a href="https://2024.igem.wiki/tecmonterreygdl/">
              <Image
                src="https://static.igem.wiki/teams/5439/logo.png"
                alt="Neotech-e"
                style={{ width: 'auto', height: '3.3em' }}
              />
            </a>
            <a href="https://2024.igem.wiki/tecmonterreygdl/" id="logo-link" className="ms-2 d-flex align-items-center">
              <div id="title-font"
                style={{
                  color: "#7975d5",
                  fontWeight: "bold",
                  fontSize: "1.8em",
                }}
              >
                Neotech
              </div>
              <div style={{ color: "#82d9b9", fontWeight: "bold", fontSize: "1.8em"}} id="title-font">
                -
              </div>
              <div style={{ color: "#82d9b9", fontWeight: "bold", fontSize: "1.8em"}} id="title-font">
                e
              </div>
            </a>
          </div>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
          <BootstrapNavbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <button className="navbar-close" onClick={handleClose}>×</button>
            <Nav className="left-aligned">{pages}</Nav>
          </BootstrapNavbar.Collapse>
        </div>
      </BootstrapNavbar>
      {expanded && <div className="custom-navbar navbar-overlay"></div>}
    </>
  );
}
