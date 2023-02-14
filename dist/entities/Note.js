"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
class Note {
    constructor(name, alternativeName) {
        this.name = name;
        this.alternative = alternativeName;
    }
    toString() {
        return this.name;
    }
}
exports.Note = Note;
