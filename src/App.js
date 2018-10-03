import React, { Component } from "react";
import "./App.css";
import { Fretboard } from './fretboard.js'

class App extends Component {
  render() {

    return (
      <div>
      <div>
        <h1 className="Title">Guitar Mode Visualizer</h1>
      </div>
      <div>
        <Fretboard />
      </div>
      
      </div>
    );
  }
}

export default App;
