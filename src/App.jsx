import Switch from "./components/switch";
import { useEffect, useState } from "react";
import "./App.css";

const link = document.createElement("link");
link.rel = "stylesheet";
document.head.appendChild(link);

function App() {
  const [theme, setTheme] = useState("one");

  useEffect(() => {
    const loadThemeCSS = () => {
      switch (theme) {
        case "one":
          link.href = "./src/themes/theme1.css";
          break;
        case "two":
          link.href = "./src//themes/theme2.css";
          break;
        case "three":
          link.href = "./src/themes/theme3.css";
          break;
        default:
          link.href = "./src/theme1.css";
      }
    };
    loadThemeCSS();
  }, [theme]);

  return (
    <main id="calculator">
      <div className="top">
        <h1>calc</h1>
        <Switch setTheme={setTheme} />
      </div>
      <div className="display" type="text"></div>
      <div className="grid-container">
        <div className="grid-item">7</div>
        <div className="grid-item">8</div>
        <div className="grid-item">9</div>
        <div className="grid-item del">DEL</div>

        <div className="grid-item">4</div>
        <div className="grid-item">5</div>
        <div className="grid-item">6</div>
        <div className="grid-item">+</div>

        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">-</div>

        <div className="grid-item">0</div>
        <div className="grid-item">.</div>
        <div className="grid-item">/</div>
        <div className="grid-item">x</div>

        <div className="grid-item reset">RESET</div>
        <div className="grid-item equal">=</div>
      </div>
    </main>
  );
}

export default App;
