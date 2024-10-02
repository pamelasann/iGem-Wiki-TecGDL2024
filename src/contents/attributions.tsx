import { useEffect } from "react";

export function Attributions() {
  const teamID = import.meta.env.VITE_TEAM_ID;

  useEffect(() => {
    function listenToIframeHeight(e: MessageEvent) {
      if (e.origin === "https://teams.igem.org") {
        const { type, data } = JSON.parse(e.data);
        if (type === "igem-attribution-form") {
          const element = document.getElementById("igem-attribution-form");
          if (element) {
            element.style.height = `${data + 100}px`;
          }
        }
      }
    }
    window.addEventListener("message", listenToIframeHeight);
    return () => {
      window.removeEventListener("message", listenToIframeHeight);
    };
  }, []);

  return (
    <>
      {/* Simple Content */}
      <div className="container-fluid p-3 justify-content-center align-items-center" id="simple-content">
          <div className="col-lg-9 col-md-12" id="main-content-container">
            <div className="container-fluid" id="text-content">
              <div className="container-fluid p-3 mt-5">
                <h1 className="mb-3">Project attributions</h1>
              </div>
              {/* Iframe for the attribution form */}
              <div className="container">
                <iframe
                  style={{ width: "100%" }}
                  id="igem-attribution-form"
                  src={`https://teams.igem.org/wiki/${teamID}/attributions`}
                />
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
