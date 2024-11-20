import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <div>{"I am a lost div with erronous code " + 1}</div>
        </a>

        <div>
          <p> I am a bug!</p>
          <div dangerouslySetInnerHTML={{__html: '<p>First &middot; Second</p>'}}></div>
        </div>
      </header>
    </div>
  );
}

export default App;
