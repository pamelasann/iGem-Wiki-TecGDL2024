export function Contribution() {
  return (
    <>
    {/* Simple Content */}
    <div className="container-fluid p-3 justify-content-center align-items-center" id="simple-content">
        <div className="col-lg-9 col-md-12" id="main-content-container">
          <div className="container-fluid" id="text-content">
            <div className="container-fluid p-3 mt-5">
              <h1 className="mb-3">Our contribution to the iGEM community</h1>
            </div>
            <div className="container-fluid p-3">
              <h2>Fundraising guide</h2>
              <p>As part of our contribution to the IGEM community, the TecMonterreyGDL team presents a fundraising guide designed to help other IGEM teams understand the key aspects to consider when participating in this great competition. This guide aims to support them in achieving successful funding, ensuring that the entire team can attend the Grand Jamboree with as few obstacles as possible.</p>
              <br></br>
              <div className="d-flex justify-content-center align-items-center">
                <iframe src="https://static.igem.wiki/teams/5439/documents/fundraising-guide-igem-2024-by-tecmonterreygdl-neotech-e.pdf" id="pdf-viewer"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
