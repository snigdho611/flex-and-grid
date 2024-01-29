import { useState } from "react";
import { Rectangle, Square } from "../../atoms/polygon";
import "./index.css";

const Flex = () => {
  const [direction, setDirection] = useState("row")
  return (
    <div className="flex_main">
      <h2 className="flex_main_header">Flex Direction</h2>
      <div className="flex_main_input" style={{
        display: "flex",
        // flexDirection: "column"
      }}>
        <input
          type="radio"
          name="flex"
          id="row"
          value={direction}
          checked={direction === "row" ?? false}
          onChange={(e) => setDirection(e.target.id)}
        /> row;
        <input
          type="radio"
          name="flex"
          id="column"
          value={direction}
          checked={direction === "column" ?? false}
          onChange={(e) => setDirection(e.target.id)}
        /> column;
        <input
          type="radio"
          name="flex"
          id="row-reverse"
          value={direction}
          checked={direction === "row-reverse" ?? false}
          onChange={(e) => setDirection(e.target.id)}
        /> row-reverse;
        <input
          type="radio"
          name="flex"
          id="column-reverse"
          value={direction}
          checked={direction === "column-reverse" ?? false}
          onChange={(e) => setDirection(e.target.id)}
        /> column-reverse;
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        outline: "1px solid lime",
        fontSize: "0.75rem",
        boxSizing: "border-box",
        padding: "0.5rem",
        width: "25%"
      }}>
        <span>&#123;</span>
        <span>

          <span style={{ fontStyle: "italic", fontWeight: "bold" }}>&nbsp;&nbsp;&nbsp;&nbsp;display: </span>
          <span style={{ color: "cyan" }}>flex</span>;
        </span>
        <span>
          <span style={{ fontStyle: "italic", fontWeight: "bold" }}>&nbsp;&nbsp;&nbsp;&nbsp;flex-direction: </span>
          <span style={{ color: "cyan" }}>{direction}</span>;
        </span>
        <span>&#125;</span>
      </div>
      <div
        className="flex_main_output"
        style={{
          flexDirection: direction,
        }}
      >
        <Rectangle width={"33%"} text={1} />
        <Rectangle width={"33%"} text={2} />
        <Rectangle width={"33%"} text={3} />
      </div>
    </div>
  );
};

export default Flex;
