export const data = [
  {
    title: "0 Phase",
    textHeader: "0. Phase:",
    text: ` is the scopes maturity in Client’s execution model (total
  project). The scope consists of Detail Design in Clients execution
  phase.`,
    imgUrl: "phase.png",
  },
  {
    title: "1 Main Object",
    textHeader: "1. Main Object:",
    text: ` is as a geographical part of the scope. We have defined
  three area types Buildings, Transmission and Infrastructure. Detail
  Design consists of 11 Main Objects. The Main Objects are connected to
  CTRs (Cost Time Resource)`,
    imgUrl: "mainobject.png",
  },
  {
    title: "2 Main Discipline",
    textHeader: "2. Main Discipline:",
    text: ` is responsible for a collection of control objects
  The Main Objects consists of the following Main Disciplines: -Electro HV
  cables and Earthing -EIT Building -Siteprep and Earthworks -Roads
  -Landscape -W&S -Structural Contrete -Structural Steel -Telecom
  -Architect -HVAC The Main Disciplines shall have a defined interface
  toward other Main Disciplines. The Main Disciplines shall have unique
  numbering in the WBS. Discipline leads is responsible for defining
  control objects and check lists within discipline.`,
    imgUrl: "maindisc.png",
  },
  {
    title: "3 Control object",
    textHeader: "3. Control object:",
    text: ` Geometrical shape and information carriers through
  Detail Design Consists of several modelling objects. This is the level
  where Status is planned and monitored. The Main Disciplines consists of
  several control objects. -The Control Objects shall have a defined
  interface towards other control objects -The Control Object shall have a
  unique numbering in WBS -Status (S1-S4) defined by check lists, -Mapped
  to level 5 control object schedule for schedule follow-up -Mapped to
  Civil Construction PO/Contracts -Mapped to Contractors Work Packages
  -Mapped to BoQ/Cost WBS -Mapped to Climate Budget (klimabudsjett)
  -Mapped to deliverables list for at latest at status $4 for control
  objects -The natural level to perform Design Check and Approvals -Approx
  the same level as a DD-drawing`,
    imgUrl: "controlobj.png",
  },
  {
    title: "4 Model object",
    textHeader: "4. Model object:",
    text: ` is the lowest level of modelled shapes in the 3D model.
  Can be picked from libraries or created directly in 3D model. Control
  objects often consist of several model objects. Status ($1-S4) is not
  set on model object level, but on control object level.`,
    imgUrl: "mainobject.png",
  },
];
