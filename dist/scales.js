"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scales = exports.getAllScales = exports.getScale = exports.scaleShapes = void 0;
const notes_1 = require("./notes");
const steps_1 = require("./steps");
exports.scaleShapes = {
    major: [
        steps_1.steps.whole,
        steps_1.steps.whole,
        steps_1.steps.half,
        steps_1.steps.whole,
        steps_1.steps.whole,
        steps_1.steps.whole,
        steps_1.steps.half,
    ],
    minor: [
        steps_1.steps.whole,
        steps_1.steps.half,
        steps_1.steps.whole,
        steps_1.steps.whole,
        steps_1.steps.half,
        steps_1.steps.whole,
        steps_1.steps.whole,
    ],
    hexaphonic: [
        steps_1.steps.whole,
        steps_1.steps.whole,
        steps_1.steps.whole,
        steps_1.steps.whole,
        steps_1.steps.whole,
        steps_1.steps.whole,
        steps_1.steps.whole,
    ],
    diminished: [
        steps_1.steps.half,
        steps_1.steps.whole,
        steps_1.steps.half,
        steps_1.steps.whole,
        steps_1.steps.half,
        steps_1.steps.whole,
        steps_1.steps.half,
    ],
};
function getScale(root, pattern) {
    const rootNoteIndex = (0, notes_1.getNoteIndex)(root);
    if (rootNoteIndex < 0 || pattern.length === 0)
        return [];
    const scale = [];
    let noteIndex = rootNoteIndex;
    for (let i = 0; i < pattern.length; i++) {
        scale.push(notes_1.notes[noteIndex]);
        noteIndex = (noteIndex + pattern[i]) % notes_1.notes.length;
    }
    return scale;
}
exports.getScale = getScale;
function getAllScales() {
    const scales = {};
    for (const { name: noteName } of notes_1.notes) {
        scales[noteName] = {};
        const scaleNames = Object.keys(exports.scaleShapes);
        for (const scaleName of scaleNames) {
            scales[noteName][scaleName] = getScale(noteName, exports.scaleShapes[scaleName]);
        }
    }
    return scales;
}
exports.getAllScales = getAllScales;
exports.scales = getAllScales();
