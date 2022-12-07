import "./workbreakdown.css";
import { data } from "./data";
import { useState } from "preact/hooks";
import { Triangle } from "../svgs";

export const WorkBreakdown = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div id="workbreakdownpage">
        <div class="tri">
          <>
            {data.map((item, i) => {
              return (
                <div
                  class="triangleSectionContainer"
                  onMouseEnter={() => setActive(i)}
                  // onMouseLeave={() => setActive(null)}
                >
                  <Triangle id={i} className="triangle" />
                  <div class="centered">{item.title}</div>
                </div>
              );
            })}
          </>
        </div>
        <div class="text">
          <div
            style={{ fontSize: "2em", fontWeight: "700", marginBottom: "1em" }}
          >
            Description
          </div>
          {data.map((item, i) => {
            return (
              <>
                {i === active && (
                  <div class="wbtextcontainer">
                    <b>{item.textHeader}</b>
                    {item.text}
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div class="img">
          <div
            style={{ fontSize: "2em", fontWeight: "700", marginBottom: "1em" }}
          >
            Examples:
            <div>
              {data.map((item, i) => {
                return (
                  <>
                    {i === active && (
                      <div class="wbtextcontainer">
                        <b>{item.textHeader}</b>
                        {item.text}
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
