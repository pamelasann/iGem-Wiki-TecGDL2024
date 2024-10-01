export function Experiments() {
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
                <h1 className="mb-3">Want to replicate our project?</h1>
              </div>
              <div className="container-fluid p-3" id="part1.1">
                <h2>Protocols</h2>
                <p>Biological material</p>
                <ul>
                  <li><i>Escherichia coli</i> BL21 </li>
                  <li><i>Escherichia coli</i> TOP 10</li>
                </ul>
                <br></br>
                <p>Reagents</p>
                <ul>
                  <li>Rifampicin, Sigma-Aldrich</li>
                  <li>Ibuprofen pharmaceutical grade brand, Best</li>
                  <li>Kanamycin, Sigma-Aldrich</li>
                  <li>Restriction enzyme XhoI, Promega</li>
                  <li>Restriction enzyme Ncol, Promega</li>
                </ul>
                <br></br>
                <p>Kits</p>
                <ul>
                  <li>Miniprep QIAGEN QIAprep Spin kit</li>
                  <li>Promega Wizard SV extraction kit</li>
                  <li>QIAGEN gel purification kit</li>
                  <li>T4 ligase Invitrogen</li>
                  <li>NEB Gibson Assembly kit</li>
                </ul>
              </div>

              <div className="container-fluid p-3 mt-5" id="part2">
                <h1 className="mb-3">Miniprep QIAGEN QIAprep Spin kit</h1>
              </div>
              <ol>
                <li>Pellet 15 mL of overnight culture by centrifugation at &lt;6800 x g for 3 min at 4 °C. Pour off supernatant.</li>
                <li>Resuspend pellet with 250 μL Buffer P1 and transfer to a 1.5 mL microcentrifuge tube.</li>
                <li>Add 250 μL Buffer P2 and mix by inverting the tube until the solution becomes clear. Do not allow the lysis to proceed for more than 5 min.</li>
                <li>Add 350 μL Buffer N3 and mix thoroughly by inverting the tube until the solution becomes colorless.</li>
                <li>Centrifuge for 10 min at max speed (17900 x g)</li>
                <li>Transfer supernatant to a spin column by pipetting (approximately 800 μL). Centrifuge at max speed for 1 min and discard flow-through</li>
                <li>Add 750 μL Buffer PE. Centrifuge at max speed for 1 min and discard flow-through.</li>
                <li>Centrifuge at max speed for 1 min.</li>
                <li>Transfer spin column to a new 1.5 mL microcentrifuge tube. Add 50 μL Buffer EB to the center of the column, incubate for 2 min, and centrifuge at max speed for 1 min. Remove the spin column.</li>
                <li>Measure plasmid DNA yield in Nanodrop, using as a blank 3 μL of Buffer EB. Store plasmid DNA at -20 °C.</li>
              </ol>

              <div className="container-fluid p-3 mt-5" id="part3">
                <h1 className="mb-3">Miniprep Promega Wizard SV kit</h1>
              </div>
              <ol>
                <li>Pellet 10 mL of overnight culture by centrifugation at 4000 x g for 10 minutes at 4 °C. Pour off supernatant.</li>
                <li>Add 250 μL of Cell Resuspension Solution and resuspend cells thoroughly by pipetting. Transfer the resuspended cells to a 1.5 mL microcentrifuge tube.</li>
                <li>Add 250 μL of Cell Lysis Solution and mix by inverting the tube for up to 5 minutes or until the suspension clears.</li>
                <li>Add 10 μL of Alkaline Protease Solution and mix by inverting the tube 4 times. Incubate for 5 min at room temperature.</li>
                <li>Add 350 μL of Neutralization Solution and mix by inverting the tube 4 times.</li>
                <li>Centrifuge the lysate at maximum speed (14000 x g) for 10 min at room temperature. If the lysate does not form a well-defined pellet, centrifuge for an additional 5-10 min.</li>
                <li>Transfer the lysate (approximately 850 μL) to the spin column by pipetting, avoiding the white precipitate.</li>
                <li>Centrifuge at max speed for 1 min at room temperature. Discard the flow-through.</li>
                <li>Add 750 μL of Column Wash Solution and centrifuge at max speed for 1 min. Discard flow-through.</li>
                <li>Repeat previous step with 250 μL of Column Wash Solution. Centrifuge at max speed for 2 min.</li>
                <li>Transfer spin column to a new 1.5 mL microcentrifuge tube.</li>
                <li>Elute by adding 100 μL of nuclease-free water to the center of the spin column. Let stand for 5 min, then centrifuge at max speed for 1 min. Remove the spin column.</li>
                <li>After elution, measure DNA yield in Nanodrop, using nuclease-free water as a blank. Store plasmid DNA at -20°C.</li>
              </ol>

              <div className="container-fluid p-3 mt-5" id="part4">
                <h1 className="mb-3">Agarose gel electrophoresis</h1>
              </div>
              <ol>
                <li>Add agarose (0.32 g for a 0.8% gel, 0.4 g for a 1% gel) and 40 mL of 1X TAE buffer to an Erlenmeyer flask.</li>
                <li>Melt the agarose in the microwave in &lt;1 min intervals until the agarose is fully dissolved. The solution should be clear without any granules left.</li>
                <li>Let the solution cool slightly until it's warm to the touch and add 4 μL of SYBR Safe 10,000X concentrate. Mix thoroughly.</li>
                <li>Pour the liquid into a gel mold tray with the comb inserted. Cover the tray or move it to a dark place and let the gel set. This takes approximately 20 min.</li>
                <li>Once the gel has set, transfer it to a gel chamber, making sure the comb side is next to the negative electrode. Fill the chamber up to the max volume line with 1X TAE buffer and carefully remove the comb. The gel is now ready to be loaded.</li>
                <li>Load the sample into each well. This can be achieved by pipetting the corresponding amount of sample onto a piece of parafilm, adding the corresponding amount of 6X loading dye, gently mixing by pipetting, and carefully loading the mixture into each well.</li>
                <li>Close the tank, making sure the negative electrode is on the sample side and the red electrode is on the opposite side. Make sure the electrodes are connected correctly to the power supply.</li>
                <li>Run the gel with the appropriate voltage. Usually, we run gels at 60 V for 10 min, then 90 V for 45 min.</li>
                <li>Once it has finished running, transfer the gel to a UV transilluminator and visualize the samples.</li>
              </ol>

              <div className="container-fluid p-3 mt-5" id="part5">
                <h1 className="mb-3">Transformation by electroporation</h1>
              </div>
              <ol>
                <li>Add 1 μL of plasmid solution to 50 μL of electrocompetent cells in the tube, and mix gently, avoiding bubble formation.</li>
                <li>Transfer the mixture to a pre-chilled electroporation cuvette (freeze the cuvette for at least 1 hour before use).</li>
                <li>Place the cuvette in the electroporator and program it with the following conditions: voltage to 1700 volts and time constant to 5 milliseconds. Then, proceed to apply the electrical pulse.</li>
                <li>Immediately after the pulse, add 1 mL of SOC medium to the cuvette and transfer the entire volume to a 1.5 mL microcentrifuge tube. Rinse the cuvette with an additional 2 mL of SOC medium to recover all cells.</li>
                <li>Incubate the cells at 37°C and constant agitation at 200 rpm for 60 minutes.</li>
                <li>Plate different volumes (10-200 μL) of the culture onto LB agar plates supplemented with kanamycin (5 μg/mL). Include a control plate without antibiotics to check for untransformed cells.</li>
                <li>Incubate the plates upside down at 37°C overnight.</li>
                <li>Determine the transformation efficiency by counting the colonies that grow on the antibiotic plates.</li>
              </ol>

              <div className="container-fluid p-3 mt-5" id="part6">
                <h1 className="mb-3">Transformation by heat shock</h1>
              </div>
              <ol>
                <li>Thaw chemically competent cells on ice.</li>
                <li>Transfer 50 μL of competent cells to a 1.5 mL microcentrifuge tube.</li>
                <li>Add 1 μL of plasmid and mix gently by pipetting up and down or by flicking the tube.</li>
                <li>Incubate on ice for 30 minutes.</li>
                <li>Heat shock at 42°C for 30 seconds.</li>
                <li>Transfer to an eppendorf tube on ice for 2 minutes.</li>
                <li>Add 950 μL of room temperature SOC media and incubate at 37 °C, 250 rpm for 60-90 minutes.</li>
                <li>Centrifuge at 10,000 rpm for 5 minutes and resuspend in 300 μL of SOC media.</li>
                <li>Spread 100 μL of cells onto warm plates with appropriate antibiotics.</li>
                <li>Incubate plates overnight at 37 °C.</li>
              </ol>

              <div className="container-fluid p-3 mt-5" id="part7">
                <h1 className="mb-3">Electrocompetent cells</h1>
              </div>
              <ol>
                <li>Inoculate <i>E. coli</i> in 50 mL of LB medium and incubate overnight at 37°C with shaking at 200 rpm.</li>
                <li>Reinoculate the overnight culture into 200 mL of fresh LB medium at a 1:10 ratio.</li>
                <li>Measure the optical density (OD600) at 600 nm and adjust the volume to obtain an OD600 of 0.1.</li>
                <li>Incubate the culture until it reaches an OD600 between 0.3 and 0.6.</li>
                <li>Distribute the culture into 50 mL conical tubes.</li>
                <li>Centrifuge at 600 x g for 10 minutes and discard the supernatant.</li>
                <li>Add 5 mL of cold 10% glycerol, resuspend the cells and then adjust the volume to 50 mL with cold 10% glycerol. Resuspend completely.</li>
                <li>Centrifuge again at 600 x g for 10 minutes and discard the supernatant.</li>
                <li>Repeat the washing step 3 times using 50 mL of cold 10% glycerol each time.</li>
                <li>After the last wash, remove as much glycerol as possible and resuspend the cell pellet in 2 mL of cold 10% glycerol.</li>
                <li>Store aliquots of the electrocompetent cells at -80°C until use.</li>
              </ol>

              <div className="container-fluid p-3 mt-5" id="part8">
                <h1 className="mb-3">Chemically competent cells</h1>
              </div>
              <ol>
                <li>Prepare an overnight culture of the desired <i>E. coli</i> strain with 5 mL LB and either a single colony off a fresh plate or a frozen glycerol stock. Grow at 37 °C, 150-200 rpm for 16 hours.</li>
                <li>Inoculate 49.5 mL of LB with 0.5 mL of the overnight culture.</li>
                <li>Incubate at 37°C, 200 rpm until the OD600 reaches 0.3-0.4. This takes approximately 3 hours.</li>
                <li>Transfer the culture to a 50 mL conical tube and incubate on ice for 1 hour.</li>
                <li>Centrifuge at 4°C, 4000 rpm for 10 minutes and discard supernatant</li>
                <li>Resuspend in 10 mL of ice-cold 0.1 M CaCl2 and incubate on ice for 45 minutes.</li>
                <li>Centrifuge at 4°C, 4000 rpm for 10 minutes and discard supernatant.</li>
                <li>Resuspend in 2.5 mL of 0.1 M CaCl2 + 15% glycerol.</li>
                <li>Make 50 μL aliquots in 0.2 mL PCR tubes and store at -80 °C.</li>
              </ol>

              <div className="container-fluid p-3 mt-5" id="part9">
                <h1 className="mb-3">Restriction digestion</h1>
              </div>
              <ol>
                <li>Mix the reaction components gently and spin down for a few seconds to collect the contents at the bottom of the tube, according following table:</li>
                {/* Table Section */}
                <div className="table">
                  <table>
                    <caption>Table 2 Fitting constants</caption>
                    <thead>
                      <tr>
                        <th>Times</th>
                        <th>$C_1$ origin</th>
                        <th>$\gamma$ origin</th>
                        <th>$r$ origin</th>
                        <th>$C_1$ converge</th>
                        <th>$\gamma$ converge</th>
                        <th>$r$ converge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <li>Incubate the reaction at 37°C for 1-16 hours. The incubation time depends on the extent of digestion required.</li>
                <li>Terminate the reaction by incubating the reaction at 65° for 20 minutes to inactivate the EcorRI enzyme.</li>
              </ol>

              <div className="container-fluid p-3 mt-5" id="part10">
                <h1 className="mb-3">PCR w/DreamTaq polymerase</h1>
              </div>
              <ol>
                <li>Assemble reaction components in a 0.2 mL PCR tube on ice and transfer the reaction mixture to the thermocycler.</li>
                {/* Table Section */}
                <div className="table">
                  <table>
                    <caption>Table 2 Fitting constants</caption>
                    <thead>
                      <tr>
                        <th>Times</th>
                        <th>$C_1$ origin</th>
                        <th>$\gamma$ origin</th>
                        <th>$r$ origin</th>
                        <th>$C_1$ converge</th>
                        <th>$\gamma$ converge</th>
                        <th>$r$ converge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <li>Configure thermocycler according to the length of the amplicon and the annealing temperature of the primers. The annealing temperature was first calculated using <a href="https://tmcalculator.neb.com/#!/main">NEB's Tm calculator</a>, then further optimized experimentally.</li>
                {/* Table Section */}
                <div className="table">
                  <table>
                    <caption>Table 2 Fitting constants</caption>
                    <thead>
                      <tr>
                        <th>Times</th>
                        <th>$C_1$ origin</th>
                        <th>$\gamma$ origin</th>
                        <th>$r$ origin</th>
                        <th>$C_1$ converge</th>
                        <th>$\gamma$ converge</th>
                        <th>$r$ converge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <li>After completion, visualize PCR products in an agarose gel to confirm correct amplification.</li>
              </ol>

              <div className="container-fluid p-3 mt-5" id="part11">
                <h1 className="mb-3">PCR w/GoTaq Green Master Mix</h1>
              </div>
              <ol>
                <li>Assemble reaction components in a 0.2 mL PCR tube on ice and transfer reaction mixture to the thermocycler.</li>
                {/* Table Section */}
                <div className="table">
                  <table>
                    <caption>Table 2 Fitting constants</caption>
                    <thead>
                      <tr>
                        <th>Times</th>
                        <th>$C_1$ origin</th>
                        <th>$\gamma$ origin</th>
                        <th>$r$ origin</th>
                        <th>$C_1$ converge</th>
                        <th>$\gamma$ converge</th>
                        <th>$r$ converge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <li>Configure thermocycler according to the length of the amplicon and the annealing temperature of the primers. The annealing temperature was first calculated using <a href="https://tmcalculator.neb.com/#!/main">NEB's Tm calculator</a>, then further optimized experimentally.</li>
                {/* Table Section */}
                <div className="table">
                  <table>
                    <caption>Table 2 Fitting constants</caption>
                    <thead>
                      <tr>
                        <th>Times</th>
                        <th>$C_1$ origin</th>
                        <th>$\gamma$ origin</th>
                        <th>$r$ origin</th>
                        <th>$C_1$ converge</th>
                        <th>$\gamma$ converge</th>
                        <th>$r$ converge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <li>After completion, visualize PCR products in an agarose gel to confirm correct amplification.</li>
              </ol>

              <div className="container-fluid p-3 mt-5" id="part12">
                <h1 className="mb-3">Gel extraction - Invitrogen PureLink Quick</h1>
              </div>
              <ol>
                <li>Equilibrate a water bath or heat block to 50°C.</li>
                <li>Excise a minimal area of gel containing the DNA fragments of interest.</li>
                <li>Weight the gel slice containing the DNA fragment using a scale sensitive to 0.001 g.</li>
                <li>Add gel solubilization Buffer (L3) to the excised gel in the tube size indicated in the following table:</li>
                {/* Table Section */}
                <div className="table">
                  <table>
                    <caption>Table 2 Fitting constants</caption>
                    <thead>
                      <tr>
                        <th>Times</th>
                        <th>$C_1$ origin</th>
                        <th>$\gamma$ origin</th>
                        <th>$r$ origin</th>
                        <th>$C_1$ converge</th>
                        <th>$\gamma$ converge</th>
                        <th>$r$ converge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <li>Place the tube with the gel slice and Buffer L3 into a 50°C water bath or heat block. Incubate the tube at 50°C for 10 minutes. Invert the tube every 3 minutes to mix and ensure gel dissolution.</li>
                <li>After the gel slice appears dissolved, incubate the tube for an additional 5 minutes.</li>
                <li>Optional: for optimal DNA yields, add 1 gel volume of isopropanol to the dissolved gel slice. Mix well.</li>
                <li>Purify the DNA using a centrifuge or vacuum Manifold.</li>
              </ol>

              <div className="container-fluid p-3 mt-5" id="part13">
                <h1 className="mb-3">Fluorescent protein washes</h1>
              </div>
              <ol>
                <li>In sterile conditions, harvest 20 mL of <i>Escherichia coli</i> BL21 cells with the fluorescent protein of interest (YFP, GFP, RFP, or ECFP) in a microcentrifuge tube</li>
                <li>Centrifuge at 10,000 rpm for 1 minute between every milliliter harvested</li>
                <li>Discard the supernatant after each centrifugation</li>
                <li>After obtaining the desired pellet, add 5  mL of PBS to the microcentrifuge tube</li>
                <li>Centrifuge at 10,000 rpm for 1 minute.</li>
                <li>Discard the supernatant</li>
                <li>Resuspend the pellet in 3 mL of PBS.</li>
                <li>Take 75 μL from each sample and place them in cells for optical density measurement, each with an additional 1425 μL of distilled water</li>
                <li>Measure the optical density of each sample using only distilled water as the blank</li>
                <li>After obtaining the optical density, multiply the value by 20 to determine the optical density of the samples obtained in step number 7</li>
                <li>Use the formula C1V1 = C2V2 to determine how much volume to add from the samples in step 7 to obtain dilutions at different optical density values with PBS</li>
                <li>Prepare the dilutions in new microcentrifuge tubes</li>
                <li>Analyze the samples in the device for constructing the calibration curve</li>
              </ol>

              <div className="container-fluid p-3 mt-5" id="part14">
                <h1 className="mb-3">PCR purification - QIAquick PCR Purification Kit</h1>
              </div>
              <ol>
                <li>Add 5 volumes of Buffer PB to 1 volume of the PCR reaction and mix thoroughly.</li>
                <li>Transfer the mixture to a spin column and centrifuge at max speed for 1 min. Discard flow-through.</li>
                <li>Add 750 μL Buffer PE to the column, centrifuge at max speed for 1 min. Discard flow-through.</li>
                <li>Centrifuge at max speed for 1 min to remove residual wash buffer.</li>
                <li>Place the spin column in a new 1.5 mL microcentrifuge tube.</li>
                <li>Add 30 μL Buffer EB to the center of the spin column, let the column stand for 5 min and centrifuge at max speed for 1 min.</li>
                <li>Measure yield in Nanodrop, using Buffer EB as a blank.</li>
              </ol>

              <div className="container-fluid p-3 mt-5" id="part15">
                <h1 className="mb-3">Ligation - Invitrogen T4 ligase</h1>
              </div>
              <ol>
                <li>Assemble the following reaction on ice:</li>
                {/* Table Section */}
                <div className="table">
                  <table>
                    <caption>Table 2 Fitting constants</caption>
                    <thead>
                      <tr>
                        <th>Times</th>
                        <th>$C_1$ origin</th>
                        <th>$\gamma$ origin</th>
                        <th>$r$ origin</th>
                        <th>$C_1$ converge</th>
                        <th>$\gamma$ converge</th>
                        <th>$r$ converge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <li>Incubate for 1 hour at 22 °C.</li>
                <li>Use up to 5 μL of the mixture to transform 50 μL of chemically competent cells or 1-2 μL per 50 μL of electrocompetent cells. Electrotransformation efficiency may be improved by inactivation at 65 °C for 10 min.</li>
              </ol>

              <div className="container-fluid p-3 mt-5" id="part16">
                <h1 className="mb-3">Gibson Assembly - NEB Gibson Assembly Master Mix</h1>
              </div>
              <ol>
                <li>Assemble the following reaction on ice:</li>
                {/* Table Section */}
                <div className="table">
                  <table>
                    <caption>Table 2 Fitting constants</caption>
                    <thead>
                      <tr>
                        <th>Times</th>
                        <th>$C_1$ origin</th>
                        <th>$\gamma$ origin</th>
                        <th>$r$ origin</th>
                        <th>$C_1$ converge</th>
                        <th>$\gamma$ converge</th>
                        <th>$r$ converge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>* Optimal efficiency is 100 ng of vector with 2-3 fold molar excess of each insert</p>
                <p>** Provided there is a high enough concentration of each fragment, 5 μL of Gibson Assembly Master Mix may be used instead. In such a case, the total volume is 10 μL.</p>
                <li>Incubate at 50 °C for 1 hour. Following the incubation store at -20 °C.</li>
                <li>Transform chemically competent cells with 2 μL of the assembly reaction. As per manufacturer instructions, if not using cells from NEB, dilute assembly reaction 4-fold.</li>
              </ol>

              <div className="container-fluid p-3 mt-5" id="part17">
                <h1 className="mb-3">Colony PCR</h1>
              </div>
              <ol>
                <li>Assemble reaction components in a 0.2 mL PCR tube on ice:</li>
                {/* Table Section */}
                <div className="table">
                  <table>
                    <caption>Table 2 Fitting constants</caption>
                    <thead>
                      <tr>
                        <th>Times</th>
                        <th>$C_1$ origin</th>
                        <th>$\gamma$ origin</th>
                        <th>$r$ origin</th>
                        <th>$C_1$ converge</th>
                        <th>$\gamma$ converge</th>
                        <th>$r$ converge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <li>Pick an isolated colony with a sterile micropipette tip and place it in the PCR tube for 15 seconds.</li>
                <li>Configure thermocycler according to the length of the amplicon and the annealing temperature of the primers. The annealing temperature was first calculated using <a href="https://tmcalculator.neb.com/#!/main">NEB's Tm calculator</a>, then further optimized experimentally.</li>
                {/* Table Section */}
                <div className="table">
                  <table>
                    <caption>Table 2 Fitting constants</caption>
                    <thead>
                      <tr>
                        <th>Times</th>
                        <th>$C_1$ origin</th>
                        <th>$\gamma$ origin</th>
                        <th>$r$ origin</th>
                        <th>$C_1$ converge</th>
                        <th>$\gamma$ converge</th>
                        <th>$r$ converge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <li>After completion, visualize PCR products in an agarose gel to confirm correct amplification.</li>
              </ol>

              <div className="container-fluid p-3 mt-5" id="part18">
                <h1 className="mb-3">Induction and SDS-PAGE gel electrophoresis</h1>
              </div>
              <ol>
                <li>Inoculate 5 mL of LB with an isolated colony and add the appropriate antibiotic at the working concentration.</li>
                <li>Incubate overnight at 37°C.</li>
                <li>For each colony, inoculate 20 mL of LB with 200 μL of the overnight culture. Incubate at 37 °C until the OD600 reaches 0.4. This takes approximately 2.5 hours).</li>
                <li>Add 8 μL of IPTG to achieve a final concentration of 0.4 mM. Incubate at 16 °C overnight.</li>
                <li>Harvest cells by centrifuging at 4000 rpm, 4 °C for 10 min. Discard the supernatant.</li>
                <li>Resuspend pellet in 5 mL of Buffer F (100 mM TRIS, 300 mM NaCl, 2 mM Imidazole).</li>
                <li>Lyse the cells by sonication at 75% amplitude, repeating 5 cycles of 30 s each.</li>
                <li>Centrifuge at 4000 rpm, 4 °C for 10 min. Store supernatant at 4°C.</li>
                <li>Add 700 μL of cold acetone to 100 μL of sonication supernatant and incubate at -20 °C overnight.</li>
                <li>Briefly spin down samples at max speed in a microcentrifuge.</li>
                <li>Remove excess acetone with a syringe without disturbing the formed pellet.</li>
                <li>Evaporate remaining acetate at 30 °C for 20 min.</li>
                <li>Resuspend pellet in 100 μL of 10 nM Tris.</li>
                <li>Add 50 μL of Laemmli buffer, homogenize and let sit at room temperature for 5 min.</li>
                <li>Incubate at 96 °C for 5 min.</li>
                <li>Transfer to ice and let cool before loading gel.</li>
                <li>Load gel (15 μL per well). The gel ran at 90 V for 3 hours.</li>
              </ol>






                {/* Table Section */}
                <div className="table">
                  <table>
                    <caption>Table 2 Fitting constants</caption>
                    <thead>
                      <tr>
                        <th>Times</th>
                        <th>$C_1$ origin</th>
                        <th>$\gamma$ origin</th>
                        <th>$r$ origin</th>
                        <th>$C_1$ converge</th>
                        <th>$\gamma$ converge</th>
                        <th>$r$ converge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>0.221747</td>
                        <td>0.117418</td>
                        <td>0.296676</td>
                        <td>0.007803174</td>
                        <td>0.049709744</td>
                        <td>0.140243978</td>
                      </tr>
                    </tbody>
                  </table>
                </div>


              
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
}
