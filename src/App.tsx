import React from "react";
import logo from "./assets/LEARNDECK.svg";
import Hero from "./components/heroimage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hero />
      </header>
    </div>
  );
}

export default App;
