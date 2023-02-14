"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chords = exports.getAllChords = exports.chordsShapes = void 0;
const Chord_1 = require("./entities/Chord");
const ChordSkeleton_1 = require("./entities/ChordSkeleton");
const intervals_1 = require("./intervals");
const notes_1 = require("./notes");
const basicChordShapes = {
    major: new ChordSkeleton_1.ChordSkeleton("", [
        intervals_1.intervals.root,
        intervals_1.intervals.major_third,
        intervals_1.intervals.perfect_fifth,
    ]),
    minor: new ChordSkeleton_1.ChordSkeleton("m", [
        intervals_1.intervals.root,
        intervals_1.intervals.minor_third,
        intervals_1.intervals.perfect_fifth,
    ]),
    diminished: new ChordSkeleton_1.ChordSkeleton("o", [
        intervals_1.intervals.root,
        intervals_1.intervals.minor_third,
        intervals_1.intervals.diminished_seventh,
    ]),
    augmentedFifth: new ChordSkeleton_1.ChordSkeleton("#5", [
        intervals_1.intervals.root,
        intervals_1.intervals.major_third,
        intervals_1.intervals.augmented_fifth,
    ]),
};
const extendedChordShapes = {
    dominant: new ChordSkeleton_1.ChordSkeleton("5", [
        ...basicChordShapes.major.shape,
        intervals_1.intervals.minor_seventh,
    ]),
    diminishedSeventh: new ChordSkeleton_1.ChordSkeleton("°", [
        ...basicChordShapes.diminished.shape,
        intervals_1.intervals.diminished_seventh,
    ]),
    halfDiminished: new ChordSkeleton_1.ChordSkeleton("ø", [
        ...basicChordShapes.diminished.shape,
        intervals_1.intervals.minor_seventh,
    ]),
    majorSeventh: new ChordSkeleton_1.ChordSkeleton("M7", [
        ...basicChordShapes.major.shape,
        intervals_1.intervals.major_seventh,
    ]),
    augmentedMajorSeventh: new ChordSkeleton_1.ChordSkeleton("M7#5", [
        ...basicChordShapes.augmentedFifth.shape,
        intervals_1.intervals.major_seventh,
    ]),
    minorSeventh: new ChordSkeleton_1.ChordSkeleton("m7", [
        ...basicChordShapes.minor.shape,
        intervals_1.intervals.minor_seventh,
    ]),
};
const suspendedChordShapes = {
    sus2: new ChordSkeleton_1.ChordSkeleton("sus2", [
        intervals_1.intervals.root,
        intervals_1.intervals.major_second,
        intervals_1.intervals.perfect_fifth,
    ]),
    sus4: new ChordSkeleton_1.ChordSkeleton("sus4", [
        intervals_1.intervals.root,
        intervals_1.intervals.perfect_fourth,
        intervals_1.intervals.perfect_fifth,
    ]),
};
exports.chordsShapes = Object.assign(Object.assign(Object.assign({}, basicChordShapes), extendedChordShapes), suspendedChordShapes);
function getAllChords() {
    const chords = {};
    for (let i = 0; i < notes_1.notes.length; i++) {
        const note = notes_1.notes[i];
        chords[note.name] = {};
        for (const chordName in exports.chordsShapes) {
            const chordShape = exports.chordsShapes[chordName];
            const chord = new Chord_1.Chord(note, chordShape);
            chords[note.name][chord.name] = chord;
        }
    }
    return chords;
}
exports.getAllChords = getAllChords;
exports.chords = getAllChords();
