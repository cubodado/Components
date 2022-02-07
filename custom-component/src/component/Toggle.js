import "./Toggle.css"
import React, { useState } from "react";

function Toggle() {
  const [checkStateStr, setCheckStateStr] = useState("Off");
  let checkState = false;

  const onChangeCheckState = () => {
    checkState = !checkState;

    if (checkState === true) {
      setCheckStateStr("On");
    } else {
      setCheckStateStr("Off");
    }
  };

  return (
    <div className="Toggle">
      <h1>Toggle</h1>
      <input type="checkbox" id="check-toggle" onChange={ onChangeCheckState }></input>
      <label htmlFor="check-toggle">
      </label>
      <p>Toggle Switch { checkStateStr }</p>
    </div>
  );
}

export default Toggle;