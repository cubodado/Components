import "./Toggle.css"

function Toggle() {
  return (
    <div className="Toggle">
      <h1>Toggle</h1>
      <input type="checkbox" id="check"></input>
      <label htmlFor="check">Button</label>
    </div>
  );
}

export default Toggle;