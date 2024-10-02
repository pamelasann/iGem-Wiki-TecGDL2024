export function Entrepreneurship() {
  return (
    <>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-lg-3 col-md-12 pt-5 ps-5" id="menu-container">
            <div id="titles-container">
              <ul className="list-unstyled">
                <li className="ps-4">
                  <a href="#part1">Water crisis in the world</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part2">Water pollution in Mexico</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part3">Our approach: Aquasens</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                      <a href="#part4" className="subtitle">How does it work?</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part5" className="subtitle">What inspired us?</a>
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part6">Conclusion and Future plans</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part7">References</a>
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
                <h1 className="mb-3">Water crisis in the world</h1>
                <p>Given the expected increase of 2 billion in the global population by 2050, the global food system will need to double its production to meet the demand of the world's population. This rapid population growth and climate change are critical factors contributing to the depletion of freshwater resources. It is projected that water consumption will increase more rapidly than the human population in various regions of the world. The growing demand for food products and the emerging competition for water resources threaten the sustainability of the agricultural sector, leading researchers to explore new techniques to optimize water use (Fatima-Zahra <i>et. al</i>, 2021). The reuse of treated wastewater in agriculture is key to addressing water scarcity, improving sustainability, and reducing competition for water resources.</p>
                <br></br>
                <p>The use of wastewater is crucial globally, given the current water scarcity. Ninety-two percent of the world's water is used in agriculture, with approximately 70% coming from freshwater sources such as rivers and groundwater. Livestock production significantly contributes to global warming and land use, especially in arid regions, with over 33% of cropland dedicated to forage production and 29% of water used in agriculture allocated to growing animal feed. The United Nations (UN) has promoted the implementation of wastewater reuse worldwide to meet the Sustainable Development Goals (SDGs) by 2030. However, 80% of global wastewater is not adequately treated, being used to irrigate 11% of croplands, especially in the Global South (Soma Mishra, 2023).</p>
              </div>
              <div className="container-fluid p-3 mt-5" id="part2">
                <h1 className="mb-3">Water pollution in Mexico</h1>
                <p>In Mexico, only 5.4% of produced wastewater is reused, and research on chemical contaminants in water bodies and their environmental risks is limited. Current detection techniques, such as chromatography and extraction methods, are costly and require trained personnel, making them inaccessible to local farmers and ranchers. The presence of emerging contaminants, including pharmaceuticals such as rifampicin and ibuprofen, personal care products, and herbicides in treated water used in agriculture, can lead to their accumulation in crops and livestock, posing significant health risks to humans through consumption (Luis E. Lesser <i>et. al</i>, 2018).</p>
              </div>
              <div className="container-fluid p-3 mt-5" id="part3">
                <h1 className="mb-3">Our approach: Aquasens</h1>
                <p>Our project aims to design a highly efficient genetic system in a biological platform (<i>Escherichia coli</i>), capable of detecting emerging contaminants. This system consists of a fusion construct made up of two fluorophores, Enhanced Cyan Fluorescent Protein (ECFP) and mVENUS, and specific detector enzymes for Rifampicin (RifMo), Ibuprofen (IpfF) and heavy metals like nickel and cadmium (TjPCS).</p>
                <br></br>
                <p>Building on the success of our past iGEM project, where we first explored the use of FRET-based biosensors for detecting erythromycin, our new project seeks to optimize both the portability and functionality of our biosensor.</p>
                <br></br>
                <p>This year, our objective is to enhance the accessibility and usability of the biosensor, ensuring it can be easily used in the field by individuals without specialized training, by the implementation of a Bluetooth module into it. This will enable wireless data transmission to a mobile app installed on a smartphone or tablet, the firmware on the microcontroller manages the communication protocol between the biosensor and the Bluetooth module, ensuring data integrity and security during transmission. Once received by the mobile app, the data can be displayed in real-time, or shared with data analysts for remote monitoring. By refining the hardware and incorporating this new feature we aim to create a compact, robust device that can reliably detect contaminants by seamless connectivity with mobile devices.</p>
                <br></br>
                <p>Additionally, we are expanding our catalog of detectable emerging contaminants. While our previous project focused on a narrower range of pollutants, this year's biosensor will include specific detector enzymes for rifampicin, cadmium, and ibuprofen. This expansion addresses a broader spectrum of environmental threats, enhancing the utility and impact of our biosensor.</p>
              </div>
              <div className="container-fluid p-3" id="part4">
                <h2>How does it work?</h2>
                <p>FRET (Förster Resonance Energy Transfer) is a phenomenon involving two chromophores, typically fluorophores. It occurs when energy is transmitted from a donor to an acceptor over a distance, with the excited electron donor transferring energy to an acceptor molecule.</p>
                <br></br>
                <p>In our system, the donor fluorophore is ECFP, while the acceptor fluorophore is mVENUS, a yellow fluorescent protein. Our construct will include specific detector enzymes for each contaminant: enzymes that interact with rifampicin, cadmium, and ibuprofen, each linked with ECFP and mVENUS.</p>
                <br></br>
                <p>For example, in the case of cadmium detection, we will use a phytochelatin synthase (TjPCS) enzyme. When cadmium binds to TjPCS, we hypothesized it would  induce a conformational change in the system. This should lead to the movement of the fluorescent proteins, altering the distance between them, leading to a change in the FRET signal. In short, the transition from a ligand-unbound to a ligand-bound conformation can cause the distance between the fluorophores to shorten, enabling energy transfer to occur, and therefore fluorescence of the acceptor fluorophore to occur. The presence of these contaminants should trigger conformational changes in the corresponding enzymes, leading to detectable changes in the FRET signal, thus allowing for the identification of these pollutants in water samples.</p>
                <br></br>
                <p>By combining innovative synthetic biology approaches with practical hardware solutions, our project not only advances the field of environmental monitoring but also ensures that these advancements are accessible and beneficial to a wider community.</p>
              </div>
              <div className="container-fluid p-3" id="part5">
                <h2>What inspired us?</h2>
                <p>The team's inspiration to develop this project began with our visit to the Horror Tour, a guided visit to learn about the Santiago River. This river is known for its high pollution caused by waste expelled from both industries and domestic sources. Moreover, this river is connected to significant bodies of water that eventually communicate with agricultural and livestock areas (Díaz, 2024).</p>
                <br></br>
                <p>From the visit, we found the impact that the Santiago River can have on the surrounding communities and beyond to be impressive. As it is connected to various water sources in Jalisco, it creates not only a water pollution problem but also soil, air, and food contamination. Furthermore, there are serious health issues for children and adults living around this great river (Torres, 2023). This creates a domino effect that is impossible to ignore, breaking a bubble of privilege we didn't realize we were enclosed in.</p>
                <br></br>
                <p>For this reason, we believe it is our time to act on this situation by addressing it from our home, the state of Jalisco, where we can make a real impact. However, our vision does not stop there. Water crisis is more real than ever and it is not limited to just our state. The next step we aim for is to take this device to a national level and, subsequently, to a global level, creating significant change.</p>
              </div>
              <div className="container-fluid p-3 mt-5" id="part6">
                <h1 className="mb-3">Conclusion and Future plans</h1>
                <p>The global water crisis is reaching critical levels, making the reuse of treated wastewater a vital solution to address this problem. However, in Mexico, the situation is concerning as the reuse of these waters is minimal and the presence of emerging contaminants poses serious public health risks. Additionally, the lack of detection techniques accessible to the general public intensifies this issue, especially for local farmers.</p>
                <br></br>
                <p>In response to these challenges, our project focuses on developing a genetic system composed of two fluorescent proteins and specific enzymes for the detection of ibuprofen, rifampicin, and cadmium. This system will be integrated into an innovative biosensor based on the FRET technology. Inspired by the severe pollution of the Santiago River in Jalisco, we have created a portable device that can be easily used in the field without specialized training. This device will not only improve water monitoring in our region but also has the potential to be implemented nationally and globally.</p>
                <br></br>
                <p>Our goal is to take this technology beyond the borders of Jalisco. We firmly believe that our biosensor can play a crucial role in protecting water resources and improving the quality of life for communities affected by water pollution worldwide. Similarly, as part of our future plans, we aim to further develop the project to enable the measurement of contaminant concentrations, with the purpose of continuously improving and further developing a solution to this important issue.</p>
              </div>
              <div className="container-fluid p-3 mt-5" id="part7">
                <h1 className="mb-3">References</h1>
                <div className="row">
                  <div className="col-12 col-md-1"></div>
                  <div className="col-12 col-md-11">
                    <div className="references-container">
                      <p>Fatima-Zahra Lahlou, Hamish R. Mackey, Tareq Al-Ansari, Wastewater reuse for livestock feed irrigation as a sustainable practice: A socio-environmental-economic review, Journal of Cleaner Production, Volume 294, 2021, 126331, ISSN 0959-6526, https://doi.org/10.1016/j.jclepro.2021.126331.</p>
                      <p>Soma Mishra, Rakesh Kumar, Manish Kumar, Use of treated sewage or wastewater as an irrigation water for agricultural purposes- Environmental, health, and economic impacts, Total Environment Research Themes, Volume 6, 2023, 100051, ISSN 2772-8099, https://doi.org/10.1016/j.totert.2023.100051.</p>
                      <p>Luis E. Lesser, Abrahan Mora, Cristina Moreau, Jürgen Mahlknecht, Arturo Hernández-Antonio, Aldo I. Ramírez, Héctor Barrios-Piña, Survey of 218 organic contaminants in groundwater derived from the world's largest untreated wastewater irrigation system: Mezquital Valley, Mexico, Chemosphere, Volume 198, 2018, Pages 510-521, ISSN 0045-6535, https://doi.org/10.1016/j.chemosphere.2018.01.154.</p>
                      <p>Instituto de Información Estadística y Geográfica. (2021). El agua de Jalisco. Strategos Revista Digital del Instituto de Información Estadística y Geográfica. Retrieved from https://iieg.gob.mx/strategos/el-agua-de-jalisco/</p>
                      <p>Romo, P. (2024). Escasez y contaminación de agua ponen en riesgo abasto para Guadalajara: U de G. El Economista. Retrieved from https://www.eleconomista.com.mx/estados/Escasez-y-contaminacion-de-agua-ponen-en-riesgo-abasto-para-Guadalajara-U-de-G-20240321-0100.html</p>
                      <p>Muñoz, J. (2024, February 16). A 16 años de la muerte del niño Miguel, van 2 mil 647 muertes por contaminación del Río Santiago. El Informador: Noticias De Jalisco, México, Deportes & Entretenimiento. https://www.informador.mx/jalisco/A-16-anos-de-la-muerte-del-nino-Miguel-van-2-mil-647-muertes-por-contaminacion-del-Rio-Santiago-20240215-0166.html</p>
                      <p>Torres, A. (2023, October 23). “El silencio, la única constante en la contaminación del río Santiago” - Somoselmedio. Somoselmedio. https://www.somoselmedio.com/el-silencio-la-unica-constante-en-la-contaminacion-del-rio-santiago/</p>
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
