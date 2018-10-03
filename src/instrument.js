import React from "react";

let table = [];
let notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
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

function createRow(offset, rowName, mode, tune, keySig, degree) {
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
        if (i === string.indexOf(keySig)) {
            rowCells.push(<td key={Math.random()} className="root">{string[i]}</td>);
        } else if (i === string.indexOf(keySig) + thirdu || i === string.indexOf(keySig) - thirdd) {
            rowCells.push(<td key={Math.random()} className="third">{string[i]}</td>);
        } else if (i === string.indexOf(keySig) + fifthu || i === string.indexOf(keySig) - fifthd) {
            rowCells.push(<td key={Math.random()} className="fifth">{string[i]}</td>);
        } else if (i === string.indexOf(keySig) + sevenu || i === string.indexOf(keySig) - sevend) {
            
            rowCells.push(<td key={Math.random()} className="seventh">{string[i]}</td>);
        } else {
            rowCells.push(<td key={Math.random()} className={string[i]}>{string[i]}</td>);
        }
    }
    table.push(<tr key={Math.random()} className={rowName}>{rowCells}</tr>);
}

export const CreateGuitar= (props) => {
    table.length = 0;
    getMode(props.mode);
    let degree = notes.indexOf(props.keySig);
    createRow(4, "he", mode, tune, props.keySig, degree);
    createRow(11, "hb", mode, tune,props.keySig, degree);
    createRow(7, "g", mode, tune,props.keySig, degree);
    createRow(2, "d", mode, tune,props.keySig, degree);
    createRow(9, "a", mode, tune,props.keySig, degree);
    createRow(4, "le", mode, tune,props.keySig, degree);
    console.log(props.strings)
    if (props.strings === 7 || props.strings === 8) {
        createRow(11, "lb", mode, tune, props.keySig, degree);
    }
    if (props.strings === 8) {
        createRow(6, "f#", mode, tune, props.keySig, degree);
    }
    return table;
}

export const CreateMandolin = (props) => {
    table.length = 0;
    getMode(props.mode);
    let degree = notes.indexOf(props.keySig);
    createRow(4, "he", mode, tune, props.keySig, degree);
    createRow(9, "a", mode, tune,props.keySig, degree);
    createRow(2, "d", mode, tune,props.keySig, degree);
    createRow(7, "g", mode, tune,props.keySig, degree);
    
    return table;
}

export const CreateBanjo = (props) => {
    table.length = 0;
    getMode(props.mode);
    let degree = notes.indexOf(props.keySig);
    createRow(2, "hd", mode, tune, props.keySig, degree);
    createRow(11, "hb", mode, tune,props.keySig, degree);
    createRow(7, "g", mode, tune,props.keySig, degree);
    createRow(2, "d", mode, tune,props.keySig, degree);
    createRow(7, "lg", mode, tune,props.keySig, degree);
    return table;
}

export const CreateBass = (props) => {
    table.length = 0;
    getMode(props.mode);
    let degree = notes.indexOf(props.keySig);
    createRow(7, "g", mode, tune,props.keySig, degree);
    createRow(2, "d", mode, tune,props.keySig, degree);
    createRow(9, "a", mode, tune,props.keySig, degree);
    createRow(4, "le", mode, tune,props.keySig, degree);
    console.log(props.strings)
    if (props.strings === 5 || props.strings === 6) {
        createRow(11, "lb", mode, tune, props.keySig, degree);
    }
    if (props.strings === 6) {
        createRow(6, "f#", mode, tune, props.keySig, degree);
    }
    return table;
}

// export default instrument;