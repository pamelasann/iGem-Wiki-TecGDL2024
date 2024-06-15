import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image"; // Import Image component
import Pages from "../pages.ts";

export function Navbar() {
  const pages = Pages.map((item, pageIndex) => {
    if ("folder" in item && item.folder) {
      const folderItems = item.folder.map((subpage, subpageIndex) => {
        if (subpage.path) {
          return (
            <NavDropdown.Item
              key={`subpage-${pageIndex}-${subpageIndex}`}
              as={Link}
              to={subpage.path}
              style={{ margin: "5px 0", fontWeight: "bold" }} // Add margin and bold font weight to the NavDropdown.Item
            >
              {subpage.name}
            </NavDropdown.Item>
          );
        }
      });
      return (
        <NavDropdown
          key={`page-${pageIndex}`}
          title={item.name}
          id="basic-nav-dropdown"
          style={{ margin: "5px 0", fontWeight: "bold" }} // Add margin and bold font weight to the NavDropdown
        >
          {folderItems}
        </NavDropdown>
      );
    } else if ("path" in item && item.path) {
      return (
        <Nav.Link
          key={`page-${pageIndex}`}
          as={Link}
          to={item.path}
          style={{ margin: "5px 50px", fontWeight: "bold" }} // Add margin and bold font weight to the Nav.Link
        >
          {item.name}
        </Nav.Link>
      );
    }
  });

  return (
    <BootstrapNavbar expand="lg" style={{ backgroundColor: "#e6e5e5", padding: "20px", height: "80px" }} fixed="top"> {}
      <Container>
        {}
        <Image src="src\Logo.png" alt="Neotech-e" style={{ width: 70, height: 70, marginRight: -5 }} />
        {}
        <div style={{ color: "#7975d5", fontWeight: "bold", marginRight: 0, fontSize: "24px" }}>NEOTECH-</div> {}
        <div style={{ color: "#82d9b9", fontWeight: "bold", fontSize: "24px" }}>E</div> {}
        <BootstrapNavbar.Brand>{import.meta.env.VITE_TEAM_NAME}</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="left-aligned">{pages}</Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
