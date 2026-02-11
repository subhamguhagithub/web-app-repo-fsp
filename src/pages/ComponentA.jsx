import React from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
  const name = "Shubham";
  const roll = 101;

  return (
    <div style={{ border: "1px solid red", padding: "12px" }}>
      <h2>ComponentA</h2>

      <ComponentB
        name={name}
        roll={roll}
      />
    </div>
  );
}

export default ComponentA;
