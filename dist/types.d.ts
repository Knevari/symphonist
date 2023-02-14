import { Chord } from "./entities/Chord";
import { Note } from "./entities/Note";
import { keyShapes } from "./keys";
import { scaleShapes } from "./scales";
export declare type Scale = Note[];
export declare type NoteScaleCollection = {
    [scale in ScaleType]: Scale;
};
export declare type ScaleCollection = {
    [note in NoteType]: NoteScaleCollection;
};
export declare type KeysCollection = {
    [x: string]: {
        major: Chord[];
        minor: Chord[];
        harmonicMinor: Chord[];
        melodicMinor: Chord[];
    };
};
export declare type ChordCollection = {
    [x: string]: {
        [y: string]: Chord;
    };
};
export declare type GenericObject = {
    [x: string]: any;
};
export declare type ProgressionOptions = Partial<{
    root: Note | NoteType;
    key: KeyType;
    length: number;
    enhance: boolean;
}>;
export declare type KeyType = keyof typeof keyShapes;
export declare type ScaleType = keyof typeof scaleShapes;
export declare type NoteType = "A" | "A#" | "B" | "C" | "C#" | "D" | "D#" | "E" | "F" | "F#" | "G" | "G#";
export declare type AlternativeNoteType = "A#b" | "Bb" | "Cb" | "C#b" | "Db" | "D#b" | "Eb" | "Fb" | "F#b" | "Gb" | "G#b" | "Ab";
