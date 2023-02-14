"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keys = exports.getAllKeys = exports.getMelodicMinorKey = exports.getHarmonicMinorKey = exports.getMinorKey = exports.getMajorKey = exports.getKey = exports.keyShapes = void 0;
const Note_1 = require("./entities/Note");
const Chord_1 = require("./entities/Chord");
const notes_1 = require("./notes");
const scales_1 = require("./scales");
const chords_1 = require("./chords");
exports.keyShapes = {
    major: [
        chords_1.chordsShapes.majorSeventh,
        chords_1.chordsShapes.minorSeventh,
        chords_1.chordsShapes.minorSeventh,
        chords_1.chordsShapes.majorSeventh,
        chords_1.chordsShapes.dominant,
        chords_1.chordsShapes.minorSeventh,
        chords_1.chordsShapes.diminishedSeventh,
    ],
    minor: [
        chords_1.chordsShapes.minorSeventh,
        chords_1.chordsShapes.diminishedSeventh,
        chords_1.chordsShapes.majorSeventh,
        chords_1.chordsShapes.minorSeventh,
        chords_1.chordsShapes.minorSeventh,
        chords_1.chordsShapes.majorSeventh,
        chords_1.chordsShapes.dominant,
    ],
    harmonicMinor: [
        chords_1.chordsShapes.majorSeventh,
        chords_1.chordsShapes.diminished,
        chords_1.chordsShapes.augmentedMajorSeventh,
        chords_1.chordsShapes.minorSeventh,
        chords_1.chordsShapes.dominant,
        chords_1.chordsShapes.majorSeventh,
        chords_1.chordsShapes.diminished,
    ],
    melodicMinor: [
        chords_1.chordsShapes.majorSeventh,
        chords_1.chordsShapes.minorSeventh,
        chords_1.chordsShapes.augmentedMajorSeventh,
        chords_1.chordsShapes.dominant,
        chords_1.chordsShapes.dominant,
        chords_1.chordsShapes.halfDiminished,
        chords_1.chordsShapes.halfDiminished,
    ],
};
function getKey(scale, progressionShape) {
    const key = [];
    for (let i = 0; i < scale.length; i++) {
        const rootNote = scale[i];
        const chordShape = progressionShape[i];
        key.push(new Chord_1.Chord(rootNote, chordShape));
    }
    return key;
}
exports.getKey = getKey;
const getScaleAndShape = (note, scaleName, keyName) => {
    const noteName = note instanceof Note_1.Note ? note.toString() : note;
    const scale = scales_1.scales[noteName][scaleName];
    const shape = exports.keyShapes[(keyName ? keyName : scaleName)];
    return [scale, shape];
};
function getMajorKey(note) {
    const [scale, shape] = getScaleAndShape(note, "major");
    return getKey(scale, shape);
}
exports.getMajorKey = getMajorKey;
function getMinorKey(note) {
    const [scale, shape] = getScaleAndShape(note, "minor");
    return getKey(scale, shape);
}
exports.getMinorKey = getMinorKey;
function getHarmonicMinorKey(note) {
    const [scale, shape] = getScaleAndShape(note, "minor", "harmonicMinor");
    return getKey(scale, shape);
}
exports.getHarmonicMinorKey = getHarmonicMinorKey;
function getMelodicMinorKey(note) {
    const [scale, shape] = getScaleAndShape(note, "minor", "melodicMinor");
    return getKey(scale, shape);
}
exports.getMelodicMinorKey = getMelodicMinorKey;
function getAllKeys() {
    const keys = {};
    for (const note of notes_1.notes) {
        const noteKeys = {
            major: getMajorKey(note),
            minor: getMinorKey(note),
            harmonicMinor: getHarmonicMinorKey(note),
            melodicMinor: getMelodicMinorKey(note),
        };
        keys[note.name] = noteKeys;
    }
    return keys;
}
exports.getAllKeys = getAllKeys;
exports.keys = getAllKeys();
// const key = getKey(scales.C.major, keyShapes.major);
