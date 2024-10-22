import { useState } from "react";

const link = document.createElement("link");
link.rel = "stylesheet";
document.head.appendChild(link);

function Switch({ setTheme }) {
  const [selected, setSelected] = useState("one"); // State to track the selected button

  const handleChange = (event) => {
    setSelected(event.target.id); // Update state with the id of the selected button
    setTheme(event.target.id);
  };

  return (
    <div className="switch">
      <span className="theme">THEME</span>
      <div>
        <span className="switch-numbers">1 2 3</span>
        <div className="switch-container">
          <input
            onClick={handleChange}
            className="button"
            type="radio"
            name="toggle"
            id="one"
            style={{ opacity: selected === "one" ? "1" : "0" }}
          />
          <input
            onClick={handleChange}
            className="button"
            type="radio"
            name="toggle"
            id="two"
            style={{ opacity: selected === "two" ? "1" : "0" }}
          />
          <input
            onClick={handleChange}
            className="button"
            type="radio"
            name="toggle"
            id="three"
            style={{ opacity: selected === "three" ? "1" : "0" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Switch;
