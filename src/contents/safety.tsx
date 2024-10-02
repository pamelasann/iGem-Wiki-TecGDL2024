export function Safety() {
  return (
    <>
    <div className="container-fluid p-3">
        <div className="row">
          <div className="col-lg-3 col-md-12 pt-5 ps-5" id="menu-container">
            <div id="titles-container">
              <ul className="list-unstyled">
                <li className="ps-4">
                  <a href="#part1">White List Safety</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part2">Safety Features</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part3">Security and Safety Training</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
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
                <h1 className="mb-3">White List Safety</h1>
                <p>All of our work complies with iGEM's White List. For the development of the biosensor, we used RifMo, IpfF, TjPCs, ECFP, and mVENUS as constituent parts, all of which are non-hazardous. Additionally, we worked with two <i>E. coli</i> strains that pose no threat to human health, as they are non-pathogenic: TOP10 as a maintenance strain and BL21 as an expression strain. After working with these modified strains, they are either stored in designated spaces at 4 ºC or -80 ºC, or sterilized with a 3% chlorine solution before being disposed of in specially designated waste bags. All procedures follow the guidelines set by the Mexican Accreditation Entity (EMA) and the Mexican Biosecurity Association (AMEXBIO), ensuring that no genetically engineered organisms are released into the environment.</p>
              </div>
              <div className="container-fluid p-3 mt-5" id="part2">
                <h1 className="mb-3">Safety Features</h1>
                <p>We work in a Biosafety Level 2 (BSL-2) laboratory. To conduct experiments, it is mandatory to wear a lab coat, long pants that fully cover the legs, closed-toe shoes, gloves, and, if necessary, safety glasses. Whenever possible, we work in pairs to enhance safety and avoid working alone. In exceptional cases where solo work is required, a supervisor or advisor is always informed of our activities in the lab. All team members have completed a safety course and are always accompanied by a more experienced lab member when conducting experiments. Furthermore, we have a comprehensive safety protocol that includes reagent warnings, emergency and evacuation procedures, and proper waste disposal instructions to ensure the well-being of all participants. This safety-first approach not only guarantees the reproducibility of our work but also fosters progress and a smooth transition for the next generation of our team.</p>
              </div>
              <div className="container-fluid p-3 mt-5" id="part3">
                <h1 className="mb-3">Security and Safety Training</h1>
                <p>All team members completed a laboratory safety course before starting any experiments. The course covered key topics such as proper laboratory practices, emergency exit access, chemical safety, biosafety guidelines, sterilization techniques, waste disposal procedures, the location of the first aid kit, eyewash station, and emergency shower, as well as emergency response protocols. In addition, our campus safety services have specific procedures in place for handling situations like earthquakes and fires.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
