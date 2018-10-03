import React from "react";
import { CreateGuitar, CreateMandolin, CreateBass, CreateBanjo } from './instrument.js'
let table = [];
let notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
let mode; // = major;
let input = 'minor';
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
            sevenu = 11;
            sevend = 1;
            break;
        case "dorian":
            mode = [1, 4, 6, 8, 11];
            thirdu = 3;
            thirdd = 9;
            sevenu = 10;
            sevend = 2;
            break;
        case "phrygian":
            mode = [2, 4, 6, 9, 11];
            thirdu = 3;
            thirdd = 9;
            sevenu = 10;
            sevend = 2;
            break;
        case "lydian":
            mode = [1, 3, 5, 8, 10];
            thirdu = 4;
            thirdd = 8;
            sevenu = 11;
            sevend = 1;
            break;
        case "mixolydian":
            mode = [1, 3, 6, 8, 11];
            thirdu = 4;
            thirdd = 8;
            sevenu = 10;
            sevend = 2;
            break;
        case "minor":
            mode = [1, 4, 6, 9, 11];
            thirdu = 3;
            thirdd = 9;
            sevenu = 10;
            sevend = 2;
            break;
        case "locrian":
            mode = [2, 4, 7, 9, 11];
            thirdu = 3;
            thirdd = 9;
            fifthu = 6;
            fifthd = 6;
            sevenu = 10;
            sevend = 2;
            break;
    }
}
getMode(input);

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
            mode: 'major',
            keySig: 'C',
            tune: null,
            instrument: null  
        };
    }
    keySig = this.props.keySig;
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
    setkeySig(keySig){
        this.setState({
            keySig: keySig
        })
    }
    setInstrument(instrument){
        this.setState({
            instrument: instrument
        })
    }

    createFretboard = () => {
        if(this.state.instrument === 'banjo'){
            return <CreateBanjo mode={this.state.mode} keySig={this.state.keySig} strings={this.state.strings} tune={this.state.tune} />
        }else if(this.state.instrument === "mandolin"){
            return <CreateMandolin mode={this.state.mode} keySig={this.state.keySig} strings={this.state.strings} tune={this.state.tune} />
        }else if(this.state.instrument === "bass"){
            return <CreateBass mode={this.state.mode} keySig={this.state.keySig} strings={this.state.strings} tune={this.state.tune} />
        }else{
            return <CreateGuitar mode={this.state.mode} keySig={this.state.keySig} strings={this.state.strings} tune={this.state.tune} />
        }
        
        // table.length = 0;
        // getMode(this.state.mode);
        // let degree = notes.indexOf(this.state.keySig);
        // createRow(4, "he", mode, tune, this.state.keySig, degree);
        // createRow(11, "hb", mode, tune,this.state.keySig, degree);
        // createRow(7, "g", mode, tune,this.state.keySig, degree);
        // createRow(2, "d", mode, tune,this.state.keySig, degree);
        // createRow(9, "a", mode, tune,this.state.keySig, degree);
        // createRow(4, "le", mode, tune,this.state.keySig, degree);
        // if (this.state.strings === 7 || this.state.strings === 8) {
        //     createRow(11, "lb", mode, tune, this.state.keySig, degree);
        // }
        // if (this.state.strings === 8) {
        //     createRow(6, "f#", mode, tune, this.state.keySig, degree);
        // }
        // return table;
    };

    render() {
        return (
            <div className="guitar-neck">
            <table className="keySig">
                    <tbody>
                        <tr>
                            <td className="root">Root</td>
                            <td className="third">Third</td>
                            <td className="fifth">Fifth</td>
                            <td className="seventh">Seventh</td>
                        </tr>
                    </tbody>
                </table>
                <table className="fretboard">
                    <tbody>{this.createFretboard()}</tbody>
                </table>

                <div className="center-div" >
                    <span className="label">Choose String Count: </span>
                    <Button className="strings" onClick={() => {this.setInstrument('guitar');this.setStringCount(6)}}>Guitar:6</Button>
                    <Button className="strings" onClick={() => this.setStringCount(7)}>Guitar:7</Button>
                    <Button className="strings" onClick={() => this.setStringCount(8)}>Guitar:8</Button>
                    <Button className="strings" onClick={() => this.setInstrument('mandolin')}>Mandolin</Button>
                    <Button className="strings" onClick={() => this.setInstrument('banjo')}>Banjo</Button>
                    <Button className="strings" onClick={() => {this.setInstrument('bass');this.setStringCount(4)}}>Bass:4</Button>
                    <Button className="strings" onClick={() => this.setStringCount(5)}>Bass:5</Button>
                    <Button className="strings" onClick={() => this.setStringCount(6)}>Bass:6</Button>
                </div>    
                <div className="center-div">
                    <span className="label">Choose A Mode: </span>
                    <Button className="modes" onClick={() => this.setMode('major')}>Major</Button>
                    <Button className="modes" onClick={() => this.setMode('dorian')}>Dorian</Button>
                    <Button className="modes" onClick={() => this.setMode('phrygian')}>Phrygian</Button>
                    <Button className="modes" onClick={() => this.setMode('lydian')}>Lydian</Button>
                    <Button className="modes" onClick={() => this.setMode('mixolydian')}>Mixolydian</Button>
                    <Button className="modes" onClick={() => this.setMode('minor')}>Minor</Button>
                    <Button className="modes" onClick={() => this.setMode('locrian')}>Locrian</Button>
                </div>
                <div className="center-div">
                    <span className="label">Choose A keySig: </span>
                    <Button className="keySigs"  onClick={() => this.setkeySig('A')}>A</Button>
                    <Button className="keySigs"  onClick={() => this.setkeySig('A#')}>A#/Bb#</Button>
                    <Button className="keySigs"  onClick={() => this.setkeySig('B')}>B</Button>
                    <Button className="keySigs"  onClick={() => this.setkeySig('C')}>C</Button>
                    <Button className="keySigs"  onClick={() => this.setkeySig('C#')}>C#/Db</Button>
                    <Button className="keySigs"  onClick={() => this.setkeySig('D')}>D</Button>
                    <Button className="keySigs"  onClick={() => this.setkeySig('D#')}>D#/Eb#</Button>
                    <Button className="keySigs"  onClick={() => this.setkeySig('E')}>E</Button>
                    <Button className="keySigs"  onClick={() => this.setkeySig('F')}>F</Button>
                    <Button className="keySigs"  onClick={() => this.setkeySig('F#')}>F#/Gb</Button>
                    <Button className="keySigs"  onClick={() => this.setkeySig('G')}>G</Button>
                    <Button className="keySigs"  onClick={() => this.setkeySig('G#')}>G#/Ab</Button>
                </div>
            </div>
        );
    }
}

export default Fretboard;
