import { notes, getNoteIndex } from "./notes";
import { steps } from "./steps";
import {
  NoteScaleCollection,
  Scale,
  ScaleCollection,
  ScaleType,
} from "./types";

export const scaleShapes = {
  major: [
    steps.whole,
    steps.whole,
    steps.half,
    steps.whole,
    steps.whole,
    steps.whole,
    steps.half,
  ],
  minor: [
    steps.whole,
    steps.half,
    steps.whole,
    steps.whole,
    steps.half,
    steps.whole,
    steps.whole,
  ],
  hexaphonic: [
    steps.whole,
    steps.whole,
    steps.whole,
    steps.whole,
    steps.whole,
    steps.whole,
    steps.whole,
  ],
  diminished: [
    steps.half,
    steps.whole,
    steps.half,
    steps.whole,
    steps.half,
    steps.whole,
    steps.half,
  ],
};

export function getScale(root: string, pattern: number[]): Scale {
  const rootNoteIndex = getNoteIndex(root);
  if (rootNoteIndex < 0 || pattern.length === 0) return [];

  const scale: Scale = [];

  let noteIndex = rootNoteIndex;

  for (let i = 0; i < pattern.length; i++) {
    scale.push(notes[noteIndex]);
    noteIndex = (noteIndex + pattern[i]) % notes.length;
  }

  return scale;
}

export function getAllScales(): ScaleCollection {
  const scales = {} as ScaleCollection;
  for (const { name: noteName } of notes) {
    scales[noteName] = {} as NoteScaleCollection;
    const scaleNames = Object.keys(scaleShapes) as Array<ScaleType>;
    for (const scaleName of scaleNames) {
      scales[noteName][scaleName] = getScale(noteName, scaleShapes[scaleName]);
    }
  }
  return scales;
}

export const scales = getAllScales();
