import "./statusdefinition.css";
import { texts } from "./definitions";
import { useEffect, useState } from "preact/hooks";

export const StatusDefinition = () => {
  const [active, setActive] = useState("S0");

  return (
    <>
      <div class="sdtitleContainer">
        {texts.map((item) => (
          <div
            class={`sdtitlecard ${item.id == active ? "active" : ""}`}
            onMouseEnter={() => setActive(item.id)}
          >
            <div class="sdtitleBox" style={`background-color:${item.color}`}>
              <div>{item.title}</div>
              <div> {item.id}</div>
            </div>
            <div class="sdtitlesecondary">
              <div>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {texts.map((item) => (
          <>
            {active === item.id && (
              <div
                class="wbtextcontainer sdtextcontainer"
                style={{ border: `2px solid ${item.color}5c` }}
              >
                <b style={{ marginBottom: "5px" }}>{item.textLabel}</b>
                {item.text}
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
};
