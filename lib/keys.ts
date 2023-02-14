import { Note } from "./entities/Note";
import { Chord } from "./entities/Chord";
import { ChordSkeleton } from "./entities/ChordSkeleton";
import { notes } from "./notes";
import { scales } from "./scales";
import { chordsShapes } from "./chords";
import { KeyType, KeysCollection, Scale, NoteType, ScaleType } from "./types";

type ProgressionShape = ChordSkeleton[];

export const keyShapes = {
  major: [
    chordsShapes.majorSeventh,
    chordsShapes.minorSeventh,
    chordsShapes.minorSeventh,
    chordsShapes.majorSeventh,
    chordsShapes.dominant,
    chordsShapes.minorSeventh,
    chordsShapes.diminishedSeventh,
  ],
  minor: [
    chordsShapes.minorSeventh,
    chordsShapes.diminishedSeventh,
    chordsShapes.majorSeventh,
    chordsShapes.minorSeventh,
    chordsShapes.minorSeventh,
    chordsShapes.majorSeventh,
    chordsShapes.dominant,
  ],
  harmonicMinor: [
    chordsShapes.majorSeventh,
    chordsShapes.diminished,
    chordsShapes.augmentedMajorSeventh,
    chordsShapes.minorSeventh,
    chordsShapes.dominant,
    chordsShapes.majorSeventh,
    chordsShapes.diminished,
  ],
  melodicMinor: [
    chordsShapes.majorSeventh,
    chordsShapes.minorSeventh,
    chordsShapes.augmentedMajorSeventh,
    chordsShapes.dominant,
    chordsShapes.dominant,
    chordsShapes.halfDiminished,
    chordsShapes.halfDiminished,
  ],
};

export function getKey(scale: Scale, progressionShape: ProgressionShape) {
  const key = [];

  for (let i = 0; i < scale.length; i++) {
    const rootNote = scale[i];
    const chordShape = progressionShape[i];
    key.push(new Chord(rootNote, chordShape));
  }

  return key;
}

const getScaleAndShape = (
  note: Note | NoteType,
  scaleName: ScaleType,
  keyName?: KeyType
): [Scale, ChordSkeleton[]] => {
  const noteName = note instanceof Note ? note.toString() : note;
  const scale = scales[noteName][scaleName];
  const shape =
    keyShapes[(keyName ? keyName : scaleName) as keyof typeof keyShapes];
  return [scale, shape];
};

export function getMajorKey(note: Note | NoteType) {
  const [scale, shape] = getScaleAndShape(note, "major");
  return getKey(scale, shape);
}

export function getMinorKey(note: Note | NoteType) {
  const [scale, shape] = getScaleAndShape(note, "minor");
  return getKey(scale, shape);
}

export function getHarmonicMinorKey(note: Note | NoteType) {
  const [scale, shape] = getScaleAndShape(note, "minor", "harmonicMinor");
  return getKey(scale, shape);
}

export function getMelodicMinorKey(note: Note | NoteType) {
  const [scale, shape] = getScaleAndShape(note, "minor", "melodicMinor");
  return getKey(scale, shape);
}

export function getAllKeys() {
  const keys = {} as KeysCollection;
  for (const note of notes) {
    const noteKeys = {
      major: getMajorKey(note),
      minor: getMinorKey(note),
      harmonicMinor: getHarmonicMinorKey(note),
      melodicMinor: getMelodicMinorKey(note),
    };
    keys[note.name] = noteKeys;
  }
  return keys;
}

export const keys = getAllKeys();
// const key = getKey(scales.C.major, keyShapes.major);
