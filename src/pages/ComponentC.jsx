import React from "react";

function ComponentC(props) {
  return (
    <div style={{ border: "1px solid blue", padding: "12px", marginTop: "10px" }}>
      <h3>ComponentC</h3>

      <p>
        <strong>Name:</strong> {props.name}
      </p>

      <p>
        <strong>Roll:</strong> {props.roll}
      </p>
    </div>
  );
}

export default ComponentC;
