export const data = [
  {
    title: "0. Fase",
    textHeader: "0. Fase:",
    text: ` Er ofte prosjektmodenheten i kundens gjennomføringsplan. eksempelvis konseptfase, detaljprosjekter osv.`,
    imgUrl: "phase.png",
    imgTitle: "0. Fase:",
  },
  {
    title: "1 Objekt",
    textHeader: "1. Objekt:",
    text: ` Øverste del av PNSen din. Gjerne geografisk- eller funksjons-avgrenset. Eksempelvis en strekning, tunnel, bygning, stasjon etc. Hvert objekt
    skal ha egen organisasjonsplan, KTR, budsjett  og objektleder.
    -00. Stasjonsbygg Øst
    -01. Stasjonsbygg Nord
    -02. Strekning...`,
    imgUrl: "mainobject.png",
    imgTitle: "1. Objekt: Eks. Børdalen Transformasjons stasjon",
  },
  {
    title: "2 Disiplin",
    textHeader: "2. Disiplin:",
    text: ` Er nivået under objekt. Enhver disiplin har ansvar for underliggende styrinsobjekter. Disiplinlederne er ansvarlig for å gjennomføre jevnlige
    tverrfaglige kontroller og påse at tilliggende disipliner er koordinert og samkjørt. Skal ha sin egen PNS kode som går igjen på tvers av 1. Objektene.
  -00.00. Objektleder Stasjonsbygg Øst
  -01.00. Objektleder Stasjonsbygg Nord
  -02.03. Elektro på strekning...

  Disiplinledere skal i samråd med objektledere definere styringsobjekter. De skal utarbeide sjekklister og påse at de fylles ut ved MMI-heving. `,
    imgUrl: "maindisc.png",
    imgTitle: "2. Disiplin: Eks. Arkitekt",
  },
  {
    title: "3 Control object",
    textHeader: "3. Control object:",
    text: ` Geometrical shape and information carriers through
  Detail Design Consists of several modelling objects. This is the level
  where Status is planned and monitored. The Main Disciplines consists of
  several control objects. 
  -The Control Objects shall have a defined
  interface towards other control objects 
  -The Control Object shall have a unique numbering in WBS 
  -Status (S1-S4) defined by check lists, 
  -Mapped to level 5 control object schedule for schedule follow-up 
  -Mapped to Civil Construction PO/Contracts 
  -Mapped to Contractors Work Packages
  -Mapped to BoQ/Cost WBS 
  -Mapped to Climate Budget (klimabudsjett)
  -Mapped to deliverables list for at latest at status $4 for control objects 
  -The natural level to perform Design Check and Approvals 
  -Approx the same level as a DD-drawing`,
    imgUrl: "controlobj.png",
    imgTitle: "3. Control object: Architectural Wall",
  },
  {
    title: "4 Model object",
    textHeader: "4. Model object:",
    text: ` is the lowest level of modelled shapes in the 3D model.
  Can be picked from libraries or created directly in 3D model. Control
  objects often consist of several model objects. Status ($1-S4) is not
  set on model object level, but on control object level.`,
  },
];
