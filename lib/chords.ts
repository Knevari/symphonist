import { Chord } from "./entities/Chord";
import { ChordSkeleton } from "./entities/ChordSkeleton";
import { intervals } from "./intervals";
import { notes } from "./notes";
import { ChordCollection } from "./types";

const basicChordShapes = {
  major: new ChordSkeleton("", [
    intervals.root,
    intervals.major_third,
    intervals.perfect_fifth,
  ]),
  minor: new ChordSkeleton("m", [
    intervals.root,
    intervals.minor_third,
    intervals.perfect_fifth,
  ]),
  diminished: new ChordSkeleton("o", [
    intervals.root,
    intervals.minor_third,
    intervals.diminished_seventh,
  ]),
  augmentedFifth: new ChordSkeleton("#5", [
    intervals.root,
    intervals.major_third,
    intervals.augmented_fifth,
  ]),
};

const extendedChordShapes = {
  dominant: new ChordSkeleton("5", [
    ...basicChordShapes.major.shape,
    intervals.minor_seventh,
  ]),
  diminishedSeventh: new ChordSkeleton("°", [
    ...basicChordShapes.diminished.shape,
    intervals.diminished_seventh,
  ]),
  halfDiminished: new ChordSkeleton("ø", [
    ...basicChordShapes.diminished.shape,
    intervals.minor_seventh,
  ]),
  majorSeventh: new ChordSkeleton("M7", [
    ...basicChordShapes.major.shape,
    intervals.major_seventh,
  ]),
  augmentedMajorSeventh: new ChordSkeleton("M7#5", [
    ...basicChordShapes.augmentedFifth.shape,
    intervals.major_seventh,
  ]),
  minorSeventh: new ChordSkeleton("m7", [
    ...basicChordShapes.minor.shape,
    intervals.minor_seventh,
  ]),
};

const suspendedChordShapes = {
  sus2: new ChordSkeleton("sus2", [
    intervals.root,
    intervals.major_second,
    intervals.perfect_fifth,
  ]),
  sus4: new ChordSkeleton("sus4", [
    intervals.root,
    intervals.perfect_fourth,
    intervals.perfect_fifth,
  ]),
};

export const chordsShapes = {
  ...basicChordShapes,
  ...extendedChordShapes,
  ...suspendedChordShapes,
};

export function getAllChords() {
  const chords = {} as ChordCollection;

  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    chords[note.name] = {};
    for (const chordName in chordsShapes) {
      const chordShape = chordsShapes[chordName as keyof typeof chordsShapes];
      const chord = new Chord(note, chordShape);
      chords[note.name][chord.name] = chord;
    }
  }

  return chords;
}

export const chords = getAllChords();
