import "./phasesandsteps.css";
import { useState } from "preact/hooks";
import { data, items } from "./data";

export const PhasesAndSteps = () => {
  const [active, setActive] = useState(items[3]);
  const matchIndexToColumn = (i) => {
    return i == 0
      ? null
      : i == 1
      ? setActive(items[3])
      : i == 6
      ? setActive(items[5])
      : setActive(items[4]);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div class="titleContainer">
        {items.map((item, i) => (
          <div style="display:flex; position:relative ">
            <div
              className={`titleBox ${
                active.title === item.title ? "activeTitleBox" : ""
              }`}
              onMouseOver={() => {
                setActive(items[i]);
              }}
            >
              {item.title.toUpperCase()}
            </div>
            <>
              {i != items.length - 1 && (
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 409 396"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="arrowIcon"
                >
                  <path
                    d="M408.097 198.006L0.853703 395.027L95.546 198.006L0.853703 0.985321L408.097 198.006Z"
                    fill="black"
                  />
                </svg>
              )}
            </>
          </div>
        ))}
      </div>
      <table className="table">
        <thead>
          <tr>
            {data.headers.map((item, i) => (
              <td
                style={{ position: "relative" }}
                className={`headerCell ${
                  i === 0
                    ? "rowLabel"
                    : active.columns.includes(i)
                    ? "active"
                    : ""
                }`}
              >
                <div className="tableHeaderText">{item.title}</div>
                {item.flag && <div class="tableHeaderFlag">{item.flag}</div>}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {data.r1.map((item, i) => (
              <td
                onMouseOver={() => {
                  matchIndexToColumn(i);
                }}
                className={`${
                  i === 0
                    ? "rowLabel"
                    : active.columns.includes(i)
                    ? "activeCol"
                    : ""
                }`}
              >
                {item}
              </td>
            ))}
          </tr>
          <tr>
            {data.r2.map((item, i) => (
              <td
                onMouseOver={() => {
                  matchIndexToColumn(i);
                }}
                className={`${
                  i === 0
                    ? "rowLabel"
                    : active.columns.includes(i)
                    ? "activeCol"
                    : ""
                }`}
              >
                {item}
              </td>
            ))}
          </tr>
          <tr>
            {data.r3.map((item, i) => (
              <td
                onMouseOver={() => {
                  matchIndexToColumn(i);
                }}
                className={`${
                  i === 0
                    ? "rowLabel"
                    : active.columns.includes(i)
                    ? "activeCol"
                    : ""
                }`}
              >
                {item}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <img src="assets/stepsgraph.png" alt="" class="img1" />
    </div>
  );
};
