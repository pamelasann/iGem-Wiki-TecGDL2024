export function Notebook() {
  return (
    <>
    {/* Simple Content */}
    <div className="container-fluid p-3 justify-content-center align-items-center" id="simple-content">
        <div className="col-lg-9 col-md-12" id="main-content-container">
          <div className="container-fluid" id="text-content">
            <div className="container-fluid p-3 mt-5">
              <h1 className="mb-3">Project log</h1>
            </div>
            <div className="container-fluid p-3">
              <h2>Human Practices Notebook Timeline</h2>
              <br></br>
              <div className="d-flex justify-content-center align-items-center">
                <iframe src="https://static.igem.wiki/teams/5439/documents/notebook-humanpractices.pdf" id="pdf-viewer"></iframe>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="container-fluid p-3">
              <h2>Hardware Notebook Timeline</h2>
              <br></br>
              <div className="d-flex justify-content-center align-items-center">
                <iframe src="https://static.igem.wiki/teams/5439/documents/notebook-hardware.pdf" id="pdf-viewer"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
