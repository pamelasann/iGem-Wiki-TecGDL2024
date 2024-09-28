export function Description() {
  return (
    <>
      {/* Custom Header for Description page */}
      <header
        style={{
          backgroundImage: "url('https://nsf-gov-resources.nsf.gov/styles/hero_small/s3/2023-04/Andromeda_galaxy_h.jpg.webp?VersionId=ax62fO1jAP93s16R6H_jPKVhTfvwH9X4&itok=WSHuusB5')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Description of Water Pollution</h1>
      </header>

      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-lg-3 col-md-12 pt-5 ps-5" id="menu-container">
            <div id="titles-container">
              <ul className="list-unstyled">
                <li className="ps-4">
                  <a href="#part1">Water Pollution in Mexico</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                      <a href="#part1.1">Current Situation</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part1.2">Contaminants of Interest</a>
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#">Our Approach: The EC-FRET Biosensor</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                      <a href="#">What is our Biosensor?</a>
                    </li>
                    <li className="ps-4">
                      <a href="#">How does it work?</a>
                    </li>
                    <li className="ps-4">
                      <a href="#">What inspired us?</a>
                    </li>
                    <li className="ps-4">
                      <a href="#">Other Biosensors</a>
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#">Conclusion and Future Plans</a>
                  <ul className="list-unstyled"></ul>
                </li>
                <li className="ps-4">
                  <a href="#">FRET-eryK & AtPCS</a>
                  <ul className="list-unstyled"></ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 p-5">
            <div
              className="container-fluid p-5 bg-white"
              id="text-content"
              style={{
                padding: "3em",
                marginTop: "2em",
              }}
            >
              <div className="container-fluid p-3 mt-5" id="part1">
                <h1 className="mb-3">Water Pollution in Mexico</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
                <br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
              </div>
              <div className="container-fluid p-3" id="part1.1">
                <h2>Current Situation</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
              </div>
              <div className="container-fluid p-3" id="part1.2">
                <h2>Contaminants of Interest</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
