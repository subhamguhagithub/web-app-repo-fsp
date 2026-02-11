import React from "react";
import ComponentC from "./ComponentC";

function ComponentB(props) {
  return (
    <div style={{ border: "1px solid green", padding: "12px", marginTop: "10px" }}>
      <h3>ComponentB</h3>

      <ComponentC
        name={props.name}
        roll={props.roll}
      />
    </div>
  );
}

export default ComponentB;
