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
              <h2>Experimental characterization of RifMo</h2>
              <p>Building upon the previous iteration of the project, we worked on the characterization and assembly of RifMo as a basic coding sequence (<a href="https://parts.igem.org/Part:BBa_K4447003" target="_blank" rel="noopener noreferrer" id="important-link">BBa_K4447003</a>). We successfully amplified and ligated this basic part into the pET-28b(+) plasmid and transformed it into E. coli BL21. While we weren't able to fully characterize the part by protein expression, the work done on the basic part allowed us to incorporate the gene in the new iteration of the FRET-based biosensor.</p>
              <br></br>
              <p>Additional information regarding the construction of the part can be found at the Experiments page, the <a href="https://parts.igem.org/Part:BBa_K4447003" target="_blank" rel="noopener noreferrer" id="important-link">Part Registry page</a>, or our Notebook.</p>
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
