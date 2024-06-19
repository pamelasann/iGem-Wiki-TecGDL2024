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
          <div className="col-lg-4 col-12 d-flex flex-column align-items-start">
          <div className="d-flex align-items-left">
            <img
              src="src/Logo.png"
              alt="Team Logo"
              style={{ width: 125, height: 125, marginRight: -5, position: 'relative', top: '-25px' }}
            />
            <div
              style={{
                color: "#7975d5",
                fontWeight: "bold",
                marginRight: 0,
                fontSize: "24px",
                marginTop: '15px'
              }}
            >
              NEOTECH-
            </div>
            <div style={{ color: "#82d9b9", fontWeight: "bold", fontSize: "24px", marginTop: '15px' }}>
              E
            </div>
          </div>


        </div>
          
          {}
          <div className="col-lg-2 col-6" >
            <h4 className="mt-lg-0 mt-3" style={{color: 'black', fontWeight:'bold' }}>MENU</h4>
            <ul className="list-unstyled m-2 p-2" style={{color:'black'}}>
              <li>
                <a href="#" style={{color: 'black', fontWeight:'normal', marginLeft: -16}}>HOME</a>
              </li>
              <li>
                <a href="#" style={{color: 'black', fontWeight:'normal', marginLeft: -16}}>PROJECT</a>
              </li>
              <li>
                <a href="#" style={{color: 'black', fontWeight:'normal', marginLeft: -16}}>HUMAN PRACTICES</a>
              </li>
              <li>
                <a href="#" style={{color: 'black', fontWeight:'normal', marginLeft: -16}}>TEAM</a>
              </li>
              <li>
                <a href="#" style={{color: 'black', fontWeight:'normal', marginLeft: -16}}>SAFETY</a>
              </li>
            </ul>
          </div>
          {}
          <div className="col-lg-2 col-11">
            <h4 className="mt-lg-0 mt-4 mb-3" style={{color: 'black', fontWeight:'bold'}}>LOCATION</h4>
            <p style={{color: 'black'}}> Jalisco, Mexico</p>

          </div>
          <div className="col-lg-3 col-12">
            <h4 className="mt-lg-0 mt-4 mb-3" style={{ color: 'black', fontWeight: 'bold', marginLeft: '0px' }}>FOLLOW US!</h4>
            
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src="src/images/instagram.png"
                alt="Instagram"
                style={{ width: 25, height: 25, position: 'relative', top: '-15px', marginRight: '15px' }}
              />
            </a>

            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="src/images/facebook.png"
                alt="Facebook"
                style={{ width: 25, height: 25, position: 'relative', top: '-15px', marginRight: '10px' }}
              />
            </a>

            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img
                src="src/images/twitter.png"
                alt="Twitter"
                style={{ width: 40, height: 25, position: 'relative', top: '-15px', marginRight: '10px' }}
              />
            </a>

            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img
                src="src/images/Linkedin.png"
                alt="Linkedin"
                style={{ width: 25, height: 25, position: 'relative', top: '-15px', marginRight: '10px' }}
              />
            </a>

          </div>

        </div>
        {}
        <div className="mt-1 d-flex justify-content-center align-items-center" style={{marginTop: '-100px'}}>
                <a href="https://snapgene.com">
              <img
                src="src/images/snapgenes.png"
                alt="SnapGenes"
                style={{ width: '300px', height: 'auto', marginRight: '10px'}}
              />
            </a>
            <a href="https://lagranlucha.mx">
              <img
                src="src/images/burgir.png"
                alt="La gran lucha"
                style={{ width: '100px', height: 'auto', marginRight: '40px'}}
              />
            </a>
            <a href="https://tec.mx">
              <img
                src="src/images/tecc.png"
                alt="RAYO EMPRENDEDOR"
                style={{ width: '300px', height: 'auto', marginRight: '40px'}}
              />
            </a>
            <a href="https://promega.com">
              <img
                src="src/images/promega.png"
                alt="Promega"
                style={{ width: '300px', height: 'auto'}}
              />
            </a>
          </div>
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
