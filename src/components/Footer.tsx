import React from "react";
import { stringToSlug } from "../utils";
//import "./footer.css"; //fk this erros

export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);

  return (
    <footer style={{ background: "#e6e5e5",  }} className="footer text-white py-5 mt-5">
      <div className="container-fluid">
        <div className="row mb-4">
          {}
          <div className="col-lg-4 col-12 d-flex align-items-left">
            <img
              src="src/Logo.png"
              alt="Team Logo"
              style={{ width: 100, height: 100, marginRight: -5, position: 'relative', top: '-25px' }}
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
          </div>
          {/* Middle column */}
          <div className="col-lg-2 col-6">
            <h4 className="mt-lg-0 mt-3">MENU</h4>
            <ul className="list-unstyled m-2 p-2">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">PROJECT</a>
              </li>
              <li>
                <a href="#">HUMAN PRACTICES</a>
              </li>
              <li>
                <a href="#">TEAM</a>
              </li>
              <li>
                <a href="#">SAFETY</a>
              </li>
            </ul>
          </div>
          {}
          <div className="col-lg-2 col-11">
            <h4 className="mt-lg-0 mt-4 mb-3">LOCATION</h4>
            <p> Jalisco, Mexico</p>

          </div>
          <div className="col-lg-3 col-12">
            <h4 className="mt-lg-0 mt-4 mb-3">FOLLOW US!</h4>

          </div>
        </div>
        {}
        <hr />
        <div style={{ background: "#231f20", width: '102%' }} className="row mt-4">
        <div className="col d-flex justify-content-between">
          <p className="d-flex justify-content-between w-100 align-items-center" style={{ marginTop: '15px' }}>
            <small className="text-start">
              2024 {teamYear} - Licensed under{" "}
              <a
                className="subfoot"
                href="https://creativecommons.org/licenses/by/4.0/"
                rel="license"
                style={{ textDecoration: 'underline' }}
              >
                <span style={{ fontWeight: 'normal' }}>
                  Creative Commons Attribution 4.0 International license
                </span>
              </a>
              .
            </small>
            <small className="text-end">
              <span style={{ fontWeight: 'normal' }}>
                Source code available{" "}
                <a href={`https://gitlab.igem.org/2024/tecmonterreygdl/`} style={{ textDecoration: 'underline' }}>
                  here
                </a>
              </span>
              .
            </small>
          </p>
  </div>
</div>





      </div>
    </footer>
  );
}
