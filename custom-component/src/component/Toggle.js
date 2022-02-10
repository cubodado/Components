import './Common.css';
import "./Toggle.css"
import React, { useState } from "react";

function Toggle() {
  const [checkState, setCheckState] = useState(false);
  const [checkStateStr, setCheckStateStr] = useState("Off");

  const onChangeCheckState = () => {
    if (checkState === false) {
      setCheckState(true);
      setCheckStateStr("On");
    } else {
      setCheckState(false);
      setCheckStateStr("Off");
    }
  };

  return (
    <div className="toggle">
      <section className="title">
        <h1>Toggle</h1>
      </section>
      <section className="border-box">
        <input type="checkbox" id="check-toggle" onChange={ onChangeCheckState }></input>
        <label id="check-label" htmlFor="check-toggle">
        </label>
        <p>Toggle Switch { checkStateStr }</p>
      </section>
    </div>
  );
}

export default Toggle;