import React, { Component } from "react";
import "./App.css";
const strings = 7;
const notes = {
  e: ["E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb"],
  b: ["B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb"],
  g: ["G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb"],
  d: ["D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db"],
  a: ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"]
};
let tableRowE = [];
let tableRowB = [];
//let tableRowF = [];

class App extends Component {
  createFretboard = () => {
    let table = [];
    for (let key in notes) {
      let children = [];
      let note = notes[key];
      for (let j = 0; j < note.length; j++) {
        console.log(note[j])
        if (j === 0) {
          children.push(<td className={"fret0"}>{note[j]}</td>);
        } else {
          children.push(<td className={"fret"}>{note[j]}</td>);
        }
      }
      table.push(<tr className="string">{children}</tr>);
    }
    for (let note in notes.e) {
      tableRowE.push(<td className={"fret"}>{notes.e[note]}</td>);
    }
    table.push(<tr className="string">{tableRowE}</tr>);
    if (strings === 7) {
      for (let note in notes.b) {
        tableRowB.push(<td className={"fret"}>{notes.b[note]}</td>);
      }
      table.push(<tr className="string">{tableRowB}</tr>);
    }
    return table;
  };

  render() {
    return (
      <div className="guitar-neck">
        <table className="fretboard">
          <tbody>{this.createFretboard()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
