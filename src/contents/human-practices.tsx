export function HumanPractices() {
  return (
    <>
    <div className="container-fluid p-3">
        <div className="row">
          <div className="col-lg-3 col-md-12 pt-5 ps-5" id="menu-container">
            <div id="titles-container">
              <ul className="list-unstyled">
                <li className="ps-4">
                  <a href="#part1">Introduction </a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part2">Background</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part3">Educational activities </a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                      <a href="#part3.1" className="subtitle">Juxtaposition of realities</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part3.2" className="subtitle">Survey collaboration with iGEM Tecnologico de Monterrey, Campus Monterrey </a>
                    </li>
                    <li className="ps-4">
                      <a href="#part3.3" className="subtitle">Interview with agricultural farmer</a>
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part4">Conclusion</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
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
                <h1 className="mb-3">Introduction </h1>
                <h4>Science should not stay in a laboratory.</h4>
                <br></br>
                <h4>It is a simple statement that has the power to completely revolutionize research, from the establishment of a problem to scale up methodologies. </h4>
                <br></br>
                <h4>Science is society. </h4>
                <br></br>
                <h4>Social needs and curiosity are the main aspects that cause scientific developments. Research creates new knowledge, improves education and increases the quality of life of millions of people. </h4>
                <br></br>
                <p>When we first started developing our project, we knew that it would be meaningless to only focus on the Laboratory area. We knew that we had to break the existing wall between science and society and create unity and coordination between them. Consequently, we carried out extensive research that enabled us to justify our efforts in creating a genetic system that would allow the detection of contaminants in treated wastewater, used for irrigation of agricultural and livestock feed. Based on this, we designed an array of activities that focused on education, surveys and the incorporation of stakeholders' views, with the purpose of promoting synthetic biology and sustainability, comprehending the current perspectives regarding water pollution in Mexico, and receiving useful feedback that would help us understand the areas of opportunity and impact of our project. Additionally, we include here all the educational material we developed for further implementation.  </p>
              </div>
              <div className="container-fluid p-3 mt-5" id="part2">
                <h1 className="mb-3">Background</h1>
                <p>As our project focuses on water pollution, as well as wastewater treatment and its applications, we investigated the Santiago River, which was one of our starting points in comprehending the complexity of the problematic we addressed. </p>
                <br></br>
                <p>The Santiago River originates in Ocotlan, and laterally flows through the metropolitan area of Guadalajara and into the Pacific Ocean. It follows a route of approximately 563 km, and its basin covers 72,427 hectares, which encompasses six states of the Mexican Republic: Aguascalientes, Durango, Guanajuato, Jalisco, Nayarit, and Zacatecas. Due to the previous, its average annual runoff, and its daily flow of 320 m3/s, it is considered the second most important river of the Mexican Pacific. Nowadays, 6.8 million people live near the Santiago River, mainly concentrated in the metropolitan area of Guadalajara. Among the settlements closest to this vital body of water are the municipalities of El Salto and Juanacatlan, which have a total population of 120,000 inhabitants, and whose separation is the river itself, previously known as the “Mexican Niagara” because of its beauty and tourist attraction; today, it is the nearest source of serious health issues, and the origin of the socio-environmental problem (McCulligh, 2020).</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/fig1-integrated.png" id="simple-image"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 1. Pollution in the Santiago River, El Ahogado dam.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <p>The elevated pollution in the Santiago River stems from human and industrial activities, reflecting a multidimensional challenge tied to sustainable development, by intersecting with its three pillars. Economically, the presence of approximately 250 industries near the river generates job opportunities for residents, however, this economic benefit is juxtaposed with the environmental cost of pollution. Socially, rapid urban expansion over recent decades has led to health concerns among communities residing near the river, as instances of cancer, renal dysfunction, and even fatalities have been linked to exposure to contaminated water. Environmentally, the primary source of pollution is domestic wastewater, laden with nitrogen and phosphorus, derived from food, detergents, and human waste, which disrupt aquatic ecosystems, jeopardize human health, and impede productive activities through the proliferation of invasive species and eutrophication. Moreover, the discharge from the nearby industries exacerbates the problem by introducing a cocktail of toxic substances into the water, including agrochemicals, organic matter, pharmaceutical residues, heavy metals like cadmium, lead, mercury, and nickel, as well as disinfection byproducts and preservatives (Río Santiago, 2023).  </p>
                <br></br>
                <p>Even though this environmental crisis has raised public disapproval and pressure, the government of Jalisco periodically states its efforts towards wastewater treatment and the revival of the Santiago River. The Santiago 2050 Plan consists of a series of activities and improvements that include the development of wastewater treatment plants, sensibilization campaigns, and higher investment budgets. During the current government administration, over 3 billion pesos have been invested in hydric infrastructure projects aimed at reducing the level of contamination of the river; in the same way, 19 wastewater treatment plants have been built, modernized or expanded, among them, the plant “El Ahogado”, which supposedly cleans 75% of the water that is directly discharged into the Santiago River, with an efficiency of 1,000 L of wastewater per second (Plan Santiago 2050, 2023). Nevertheless, these current efforts seem to happen in a different reality than those where the population of El Salto and Juanacatlan live. </p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/fig2-integrated.png" id="simple-image"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 2.  Pollution in the Santiago River, Juanacatlan waterfall.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <p>On the other hand, Mexico has a total area of agricultural land of 27 million hectares, from which 81% of these are yearly cultivated. The state of Jalisco ranks as the top agricultural producer in the country, accounting for just over 10% of the nation's total agricultural output. It ranks highly in the production of eggs, bovine milk, beef, pork, and poultry, as well as grain and fodder corn, agave, grasses, and sugar cane. These products come from the 173, 261 production units that can be found in the state, from which 5% of correspond to irrigation fields (INEGI, 2023). </p>
                <br></br>
                <p>The rising population and food requirements mean that 76% of the available water in the country is destined for the irrigation of crops, while only 14% is used for public supply. Nevertheless, the usage of water for agriculture has an efficiency of 46%, an alarming statistic that urges actions and technologies to reduce the waste of water and increase its consumption efficiency (INEGI, 2024). </p>
                <br></br>
                <p>Therefore, the use of treated wastewater is being incorporated into agriculture irrigation as a solution to the need for water. Current data shows that 14 of Mexico's 86 irrigation districts use wastewater for agricultural irrigation (either treated or mixed), covering approximately 178,952 hectares. In many of these units, wastewater is combined with well water, with the irrigated area estimated at 166,131.2 hectares. Thus, in 2016, the total area irrigated with reused wastewater for agriculture in Mexico was around 345,083 hectares (IMTA, 2016).</p>
                {/* TABLE */}
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/fig3-integrated.png" id="simple-image"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 3.  Pollution in the Santiago River, Las Pintas dam.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <p>It is crucial to highlight that reused wastewater must comply with the standards set by NOM-001-SEMARNAT-2021, which outlines the permissible contaminant levels for wastewater discharged into water bodies and national assets, particularly concerning irrigation on agricultural soils. These requirements include temperature, fats and oils, total suspended solids, chemical demand of oxygen, total organic carbon, total nitrogen, total phosphorus, Helminth eggs, <i>Escherichia coli</i>, fecal <i>Enterococci</i>, pH, acute toxicity, and heavy metals (As, Cu, Cr, Hg, Ni, Pb, and Zn). Unfortunately, a substantial portion of wastewater still does not meet the necessary quality for agricultural reuse (SEGOB, 2022). Consequently, in many cases, the water delivered to fields for crop irrigation requires further treatment and detection measures to ensure its safety and effectiveness.  </p>
              </div>
              <div className="container-fluid p-3 mt-5" id="part3">
                <h1 className="mb-3">Educational activities</h1>
                <p>Our educational activities were mainly based on social contact and scientific dissemination. When approaching people from different economic and social backgrounds, we were able to distance ourselves from the perspectives we own and develop empathy and understanding of how a variety of realities exist. We gave back to society by spreading the knowledge that we had had the privilege of being taught, and by doing so, we learnt from those we interacted with, that they are eager to learn, to inform themselves and to contribute to current efforts, nonetheless, sometimes they do not count with the tools and the information necessary to do so.</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/fig4-integrated.png" id="simple-image"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 4. To sum up Human Practices activities from June to September 2024.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
              </div>
              <div className="container-fluid p-3" id="part3.1">
                <h2>Juxtaposition of realities: Santiago River and Archroma S. de R.L. de C.V. visits</h2>
                <p>The purpose of visiting both the Santiago River and Archroma S. de R.L. de C.V. was to develop an informed opinion regarding the problematic of water pollution in Mexico. We intended that the participants avoided biased opinions that did not consider both sides of the issue, the social and industrial aspects. Consequently, we developed surveys to measure and comprehend how impactful our activity was. </p>
                <br></br>
                <p>We gathered the following results and comments from the guided visit to the Santiago River: </p>
                <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/graph1-integrated.png" id="content-image-big"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Graph 1. Results to the question: How much do you know about the problems of the Santiago River? 30.8% of the participants answered they knew little about the issue, while 69.2% of them answered they knew moderately about it. After the visit, 45.5% of them thoroughly comprehended the situation, while 54.5% moderately understood it. </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>

                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/graph2-integrated.png" id="content-image-big"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Graph 2. Results to the question: Do you think the Santiago River problem affects you directly? After the visit, 100% of the participants understood the importance of the issue and its urgency. </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>

                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/fig5-integrated.png" id="content-image-big"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Figure 5. Some of the responses to the question: What was your impression of the visit to the Santiago River and the current state of the water? </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>
                  <p>We gathered the following results and comments from the guided visit to Archroma S. de R.L. de C.V.: </p>

                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/graph3-integrated.png" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Graph 3. The graph shows the percentage of participants that had visited a company with its own wastewater treatment plant. 13.3% of them had not visited one, a minority that changed by the end of the guided tour.</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>

                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/graph4-integrated.png" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Graph 4. The graph comes from the question “How much has your perception about the importance of wastewater treatment changed after visiting Archroma?” 73.3% of the participants answered that their views on wastewater treatment changed a lot after the visit, while the opinion of the other 26.7% was moderately altered. </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>

                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/fig6-integrated.png" id="content-image-big"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Figure 6. Responses from attendees to the question: Considering the current state of the Santiago River, the chemical processes at Archroma, and its wastewater treatment plant, what do you think about the industrial sector's impact on water pollution?</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>
                  <p>We can conclude that the visits to both places indeed served to inform the participants about the problem and aided them to construct or modify their perspective on it.  </p>
              </div>
              <div className="container-fluid p-3" id="part3.2">
                <h2>Survey collaboration with iGEM Tecnologico de Monterrey, Campus Monterrey</h2>
                <p>To gain a broader understanding of the current perspectives on water pollution and wastewater use beyond the state of Jalisco, we partnered with iGEM Tecnologico de Monterrey, Campus Monterrey, to conduct a survey. This survey was implemented across several states, including Nuevo León, Jalisco, Morelos, Mexico City, Chihuahua, Nayarit, Sinaloa, Coahuila, Baja California, Queretaro, and Tamaulipas, gathering answers from participants aged 11 to 74 years old. The answers to these established questions allowed us to justify our project and its possible impact, from its application in agriculture, to the implementation of educational activities.</p>
                <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/graph5-integrated.png" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Graph 5. When participants in the survey were asked about their concerns regarding the quality of water in their community, an overwhelming 94.8% expressed that they were indeed worried about the current situation.</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>

                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/graph6-integrated.png" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Graph 6. The graph shows the results to the question “What impact do you think water pollution has on the growth of crops and agriculture in your region?”. 77% and 17.2% of the participants recognized that water pollution affects agriculture in a significant and moderate way. </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>

                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/graph7-integrated.png" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Graph 7.  The graph shows the results to the question: “Do you know specific examples of emerging contaminants derived from pharmaceutical or personal care products (such as hormones, antibiotics, analgesics, etc.)?” 59.2% of participants answered “No” indicating they were not aware of specific examples, while 40.8% answered “Yes” showing they had knowledge of such contaminants.</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>

                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/graph8-integrated.png" id="content-image-big"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Graph 8. Results to the question: "Are you aware of the environmental and health impact that heavy metals (such as cadmium and nickel) from industrial sources can cause when present in water?" 56.9% of the participants stated that they were aware of heavy metals in water and their consequences. Meanwhile, 22.7% were aware of the presence of heavy metals in water but not their consequences, and 20.4% were unaware of either the presence or the consequences of heavy metals in water. </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>

                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/graph9-integrated.png" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Graph 9. Results to the question: "How often do you use medications such as Ibuprofen or Rifampicin to treat discomfort and/or bacterial infections?" 43.1% of the participants stated they use these medications occasionally, while 33.9% use them rarely. 17.8% reported frequent use, and 5.2% indicated they never use such medications. </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>

                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/graph10-integrated.png" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Graph 10. Results to the question: "Did you know that food irrigated with contaminated water could negatively affect your health?" 81% of the participants answered "Yes" while 19% responded "No". This suggests a general lack of awareness about the problem among the participants, highlighting the potential need for more educational efforts.  </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>

                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/graph11-integrated.png" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Graph 11. Results to the question: "Have you heard about biosensors and how they work?" 62.6% of participants answered "No" indicating they were not familiar with the topic, while 37.4% responded "Yes".</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>

                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/fig7-integrated.png" id="content-image-big"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Figure 7. Some of the responses to the question: If you are familiar with emerging contaminants, what do you think are the main challenges related to them in the water bodies near your community?</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>

                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/fig8-integrated.png" id="content-image-big"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Figure 8. Some of the responses to the question: How necessary do you think it is to raise awareness about issues like water pollution, its impacts, and possible solutions? Why? </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>

                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/fig9-integrated.png" id="content-image-big"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Figure 9. Some of the responses to the question: If there were a portable device that quickly detected various contaminants in treated wastewater, how useful do you think it would be and why? </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>

                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images-eduandhuman/fig10-integrated.png" id="content-image-big"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Figure 10. Some of the responses to the question: What are your thoughts on the use of treated wastewater for crop irrigation?</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>

                  <p>The survey results and responses highlight critical gaps in water contamination awareness and management. A significant portion of respondents noted the challenges in detecting emerging contaminants and the ineffectiveness of conventional treatments, aligning with the data showing low public knowledge in this area. While many recognize the importance of disseminating information and improving monitoring practices, the graphs reflect a limited understanding of sustainable water practices. Key opportunities lie in increasing public education, advancing water treatment technologies, and strengthening regulatory frameworks, particularly in agricultural and urban water management.  </p>
              </div>
              <div className="container-fluid p-3" id="part3.2">
                <h2>Interview with a livestock farmer </h2>
                <p>To incorporate different stakeholders' perspectives, we conducted an interview with Laura Valdivia on September 16th, 2024. She is a farmer in the state of Jalisco who owns hectares of terrain for livestock operations in Ixtlahuacán de los Membrillos.</p>
                <br></br>
                <p>The interview reveals that the farmer primarily relies on rainwater harvesting and a nearby stream to supply around 4,000 daily liters of water for his 30 cows and other livestock. During dry spells, she must purchase water delivered by trucks, which substantially cuts into her profits and highlights the vulnerability to climate variability. While the farmer has not yet encountered direct diseases linked to water quality, persistent issues with parasites, such as ticks, are likely due to contaminants carried by the stream from upstream sources. In the same way, there are increasing concerns about potential future impacts from emerging contaminants like heavy metals (cadmium, copper, aluminum) and elevated phosphorus levels, largely resulting from the expansion of agave cultivation and nearby industrial activities. These contaminants pose serious risks to livestock health, particularly affecting liver function, which is crucial for productivity.</p>
                <br></br>
                <p>To tackle these challenges, the farmer emphasizes the urgent need for accessible monitoring tools capable of detecting water contamination before it leads to severe health and economic consequences. When asked specifically about the developed biosensor, she recommends broadening the range of detectable contaminants, particularly toxic substances like copper, to enhance the tool’s relevance to her specific environmental context. Furthermore, the farmer suggests using data-driven evidence, such as graphs and statistics, to effectively communicate the importance of water quality monitoring. Demonstrating the direct impact of contaminants on livestock health and productivity can resonate more deeply with farmers who prioritize the well-being of their animals and the sustainability of their operations.</p>
                <br></br>
                <p>In conclusion, her perspective confirms the need for a monitoring tool that can detect emerging contaminants in water, as health concerns are beginning to appear in livestock production. In the same way, the farmer emphasized the need for education and the conduction of surveys that aid in the education and justification of the project, which we already count on.  </p>
                <br></br>
                <p>The complete interview can be found here:</p>
                <div className="d-flex justify-content-center align-items-center">
                  <iframe src="https://static.igem.wiki/teams/5439/images-eduandhuman/d13-entrevistaganadera.pdf" id="pdf-viewer"></iframe>
                </div>
              </div>
              <br></br>

              <div className="container-fluid p-3" id="part3.3">
                <h2>Interview with agricultural farmer</h2>
                <p>We also conducted an interview with Arturo Sánchez on September 17th, 2024. He is a farmer in the state of Jalisco who owns hectares of terrain for agricultural operations, primarily maize production in Ixtlahuacán de los Membrillos. </p>
                <br></br>
                <p>The interview revealed that water quality is a pressing concern for the farmer. While rainwater is generally of acceptable quality, irrigation water often becomes contaminated with runoff from drainage systems, factory residues, and urban wastewater. This contamination poses long-term risks, including the accumulation of heavy metals in the soil, which can degrade land quality and lead to severe health issues for both humans and animals. The farmer is particularly worried about the future implications of these contaminants, such as soil degradation and the onset of diseases in livestock and humans. To mitigate these risks, the farmer emphasizes the urgent need for accessible monitoring tools that can detect water contamination early, preventing the accumulation of harmful substances in the environment. Additionally, the farmer advocates for increased governmental and educational support to educate and assist farmers in adopting new technologies, ensuring sustainable agricultural practices and the preservation of water resources. </p>
                <br></br>
                <p>In conclusion, his perspective confirms the need for a monitoring tool that can detect emerging contaminants in water, as well as the importance of sensibilization campaigns and government involvement. </p>
                <br></br>
                <p>The complete interview can be found here: </p>
                <div className="d-flex justify-content-center align-items-center">
                  <iframe src="https://static.igem.wiki/teams/5439/images-eduandhuman/d14-entrevistaagricultor.pdf" id="pdf-viewer"></iframe>
                </div>
              </div>
              <div className="container-fluid p-3 mt-5" id="part4">
                <h1 className="mb-3">Conclusion</h1>
                <p>Throughout the development of our Human Practices activities and the extensive research that we carried out, we were able to comprehend water pollution and wastewater usage through a social and scientific lens. By doing this, the issue at hand became a complex problem that transcended the limitations of its resolution in a laboratory. It became a reality permeated with a variety of perspectives, data, and experiences that justified its existence and selection. Consequently, it became a project that had its best interest on the people who are mostly affected by water pollution, tackling the need for the development of a tool that could easily detect emerging contaminants in bodies of water.</p>
              </div>
              <div className="container-fluid p-3 mt-5" id="part5">
                <h1 className="mb-3">References</h1>
                <div className="row">
                  <div className="col-12 col-md-1"></div>
                  <div className="col-12 col-md-11">
                    <div className="references-container">
                      <p>AMBU. (2020). Agencia Metropolitana de Bosques Urbanos. Retrieved from 	https://bosquesurbanos.mx/ </p>
                      <p>Hernández, P. (2023). Acceso y progresión educativa en México: una breve descripción. CEMEES. Retrieved from https://cemees.org/2023/11/06/acceso-y-progresion-educativa-en-mexico-una-breve-descripcion/ </p>
                      <p>Zarco, J. (2023). “La ingeniería no es para mujeres”. Pv magazine. Retrieved from https://www.pv-magazine-mexico.com/2023/02/10/la-ingenieria-no-es-para-mujeres/ </p>
                      <p>Standford. (2024). How to leverage podcasts for learning. Stanford. Retrieved from https://teachingresources.stanford.edu/resources/how-to-leverage-podcasts-for-learning/ </p>
                      <p>USUMA. (2023). USUMA: Juntos por la educación. Retrieved from https://usumamexico.org/sobre-nosotros/</p>
                      <p>Río Santiago. (2023). Gobierno de Jalisco. Retrieved from https://riosantiago.jalisco.gob.mx/rio-santiago/ </p>
                      <p>McCulligh, C., Tetreault, D., & Martínez, P. (2023). Conflicto y contaminación: el movimiento socioecológico en torno al río santiago. https://riosantiago.jalisco.gob.mx/wp-content/uploads/2023/05/conflicto_y_contaminacion_el_movimiento_socioecologico_en_torno_al_rio_santiago.pdf</p>
                      <p>Plan Santiago 2050. (2023). Gobierno de Jalisco. Retrieved from https://riosantiago.jalisco.gob.mx/plan-santiago-2050/</p>
                      <p>INEGI. (2023). Comienza el censo agropecuario 2023. INEGI. Retrieved from https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2022/CensoAgro2022/CA2022_Jal.pdf </p>
                      <p>INEGI. (2024). Estadísticas A Propósito Del Día Mundial Del Agua: Desafíos Y Oportunidades En El Uso Agrícola En México. INEGI. Retrieved from https://www.inegi.org.mx/contenidos/saladeprensa/aproposito/2024/EAP_DiaMundAgua.pdf </p>
                      <p>Cisneros & Saucedo. (2016). Reúso de aguas residuales en la agricultura. IMTA. Retrieved from https://www.imta.gob.mx/biblioteca/libros_html/riego-drenaje/reuso-aguas-residuales.pdf </p>
                      <p>SEGOB. (2022). NORMA Oficial Mexicana NOM-001-SEMARNAT-2021. DOF. Retrieved from https://www.dof.gob.mx/nota_detalle.php?codigo=5645374&fecha=11/03/2022#gsc.tab=0 </p>
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
