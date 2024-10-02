export function Education() {
  return (
    <>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-lg-3 col-md-12 pt-5 ps-5" id="menu-container">
            <div id="titles-container">
              <ul className="list-unstyled">
                <li className="ps-4">
                  <a href="#part1">Page 1. Problem</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                      <a href="#part1.1" className="subtitle">Context</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part1.2" className="subtitle">Problem Statement & Value Proposition Canvas</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part1.3" className="subtitle">Family farmers</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part1.4" className="subtitle">First potential customer</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part1.5" className="subtitle">Customer interviews</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part1.6" className="subtitle">Market analysis</a>
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part2">Page 2. Solution</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                      <a href="#part2.1" className="subtitle">Our solution</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part2.2" className="subtitle">Mission and Vision</a>
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part3">Page 3. Development plans</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                      <a href="#part3.1" className="subtitle">Manufacturing plans</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part3.2" className="subtitle">Business Plan</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part3.3" className="subtitle">SWOT</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part3.4" className="subtitle">Next Steps</a>
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part5">References</a>
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
                <h1 className="mb-3">Page 1. Problem</h1>
              </div>
              <div className="container-fluid p-3" id="part1.1">
                <h2>Context</h2>
                <p>Heavy metal contamination, particularly from cadmium (Cd), lead (Pb), chromium (Cr), arsenic (As), and mercury (Hg), poses a significant global challenge, affecting both environmental and human health. Cadmium, one of the most toxic heavy metals, severely impacts soil biological activities, plant metabolism, and human health. Exposure to Cd through polluted soils and plants has been linked to a wide range of diseases, including skeletal disorders, neural and alimentary injuries, and various cancers (Rezapour <i>et al.</i>, 2019). Furthermore, this metal causes serious physiological, morphological, and biochemical disorders in plants, disrupting key processes such as photosynthesis, respiration, and nutrient uptake (Zulfiqar <i>et al.</i>, 2022). This, in turn, leads to reduced crop yields and poor plant growth, further threatening food security.</p>
                <br></br>
                <p>Globally, surface water contamination with heavy metals, as seen in various regions globally, often exceeds permissible limits set by the WHO and EPA, further compounding the problem (Rashid <i>et al.</i>, 2023). In developing countries, the ingestion, dermal absorption, and inhalation of Cd and Pb through contaminated food and water are major sources of exposure. These heavy metals bioaccumulate in crops, which eventually leads to the accumulation of harmful levels of Cd and Pb in the human body, contributing to renal damage, kidney stones, and liver damage (Alhaj Hamoud <i>et al.</i>, 2024). In regions heavily affected by cadmium pollution, such as those discussed by Batool <i>et al.</i> (2023), the damage to agricultural production, water quality, and soil health is evident, ultimately posing a severe threat to both human and animal health.</p>
                <br></br>
                <p>In Mexico, Cd contamination is a prominent concern. For example, in the states of Puebla and Veracruz, irrigation water used in agriculture contains cadmium levels above permissible limits, raising alarms about the contamination of food crops. In Jalisco, the contamination of the Santiago River, especially near the El Salto de Juanacatlán waterfall, has exposed local populations, including children, to dangerously high levels of Cd. A study showed that 77% of children in these regions exhibited significant exposure to Cd, which can cause long-term health issues such as cancer, emphysema, and kidney damage (Loera, 2022; Rezapour <i>et al.</i>, 2019; UASLP & CEA Jalisco, 2011; Zulfiqar <i>et al.</i>, 2022).</p>
              </div>
              <div className="container-fluid p-3" id="part1.2">
                <h2>Problem Statement & Value Proposition Canvas</h2>
                <p>Water scarcity and contamination are pressing global issues intensified by rapid population growth, climate change, and increasing agricultural demands. In regions like Jalisco, Mexico, the reuse of treated wastewater for irrigation has become essential due to limited freshwater resources. However, this treated wastewater often contains emerging contaminants such as pharmaceuticals (e.g., rifampicin, ibuprofen) and heavy metals (e.g., cadmium, nickel). These contaminants pose significant health risks to humans and animals, as they can accumulate in crops and soil, and harm local ecosystems. Current detection methods are expensive, require specialized equipment and trained personnel, and are thus inaccessible to family farmers and small industries. This lack of affordable, user-friendly monitoring tools prevents timely detection and management of water pollutants, leading to unsafe agricultural practices, non-compliance with environmental regulations, and threats to public health and food safety.</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/fig-1-value-proposition-canvas.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center" id="foot-note">
                  <p>Figure 1. Value proposition canvas of Aquasens.</p>
                </div>
                <br></br>
              </div>
              <div className="container-fluid p-3" id="part1.3">
                <h2>Family farmers</h2>
                <p>Family farmers play a crucial role in global agriculture, encompassing a diverse range of agricultural practices and family structures. They are defined primarily as agricultural operations managed and operated by families, relying predominantly on family labor. This setup allows family farms to intertwine economic, social, and cultural functions, making them integral to both local communities and global food systems.</p>
                <br></br>
                <p>Family farming is characterized by the following key elements: </p>
                <ul>
                  <li><b>Management and Operation:</b> Family farms are managed by a household where most of the labor is provided by family members.</li>
                  <li><b>Economic Reliance:</b> These farms predominantly depend on family capital and labor, which includes contributions from both men and women.</li>
                  <li><b>Diverse Activities:</b> Family farmers engage in various agricultural practices, including crop production, livestock raising, aquaculture, forestry, and pastoralism.</li>
                  <li><b>Sustainability and Resilience:</b> Family farms often employ sustainable practices that help conserve biodiversity and manage natural resources effectively, contributing to environmental sustainability and resilience against climate change (FAO 2014; FAO 2022; Loli, n.d.). </li>
                </ul>
                <p>Family farmers are pivotal in ensuring food security and nutrition globally. They are responsible for producing over 80% of the world's food in value terms and managing approximately 70-80% of farmland worldwide. Moreover, they contribute significantly to rural economies by creating jobs and preserving cultural heritage through traditional farming practices (FAO, 2022). </p>
              </div>
              <div className="container-fluid p-3" id="part1.4">
                <h2>First potential customer</h2>
                <p>The first potential customer for our biosensor is the family farmer in Jalisco who relies on treated wastewater for irrigation. Facing challenges such as water scarcity, risk of contaminant exposure, and limited financial resources, these farmers need an affordable, easy-to-use solution to ensure the safety of their water supply. By providing a reliable biosensor with real-time results and supportive services tailored to their needs and circumstances, we empower them to protect their crops, comply with regulations, and promote sustainable practices. Building trust through community engagement, flexible financing, and ongoing support is crucial to successfully reaching and serving this customer segment.</p>
              </div>
              <div className="container-fluid p-3" id="part1.5">
                <h2>Customer interviews</h2>
                <h4>Laura Valdivia - Dairy farmer | Ixtlahuacán de los Membrillos, Jalisco</h4>
                <p>In the first interview, the respondent explained that their primary source of water is rainwater collection and a nearby stream, but during dry seasons, they are forced to purchase water from trucks to supply their livestock. They expressed significant concerns regarding their dependence on seasonal rains, noting that inadequate rainfall directly affects their operational profits. On average, they use approximately 4,000 liters of water daily for their livestock, which includes 30 cows, 20 heifers, a bull, and 5 calves. While they have not faced major health issues related to water quality, they constantly deal with parasite problems, particularly ticks, and are aware that contaminants from upstream agricultural activities could compromise their water supply.</p>
                <br></br>
                <p>To mitigate health risks, they regularly deworm their animals and provide vitamins, alongside maintaining sanitation protocols. However, they are increasingly concerned about potential future health problems linked to water pollution, especially from nearby agave industries, and are worried about heavy metals like aluminum and cadmium that could adversely affect liver health in livestock. When it comes to investing in monitoring systems for water quality, they emphasized that cost is a significant factor, particularly given their economic constraints. The interviewee advocated for the establishment of regulations on water used not just within the livestock sector but across all industries, suggesting that mandatory monitoring tools for large-scale operations would be beneficial. They expressed openness to adopting intelligent monitoring systems, indicating a budget of up to 5,000 MXN (~$250 USD) for such technologies. The respondent emphasized the importance of presenting concrete data and potential economic impacts to persuade livestock producers about the benefits of water quality monitoring.</p>
                <br></br>
                <h4>Arturo Sánchez - Corn Farmer | Ixtlahuacán de los Membrillos, Jalisco</h4>
                <p>In the second interview, the participant emphasized that their primary concern was the lack of rainfall, which has a negative effect on crop yields, especially corn. They indicated that while rainwater is generally of good quality, irrigation often involves polluted water sourced from drains and industrial areas. They acknowledged that contaminants could accumulate in the soil over time, leading to health risks for both humans and animals. The interviewee pointed out challenges in implementing new technologies, citing a lack of government support and educational initiatives aimed at informing producers about such advancements. Despite this, there is a keen interest in sustainable irrigation practices, as they see the potential benefits of utilizing biosensor technology for contaminant detection.</p>
                <br></br>
                <p>They identified economic barriers to adopting new technologies, stressing the absence of government funding and infrastructure like reservoirs. Regarding the role of government and NGOs, they suggested that technical experts should be dispatched to educate producers about the risks associated with using contaminated water. The participant expressed willingness to employ intelligent monitoring systems for water quality, with a budget of around $500 MXN (~$25 USD), reflecting a readiness to embrace technology that could improve their agricultural practices. </p>
                <br></br>
                <p>(Full interviews available in the integrated human practices page.) </p>
              </div>
              <div className="container-fluid p-3" id="part1.6">
                <h2>Market analysis</h2>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/fig-2-tam-sam-som.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center" id="foot-note">
                  <p>Figure 2. TAM, SAM, SOM of Aquasens. </p>
                </div>
                <br></br>
                <p>After evaluating the growing challenges in sustainable farming and water management, we conducted an in-depth market analysis to assess the demand for agricultural testing services. Our aim was to understand how our services could address the needs of family farms, particularly those utilizing wastewater for irrigation. Here's how we defined our target market: </p>
                <br></br>
                <p><b>SOM:</b> To begin, we analyzed the potential market in our home state, Jalisco. According to Mexico's Agricultural Census, 81.3% of the 190,657 agricultural units in Jalisco are classified as family farms. This means our short-term accessible market includes 154,904 family farms. Additionally, 10% of these farms rely on wastewater for irrigation, giving us a reachable market of 15,490 units within the region (Drechsel, 2024; INEGI, 2023; Ramírez Juárez, 2022).</p>
                <br></br>
                <p><b>SAM:</b> Expanding beyond our state, we considered the national market. Across Mexico, there are 5.4 million agricultural production units, of which 81.3% are family farms, amounting to approximately 4.4 million farms. Applying the same 10% wastewater usage estimate, we identified a potential market of 440,000 family farms nationwide (Drechsel, 2024; Ramírez Juárez, 2022). </p>
                <br></br>
                <p><b>TAM:</b> On a global scale, family farms make up a significant portion of agricultural production, with over 600 million family farms worldwide. With around 10% of these farms estimated to use wastewater for irrigation, this creates a potential market of 60 million farms globally for our agricultural testing services (Drechsel, 2024; FAO, 2024). </p>
                <br></br>
                <p>By focusing on these markets, we've pinpointed key opportunities to provide testing services that promote safe and sustainable farming practices. Globally, the agricultural testing market is projected to reach USD 9.8 billion by 2028, growing at a CAGR of 7.1%, underscoring the sector's growth potential (MarketsandMarkets, 2023). </p>
              </div>
              <div className="container-fluid p-3 mt-5" id="part2">
                <h1 className="mb-3">Page 2. Solution</h1>
              </div>
              <div className="container-fluid p-3" id="part2.1">
                <h2>Our solution </h2>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/fig-3-aquasens-logo.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center" id="foot-note">
                  <p>Figure 3. Aquasens Logo.</p>
                </div>
                <br></br>
              </div>
              <div className="container-fluid p-3">
                <h3>Aquasens</h3>
                <p>We have developed an affordable and reliable genetic biosensor kit designed to detect emerging contaminants in treated wastewater. The kit includes two essential components: </p>
              </div>
              <div className="container-fluid p-3">
                <h3>Biosensor Device:</h3>
                <ul>
                  <li><b>Function:</b> A portable hardware unit that measures fluorescence emitted by the detection tubes.</li>
                  <li><b>Technology:</b> Equipped with an RGB sensor and an Arduino Nano microcontroller, the device captures voltage changes that indicate the presence of specific contaminants.</li>
                  <li><b>Design:</b> Optimized for easy use in the field, the device ensures accurate real-time data collection without requiring specialized training. </li>
                </ul>
              </div>
              <div className="container-fluid p-3">
                <h3>Detection Tubes: </h3>
                <ul>
                  <li><b>Function:</b> Specialized consumable tubes, each containing engineered fluorescent proteins linked to specific enzymes that react with targeted contaminants such as rifampicin, nickel, cadmium, and ibuprofen.</li>
                  <li><b>Principle:</b> Our system utilizes Förster Resonance Energy Transfer (FRET), a process where energy is transferred between two fluorescent molecules—ECFP (Enhanced Cyan Fluorescent Protein) as the donor and mVENUS as the acceptor. When a contaminant binds to its corresponding enzyme (e.g., cadmium binding to phytochelatin synthase, TjPCS), it causes a conformational change that brings the fluorescent proteins closer together. This proximity enables FRET to occur, resulting in a detectable change in fluorescence.</li>
                  <li><b>Usage:</b>Each tube is designed for a specific contaminant, allowing users to easily switch between different tests based on their monitoring needs.</li>
                </ul>
              </div>
              <div className="container-fluid p-3">
                <h3>How It Works</h3>
              </div>
              <div className="container-fluid p-3">
                <h3>Detection Process:</h3>
                <ul>
                  <li>The user places a detection tube containing the water sample into the biosensor device.</li>
                  <li>The device illuminates the tube with UV light, activating the fluorescent proteins. </li>
                  <li>If a target contaminant is present, it binds to the enzyme, causing the fluorescent proteins to move closer and trigger a FRET signal. </li>
                </ul>
              </div>
              <div className="container-fluid p-3">
                <h3>Data Measurement:</h3>
                <ul>
                  <li>The RGB sensor in the device measures the resulting fluorescence changes as voltage variations.</li>
                  <li>The Arduino Nano microcontroller processes these readings to identify and quantify the specific contaminant.</li>
                </ul>
              </div>
              <div className="container-fluid p-3">
                <h3>Data Transmission:</h3>
                <ul>
                  <li>The device can transmit the data wirelessly to a mobile application via Bluetooth, allowing users to view real-time results and track water quality over time. </li>
                </ul>
              </div>
              <div className="container-fluid p-3" id="part2.2">
                <h2>Mission and Vision</h2>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/fig-4-mission-vision.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center" id="foot-note">
                  <p>Figure 4. Mission and Vision of Aquasens.</p>
                </div>
                <br></br>
              </div>
              <div className="container-fluid p-3 mt-5" id="part3">
                <h1 className="mb-3">Page 3. Development plans</h1>
              </div>
              <div className="container-fluid p-3" id="part3.1">
                <h2>Manufacturing plans</h2>
              </div>
              <div className="container-fluid p-3">
                <h3>Manufacturing of the biosensor</h3>
                <p>Soon, we plan to begin the production of our biosensor device using a streamlined process that prioritizes efficiency and quality control. The manufacturing process will follow three main stages: component preparation, assembly, and final testing. </p>
                <br></br>
                <ol>
                  <li><b>Component Preparation</b></li>
                  <p>We will begin by sourcing and purchasing the essential components, such as Arduino Nano boards, RGB sensors, resistors, and LEDs. 3D printing will be used to create the biosensor casings with PLA filament. We will also ensure that all soldering stations and 3D printers are calibrated for efficient production. </p>
                  <li><b>Assembly</b></li>
                  <p>During the assembly stage:</p>
                  <ul>
                    <li>Components like resistors, LEDs, and switches will be soldered onto a bakelite board. </li>
                    <li>The HC05 Bluetooth module and the TCS34725 sensor will be mounted and connected to the Arduino Nano.</li>
                    <li>All components will be integrated into the printed casing, ensuring robust connectivity and functionality. </li>
                  </ul>
                  <br></br>
                  <li><b> Integration and Testing</b></li>
                  <p>Once assembled, the Arduino will be programmed to control the sensor system and transmit data via Bluetooth. Our mobile app will then be used to interact with the biosensor and display real-time data.</p>
                  <br></br>
                  <li><b>Quality Control</b></li>
                  <p>We will perform thorough testing to ensure that each biosensor is functioning correctly. This includes testing sensor readings, data transmission, and inspecting soldering work. Once approved, each unit will be packaged with instructions and relevant software. </p>
                  <br></br>
                  <p>As production scales, we are exploring the possibility of partnering with a manufacturing company. This partnership could allow us to outsource the assembly and streamline the production process further, increasing output and reducing time-to-market. Such a collaboration would also help ensure consistent quality while keeping costs competitive.</p>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/fig-5-app-mockup.png" id="content-image-big"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 5. Mobile App Mockup.</p>
                  </div>
                  <br></br>
                  <p>In our development process, we reached out to Hartec, a software development company, to help with the creation of a mobile app. They provided us with a simple mockup, as shown in Figure 5, and a basic quote for the fully functional app development. The mockup highlights key features like Bluetooth connectivity, test data retrieval, luminescence analysis, and a test history log. This collaboration will ensure that our app is easy to use and integrates smoothly with the biosensor system.</p>
                </ol>
              </div>
              <div className="container-fluid p-3">
                <h3>Manufacturing of the detection tubes</h3>
                <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/fig-6-tubes-production.png" id="content-image-big"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 6. Detection Tubes Production Diagram.</p>
                  </div>
                  <br></br>
                  <p>The production of detection tubes for the biosensor can follow a general process as illustrated in Figure 6, based on the production of fluorescent proteins.</p>
                  <br></br>
                  <p>Simplified overview of the process we could implement:</p>
                  <ol>
                    <li><b>Bioreactor: Production of genetically modified <i>E. coli</i></b></li>
                    <p>The first step involves culturing genetically modified <i>E. coli</i> that produce a specific fluorescent protein, which will be the key element in the detection system. The bacteria are grown in a bioreactor under controlled conditions to optimize protein expression. </p>
                    <li><b>Filtration: Cell Harvesting </b></li>
                    <p>Once the <i>E. coli</i> have produced sufficient quantities of the protein, the cells are harvested. The culture is filtered to separate the bacterial cells from the growth medium, ensuring that only cells with the fluorescent protein are collected.</p>
                    <li><b>Lysis: Breaking the Cells </b></li>
                    <p>After filtration, the harvested cells are lysed using a pressure homogenizer. This process breaks open the cell membranes, releasing the fluorescent proteins into the solution. </p>
                    <li><b>Centrifuge: Protein Recovery </b></li>
                    <p>The lysate is then centrifuged to separate the cell debris from the supernatant, which contains the desired fluorescent protein. The protein is now in a liquid form and ready for further processing. </p>
                    <li><b>Protein Precipitation</b></li>
                    <p>To recover the protein in a purer form, it is precipitated using acetone or another suitable solvent. The protein solidifies and can be collected for further use in the detection tubes. </p>
                    <li><b>Evaporation: Solvent Removal </b></li>
                    <p>The final step involves using a rotary evaporator to remove any residual acetone or solvent, ensuring that the recovered protein is in a dry, usable form. This purified fluorescent protein can then be incorporated into the detection tubes.</p>
                    <br></br>
                    <p>Business Model Canvas</p>
                    <br></br>
                    <div className="d-flex justify-content-center align-items-center">
                      <img src="https://static.igem.wiki/teams/5439/images/fig-7-bmc-aquasens.png" id="content-image-big"></img>
                    </div>
                    <br></br>
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 7. Business Model Canvas of Aquasens.</p>
                    </div>
                    <br></br>
                    <p>(Detailed business model canvas included in the Business plan).</p>
                  </ol>
              </div>
              <div className="container-fluid p-3" id="part3.2">
                <h2>Business Plan</h2>
                <p>Here we present the business plan developed for our product, Aquasens.</p>
                <div className="d-flex justify-content-center align-items-center">
                  <iframe src="https://static.igem.wiki/teams/5439/documents/business-plan-neoteche-igem2024.pdf" id="pdf-viewer"></iframe>
                </div>
              </div>
              <div className="container-fluid p-3" id="part3.3">
                <h2>SWOT</h2>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/fig-8-swot-aquasens.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center" id="foot-note">
                  <p>Figure 8. SWOT Analysis of Aquasens.</p>
                </div>
                <br></br>
              </div>
              <div className="container-fluid p-3" id="part3.4">
                <h2>Next Steps</h2>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/fig-9-aquasens-next-steps.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center" id="foot-note">
                  <p>Figure 9. Aquasens Next Steps.</p>
                </div>
                <br></br>
              </div>
              <div className="container-fluid p-3 mt-5" id="part4">
                <h1 className="mb-3">Page 4. Long term impact </h1>
              </div>
              <div className="container-fluid p-3" id="part4.1">
                <h2>Risk Analysis</h2>
                {/* TABLA */}
              </div>
              <div className="container-fluid p-3" id="part4.2">
                <h2>SDGs</h2>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/fig-10-aquasens-sdgs.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center" id="foot-note">
                  <p>Figure 10. Aquasens SDGs Impact.</p>
                </div>
                <br></br>
              </div>
              <div className="container-fluid p-3 mt-5" id="part5">
                <h1 className="mb-3">References</h1>
                <div className="row">
                  <div className="col-12 col-md-1"></div>
                  <div className="col-12 col-md-11">
                    <div className="references-container">
                      <p>Alhaj Hamoud, Y., Shaghaleh, H., Zia-ur-Rehman, M., Rizwan, M., Umair, M., Usman, M., Ayub, M. A., Riaz, U., Alnusairi, G. S. H., & Alghanem, S. M. S. (2024). Cadmium and lead accumulation in important food crops due to wastewater irrigation: Pollution index and health risks assessment. Heliyon, 10(3), e24712. https://doi.org/10.1016/j.heliyon.2024.e24712</p>
                      <p>Batool, F., Hussain, M. I., Nazar, S., Bashir, H., Khan, Z. I., Ahmad, K., Alnuwaiser, M. A., & Yang, H.-H. (2023). Potential of sewage irrigation for heavy metal contamination in soil-wheat grain system: Ecological risk and environmental fate. Agricultural Water Management, 278, 108144. https://doi.org/10.1016/j.agwat.2023.108144</p>
                      <p>Drechsel, P., Bartram, J., Qadir, M., & others. (2024). The challenge of supporting and monitoring safe wastewater use in agriculture in LMIC. npj Clean Water, 7(67). https://doi.org/10.1038/s41545-024-00364-z</p>
                      <p>Food and Agriculture Organization (FAO). (2022). Family farming - FAO Knowledge Repository. https://openknowledge.fao.org/server/api/core/bitstreams/5a5ec564-5692-4bf9-b32b-0ee0417eaf1b/content</p>
                      <p>Food and Agriculture Organization of the United Nations (FAO). (2024). FAO's work on Family Farming. https://www.fao.org/family-farming-engagement/en </p>
                      <p>INEGI. (2023). Censo agropecuario 2022: Resultados definitivos Jalisco. https://www.inegi.org.mx</p>
                      <p>Loera, M. (2022). Reporta investigadora resultados sobre contaminación de agua del Río Santiago. Gaceta UDG. http://www.cutonala.udg.mx/node/11247</p>
                      <p>Loli, F. (n.d.). An introduction to family farming. Pennsylvania State University.  https://psu.pb.unizin.org/internatag/chapter/an-introduction-to-family-farming/</p>
                      <p>MarketsandMarkets. (2023). Agricultural Testing Market.  https://www.marketsandmarkets.com/Market-Reports/agricultural-testing-market-203945812.html</p>
                      <p>Ramírez Juárez, J. (2022). Seguridad alimentaria y la agricultura familiar en México. Revista Mexicana De Ciencias Agrícolas, 13(3), 553-565. https://doi.org/10.29312/remexca.v13i3.2854</p>
                      <p>Rashid A., Schutte B.J., Ulery A., Deyholos M.K., Sanogo S., Lehnhoff E.A., Beck L. (2023). Heavy Metal Contamination in Agricultural Soil: Environmental Pollutants Affecting Crop Health. Agronomy. 13(6):1521. https://doi.org/10.3390/agronomy13061521  </p>
                      <p>Food and Agriculture Organization (FAO). (2014). Family farming: A global perspective. https://www.fao.org/world-agriculture-watch/tools-and-methodologies/definitions-and-operational-perspectives/family-farms/ar/</p>
                      <p>Rezapour, S., Atashpaz, B., Moghaddam, S. S., Kalavrouziotis, I. K., & Damalas, C. A. (2019). Cadmium accumulation, translocation factor, and health risk potential in a wastewater-irrigated soil-wheat (Triticum aestivum L.) system. Chemosphere, 231, 579-587. https://doi.org/10.1016/j.chemosphere.2019.05.095</p>
                      <p>Universidad Autónoma De San Luis Potosí & Comisión Estatal Del Agua De Jalisco. (2011). “Propuesta Metodológica Para La Implantación De Una Batería De Indicadores De Salud Que Favorezcan Elestablecimiento De Programas De Diagnóstico, Intervención Y Vigilancia Epidemiológica En Las Poblaciones Ubicadas En La Zona De Influencia Del Proyecto De La Presa Arcediano En El Estado De Jalisco” https://desinformemonos.org/gobierno-de-jalisco-encubrio-diez-anos-envenenamiento-de-ninos-por-contaminacion-del-rio-santiago/</p>
                      <p>Zulfiqar, U., Jiang, W., Xiukang, W., Hussain, S., Ahmad, M., Maqsood, M. F., Ali, N., Ishfaq, M., Kaleem, M., Haider, F. U., Farooq, N., Naveed, M., Kucerik, J., Brtnicky, M., & Mustafa, A. (2022). Cadmium Phytotoxicity, Tolerance, and Advanced Remediation Approaches in Agricultural Soils; A Comprehensive Review. Frontiers in Plant Science, 13. https://doi.org/10.3389/fpls.2022.773815 </p>
                      <p>United Nations. (n.d.). The 17 goals | sustainable development. United Nations. https://sdgs.un.org/goals </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
