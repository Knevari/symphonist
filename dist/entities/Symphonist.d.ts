import { Note } from "./Note";
import { Progression } from "./Progression";
import { KeyType, NoteType, ProgressionOptions } from "../types";
export declare class Symphonist {
    getKeyChords(root: Note | NoteType, key: KeyType): import("./Chord").Chord[];
    generateProgression(progressionOptions: ProgressionOptions): Progression;
}
