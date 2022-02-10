import './Common.css';
import "./ClickToEdit.css";
import React, { useState } from 'react';

function ClickToEdit() {
  const body = document.querySelector("body");
  const [inputName, setInputName] = useState();
  const [inputAge, setInputAge] = useState();

  const mousedownBodyEvent = (event) => {
    const target = event.target;
    const nameInput = document.querySelector("#name").value;
    const ageInput = document.querySelector("#age").value;
    
    if (target === event.currentTarget.querySelector("#name") || 
        target === event.currentTarget.querySelector("#age")) {
      return;
    } 
    setInputName(nameInput);
    setInputAge(ageInput);
  };

  body.addEventListener('mousedown', mousedownBodyEvent);

  return (
    <div className="clickToEdit">
      <section className="title">
        <h1>Click To Edit</h1>
      </section>
      <section className="border-box">
        <section>
          <label htmlFor="name" id="name-label">이름</label>
          <input type="text" id="name"></input>
        </section>
        <section>
          <label htmlFor="age" id="age-label">나이</label>
          <input type="text" id="age"></input>
        </section>
        <section>
          <p>이름 { inputName } 나이 {inputAge}</p>
        </section>
      </section>
    </div>
  );
}

export default ClickToEdit;