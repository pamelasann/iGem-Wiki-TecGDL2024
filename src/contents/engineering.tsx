export function Engineering() {
  return (
    <>
    <div className="container-fluid p-3">
        <div className="row">
          <div className="col-lg-3 col-md-12 pt-5 ps-5" id="menu-container">
            <div id="titles-container">
              <ul className="list-unstyled">
                <li className="ps-4">
                  <a href="#part1">ECFP_mVenus FRET system overview</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part2">Why these genes?</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                      <a href="#part2.1" className="subtitle">RifMO</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part2.2" className="subtitle">TjPCS</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part2.3" className="subtitle">Ibuprofen</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part2.4" className="subtitle">Biopart BBa_K4447004 - ECFP_EryK_mVenus</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part2.5" className="subtitle">Design</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part2.6" className="subtitle">ECFP_RifMo / TjPCs / IpfF_mVenus modeling</a>
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part3">Primer design</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part4">Build</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part5">Test</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part6">Experimental design and future perspectives</a>
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
                <h1 className="mb-3">ECFP_mVenus FRET system overview</h1>
                <p>Incorrect treatment of water for agricultural irrigation can carry potential negative consequences. Heavy metals, emerging pollutants, and pathogens are a risk that can be carried to consumers by the contamination of crops through polluted water [1]. To ensure the safety of consumers, and high yield in the agricultural sector, this investigation sought to develop an accessible, easy-to-use, and quick fluorescence-based detection system for significant emerging contaminants in treated wastewater used for irrigation. Building upon the previous iteration of the project, which successfully generated a biosensor capable of detecting erythromycin, we decided to expand the scope of the biosensor, adding the capability of detecting three more contaminants: rifampicin, cadmium, and ibuprofen. Additionally, in the present project, the gene assembly technique used for the construction of our new system has the potential to easily modify the previous genetic system, in which the gene that codifies for the detector protein could be switched out for another gene to allow another protein to sense a different substrate of interest. In this way, our aim is to improve bioparts already registered in the iGEM database, as well as register new bioparts for the benefit of our genetic engineering community.</p>
                <br></br>
                <p>The basis for the biosensor is the operation of the Förster resonance energy transfer (FRET) mechanism. This mechanism describes the energy transfer from a donor fluorophore to another nearby acceptor fluorophore, and in order for a noticeable fluorescence signal to occur, the fluorophores must be close enough to each other [2]. Ideally, with the fusion constructs for each contaminant, upon binding to the substrate, the detector enzyme will undergo a conformational change that would make it possible for the FRET mechanism to occur, and thus generating a measurable signal that would make it possible to determine the presence of each contaminant in a given water sample, as shown in Figure 1.</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/tjpcs-diagram.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/rifmo-diagram.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/ipff-diagram.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 1. Diagram of the FRET system in detection of contaminants in water bodies (cadmium, rifampicin and ibuprofen). It can be observed the change in conformation as the substrate is bound to the site.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
              </div>
              <div className="container-fluid p-3 mt-5" id="part2">
                <h1 className="mb-3">Why these genes?</h1>
              </div>
              <div className="container-fluid p-3" id="part2.1">
                <h2>RifMO</h2>
                <p>Rifampicin (RAMP) is an antibiotic widely used in the treatment of severe bacterial infections such as tuberculosis, meningitis, leprosy, and HIV-associated infections. RAMP residues contaminate water sources, primarily through human excretions (urine and feces) and waste generated by the pharmaceutical industry and animal husbandry. Due to its high solubility and environmental stability, RAMP is not fully removed by wastewater treatment plants, contributing to the development of antibiotic-resistant bacteria (ARB) [3].</p>
                <br></br>
                <p>In this  project, rifampicin monooxygenase (RifMo, EC:1.14.13.211) was used as a detector for the presence of rifampicin, this enzyme catalyze  the hydroxylation of rifampicin to 2'-N-hydroxy-4-oxo-rifampicin, a metabolite with lower antimicrobial activity [4].</p>
              </div>
              <div className="container-fluid p-3" id="part2.2">
                <h2>TjPCS</h2>
                <p>Heavy metals have been reported to damage growth and food yield and present a threat to human and animal health [5]. One of the most toxic heavy metals that is currently posing a threat is cadmium (Cd), which is increasingly introduced in soil through fertilizers, vehicle traffic and irrigation with wastewater [6]. When this element is present in soil, it is absorbed by the roots, this bioaccumulation leads to contamination in leafy vegetables and edible crops, causing the main source of exposure to cadmium [7]. The contamination of Cd in soil can cause multiple disorders in the plant's health by affecting essential functions such as photosynthesis, uptake of water and nutrients and respiration. Its impact in humans if ingesting these crops may cause different kinds of cancer, skeleton diseases, and alimentary tract or neural injuries [6].</p>
                <br></br>
                <p>The enzyme chosen for the generation of the biosensor was phytochelatin synthase (EC:2.3.2.15) as a detector for the presence of cadmium. This enzyme catalyzes the synthesis of glutathione (GSH) polymers called phytochelatins (PCs). These molecules are the most studied chelators for the detoxification of heavy metals in plants [8]. Particularly, the PCS enzyme from the plant <i>Thlaspi japonicum</i> (TjPCS) is an enzyme that provides cadmium tolerance when it is heterologous expressed in <i>Saccharomyces cerevisiae</i>; which became of interest to build in the new FRET systems [9].</p>
              </div>
              <div className="container-fluid p-3" id="part2.3">
                <h2>Ibuprofen</h2>
                <p>Ibuprofen is an anti-inflammatory treatment drug widely used in the world that can be bought without any necessary prescription. This makes ibuprofen a drug that everyone can consume easily, bringing problems because its disposal makes it an emerging contaminant in water bodies [10]. Due to this emerging contaminant, new ways to find effective treatments that can remove ibuprofen from water are needed; one particular approach has been studied which involves using different organisms that can degrade ibuprofen by metabolic pathways. An example of it is <i>Sphingomonas Ibu-2</i>; an organism that has been grown in an environment rich in ibuprofen. The described organism has the ability to metabolize ibuprofen to isobutylcatechol due to the adaptation, which one particular gene is in charge of this degradation which is IpfF [11].</p>
              </div>
              <div className="container-fluid p-3" id="part2.4">
                <h2>Biopart BBa_K4447004 - ECFP_EryK_mVenus</h2>
                <p>To carry out the project, we assembled our construct, using the previous version (BBa_K4447004) as a base upon which we inserted each gene of interest in between the genes encoding for the fluorophores ECFP (Enhanced cyan fluorescent protein, BBa_K1159302) and mVenus (Venus yellow fluorescent protein, BBa_K1907000). After assembly, we transformed <i>E. coli</i> BL21 with the plasmid encoding for the full ECFP_ RifMo (Rifampicin monooxygenase, BBa_K4447003) / TjPCs (Phytochelatin synthase, BBa_K5439001) / IpfF (Long-chain fatty acid CoA ligase, BBa_K5439002) _mVenus construct and induced expression. After expression, we plan for the construct to be purified which opens up the possibility of further standardization and the development of the full detection device as a commercial product (Figure 2).</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/metodologi-a-general.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 2. The fusion systems for the specific contaminant (rifampicin, ibuprofen, or cadmium) were constructed through Gibson assembly with the vector ECFP_mVenus with the gene corresponding to the contaminant. <i>E. coli</i> BL21 was transformed with the plasmid encoding the construct and its overexpression was induced and evaluated.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
              </div>
              <div className="container-fluid p-3" id="part2.5">
                <h2>Design</h2>
                <p>In order to evaluate the viability of our proposed system, we carried out protein structure predictions and protein-ligand conformation comparisons to ensure the fluorophores would be within the required distance for the FRET mechanism to occur. Additionally, we designed specific primers to ensure correct assembly of the construct and add modularity to the biosensor system.</p>
              </div>
              <div className="container-fluid p-3" id="part2.6">
                <h2>ECFP_RifMo / TjPCs / IpfF_mVenus modeling</h2>
                <p>Using the coding sequence for each protein in the construct, we used ColabFold [12] in order to obtain predicted structures of the ECFP_RifMo_mVenus fusion construct. The model produces five predictions, however we only considered the prediction with the best Predicted Aligned Error (PAE), which is a measure of how confident the model is in the relative position of residues within the predicted structure (Figure 3). While the predicted structure of each individual protein has a low alignment error due to the existence of already reported crystal structures, the connecting regions between each protein in the construct are predicted with low confidence, as noted in the PAE and pLDDT (predicted Local Distance Difference Test) values (Figure 4).  The predicted model shows significant similarity to the reported structure.</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/constructo-de-rifmo1.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 3. Predicted structure obtained from ColabFold showing ECFP (green), RifMo (grey), and mVENUS (yellow).</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/ecfp-rifmo-mvenus-38c00-pae.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/ecfp-rifmo-mvenus-38c00-plddt.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 4. PAE (top) and predicted Local Distance Difference Test (bottom) values obtained from the five ColabFold predicted structures.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <p>Given that there are reported crystal structures for RifMo in both its open conformation and the RifMo-Rifampicin complex (PDB 5KOW & 5KOX respectively) , we decided to compare the reported structures with the sequence we used and determine if the fluorophores in the predicted construct structure were within the Förster radius (the distance at which half the energy of the donor is transferred to the acceptor, approximately 3-6 nm) [13]. Using the software UCSF Chimera, we compared the reported crystal structure of RifMo-Rifampicin complex with the predicted structure in our model, as shown in Figure 5.</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/figure-5-comparison.jpeg" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 5. Comparison between the registered RifMo (brown protein) and the simulated one with ColabFold (cyan protein), both complexed with rifampicin (red).</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <p>Figure 6 shows the approximate binding site of rifampicin, which leads to the change in conformation that in turn leads to the energy transfer. Using PyMol, we determined the distance between both fluorophores to determine if it was sufficient for the energy transfer to take place (Figure 7). The distance between both fluorophores, according to the software, was approximately 6.8 angstroms, or 0.68 nm. Given that it is well below the typical Förster radius, theoretically there would be a fluorescent signal in presence of rifampicin.</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/figure-6-close-up.jpeg" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 6. Close up of the specific region between rifampicin compound and the binding site amino acids of the RifMo protein.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/constructo-rifmo-medicion-distancia.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 7. Approximate distance between fluorophores in ECFP_RifMo_mVenus. The distance was measured using PyMol and is shown in angstroms (1 angstrom = 0.1 nm).</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <p>Similarly to the ECFP_RifMo_mVenus construct, we generated predictions for the structures of the remaining two constructs: ECFP_TjPCs_mVenus and ECFP_IpfF_mVenus, as shown in Figures 8 to 11 with their respective PAE and pLDDT tests. An important thing to note in these predictions is that since there are no reported crystal structures for either of the detector proteins for ColabFold to match and base the structure on, the resulting model will have a lower pLDDT and therefore any subsequent analysis might not be as accurate. For this reason we decided to eschew the Förster radius measurements and proceed with the assembly and expression of our biosensor, keeping in mind there's not as much confidence regarding its correct function.</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/constructo-tjpcs.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 8. Predicted structure obtained from ColabFold showing ECFP (green), TjPCs (blue), and mVENUS (yellow). </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/figura9a-engineering-ecfp-tjpcs-mvenus-pae.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/figura9b-engineering-ecfp-tjpcs-mvenus-plddt.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 9. PAE (top) and predicted Local Distance Difference Test (bottom) values obtained from the five ColabFold predicted structures.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/constructo-de-ipff.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 10. Predicted structure obtained from ColabFold showing ECFP (green), IpfF (red), and mVENUS (yellow).</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/ecfp-ipff-mvenus-7f18b-pae.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/ecfp-ipff-mvenus-7f18b-plddt.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 11. PAE (top) and predicted Local Distance Difference Test (bottom) values obtained from the five ColabFold predicted structures.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
              </div>
              <div className="container-fluid p-3 mt-5" id="part3">
                <h1 className="mb-3">Primer design</h1>
                <p>As detailed in the previous iteration of the project, the FRET system developed has the potential to replace part BBa_K4447001 with other genes of interest, effectively adding modularity to the system. In order to build upon the existing experimental work and ensure a scarless functional assembly, the Gibson Assembly technique was utilized. As the technique requires the creation of specific homologous regions between inserts, specific primers had to be designed to generate these overhangs and ensure proper assembly [14]. The primers were generated using NEB's NEBuilder Assembly Tool, using a minimum primer length of 18 nts, a minimum overlap of 40 nts, and an overlap distribution split between the two fragments to be assembled (RifMo/TjPCs/IpfF + vector containing ECFP_mVenus fluorescent proteins).These overlaps and homology region splits are shown in Figures 12 to 14 for each construct, and the full primer sequences, as well as their Tms, are shown in Table 1.</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/primersgibson-tjpcs.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 12. Alignment regions and overlap regions for the primers used for the amplification and assembly of ECFP_TjPCs_mVenus construct.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/primersgibson-rifmo.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 13. Alignment regions and overlap regions for the primers used for the amplification and assembly of ECFP_RifMo_mVenus construct.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/primersgibson-ipff.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 14. Alignment regions and overlap regions for the primers used for the amplification and assembly of ECFP_IpfF_mVenus construct.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/table1-primersequences.png" id="simple-image"></img>
                </div>
              </div>
              <div className="container-fluid p-3 mt-5" id="part4">
                <h1 className="mb-3">Build</h1>
                <p>The basis for the assembly of the construct was the previous iteration of the ECFP_EryK_mVenus biosensor (BBa_K4447004), which was made up of the 3 genes in a pET-28b backbone. In order to successfully assemble the intended construct through Gibson Assembly, we amplified and purified the vector using primers that bind to the ends of both fluorescent proteins and exclude the center EryK gene, obtaining an empty FRET backbone with the homology regions corresponding to each gene This PCR step proved to be particularly difficult and in need of optimization, as it was performed numerous times varying the number of cycles, elongation step duration, and especially primer annealing temperatures. Once we obtained a slightly more visible band and a satisfactory concentration after purification, we proceeded to the amplification of the inserts. Along with the amplified vector, we amplified and purified each gene of interest (RifMo, TjPCs, and IpfF) with their corresponding primers in order to obtain each gene with the corresponding regions homologous to the backbone (Figure 15).</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/fotos-9.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 15. (A) Agarose gel (0.8%) showing the PCR amplification for the Gibson assembly primer validation of IpfF, TjPCs, RifMo, and their respective controls. The marked bands correspond to the expected molecular weight for each gene of 1.5 kb.</p>
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
                      <p>Figure 15. (B) Agarose gel (0.8%) showing the amplification of the pET28b(+) backbone along with the two fluorescent proteins, ECFP and mVenus, each amplified using specific primers targeting homologous regions for their respective genes. 3000 bp bands correspond to not-amplified sequences in the supercoil form.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <p>Having the required fragments amplified and ready, we proceeded to assemble the fragments together using New England Biolabs' Gibson Assembly Master Mix. The next step was to transform the assembled ECFP_RifMo / TjPCs / IpfF_mVenus products into <i>E. coli</i> BL21, an expression strain. This step also required some optimization, particularly regarding heat shock timings and the efficiency of our competent cells. Once those problems were sorted out, we obtained successfully transformed colonies for all 3 of our constructs (Figure 16).</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/figure4.jpeg" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 16. Bacterial transformation of ECFP_mVenus with RifMo, TjPCs, or IpfF in <i>E. coli</i> BL21 in LB agar with kanamycin (50 μg/mL).</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <p>Finally, as a confirmation step, we performed minipreps on colonies from all 3 constructs and digested the plasmid using <i>NcoI</i> and <i>XhoI,</i> in order to ensure the transformed colonies contained a plasmid with the full construct (Figure 17).</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/fotos-11.png" id="content-image-big"></img>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-12 col-md-2"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 17.  A) In <i>silico</i> prediction of restriction assay, where the patterns of digestions are shown using the enzymes <i>NcoI</i> and <i>XhoI</i>, and the plasmids (1) pET-28b(+) ECFP_RifMo_mVenus, (2) pET-28b(+) ECFP_TjPCs_mVenus, and (3) pET-28b(+) ECFP_IpfF_mVenus. B) Electrophoresis of agarose gel (0.8%) of the restriction assay with <i>Ncol</i> and <i>XhoI</i> of the construct ECFP_mVenus cloned with the genes IpfF, RifMo or TjPCs.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
              </div>
              <div className="container-fluid p-3 mt-5" id="part5">
                <h1 className="mb-3">Test</h1>
                <p>Once we had confirmation of a successful transformation and a successful assembly, selected colonies were induced with 0.4 mM IPTG to stimulate protein overexpression [15]. Various trials were attempted at different temperatures and incubation conditions, and the last trial at 16 °C for 16 hours yielded visible, clear bands corresponding to the approximate molecular weight of our constructs (~106 kDa for the RifMo construct, ~109 kDa for TjPCs, and ~113 kDa for IpfF). As shown in Figure 18, the bands were not visible in the negative controls, which corresponded to <i>E. coli</i> BL21 transformed with an empty pET-28b backbone containing no insert. This shows  evidence for the expression of our fusion constructs, and we proceeded to tests with each construct's substrate.</p>
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
                      <p>Figure 18. SDS-PAGE gel showing the protein overexpression results of A) ECFP_TjPCs_mVenus, B) ECFP_RIFMO_mVenusC) ECFP__mVenus. The marked bands of 106, 109, and 113 kDa correspond to the expected molecular weight of the full protein construct. No band of the same molecular weight as the desired proteins was observed in the control sample.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-2"></div>
                </div>
                <br></br>
                <p>We assessed the intended fluorescence generated by our FRET system by plating the same induced samples onto LB plates containing each construct's substrate at different concentrations: 1.25 mg/mL, 0.625 mg/mL, and 0.312 mg/mL in the case of ibuprofen and 10 µg/mL, 5 µg/mL, 2.5 µg/mL in the case of rifampicin. This test was done both to verify the viability of the cells in the presence of the substrate and to determine whether the fluorescence signal produced by the FRET system was visible and dependent on substrate concentration (Figure 19).</p>
                <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figura-7.png" id="content-image-big"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 19. Validation of the construct with the substrates of interest at different concentrations.</p>
                  </div>
                  <br></br>
                  <p>Unfortunately, there was no visible fluorescence in any of the concentrations when compared to the control (pET-28b with no insert). However, these results could be explained by the duration and timing of the fluorescence produced by FRET, as it is possible there was fluorescence for a period of time that didn't coincide with when the plates were analyzed. Additionally, to absolutely determine and quantify the correlation between substrate concentrations and fluorescence produced, protein purification after overexpression needs to be performed, with the aim of eliminating unwanted variables and removing the risk of mutation in the cells. This will also enable the adequate calibration of our proposed device, adding the possibility of not only detecting the contaminant, but also to quantify its presence in the tested sample.</p>
              </div>
              <div className="container-fluid p-3 mt-5" id="part6">
                <h1 className="mb-3">Experimental design and future perspectives</h1>
                <ol>
                  <li><b>FRET Assays:</b> Conduct FRET assays using purified proteins. Each genetically modified bacteria will be exposed to different concentrations of cadmium, rifampicin, and ibuprofen. The FRET signal intensity will be measured using a fluorescence spectrometer, with the expectations that the signal will increase in proportion to the contaminants concentration. This step will help establish a relationship between contaminant levels and FRET response.</li>
                  <li><b>Concentration-Response and Specificity:</b> After obtaining FRET signal data, concentration response curve will be constructed for each contaminant. This involves plotting the FRET signal intensity against the logarithm of the concentration to identify the sensitivity and detection limits of the system.</li>
                  <li><b>Purification of the constructs:</b> After optimization of overexpression, obtaining the purified fusion construct is essential to ensure proper detection and for further developments, including the development of a commercially viable sensing device.</li>
                </ol>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/plan-experimental-2024.png" style={{width: '80%'}}></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center" id="foot-note">
                      <p>Figure 20. Experimental design and future perspectives.</p>
                    </div>
              </div>
              <div className="container-fluid p-3 mt-5" id="part7">
                <h1 className="mb-3">References</h1>
                <div className="row">
                  <div className="col-12 col-md-1"></div>
                  <div className="col-12 col-md-11">
                    <div className="references-container">
                      <p>[1] Mishra, S., Kumar, R., & Kumar, M. (2023). Use of treated sewage or wastewater as an irrigation water for agricultural purposes- Environmental, health, and economic impacts. Total Environment Research Themes, 6, 100051. https://doi.org/10.1016/j.totert.2023.100051</p>
                      <p>[2] Sun, Y., Rombola, C., Jyothikumar, V., & Periasamy, A. (2013). Förster resonance energy transfer microscopy and spectroscopy for localizing protein-protein interactions in living cells. Cytometry Part A, 83(9), 780-793. https://doi.org/10.1002/cyto.a.22321</p>
                      <p>[3] Wondimeneh Dubale Adane, Bhagwan Singh Chandravanshi, Getachew, N., & Tessema, M. (2024). A cutting-edge electrochemical sensing platform for the simultaneous determination of the residues of antimicrobial drugs, rifampicin and norfloxacin, in water samples. Analytica Chimica Acta, 1312, 342746-342746. https://doi.org/10.1016/j.aca.2024.342746</p>
                      <p>[4] Hoshino, Y., Fujii, S., Hideki Shinonaga, Arai, K., Saito, F., Fukai, T., Hiroyuki Satoh, Miyazaki, Y., & Ishikawa, J. (2009). Monooxygenation of rifampicin catalyzed by the rox gene product of Nocardia farcinica: structure elucidation, gene identification and role in drug resistance. The Journal of Antibiotics, 63(1), 23-28. https://doi.org/10.1038/ja.2009.116</p>
                      <p>[5] Batool, F., Hussain, M. I., Nazar, S., Bashir, H., Khan, Z. I., Ahmad, K., Alnuwaiser, M. A., & Yang, H.-H. (2023). Potential of sewage irrigation for heavy metal contamination in soil-wheat grain system: Ecological risk and environmental fate. Agricultural Water Management, 278, 108144. https://doi.org/10.1016/j.agwat.2023.108144</p>
                      <p>[6] Rezapour, S., Atashpaz, B., Moghaddam, S. S., Kalavrouziotis, I. K., & Damalas, C. A. (2019). Cadmium accumulation, translocation factor, and health risk potential in a wastewater-irrigated soil-wheat (Triticum aestivum L.) system. Chemosphere, 231, 579-587. https://doi.org/10.1016/j.chemosphere.2019.05.095</p>
                      <p>[7] Alhaj Hamoud, Y., Shaghaleh, H., Zia-ur-Rehman, M., Rizwan, M., Umair, M., Usman, M., Ayub, M. A., Riaz, U., Alnusairi, G. S. H., & Alghanem, S. M. S. (2024). Cadmium and lead accumulation in important food crops due to wastewater irrigation: Pollution index and health risks assessment. Heliyon, 10(3), e24712. https://doi.org/10.1016/j.heliyon.2024.e24712</p>
                      <p>[8] Liu, L. K., Dai, Y., Abdelwahab, H., Sobrado, P., & Tanner, J. J. (2018). Structural Evidence for Rifampicin Monooxygenase Inactivating Rifampicin by Cleaving Its Ansa-Bridge. Biochemistry, 57(14), 2065-2068. https://doi.org/10.1021/acs.biochem.8b00190</p>
                      <p>[9] Mizuno, T., Sonoda, T., Horie, K., Senoo, K., & Tanaka, A. (2011, November 22). Cloning and characterization of phytochelatin synthase from a Nickel hyperaccumulator Thlaspi japonicum and its expression in yeast. Soil Science and Plant Nutrition. https://www.tandfonline.com/doi/full/10.1080/00380768.2003.10410009</p>
                      <p>[10] Jan-Roblero, J., & Cruz-Maya, J. A. (2023). Ibuprofen: Toxicology and Biodegradation of an Emerging Contaminant. Molecules (Basel, Switzerland), 28(5), 2097. https://doi.org/10.3390/molecules28052097</p>
                      <p>[11] Murdoch, R. W., & Hay, A. G. (2013). Genetic and chemical characterization of ibuprofen degradation by Sphingomonas Ibu-2. Microbiology (Reading, England), 159(Pt 3), 621-632. https://doi.org/10.1099/mic.0.062273-0</p>
                      <p>[12] Jumper, J., Evans, R., Pritzel, A., Green, T., Figurnov, M., Ronneberger, O., Tunyasuvunakool, K., Bates, R., Žídek, A., Potapenko, A., Bridgland, A., Meyer, C., Kohl, S. A. A., Ballard, A. J., Cowie, A., Romera-Paredes, B., Nikolov, S., Jain, R., Adler, J., … Hassabis, D. (2021). Highly accurate protein structure prediction with AlphaFold. Nature, 596(7873), 583-589. https://doi.org/10.1038/s41586-021-03819-2</p>
                      <p>[13] Sekar, R. B., & Periasamy, A. (2003). Fluorescence resonance energy transfer (FRET) microscopy imaging of live cell protein localizations. The Journal of Cell Biology, 160(5), 629-633. https://doi.org/10.1083/jcb.200210140</p>
                      <p>[14] Gibson, D. G., Young, L., Chuang, R.-Y., Venter, J. C., Hutchison, C. A., & Smith, H. O. (2009). Enzymatic assembly of DNA molecules up to several hundred kilobases. Nature Methods, 6(5), 343-345. https://doi.org/10.1038/nmeth.1318</p>
                      <p>[15] Gomes, L., Monteiro, G., & Mergulhão, F. (2020). The Impact of IPTG Induction on Plasmid Stability and Heterologous Protein Expression by Escherichia coli Biofilms. International Journal of Molecular Sciences, 21(2), 576. https://doi.org/10.3390/ijms21020576</p>
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
