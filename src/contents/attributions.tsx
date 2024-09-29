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
      <div className="row mt-4">
        <div className="col-9 mx-auto">
          <div className="row">
            <div className="col">
              <h2>The particularity of our team and the story behind its creation</h2>
              <hr />
              <p style={{ textAlign: "justify" }}>
                &emsp;&emsp;Unity is s. <br /><br />
                &emsp;&emsp;A few INSA Lyon t <br /><br />
                &emsp;&emsp;When talking about iGEM with the Lyon I university on our campus, Agnès Rodrigue (our PI from INSA Lyon) was able to recruit Erwan Gueguen (our PI from the university), along with a few students! Our team is therefore made up of students from the Lyon 1 university and the engineering school INSA Lyon! We are so happy to be working together, as we were able to meet people from the campus that we wouldn’t have met otherwise. Although the team was created in May 2021, we only started brainstorming on this project in October 2021, and the whole team contributed to the conceptualization of the project, inspired from the work performed by the MAP laboratories and previous iGEM teams such as Cambridge 2010, China SHSID 2018, Singapore NUS and Bonn 2019. Lab work started in January 2022 and every member working on the wet lab was responsible for lab maintenance. The work we provided for iGEM was done entirely in our free time!<br />
                &emsp;&emsp;As well as students, this blending of both schools also brought together different skills and specialties. And this project wouldn’t have gotten very far without the help of many different people, from INSA Lyon and Lyon I university, sponsors, and many more! So here is the page dedicated to thanking everyone who helped us on this project. We hope everyone is as proud of the result as we are.<br /><br />
              </p>
            </div>
          </div>

          {/* Team Sections */}
          <div className="row">
            <h2>Logistics Team</h2>
            <hr />
            <div className="col">
              <p style={{ textAlign: "justify" }}>
                <b>Team Member 1</b><br />
                Responsible for coordinating transportation and event logistics.<br /><br />
                <b>Team Member 2</b><br />
                Ensures that all materials and supplies are delivered on time.<br /><br />
              </p>
            </div>
          </div>

          <div className="row">
            <h2>Finances and Sponsoring</h2>
            <hr />
            <div className="col">
              <p style={{ textAlign: "justify" }}>
                <b>Team Member 1</b><br />
                Manages budget and financial planning.<br /><br />
                <b>Team Member 2</b><br />
                Responsible for sponsorship outreach and relationship management.<br /><br />
              </p>
            </div>
          </div>

          <div className="row">
            <h2>Communication Team</h2>
            <hr />
            <div className="col">
              <p style={{ textAlign: "justify" }}>
                <b>Team Member 1</b><br />
                Handles social media and public relations.<br /><br />
                <b>Team Member 2</b><br />
                Develops communication strategies and materials.<br /><br />
              </p>
            </div>
          </div>

          <div className="row">
            <h2>Human Practices Team</h2>
            <hr />
            <div className="col">
              <p style={{ textAlign: "justify" }}>
                <b>Team Member 1</b><br />
                Engages with community and stakeholders for feedback.<br /><br />
                <b>Team Member 2</b><br />
                Conducts surveys and analyzes data for project impact.<br /><br />
              </p>
            </div>
          </div>

          <div className="row">
            <h2>Dry Lab Team</h2>
            <hr />
            <div className="col">
              <p style={{ textAlign: "justify" }}>
                <b>Team Member 1</b><br />
                Responsible for computational modeling and data analysis.<br /><br />
                <b>Team Member 2</b><br />
                Conducts simulations and interprets results.<br /><br />
              </p>
            </div>
          </div>

          <div className="row">
            <h2>Wet Lab and Research Team</h2>
            <hr />
            <div className="col">
              <p style={{ textAlign: "justify" }}>
                <b>Team Member 1</b><br />
                Oversees experiments and laboratory procedures.<br /><br />
                <b>Team Member 2</b><br />
                Responsible for maintaining lab safety and protocols.<br /><br />
              </p>
            </div>
          </div>

          <div className="row">
            <h2>Instructors and Advisors</h2>
            <hr />
            <div className="col">
              <p style={{ textAlign: "justify" }}>
                <b>Instructor 1</b><br />
                Provides guidance and mentorship throughout the project.<br /><br />
                <b>Instructor 2</b><br />
                Offers expertise and support in specialized areas.<br /><br />
              </p>
            </div>
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
    </>
  );
}
