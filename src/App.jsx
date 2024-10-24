import Switch from "./components/switch";
import { useEffect, useState, useReducer } from "react";
import "./App.css";

const link = document.createElement("link");
link.rel = "stylesheet";
document.head.appendChild(link);

const initialState = {
  screenValue: '0', // Start with 0 on the screen
};

function calculatorReducer(state, { type, payload }){
  switch (type) {
    case 'APPEND_DIGIT':
      console.log((state.screenValue + payload))
      // Append the digit unless the screenValue is just "0"
      return {
        ...state,
        screenValue: state.screenValue === '0' ? payload : Number((state.screenValue + payload).split(',').join("")).toLocaleString(),
      };
      default:
        return state;
    }
}

function App() {
  const [theme, setTheme] = useState("one");
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

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
      <div className="display" type="text">{state.screenValue}</div>
      <div className="grid-container">
        <button onClick={(e) =>  dispatch({ type: 'APPEND_DIGIT', payload: e.target.innerText })} className="grid-item">7</button>
        <button onClick={(e) =>  dispatch({ type: 'APPEND_DIGIT', payload: e.target.innerText })} className="grid-item">8</button>
        <button onClick={(e) =>  dispatch({ type: 'APPEND_DIGIT', payload: e.target.innerText })} className="grid-item">9</button>
        <button className="grid-item del">DEL</button>

        <button onClick={(e) =>  dispatch({ type: 'APPEND_DIGIT', payload: e.target.innerText })} className="grid-item">4</button>
        <button onClick={(e) =>  dispatch({ type: 'APPEND_DIGIT', payload: e.target.innerText })} className="grid-item">5</button>
        <button onClick={(e) =>  dispatch({ type: 'APPEND_DIGIT', payload: e.target.innerText })} className="grid-item">6</button>
        <button className="grid-item">+</button>

        <button onClick={(e) =>  dispatch({ type: 'APPEND_DIGIT', payload: e.target.innerText })} className="grid-item">1</button>
        <button onClick={(e) =>  dispatch({ type: 'APPEND_DIGIT', payload: e.target.innerText })} className="grid-item">2</button>
        <button onClick={(e) =>  dispatch({ type: 'APPEND_DIGIT', payload: e.target.innerText })} className="grid-item">3</button>
        <button className="grid-item">-</button>

        <button onClick={(e) =>  dispatch({ type: 'APPEND_DIGIT', payload: e.target.innerText })} className="grid-item">0</button>
        <button onClick={(e) =>  dispatch({ type: 'APPEND_DIGIT', payload: e.target.innerText })} className="grid-item">.</button>
        <button className="grid-item">/</button>
        <button className="grid-item">x</button>

        <button className="grid-item reset">RESET</button>
        <button className="grid-item equal">=</button>
      </div>
    </main>
  );
}

export default App;
