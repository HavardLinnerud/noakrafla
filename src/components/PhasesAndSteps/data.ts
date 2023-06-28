export const data = {
  headers: [
    { title: "Steps", flag: "" },
    { title: "Pre Execution (FEED Verification)", flag: "DG3" },
    { title: "Design basis & briefs established", flag: "QL1" },
    { title: "Main Layout/Structure Frozen", flag: "QL2" },
    { title: "Detail Design Frozen", flag: "QL3" },
    { title: "Detail Design Complete", flag: "QL4" },
    { title: "As built & Follow-on", flag: "QL5" },
  ],
  r1: [
    `Startproduct`,
    `Contract (VO) 
     FEED report
     Definition of Reference Case#4 (incl Functional Requirements & Design Basis)
     Contract Strategy
     Execution Plan
     SOW definition (e.g. Statnett)
     Agreed PEM
     LCI requirements - tools and collaboration platform defined
     Interface register`,
    `Pre Execution deliverables
    Konsesjonsvilkår
    First draft construction method from Company
    Clients DG3`,
    `Final Construction method from Company
    Final survey information laser scans geo etc.
    First supplier information from Company
    QL1 Design`,
    `Final supplier information from Company
    QL2 Design`,
    `QL3 Design`,
    `QL4 Design
    Red line markup
    Digital measurement from construction`,
  ],
  r2: [
    `Engineering main objectives`,
    `Civil Design Basis update
        HOLD release & Further work from FEED - update documentation based on Reference Case#4 (technical&economical impact)
        Prepare ITT acc to Contract Strategy (Civil 1 Årskog)
        Technical support to MTA plan (FA AkerBP)
        Maturing execution phase`,
    `Verification of Pre execution and optimization finalized
        All start products described in design basis and design methods described in design briefes
        Constructability method established based on first construction method from Company
        Establish QA and environmental plan`,
    `Freeze the overal layout HV line
        Ensure HSE and Environmental plan included in design
        Establish discipline/object responsibility matrix`,
    `Inter discipline control and clash check
        All interfaces between disciplines frozen
        Design between all control objects frozen
        Multidiscipline design reviews`,
    `Design within all conrol objects frozen
        All internal interfaces within discipline frozen
        Drawing production
        Third party review`,
    `Follow-on engineering
        Prepare as-built documentation`,
  ],
  r3: [
    `Deliverables`,
    `	Civil Design Basis
    Amendment to FEED acc to Reference Case #4
    Input to ITT (BoQ acc to NS3420 and ITT dwgs based on FEED dwgs) for Civil 1 Årskog
    Detail engineering plan Level x`,
    `Design basis and Design briefes
    QA-plan established
    Draft Environmental plan
    Modelling all control objects to QL1`,
    `Environmental plan to NVE
    Technical plan to NVE
    ROS-analyse
    Modelling all control objects to QL2
    Input to procurement/tender documents of Civil Contractor
    Draft BoQ`,
    `Modelling all control objects to QL3
    Authority applications filed
    Input to procurement/tender documents of Civil Contractor (Flyttes til QL2) Draft BoQ (flyttes til QL2)`,
    `Modelling all control objects to QL4
    Detail design models and drawings Issued for Construction (IFC)
    Final BoQ`,
    `Modelling all control objects to QL5
    Digital twin
    As-built documentation
    Input to FDV`,
  ],
};

export const items = [
  { title: "feasibility", columns: [] },
  { title: "concept", columns: [] },
  { title: "feed", columns: [] },
  { title: "pre-execution", columns: [1] },
  { title: "detail engineering", columns: [2, 3, 4, 5] },
  { title: "construction", columns: [6] },
  { title: "operation", columns: [] },
  { title: "decommissioning", columns: [] },
];