import "./App.css";
import React, { useState } from "react";

function App() {
  const words = ["word1", "word2", "word3"];
  const [state, setState] = useState(0);

  function next() {
    setState(state + 1 >= words.length ? 0 : state + 1);
  }

  return (
    <div className="bigparent">
      <div className="parent">
        <div className="1">
          <h1 className={`${state === 0 ? "background" : ""}`}>1</h1>
          {state === 0 && <p>Random content for tab1</p>}
        </div>

        <div className="2">
          <h1 className={`${state === 1 ? "background" : ""}`}>2</h1>
          {state === 1 && <p>Random content for tab2</p>}
        </div>

        <div className="3">
          <h1 className={`${state === 2 ? "background" : ""}`}>3</h1>
          {state === 2 && <p>Random content for tab3</p>}
        </div>
      </div>
        <button className="button" onClick={next}>
          next
        </button>
    </div>
  );
}

export default App;
