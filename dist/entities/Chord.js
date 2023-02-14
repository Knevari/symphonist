"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chord = void 0;
const notes_1 = require("../notes");
class Chord {
    constructor(root, chordSkeleton) {
        this.root = root;
        this.init(chordSkeleton);
    }
    getRootName() {
        return this.root.name;
    }
    init(chordSkeleton) {
        this.createChordRepresentation(chordSkeleton);
        this.createChordNotes(chordSkeleton);
    }
    createChordRepresentation(chordSkeleton) {
        this.name = this.root.name + chordSkeleton.suffix;
    }
    createChordNotes(chordSkeleton) {
        const chordNotes = [];
        const rootNoteIndex = (0, notes_1.getNoteIndex)(this.getRootName());
        for (let i = 0; i < chordSkeleton.getShape().length; i++) {
            const intervalIndex = (rootNoteIndex + chordSkeleton.getShape()[i]) % notes_1.notes.length;
            chordNotes.push(notes_1.notes[intervalIndex]);
        }
        this.notes = chordNotes;
    }
    toString() {
        return this.name;
    }
}
exports.Chord = Chord;
