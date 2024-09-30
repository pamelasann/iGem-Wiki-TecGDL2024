export function HumanPractices() {
  return (
    <>
    <div className="container-fluid p-3">
        <div className="row">
          <div className="col-lg-3 col-md-12 pt-5 ps-5" id="menu-container">
            <div id="titles-container">
              <ul className="list-unstyled">
                <li className="ps-4">
                  <a href="#part1">Title</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                      <a href="#part1.1" className="subtitle">Subtitle 1</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part1.2" className="subtitle">Subtitle 2</a>
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#">Title 2</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                      <a href="#" className="subtitle">Subtitle 1</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* Content */}
          <div className="col-lg-9 col-md-12" id="main-content-container">
            <div className="container-fluid" id="text-content">
              <div className="container-fluid p-3 mt-5" id="part1">
                <h1 className="mb-3">Title</h1>
                <p>Paragraph</p>
                <br></br>
                <p>Paragraph</p>
              </div>
              <div className="container-fluid p-3" id="part1.1">
                <h2>Subtitle</h2>
                <p>Paragraph</p>
                <br></br>
                <p>Paragraph</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
