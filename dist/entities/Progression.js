"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progression = void 0;
class Progression {
    constructor(chords = []) {
        this.chords = chords;
    }
    addChord(chord) {
        this.chords.push(chord);
    }
    toString() {
        return this.chords.join(" -> ");
    }
}
exports.Progression = Progression;
