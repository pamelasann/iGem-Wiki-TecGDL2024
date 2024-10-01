import React from "react";
import Sidebar from "./Sidebar";

export function Experiments() {
  return (
    <div className="container page">
      <div className="blend"></div>
      <div className="row">
        <div className="col-lg-3 col-md-12 pt-5 ps-5" id="menu-container">
          <Sidebar
            items={[
              {
                mainPart: { title: "Project Setup", id: "project-setup" },
                subParts: [
                  { title: "Protocol", id: "protocol" },
                  { title: "Miniprep", id: "miniprep" },
                  { title: "QIAGEN QIAprep Spin kit", id: "qiagen-spin-kit" },
                  { title: "Promega Wizard SV kit", id: "promega-kit" },
                ],
              },
              {
                mainPart: { title: "DNA Manipulation", id: "dna-manipulation" },
                subParts: [
                  { title: "Restriction Digestion", id: "restriction-digestion" },
                  { title: "PCR", id: "pcr" },
                  { title: "DreamTaq polymerase", id: "dreamtaq-polymerase" },
                  { title: "GoTaq Green Master Mix", id: "gotag-green-master-mix" },
                  { title: "Gel Extraction", id: "gel-extraction" },
                  { title: "Ligation", id: "ligation" },
                  { title: "Gibson Assembly", id: "gibson-assembly" },
                ],
              },
              {
                mainPart: { title: "Transformation and Cells", id: "transformation-cells" },
                subParts: [
                  { title: "Transformation", id: "transformation" },
                  { title: "Electroporation", id: "electroporation" },
                  { title: "Heat Shock", id: "heat-shock" },
                  { title: "Cells", id: "cells" },
                  { title: "Electrocompetent cells", id: "electrocompetent-cells" },
                  { title: "Chemically competent cells", id: "chemically-competent-cells" },
                ],
              },
              {
                mainPart: { title: "Protein Analysis", id: "protein-analysis" },
                subParts: [
                  { title: "Fluorescent Protein Washes", id: "fluorescent-protein-washes" },
                  { title: "Induction and SDS-PAGE Gel Electrophoresis", id: "induction-sds-page" },
                ],
              },
              {
                mainPart: { title: "Quality Control", id: "quality-control" },
                subParts: [
                  { title: "Agarose Gel Electrophoresis", id: "agarose-gel-electrophoresis" },
                  { title: "PCR Purification", id: "pcr-purification" },
                  { title: "Colony PCR", id: "colony-pcr" },
                ],
              },
            ]}
          />
        </div>
        <div className="col-lg-9 col-md-12">
          <section className="parts-container">
            {/* Add your content here */}
          </section>
        </div>
      </div>
    </div>
  );
}
