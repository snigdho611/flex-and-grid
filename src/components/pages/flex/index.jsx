import { useState } from "react";
import { Rectangle } from "../../atoms/polygon";
import "./index.css";

const Flex = () => {
  const [flexDirection, setFlexDirection] = useState({ flexDirection: "row" })
  const [flexWrap, setFlexWrap] = useState({ flexDirection: "row", flexWrap: "wrap" })
  const [flexFlow, setFlexFlow] = useState({ flexDirection: "row", flexWrap: "wrap" })

  return (
    <div className="flex_main">
      <h2 className="flex_main_header">Flex Direction</h2>
      <div className="flex_main_input" style={{
        display: "flex",
      }}>
        <input
          type="radio"
          name="flex-direction-direction"
          value={"row"}
          checked={flexDirection.flexDirection === "row"}
          onChange={(e) => setFlexDirection((prevState) => ({ ...prevState, flexDirection: e.target.value }))}
        /> row;
        <input
          type="radio"
          name="flex-direction-direction"
          value={"column"}
          checked={flexDirection.flexDirection === "column"}
          onChange={(e) => setFlexDirection((prevState) => ({ ...prevState, flexDirection: e.target.value }))}
        /> column;
        <input
          type="radio"
          name="flex-direction-direction"
          value="row-reverse"
          checked={flexDirection.flexDirection === "row-reverse"}
          onChange={(e) => setFlexDirection((prevState) => ({ ...prevState, flexDirection: e.target.value }))}
        /> row-reverse;k
        <input
          type="radio"
          name="flex-direction-direction"
          value={"column-reverse"}
          checked={flexDirection.flexDirection === "column-reverse"}
          onChange={(e) => setFlexDirection((prevState) => ({ ...prevState, flexDirection: e.target.value }))}
        /> column-reverse;
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        outline: "1px solid lime",
        fontSize: "0.75rem",
        boxSizing: "border-box",
        padding: "0.5rem",
      }}>
        <span>&#123;</span>
        <span>

          <span style={{ fontStyle: "italic", fontWeight: "bold" }}>&nbsp;&nbsp;&nbsp;&nbsp;display: </span>
          <span style={{ color: "cyan" }}>flex</span>;
        </span>
        <span>
          <span style={{ fontStyle: "italic", fontWeight: "bold" }}>&nbsp;&nbsp;&nbsp;&nbsp;flex-direction: </span>
          <span style={{ color: "cyan" }}>{flexDirection.flexDirection}</span>;
        </span>
        <span>&#125;</span>
      </div>
      <div
        className="flex_main_output"
        style={{
          flexDirection: flexDirection.flexDirection,
        }}
      >
        <Rectangle width={"200px"} height={"35px"} text={1} />
        <Rectangle width={"200px"} height={"35px"} text={2} />
        <Rectangle width={"200px"} height={"35px"} text={3} />
      </div>


      {/* FLEX WRAP */}
      <h2 className="flex_main_header">Flex Wrap</h2>
      <div className="flex_main_input" style={{
        display: "flex",
      }}>
        <span>Flex Wrap: </span>
        <input
          type="radio"
          name="flex-wrap-wrap"
          value={"wrap"}
          checked={flexWrap.flexWrap === "wrap"}
          onChange={(e) => setFlexWrap((prevState) => ({ ...prevState, flexWrap: e.target.value }))}
        /> wrap;
        <input
          type="radio"
          name="flex-wrap-wrap"
          value={"nowrap"}
          checked={flexWrap.flexWrap === "nowrap"}
          onChange={(e) => setFlexWrap((prevState) => ({ ...prevState, flexWrap: e.target.value }))}
        /> nowrap;
        <input
          type="radio"
          name="flex-wrap-wrap"
          value={"wrap-reverse"}
          checked={flexWrap.flexWrap === "wrap-reverse"}
          onChange={(e) => setFlexWrap((prevState) => ({ ...prevState, flexWrap: e.target.value }))}
        /> wrap-reverse;
      </div>
      <div className="flex_main_input" style={{
        display: "flex",
      }}>
        <span>Flex Direction: </span>
        <input
          type="radio"
          name="flex-wrap-direction"
          value={"row"}
          checked={flexWrap.flexDirection === "row"}
          onChange={(e) => setFlexWrap((prevState) => ({ ...prevState, flexDirection: e.target.value }))}
        /> row;
        <input
          type="radio"
          name="flex-wrap-direction"
          value={"column"}
          checked={flexWrap.flexDirection === "column"}
          onChange={(e) => setFlexWrap((prevState) => ({ ...prevState, flexDirection: e.target.value }))}
        /> column;
        <input
          type="radio"
          name="flex-wrap-direction"
          value="row-reverse"
          checked={flexWrap.flexDirection === "row-reverse"}
          onChange={(e) => setFlexWrap((prevState) => ({ ...prevState, flexDirection: e.target.value }))}
        /> row-reverse;
        <input
          type="radio"
          name="flex-wrap-direction"
          value={"column-reverse"}
          checked={flexWrap.flexDirection === "column-reverse"}
          onChange={(e) => setFlexWrap((prevState) => ({ ...prevState, flexDirection: e.target.value }))}
        /> column-reverse;
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        outline: "1px solid lime",
        fontSize: "0.75rem",
        boxSizing: "border-box",
        padding: "0.5rem",
        // width: "25%",
        // whiteSpace: "balance"
      }}>
        <span>&#123;</span>
        <span>
          <span style={{ fontStyle: "italic", fontWeight: "bold" }}>&nbsp;&nbsp;&nbsp;&nbsp;display: </span>
          <span style={{ color: "cyan" }}>flex</span>;
        </span>
        <span>
          <span style={{ fontStyle: "italic", fontWeight: "bold" }}>&nbsp;&nbsp;&nbsp;&nbsp;flex-direction: </span>
          <span style={{ color: "cyan" }}>{flexWrap.flexDirection}</span>;
        </span>
        <span>
          <span style={{ fontStyle: "italic", fontWeight: "bold" }}>&nbsp;&nbsp;&nbsp;&nbsp;flex-wrap: </span>
          <span style={{ color: "cyan" }}>{flexWrap.flexDirection}</span>;
        </span>
        <span>&#125;</span>
      </div>
      <div
        className="flex_main_output"
        style={{
          flexDirection: flexWrap.flexDirection,
          flexWrap: flexWrap.flexWrap
        }}
      >
        <Rectangle width={"200px"} height={"35px"} text={1} />
        <Rectangle width={"200px"} height={"35px"} text={2} />
        <Rectangle width={"200px"} height={"35px"} text={3} />
        <Rectangle width={"200px"} height={"35px"} text={4} />
        <Rectangle width={"200px"} height={"35px"} text={5} />
        <Rectangle width={"200px"} height={"35px"} text={6} />
      </div>

      {/* FLEX FLOW */}
      <h2 className="flex_main_header">Flex Wrap</h2>
      <div className="flex_main_input" style={{
        display: "flex",
      }}>
        <span>Flex Wrap: </span>
        <input
          type="radio"
          name="flex-flow-wrap"
          value={"wrap"}
          checked={flexFlow.flexWrap === "wrap"}
          onChange={(e) => setFlexFlow((prevState) => ({ ...prevState, flexWrap: e.target.value }))}
        /> wrap;
        <input
          type="radio"
          name="flex-flow-wrap"
          value={"nowrap"}
          checked={flexFlow.flexWrap === "nowrap"}
          onChange={(e) => setFlexFlow((prevState) => ({ ...prevState, flexWrap: e.target.value }))}
        /> nowrap;
        <input
          type="radio"
          name="flex-flow-wrap"
          value={"wrap-reverse"}
          checked={flexFlow.flexWrap === "wrap-reverse"}
          onChange={(e) => setFlexFlow((prevState) => ({ ...prevState, flexWrap: e.target.value }))}
        /> wrap-reverse;
      </div>
      <div className="flex_main_input" style={{
        display: "flex",
      }}>
        <span>Flex Direction: </span>
        <input
          type="radio"
          name="flex-flow-direction"
          value={"row"}
          checked={flexFlow.flexDirection === "row"}
          onChange={(e) => setFlexFlow((prevState) => ({ ...prevState, flexDirection: e.target.value }))}
        /> row;
        <input
          type="radio"
          name="flex-flow-direction"
          value={"column"}
          checked={flexFlow.flexDirection === "column"}
          onChange={(e) => setFlexFlow((prevState) => ({ ...prevState, flexDirection: e.target.value }))}
        /> column;
        <input
          type="radio"
          name="flex-flow-direction"
          value="row-reverse"
          checked={flexFlow.flexDirection === "row-reverse"}
          onChange={(e) => setFlexFlow((prevState) => ({ ...prevState, flexDirection: e.target.value }))}
        /> row-reverse;
        <input
          type="radio"
          name="flex-flow-direction"
          value={"column-reverse"}
          checked={flexFlow.flexDirection === "column-reverse"}
          onChange={(e) => setFlexFlow((prevState) => ({ ...prevState, flexDirection: e.target.value }))}
        /> column-reverse;
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        outline: "1px solid lime",
        fontSize: "0.75rem",
        boxSizing: "border-box",
        padding: "0.5rem",
        // width: "25%",
        // whiteSpace: "balance"
      }}>
        <span>&#123;</span>
        <span>
          <span style={{ fontStyle: "italic", fontWeight: "bold" }}>&nbsp;&nbsp;&nbsp;&nbsp;display: </span>
          <span style={{ color: "cyan" }}>flex</span>;
        </span>
        <span>
          <span style={{ fontStyle: "italic", fontWeight: "bold" }}>&nbsp;&nbsp;&nbsp;&nbsp;flex-flow: </span>
          <span style={{ color: "cyan" }}>{`${flexFlow.flexDirection} ${flexFlow.flexWrap}`}</span>;
        </span>
        {/* <span>
          <span style={{ fontStyle: "italic", fontWeight: "bold" }}>&nbsp;&nbsp;&nbsp;&nbsp;flex-wrap: </span>
          <span style={{ color: "cyan" }}>{flexWrap.flexWrap}</span>;
        </span> */}
        <span>&#125;</span>
      </div>
      <div
        className="flex_main_output"
        style={{
          flexFlow: `${flexFlow.flexDirection} ${flexFlow.flexWrap}`
        }}
      >
        <Rectangle width={"200px"} height={"35px"} text={1} />
        <Rectangle width={"200px"} height={"35px"} text={2} />
        <Rectangle width={"200px"} height={"35px"} text={3} />
        <Rectangle width={"200px"} height={"35px"} text={4} />
        <Rectangle width={"200px"} height={"35px"} text={5} />
        <Rectangle width={"200px"} height={"35px"} text={6} />
      </div>
    </div>
  );
};

export default Flex;
