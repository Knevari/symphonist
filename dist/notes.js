"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notes = exports.getNoteIndex = exports.getNote = void 0;
const Note_1 = require("./entities/Note");
function getNote(name) {
    return exports.notes.find((note) => note.name === name || note.alternative === name);
}
exports.getNote = getNote;
function getNoteIndex(name) {
    return exports.notes.findIndex((note) => note.name === name || note.alternative === name);
}
exports.getNoteIndex = getNoteIndex;
exports.notes = [
    new Note_1.Note("A", "A#b"),
    new Note_1.Note("A#", "Bb"),
    new Note_1.Note("B", "Cb"),
    new Note_1.Note("C", "C#b"),
    new Note_1.Note("C#", "Db"),
    new Note_1.Note("D", "D#b"),
    new Note_1.Note("D#", "Eb"),
    new Note_1.Note("E", "Fb"),
    new Note_1.Note("F", "F#b"),
    new Note_1.Note("F#", "Gb"),
    new Note_1.Note("G", "G#b"),
    new Note_1.Note("G#", "Ab"),
];
