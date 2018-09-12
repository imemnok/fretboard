import React from "react";
let table = [];
//let key = "A";
let notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
//let degree = notes.indexOf(this.state.key);
let mode; // = major;
let input = 'minor';
let tune = 0;
let thirdu;
let thirdd;
let fifthu;
let fifthd;
let sevenu;
let sevend;

function getMode(input) {
    fifthu = 7;
    fifthd = 5;
    switch (input) {
        case "major":
            mode = [1, 3, 6, 8, 10];
            thirdu = 4;
            thirdd = 8;
            fifthu = 7;
            fifthd = 5;
            break;
        case "dorian":
            mode = [1, 4, 6, 8, 11];
            thirdu = 3;
            thirdd = 9;
            break;
        case "phrygian":
            mode = [2, 4, 6, 9, 11];
            thirdu = 3;
            thirdd = 9;
            break;
        case "lydian":
            mode = [1, 3, 5, 8, 10];
            thirdu = 4;
            thirdd = 8;
            break;
        case "mixolydian":
            mode = [1, 3, 6, 8, 11];
            thirdu = 4;
            thirdd = 8;
            break;
        case "minor":
            mode = [1, 4, 6, 9, 11];
            thirdu = 3;
            thirdd = 9;
            break;
        case "locrian":
            mode = [2, 4, 7, 9, 11];
            thirdu = 3;
            thirdd = 9;
            fifthu = 6;
            fifthd = 6;
            break;
    }
}
getMode(input);

console.log("Mode is " + mode);
function createRow(offset, rowName, mode, tune, key, degree) {
    let string = [];
    let scale = [];
    let rowCells = [];
    for (let i = 0; i < notes.length; i++) {
        let point = (i + offset + tune) % notes.length;
        string.push(notes[point]);
    }
    for (var i = 0; i < mode.length; i++) {
        var index = (mode[i] + degree) % string.length;
        scale.push(notes[index]);
    }
    for (let s in scale) {
        delete string[string.indexOf(scale[s])];
    }
    for (let i = 0; i < string.length; i++) {
        if (i === string.indexOf(key)) {
            rowCells.push(<td className="root">{string[i]}</td>);
        } else if (i === string.indexOf(key) + thirdu || i === string.indexOf(key) - thirdd) {
            rowCells.push(<td className="third">{string[i]}</td>);
        } else if (i === string.indexOf(key) + fifthu || i === string.indexOf(key) - fifthd) {
            rowCells.push(<td className="fifth">{string[i]}</td>);
        } else {
            rowCells.push(<td className={string[i]}>{string[i]}</td>);
        }
    }
    table.push(<tr className={rowName}>{rowCells}</tr>);
}

const Button = ({ onClick, className = "", children }) => (
    <button onClick={onClick} className={className} type="button">
        {children}
    </button>
);

export class Fretboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strings: 6,
            mode: null,
            tune: null,
            key: "A"
        };
    }
    key = this.props.key;
    setStringCount(count) {
        this.setState({
            strings: count
        });
    }
    setMode(mode) {
        this.setState({
            mode: mode
        });
    }
    setKey(key){
        this.setState({
            key: key
        })
    }

    createFretboard = () => {
        table.length = 0;
        getMode(this.state.mode);
        let degree = notes.indexOf(this.state.key);
        console.log("Key is " + this.state.key)

        //key = this.state.key;
        
        console.log("Key is " + this.state.key)

        createRow(4, "he", mode, tune, this.state.key, degree);
        createRow(11, "hb", mode, tune,this.state.key, degree);
        createRow(7, "g", mode, tune,this.state.key, degree);
        createRow(2, "d", mode, tune,this.state.key, degree);
        createRow(9, "a", mode, tune,this.state.key, degree);
        createRow(4, "le", mode, tune,this.state.key, degree);
        if (this.state.strings === 7 || this.state.strings === 8) {
            createRow(11, "lb", mode, tune, this.state.key, degree);
        }
        if (this.state.strings === 8) {
            createRow(6, "f#", mode, tune, this.state.key, degree);
        }
        return table;
    };

    render() {
        return (
            <div className="guitar-neck">
                <table className="fretboard">
                    <tbody>{this.createFretboard()}</tbody>
                </table>
                <div className="center-div">
                    <Button className="strings" onClick={() => this.setStringCount(6)}>6</Button>
                    <Button className="strings" onClick={() => this.setStringCount(7)}>7</Button>
                    <Button className="strings" onClick={() => this.setStringCount(8)}>8</Button>
                </div>    
                <div className="center-div">
                    <Button className="modes" onClick={() => this.setMode('major')}>Major</Button>
                    <Button className="modes" onClick={() => this.setMode('dorian')}>Dorian</Button>
                    <Button className="modes" onClick={() => this.setMode('phrygian')}>Phrygian</Button>
                    <Button className="modes" onClick={() => this.setMode('lydian')}>Lydian</Button>
                    <Button className="modes" onClick={() => this.setMode('mixolydian')}>Mixolydian</Button>
                    <Button className="modes" onClick={() => this.setMode('minor')}>Minor</Button>
                    <Button className="modes" onClick={() => this.setMode('locrian')}>Locrian</Button>
                </div>
                <div className="center-div">
                    <Button className="keys"  onClick={() => this.setKey('A')}>A</Button>
                    <Button className="keys"  onClick={() => this.setKey('A#')}>A#</Button>
                    <Button className="keys"  onClick={() => this.setKey('B')}>B</Button>
                    <Button className="keys"  onClick={() => this.setKey('C')}>C</Button>
                    <Button className="keys"  onClick={() => this.setKey('C#')}>C#</Button>
                    <Button className="keys"  onClick={() => this.setKey('D')}>D</Button>
                    <Button className="keys"  onClick={() => this.setKey('D#')}>D#</Button>
                    <Button className="keys"  onClick={() => this.setKey('E')}>E</Button>
                    <Button className="keys"  onClick={() => this.setKey('F')}>F</Button>
                    <Button className="keys"  onClick={() => this.setKey('F#')}>F#</Button>
                    <Button className="keys"  onClick={() => this.setKey('G')}>G</Button>
                    <Button className="keys"  onClick={() => this.setKey('G#')}>G#</Button>
                </div>
            </div>
        );
    }
}

export default Fretboard;
