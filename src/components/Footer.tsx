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
            <div className="d-flex align-items-center">
              <img
                    src="https://static.igem.wiki/teams/5439/icons/location-icon.png"
                    alt="Location"
                    style={{ width: '1.5em', height: 'auto'}}
                />
                  Guadalajara, Mexico
            </div>
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
              <div className="row pb-2">
                <a href="https://tec.mx">
                  <img
                    src="https://static.igem.wiki/teams/5439/logos/tec-monterrey-logo.png"
                    alt="Tecnológico de Monterrey"
                    style={{ width: 'auto', height: '3.1em'}}
                  />
                </a>
              </div>
              <div className="row">
                <div className="col-12">
                  <a href="https://tec.mx/es/ingenieria-y-ciencias">
                      <img
                        src="https://static.igem.wiki/teams/5439/logos/escuelaingycienciastec-logo.png"
                        alt="Tecnológico de Monterrey Ingeniería y Ciencias"
                        style={{ width: 'auto', height: '1.4em', paddingRight: '0.5em'}}
                      />
                  </a>
                  <a href="https://www.instagram.com/enzava_productos/">
                      <img
                        src="https://static.igem.wiki/teams/5439/logos/enzava-logo.png"
                        alt="Enzava"
                        style={{ width: 'auto', height: '1em', paddingRight: '0.5em'}}
                      />
                  </a>
                  <a href="https://www.snapgene.com/">
                        <img
                          src="https://static.igem.wiki/teams/5439/logos/snapgene-logo.png"
                          alt="SnapGene"
                          style={{ width: 'auto', height: '1.5em', paddingRight: '0.5em'}}
                        />
                  </a>
                  <a href="https://lagranlucha.mx/">
                      <img
                        src="https://static.igem.wiki/teams/5439/logos/lagranlucha-logo.png"
                        alt="La Gran Lucha"
                        style={{ width: 'auto', height: '1.8em',}}
                      />
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
      
      <div style={{ background: "#7975d0"}} className="container-fluid text-white">
          <div className="row">
            <div className="col-lg-6 col-12" id="attribution-text">
              <small className="text-start" style={{fontSize: '0.7em'}}>
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
            </div>

            <div className="col-lg-6 col-12 text-end" id="attribution-text">
              <small className="text-end"  style={{fontSize: '0.7em'}}>
                  <span style={{ fontWeight: 'normal' }}>
                    Source code available{" "}
                    <a href={`https://gitlab.igem.org/2024/tecmonterreygdl/`} style={{ textDecoration: 'underline', fontWeight: 'normal' }}>
                      here
                    </a>
                  </span>
                  .
                </small>
            </div>
          </div>
        </div>
    </footer>
  );
}
