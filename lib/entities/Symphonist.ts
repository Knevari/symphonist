import { keys } from "../keys";
import { Note } from "./Note";
import { Progression } from "./Progression";
import { KeyType, NoteType, ProgressionOptions } from "../types";
import { getRandomFromArray } from "../utils";

export class Symphonist {
  getKeyChords(root: Note | NoteType, key: KeyType) {
    const rootNote = root.toString();
    return keys[rootNote][key];
  }

  generateProgression(progressionOptions: ProgressionOptions) {
    const progression = new Progression();
    const length = progressionOptions.length ?? 4;
    const root = progressionOptions.root ?? "C";
    const key = progressionOptions.key ?? "major";
    for (let i = 0; i < length; i++) {
      progression.addChord(getRandomFromArray(this.getKeyChords(root, key)));
    }
    return progression;
  }
}
