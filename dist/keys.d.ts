import { Note } from "./entities/Note";
import { Chord } from "./entities/Chord";
import { ChordSkeleton } from "./entities/ChordSkeleton";
import { KeysCollection, Scale, NoteType } from "./types";
declare type ProgressionShape = ChordSkeleton[];
export declare const keyShapes: {
    major: ChordSkeleton[];
    minor: ChordSkeleton[];
    harmonicMinor: ChordSkeleton[];
    melodicMinor: ChordSkeleton[];
};
export declare function getKey(scale: Scale, progressionShape: ProgressionShape): Chord[];
export declare function getMajorKey(note: Note | NoteType): Chord[];
export declare function getMinorKey(note: Note | NoteType): Chord[];
export declare function getHarmonicMinorKey(note: Note | NoteType): Chord[];
export declare function getMelodicMinorKey(note: Note | NoteType): Chord[];
export declare function getAllKeys(): KeysCollection;
export declare const keys: KeysCollection;
export {};
