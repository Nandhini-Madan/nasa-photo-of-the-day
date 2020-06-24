import React from "react";
import "./App.css";
import Photolist from "./componts/Photolist";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Photolist/>
    </div>
  );
}

export default App;
