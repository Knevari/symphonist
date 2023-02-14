"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Symphonist = void 0;
const keys_1 = require("../keys");
const Progression_1 = require("./Progression");
const utils_1 = require("../utils");
class Symphonist {
    getKeyChords(root, key) {
        const rootNote = root.toString();
        return keys_1.keys[rootNote][key];
    }
    generateProgression(progressionOptions) {
        var _a, _b, _c;
        const progression = new Progression_1.Progression();
        const length = (_a = progressionOptions.length) !== null && _a !== void 0 ? _a : 4;
        const root = (_b = progressionOptions.root) !== null && _b !== void 0 ? _b : "C";
        const key = (_c = progressionOptions.key) !== null && _c !== void 0 ? _c : "major";
        for (let i = 0; i < length; i++) {
            progression.addChord((0, utils_1.getRandomFromArray)(this.getKeyChords(root, key)));
        }
        return progression;
    }
}
exports.Symphonist = Symphonist;
