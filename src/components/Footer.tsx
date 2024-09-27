import { stringToSlug } from "../utils";
//import "./footer.css"; //fk this erros

export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);

  return (
    <footer className="footer">
      <div className="container-fluid p-4 pt-5" id="main-container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-xs-12 d-flex flex-column align-items-center">
            <div className="d-flex align-items-center">
              <img
                src="https://static.igem.wiki/teams/5439/logo.png"
                alt="Neotech-e"
                style={{ width: 120, height: 'auto', marginRight: 1, position: 'relative' }}
              />
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <h4 className="mt-lg-0 mt-4 mb-3" style={{color: 'black', fontWeight:'bold'}}>LOCATION</h4>
            <p style={{color: 'black'}}> Jalisco, Mexico</p>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <h4 className="mt-lg-0 mt-4 mb-3" style={{ color: 'black', fontWeight: 'bold', marginLeft: '0px' }}>FOLLOW US!</h4>
            <div className="row">
              <div className="col-2 col-sm-2">
                <img
                  src="https://static.igem.wiki/teams/5439/logos/instagram.png"
                  alt="Instagram"
                  style={{ width: 25, height: 25, top: '-15px', marginRight: '15px' }}
                />
              </div>
              <div className="col-10 col-sm-10">
                <a href="https://www.instagram.com/igem.tecgdl" target="_blank" rel="noopener noreferrer" style={{ color: 'black'}}> 
                  <p style={{color: 'black', fontWeight:'normal', }}>igem.tecgdl</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 d-flex align-items-center">
              <a href="https://tec.mx">
                <img
                  src="https://static.igem.wiki/teams/5439/logos/tec-monterrey-logo.png"
                  alt="Tecnológico de Monterrey"
                  style={{ width: '180px', height: 'auto'}}
                />
            </a>
          </div>
        </div>
      </div>
      <div style={{ background: "#231f20"}} className="container-fluid text-white">
          <div className="container-fluid d-flex justify-content-between">
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
    </footer>
  );
}
