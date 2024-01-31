import { useState } from "react";
import { Rectangle } from "../../atoms/polygon";
import "./index.css";

const Flex = () => {
  const [flexDirection, setFlexDirection] = useState({ flexDirection: "row" })
  const [flexWrap, setFlexWrap] = useState({ flexDirection: "row", flexWrap: "wrap" })
  const [flexFlow, setFlexFlow] = useState({ flexDirection: "row", flexWrap: "wrap" })
  const [justifyContent, setJustifyContent] = useState({ flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start" })

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
        /> row-reverse;
        <input
          type="radio"
          name="flex-direction-direction"
          value={"column-reverse"}
          checked={flexDirection.flexDirection === "column-reverse"}
          onChange={(e) => setFlexDirection((prevState) => ({ ...prevState, flexDirection: e.target.value }))}
        /> column-reverse;
      </div>
      <div className="flex_main_codeblock">
        <span>&#123;</span>
        <span>
          <span className="flex_main_codeblock_property">&nbsp;&nbsp;&nbsp;&nbsp;display: </span>
          <span className="flex_main_codeblock_value">flex</span>;
        </span>
        <span>
          <span className="flex_main_codeblock_property">&nbsp;&nbsp;&nbsp;&nbsp;flex-direction: </span>
          <span className="flex_main_codeblock_value">{flexDirection.flexDirection}</span>;
        </span>
        <span>&#125;</span>
      </div>
      <div
        className="flex_main_output"
        style={{
          flexDirection: flexDirection.flexDirection,
        }}
      >
        {Array(4).fill(0).map((element, i) => {
          return <Rectangle key={i} text={i + 1} />

        })}
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
      <div className="flex_main_codeblock">
        <span>&#123;</span>
        <span>
          <span className="flex_main_codeblock_property">&nbsp;&nbsp;&nbsp;&nbsp;display: </span>
          <span className="flex_main_codeblock_value">flex</span>;
        </span>
        <span>
          <span className="flex_main_codeblock_property">&nbsp;&nbsp;&nbsp;&nbsp;flex-direction: </span>
          <span className="flex_main_codeblock_value">{flexWrap.flexDirection}</span>;
        </span>
        <span>
          <span className="flex_main_codeblock_property">&nbsp;&nbsp;&nbsp;&nbsp;flex-wrap: </span>
          <span className="flex_main_codeblock_value">{flexWrap.flexDirection}</span>;
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
        <Rectangle text={1} />
        <Rectangle text={2} />
        <Rectangle text={3} />
        <Rectangle text={4} />
        <Rectangle text={5} />
        <Rectangle text={6} />
      </div>

      {/* FLEX FLOW */}
      <h2 className="flex_main_header">Flex Flow</h2>
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
      <div className="flex_main_codeblock">
        <span>&#123;</span>
        <span>
          <span className="flex_main_codeblock_property">&nbsp;&nbsp;&nbsp;&nbsp;display: </span>
          <span className="flex_main_codeblock_value">flex</span>;
        </span>
        <span>
          <span className="flex_main_codeblock_property">&nbsp;&nbsp;&nbsp;&nbsp;flex-flow: </span>
          <span className="flex_main_codeblock_value">{`${flexFlow.flexDirection} ${flexFlow.flexWrap}`}</span>;
        </span>
        <span>&#125;</span>
      </div>
      <div
        className="flex_main_output"
        style={{
          flexFlow: `${flexFlow.flexDirection} ${flexFlow.flexWrap}`
        }}
      >
        <Rectangle text={1} />
        <Rectangle text={2} />
        <Rectangle text={3} />
        <Rectangle text={4} />
        <Rectangle text={5} />
        <Rectangle text={6} />
      </div>

      {/* JUSTIFY CONTENT */}
      <h2 className="flex_main_header">Justify Content</h2>
      {/* <div className="flex_main_input" style={{
        display: "flex",
      }}>
        <span>Flex Wrap: </span>
        <input
          type="radio"
          name="justify-content-wrap"
          value={"wrap"}
          checked={justifyContent.flexWrap === "wrap"}
          onChange={(e) => setJustifyContent((prevState) => ({ ...prevState, flexWrap: e.target.value }))}
        /> wrap;
        <input
          type="radio"
          name="justify-content-wrap"
          value={"nowrap"}
          checked={justifyContent.flexWrap === "nowrap"}
          onChange={(e) => setJustifyContent((prevState) => ({ ...prevState, flexWrap: e.target.value }))}
        /> nowrap;
        <input
          type="radio"
          name="justify-content-wrap"
          value={"wrap-reverse"}
          checked={justifyContent.flexWrap === "wrap-reverse"}
          onChange={(e) => setJustifyContent((prevState) => ({ ...prevState, flexWrap: e.target.value }))}
        /> wrap-reverse;
      </div> */}
      <div className="flex_main_input" style={{
        display: "flex",
        flexWrap: "wrap"
      }}>
        <span>Justify Content: </span>
        <span style={{ display: "grid", gridTemplate: "1.5rem 1.5rem 1.5rem 1.5rem / 33% 33% 33%", width: "100%" }}>
          <span>
            <input
              type="radio"
              name="justify-content-justify-content"
              value={"start"}
              checked={justifyContent.justifyContent === "start"}
              onChange={(e) => setJustifyContent((prevState) => ({ ...prevState, justifyContent: e.target.value }))}
            /> start;
          </span>
          <span>

            <input
              type="radio"
              name="justify-content-justify-content"
              value={"end"}
              checked={justifyContent.justifyContent === "end"}
              onChange={(e) => setJustifyContent((prevState) => ({ ...prevState, justifyContent: e.target.value }))}
            /> end;
          </span>
          <span>

            <input
              type="radio"
              name="justify-content-justify-content"
              value="flex-start"
              checked={justifyContent.justifyContent === "flex-start"}
              onChange={(e) => setJustifyContent((prevState) => ({ ...prevState, justifyContent: e.target.value }))}
            /> flex-start;
          </span>
          <span>

            <input
              type="radio"
              name="justify-content-justify-content"
              value={"flex-end"}
              checked={justifyContent.justifyContent === "flex-end"}
              onChange={(e) => setJustifyContent((prevState) => ({ ...prevState, justifyContent: e.target.value }))}
            /> flex-end;
          </span>
          <span>

            <input
              type="radio"
              name="justify-content-justify-content"
              value={"center"}
              checked={justifyContent.justifyContent === "center"}
              onChange={(e) => setJustifyContent((prevState) => ({ ...prevState, justifyContent: e.target.value }))}
            /> center;
          </span>
          <span>

            <input
              type="radio"
              name="justify-content-justify-content"
              value={"left"}
              checked={justifyContent.justifyContent === "left"}
              onChange={(e) => setJustifyContent((prevState) => ({ ...prevState, justifyContent: e.target.value }))}
            /> left;
          </span>
          <span>

            <input
              type="radio"
              name="justify-content-justify-content"
              value={"right"}
              checked={justifyContent.justifyContent === "right"}
              onChange={(e) => setJustifyContent((prevState) => ({ ...prevState, justifyContent: e.target.value }))}
            /> right;
          </span>
          <span>

            <input
              type="radio"
              name="justify-content-justify-content"
              value={"space-between"}
              checked={justifyContent.justifyContent === "space-between"}
              onChange={(e) => setJustifyContent((prevState) => ({ ...prevState, justifyContent: e.target.value }))}
            /> space-between;
          </span>
          <span>

            <input
              type="radio"
              name="justify-content-justify-content"
              value={"space-around"}
              checked={justifyContent.justifyContent === "space-around"}
              onChange={(e) => setJustifyContent((prevState) => ({ ...prevState, justifyContent: e.target.value }))}
            /> space-around;
          </span>
          <span>

            <input
              type="radio"
              name="justify-content-justify-content"
              value={"space-evenly"}
              checked={justifyContent.justifyContent === "space-evenly"}
              onChange={(e) => setJustifyContent((prevState) => ({ ...prevState, justifyContent: e.target.value }))}
            /> space-evenly;
          </span>
        </span>
        {/* <input
          type="radio"
          name="justify-content-justify-content"
          value={"safe"}
          checked={justifyContent.justifyContent === "safe"}
          onChange={(e) => setJustifyContent((prevState) => ({ ...prevState, justifyContent: e.target.value }))}
        /> safe; */}
      </div>
      <div className="flex_main_codeblock">
        <span>&#123;</span>
        <span>
          <span className="flex_main_codeblock_property">&nbsp;&nbsp;&nbsp;&nbsp;display: </span>
          <span className="flex_main_codeblock_value">flex</span>;
        </span>
        <span>
          <span className="flex_main_codeblock_property">&nbsp;&nbsp;&nbsp;&nbsp;justify-content: </span>
          <span className="flex_main_codeblock_value">{`${justifyContent.justifyContent}`}</span>;
        </span>
        <span>&#125;</span>
      </div>
      <div
        className="flex_main_output"
        style={{
          // flexFlow: `${flexFlow.flexDirection} ${flexFlow.flexWrap}`
          justifyContent: justifyContent.justifyContent
        }}
      >
        <Rectangle text={1} />
        <Rectangle text={2} />
        <Rectangle text={3} />
        <Rectangle text={4} />
        {/* <Rectangle text={5} />
        <Rectangle text={6} /> */}
      </div>
    </div>
  );
};

export default Flex;
