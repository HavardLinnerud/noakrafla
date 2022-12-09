import { useState } from "preact/hooks";
import "./DifferenceSQL.css";

const DifferenceSQL = () => {
  const [active, setActive] = useState("status");
  return (
    <>
      <div class="buttonContainer">
        <button
          class={`customButton status ${
            active === "status" ? "activeButton" : ""
          }`}
          onClick={() => setActive("status")}
        >
          status
        </button>
        <button
          class={`customButton ql ${
            active === "quality" ? "activeButton" : ""
          }`}
          onClick={() => setActive("quality")}
        >
          Quality Level
        </button>
      </div>

      {active === "status" && (
        <div class="mainContainer">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              class=""
              src="assets/statushevinger.png"
              alt=""
              style={{
                maxWidth: "600px",
                background: "white",
                padding: "12px",
              }}
            />
            <ul>
              <li>Statusheving er en intern prosess (4 ganger pr objekt)</li>
              <li>
                Egenkontroll (EK) og sidemannskontroll (SK) pa kontrollobjekter
              </li>
              <li>Kvalitetssikring av 3D-modellen</li>
              <li>Intern progresjonskontroll, ingen leveranse mot kunde</li>
            </ul>
          </div>
          <h1>Foreslått prosess for statusheving</h1>
          <img
            class="img"
            src="assets/statuscal.png"
            alt=""
            style={{ maxWidth: "800px" }}
          />
          <ul>
            <li>
              Den som modellerer kontrollobjektet gjør egenkontroll (vha
              sjekklister) og ser til at sidemannskontroll blir utført i tide
            </li>
            <li>
              Disiplinledere er ansvarlig for at alle sjekklister er utført til
              dato i planen og er ansvarlig for at status deretter oppdateres på
              kontrollobjektene.
            </li>
            <li>
              Objektleder er overordnet ansvarlig for at prosessen fungerer og
              er i tide.
            </li>
            <li>
              Datoer for statushevingene styres av milepæler i den interne
              prosjektplanen.
            </li>
            <li>
              Fremdrift måles på samlet status til alle kontrollobjektene.
            </li>
          </ul>
          <img
            class="img"
            src="assets/statuschart.png"
            alt=""
            style={{ maxWidth: "800px" }}
          />
        </div>
      )}
      {active === "quality" && (
        <div class="mainContainer">
          <img
            class="img"
            src="assets/qgraph1.png"
            alt=""
            style={{ width: "80%", background: "white", padding: "8px" }}
          />
          <ul>
            <li>
              Stegutsjekk er en ekstern prosess («Fot i bakken mot kunde»), 4
              ganger for prosjektet
            </li>
            <li>
              Samkjører progresjon for alle involverte parter, ikke bare MU.
            </li>
            <li>
              Kunden avgjør om partene går videre til neste kvalitetsnivå eller
              ikke.
            </li>
          </ul>
          <h1>Foreslått prosess for stegutsjekk </h1>
          <ul>
            <li>
              Kvalitetsleder er ansvarlig for å samle materiale i forkant av
              stegutsjekken i en rapport, støttet av objektledere.
            </li>
            <li>
              Rapporten inneholder status for objektene og eventuelle uavklarte
              forhold i modellen
            </li>
            <li>
              Stegutsjekken ledes av kunde og det er kunde som vedtar heving av
              kvalitetsnivået (eventuelt med hold- punkter).
            </li>
            <li>
              Kunde kan utsette heving av kvalitetsnivå om parter ikke har
              oppnådd nødvendig modenhet.
            </li>
            <li>
              Datoer for stegutsjekk styres av milepæler i kontrakten med kunden
            </li>
          </ul>
          <img
            class="img"
            src="assets/qlchart.png"
            alt=""
            style={{ width: "800px" }}
          />
        </div>
      )}
    </>
  );
};

export default DifferenceSQL;
