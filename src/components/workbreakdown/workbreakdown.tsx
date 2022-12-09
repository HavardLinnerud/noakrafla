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
                  <Triangle
                    id={i}
                    className="triangle"
                    style={{
                      height: "fit-content",
                      width: `${(400 / 5) * (i + 1)}px`,
                    }}
                  />
                  <div class="centered">{item.title}</div>
                </div>
              );
            })}
          </>
        </div>
        <div class="text">
          <div
            style={{
              fontSize: "1.5em",
              fontWeight: "700",
              marginBottom: "1em",
            }}
          >
            Description:
          </div>
          {data.map((item, i) => {
            return (
              <>
                {i === active && (
                  <div class="wbtextcontainer">
                    <b>{item.textHeader}</b>
                    <span style={{ whiteSpace: "pre" }}>{item.text}</span>
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div class="">
          <div>
            <h2
              style={{
                fontSize: "1.5em",
                fontWeight: "700",
                marginTop: "0px",
              }}
            >
              Examples:
            </h2>
            <div>
              {data.map((item, i) => {
                return (
                  <>
                    {i === active && item.imgUrl && (
                      <div class="exampleImgContainer">
                        <b style={{ fontSize: "1.3em", marginBottom: "1em" }}>
                          {item.imgTitle}
                        </b>
                        <img
                          class="example-img"
                          src={`assets/${item.imgUrl}`}
                          alt=""
                        />
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
