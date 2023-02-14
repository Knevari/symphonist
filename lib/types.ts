import { Chord } from "./entities/Chord";
import { Note } from "./entities/Note";
import { keyShapes } from "./keys";
import { scaleShapes } from "./scales";

export type Scale = Note[];

export type NoteScaleCollection = {
  [scale in ScaleType]: Scale;
};
export type ScaleCollection = {
  [note in NoteType]: NoteScaleCollection;
};
export type KeysCollection = {
  [x: string]: {
    major: Chord[];
    minor: Chord[];
    harmonicMinor: Chord[];
    melodicMinor: Chord[];
  };
};
export type ChordCollection = {
  [x: string]: {
    [y: string]: Chord;
  };
};

export type GenericObject = { [x: string]: any };

export type ProgressionOptions = Partial<{
  root: Note | NoteType;
  key: KeyType;
  length: number;
  enhance: boolean;
}>;

export type KeyType = keyof typeof keyShapes;
export type ScaleType = keyof typeof scaleShapes;
export type NoteType =
  | "A"
  | "A#"
  | "B"
  | "C"
  | "C#"
  | "D"
  | "D#"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "G#";
export type AlternativeNoteType =
  | "A#b"
  | "Bb"
  | "Cb"
  | "C#b"
  | "Db"
  | "D#b"
  | "Eb"
  | "Fb"
  | "F#b"
  | "Gb"
  | "G#b"
  | "Ab";
