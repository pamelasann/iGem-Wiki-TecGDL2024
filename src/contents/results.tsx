export function Results() {
  return (
    <>
    <div className="container-fluid p-3">
        <div className="row">
          <div className="col-lg-3 col-md-12 pt-5 ps-5" id="menu-container">
            <div id="titles-container">
              <ul className="list-unstyled">
                <li className="ps-4">
                  <a href="#part1">pET28b(+) and IpfF, RifMo and TjPCs cloning</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                      <a href="#part1.1" className="subtitle">pET28b(+) and IpfF, RifMo or TjPCs ligation transformants</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part1.2" className="subtitle">Validation of gene cloning by T4 DNA ligase reactions</a>
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part2">Gibson Assembly of ECFP_mVenus and RifMo, TjPCs or IpfF</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                      <a href="#part2.1" className="subtitle">Amplicons of genes of interest and the vector for Gibson Assembly reaction</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part2.2" className="subtitle"><i>E. coli</i> BL21  transformation with Gibson Assembly products</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part2.3" className="subtitle">Gibson assembly construct validation through restriction assays</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part2.4" className="subtitle">Analysis of protein expression of RifMO, TjPCS, and IpfF using the assembled construction</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part2.5" className="subtitle">Validation of our assembled FRET systems ECFP_RifMO_mVENUS and ECFP_IpfF_mVENUs</a>
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part3">References</a>
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
                <h1 className="mb-3">pET28b(+) and IpfF, RifMo and TjPCs cloning</h1>
              </div>
              <div className="container-fluid p-3" id="part1.1">
                <h2>pET28b(+) and IpfF, RifMo or TjPCs ligation transformants</h2>
                <p>A ligation was realized with each gene and a vector pET28b(+), with the purpose of heterologously overexpressing the proteins in Escherichia coli. The results of T4 DNA ligase reactions are shown in Figure 1, where positive transformed cells are observed as single and isolated colonies.</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/figura-1.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 1. Transformants resulting from the ligation of pET28b(+) and IpfF, RifMo or TjPCs after incubation in LB agar and kanamycin (50 μg/mL) overnight at 37 ºC. The molar ratios used (5:1 or 3:1) were calculated by the software NEB calculator and they are indicated for each gene cloning.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
              </div>
              <div className="container-fluid p-3" id="part1.2">
                <h2>Validation of gene cloning by T4 DNA ligase reactions</h2>
                <p>To determine positive and false positive colonies, it was necessary to verify the presence of the genes of interest into the pET28b(+). With this purpose, a colony PCR was performed by taking colonies from the transformed plates, and utilizing the primers corresponding to the genes sequence. If the colonies transformed successfully, it was expected to observe a band in each of the samples.The PCR reaction for RifMo amplified a product of 1422 bp in both samples taken, which corresponds with the expected product. There were no observed amplicons for TjPCS and IpfF. Factors that could influence this result include degradation of primers, incorrect annealing temperature, degradation of reactants, among others.</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/figura-2.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 2. Agarose gel (0.8%) of colony PCR of transformants from the ligation reaction of pET28b(+) and RifMo, TjPCs, or IpfF.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
              </div>
              <div className="container-fluid p-3 mt-5" id="part2">
                <h1 className="mb-3">Gibson Assembly of ECFP_mVenus and RifMo, TjPCs or IpfF</h1>
              </div>
              <div className="container-fluid p-3" id="part2.1">
                <h2>Amplicons of genes of interest and the vector for Gibson Assembly reaction</h2>
                <p>In order to carry out the Gibson assembly reaction, the first step is to amplify the genes of interest and the vector (i.e. pET28b(+)) with the arms of homology. To achieve this, a PCR was performed for the genes RifMo, TjPCs and IpfF with its corresponding primers that recognize the Open Read Frame (ORF) of the genes and also attached the arms of homology to recombine with the pET28b(+). Additionally, the primers have the feature of restriction sites <i>NcoI</i> and <i>XhoI</i> for further validations. The results of PCR were observed in an electrophoresis gel (Figure 3A). Amplification products around 1.5 kb were observed, corresponding to the molecular weight predicted in <i>silico</i> (Benchling) for the three genes of interest. The unique band in the gel indicated that the primers do not form  dimers and there are no unspecific amplifications. This was suggested that the primers were adequate for amplifying the ORFs of interest, and the experimentation could proceed with certainty. In the other hand, the backbone of the pET28b(+) vector also was amplified with three different pairs of primers that each one carries homologous regions for RifMo, TjPCS or IpfF (Figure 3B). Results of the PCR showed the expected amplification for the three pairs of primers with the expected weight around 1500 bp.</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/fotos-9.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 3. (A) Agarose gel (0.8%) showing the PCR amplification for the Gibson assembly primer validation of IpfF, TjPCs, RifMo, and their respective controls. The marked bands correspond to the expected molecular weight for each gene of 1.5 kb.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/fotos-10.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 3. (B) Agarose gel (0.8%) showing the amplification of the pET28b(+) backbone along with the two fluorescent proteins, ECFP and mVenus, each amplified using specific primers targeting homologous regions for their respective genes. 3000 bp bands correspond to not-amplified sequences in the supercoil form.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <p>Then, ORF of genes of interest and the three backbones were purified by columns to perform the Gibson assembly reaction as indicated in the protocol section.</p>
              </div>
              <div className="container-fluid p-3" id="part2.2">
                <h2><i>E. coli</i> BL21  transformation with Gibson Assembly products</h2>
                <p>Following the assembly of the genes RifMo, TjPCs and IpfF with the ECFP_mVenus  construct respectively, chemically competent <i>E. coli</i> BL21 were transformed through heat shock. In order to evaluate a successful assembly and transformation of the cells, the construct contains an antibiotic resistance gene to kanamycin. Thus, the result of the transformation was cultivated in petri dishes with LB agar and kanamycin (50 μg/mL). After an overnight incubation at 37 ºC, RifMo, TjPCs and IpfF constructs all presented colonies in at least one petri dish (Figure 4), which suggested a first indicator of a correct assembly.</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/figure4.jpeg" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 4. Bacterial transformation of ECFP_mVenus with RifMo, TjPCs, or IpfF in <i>E. coli</i> BL21 in LB agar with kanamycin (50 μg/mL).</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
              </div>
              <div className="container-fluid p-3" id="part2.3">
                <h2>Gibson assembly construct validation through restriction assays</h2>
                <p>Although the colonies appear to indicate a successful transformation of the cells, a different validation was required to confirm that the plasmid assembled RifMo, TjPCs, or  IpfF. For this reason, a restriction assay was performed using the enzymes  <i>NcoI</i> and <i>XhoI</i> (Promega), as these restriction sites flank exclusively the region in the construct containing the assembled genes. Using the software Benchling, a digestion in s<i>silico</i> was performed to compare the results and verify the expected digestion. In an electrophoresis gel, it was expected to observe only two bands: the gene of interest and the ECFP_mVenus construct. The results, as observed in Figure 5, showed bands at approximately 5 kb, corresponding to the predicted size of 5.2 kb for the ECFP_mVenus construct. Meanwhile, the bands observed around 3 kb were consistent with the anticipated sizes of each gene, where RifMo and TjPCs have a molecular weight of 2.9 kb and 3.1 kb for IpfF. These results confirmed that the Gibson Assembly was performed successfully, and that the whole construct was present for each of the genes.</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/fotos-11.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 5.  A) In <i>silico</i> prediction of restriction assay, where the patterns of digestions are shown using the enzymes <i>NcoI</i> and <i>XhoI</i>, and the plasmids (1) pET-28b(+) ECFP_RifMo_mVenus, (2) pET-28b(+) ECFP_TjPCs_mVenus, and (3) pET-28b(+) ECFP_IpfF_mVenus. B) Electrophoresis of agarose gel (0.8%) of the restriction assay with <i>Ncol</i> and <i>XhoI</i> of the construct ECFP_mVenus cloned with the genes IpfF, RifMo or TjPCs.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
              </div>
              <div className="container-fluid p-3" id="part2.4">
                <h2>Analysis of protein expression of RifMO, TjPCS, and IpfF using the assembled construction</h2>
                <p>Once a successful transformation of the Gibson Assembly product was achieved in <i>E. coli</i> BL21, the resulting transformants were induced with 0.4 mM isopropyl β-D-1-thiogalactopyranoside to overexpress the full construct at 16 centigrades during an overnight incubation. Then, the supernatants from selected clones were obtained by the cellular disruption proceeding indicated in the protocol  section. The samples were properly prepared to be analyzed by a Sodium dodecyl-sulfate polyacrylamide gel electrophoresis (SDS-PAGE). After the resulting SDS-PAGE yielded well-defined bands corresponding to the approximate molecular weight of the full constructs (~106 kDa for ECFP_RifMo_mVenus, ~109 kDa for ECFP_TjPCs_mVenus, and ~113 kDa for ECFP_IpfF_mVenus), as it can be noted in Figure 6. These bands were not visible in the controls (induced pET-28b(+) without insert), meaning that there is not another protein being expressed at the expected molecular weight.</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/figure-6a.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/figure-6b.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/figure-6c.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 6. SDS-PAGE gel showing the protein overexpression results of A) ECFP_TjPCs_mVenus, B) ECFP_RIFMO_mVenusC) ECFP__mVenus. The marked bands of 106, 109, and 113 kDa correspond to the expected molecular weight of the full protein construct. No band of the same molecular weight as the desired proteins was observed in the control sample.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
              </div>
              <div className="container-fluid p-3" id="part2.5">
                <h2>Validation of our assembled FRET systems ECFP_RifMO_mVENUS and ECFP_IpfF_mVENUsn</h2>
                <p>After the validation of the heterologous protein overexpression of the constructs, the induced samples were grown on LB plates containing their respective substrate to analyze the response of our FRET systems. To determine the experimental concentrations of rifampicin and ibuprofen in our assays, it was considered the IC50 reported for <i>E. coli</i> in previous reports. 12.5 mg/mL of rifampicin (Weinstein, Z. B., & Zaman, M. H., 2018); and 1.25mg/mL of ibuprofen (Al-Janabi A. A., 2010). Leading to the respective concentrations in the mediums, for rifampicin being 1.25 mg/mL, 0.625 mg/mL, and 0.312 mg/mL and ibuprofen being 10 µg/mL, 5 µg/mL, 2.5 µg/mL. As noted in Figure 7, no fluorescence was observed in any of the plates. The explanation to these results could be linked to the span of functionality of the FRET system, because it is possible that the system fluoresced for a specific period of time that did not coincide with the time in which the plates were placed and observed on the transilluminator. TjPCs was not validated in fluorescence because cadmium is a toxic reactive, so its validation was the SDS-PAGE.</p>
                <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figura-7.png" id="content-image-big"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 7. Validation of the construct with the substrates of interest at different concentrations.</p>
                  </div>
              </div>
              <div className="container-fluid p-3 mt-5" id="part3">
                <h1 className="mb-3">References</h1>
                <div className="row">
                  <div className="col-12 col-md-1"></div>
                  <div className="col-12 col-md-11">
                    <div className="references-container">
                      <p>Al-Janabi A. A. (2010). In vitro antibacterial activity of Ibuprofen and acetaminophen. Journal of global infectious diseases, 2(2), 105-108. https://doi.org/10.4103/0974-777X.62880</p>
                      <p>Weinstein, Z. B., & Zaman, M. H. (2018). Evolution of Rifampin Resistance in Escherichia coli and Mycobacterium smegmatis Due to Substandard Drugs. Antimicrobial agents and chemotherapy, 63(1), e01243-18. https://doi.org/10.1128/AAC.01243-18</p>
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
