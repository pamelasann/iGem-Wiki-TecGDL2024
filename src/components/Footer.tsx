import { stringToSlug } from "../utils";
//import "./footer.css"; //fk this erros

export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);

  return (
    <footer style={{ background: "#e6e5e5", borderRadius: '45px 45px 0 0', }} className="footer">
      <div className="container-fluid p-2">
        <div className="row">
          
          <div className="col-xl-3 col-12 d-flex flex-column align-items-center justify-content-center" id="title-font" style={{ minHeight: '9em' }}>
            <div className="d-flex align-items-center">
              <div
                style={{
                  color: "#7975d5",
                  fontWeight: "bold",
                  fontSize: "3.2em",
                }}
              >
                Neotech
              </div>
              <div style={{ color: "#82d9b9", fontWeight: "bold", fontSize: "3.2em",}}>
                -e
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-12 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '7em' }}>
            <h4 className="" style={{color: 'black', fontWeight:'bold'}}>LOCATION</h4>
            <p style={{color: 'black', minHeight: '1.5em'}}> Guadalajara, Mexico</p>
          </div>

          <div className="col-xl-3 col-12 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '7em' }}>
            <h4 className="" style={{ color: 'black', fontWeight: 'bold'}}>FOLLOW US!</h4>
            <div className="d-flex align-items-center">
                <img
                  src="https://static.igem.wiki/teams/5439/logos/instagram.png"
                  alt="Instagram"
                  style={{ width: '1.5em', height: 'auto'}}
                />
                <a href="https://www.instagram.com/igem.tecgdl" target="_blank" rel="noopener noreferrer" style={{color: 'black', fontWeight:'normal', marginLeft: '0.2em',}}> 
                  igem.tecgdl
                </a>
            </div>
          </div>

          <div className="col-xl-3 col-12 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '9em' }}>
              <a href="https://tec.mx">
                <img
                  src="https://static.igem.wiki/teams/5439/logos/tec-monterrey-logo.png"
                  alt="Tecnológico de Monterrey"
                  style={{ width: 'auto', height: '3.4em'}}
                />
            </a>
          </div>
        </div>
      </div>
      
      <div style={{ background: "#7975d0"}} className="container-fluid text-white p-1">
          <div className="container-fluid d-flex justify-content-between">
            <p className="justify-content-between w-100 align-items-center">
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
    </footer>
  );
}
