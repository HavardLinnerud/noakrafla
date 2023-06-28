export const data = [
  {
    title: "0. Fase",
    textHeader: "0. Fase:",
    text: `
    Er ofte prosjektmodenheten i kundens gjennomføringsplan. 
    Eksempelvis konseptfase, detaljprosjektering osv.`,
    imgUrl: "phase.png",
    imgTitle: "0. Fase: Detaljprosjektering",
  },
  {
    title: "1 Objekt",
    textHeader: "1. Objekt:",
    text: `
    Øverste del av PNSen din. Gjerne geografisk- eller funksjons-avgrenset. Eksempelvis
    en strekning, tunnel, bygning, stasjon etc. Hvert objekt skal ha egen
    organisasjonsplan, KTR, budsjett og objektleder.

    Eksempel:
    -05. Årskog kompensasjons stasjon
    -06. Årskog Statcom bygning
    -07. Årskog TCSC bygning
    osv..`,
    imgUrl: "mainobject.png",
    hoverImgUrl: "Objektplan.png",
    imgTitle: "1. Objekt: 05. Årskog kompensasjons stasjon",
  },
  {
    title: "2 Disiplin",
    textHeader: "2. Disiplin:",
    text: `
    Er nivået under objekt. Enhver disiplin har ansvar for underliggende styrinsobjekter.
    Disiplinlederne er ansvarlig for å gjennomføre jevnlige tverrfaglige kontroller og 
    påse at tilliggende disipliner er koordinert og samkjørt. 
    Skal ha sin egen PNS kode som går igjen på tvers av 1. Objektene.

  -05.06. RIVeg på Årskog kompensasjons stasjon
  -05.09. Arktitekt på Årskog kompensasjons stasjon
  -07.09. Arkitekt på Årskog TCSC bygning
  -07.13. Jording på Arskog TCSC bygning

  Kan også bruke RI.. som en del av koden.

  -05.RIVeg. Veg på Årskog kompensasjons stasjon
  -07.ARK. Arkitekt på Årskog TCSC bygning

  Disiplinledere skal i samråd med objektledere definere styringsobjekter. 
  De skal utarbeide sjekklister og påse at de fylles ut ved MMI-heving. `,
    imgUrl: "maindisc.png",
    imgTitle: "2. Disiplin: 05.06 Årskog kompensasjons stasjon RIVeg",
  },
  {
    title: "3 Styringsobjekt",
    textHeader: "3. Styringsobjekt:",
    text: `
    Geometrisk form og informasjonsbærer. Dette er nivået hvor MMI status
    er planlagt og målt. Det er grupperte modellobjekter som skal inneholde metadata 
    definert i BIM-manualen. Informasjonsinnholdet øker i takt med MMI-nivået. 

    -05.06.084 Asfaltert veg
    -05.06.083 Intern veg

  - Grensesnitt mellom styringsobjekt skal defineres. 
  - Styringsobjektet skal ha en unik PNS-kode i modellen.
  - MMI (MMI100-MMI500) nivåene skal defineres i sjekklistene 
  - Styringsobjekter skal inn i en Stryingsobjektplan (COS)
  - knyttet til arbeidspakker/leveransepakker
  - Tag-nummer for beskrivelse
  - Knyttet til klimabudsjett?`,
    imgUrl: "controlobj.png",
    imgTitle: "3. Stryingsobjekt: 05.06.84 Asfaltert veg",
  },
  {
    title: "4 Modell objekt",
    textHeader: "4. Modell objekt:",
    text: `
    Er det laveste nivået av modellerte former i BIMen. Kan plukkes fra biblioteker
    eller opprettes direkte i modellen. Styringsobjekter består ofte av flere modell
    objekter. MMI-statuser er ikke satt på objekter på dette nivået
    
    -05.06.084.120 Rekkverk
    -05.06,084.121 Slitelag
    -05.06.084.122 Bærelag`,
    imgUrl:"Modelobj.png",
    imgTitle: "4. Modell objekt: 05.06.84.120 (Eks. rekkverk)",
  },
];
