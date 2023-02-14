import { Note } from "./entities/Note";

export function getNote(name: string): Note | undefined {
  return notes.find((note) => note.name === name || note.alternative === name);
}

export function getNoteIndex(name: string): number {
  return notes.findIndex(
    (note) => note.name === name || note.alternative === name
  );
}

export const notes = [
  new Note("A", "A#b"),
  new Note("A#", "Bb"),
  new Note("B", "Cb"),
  new Note("C", "C#b"),
  new Note("C#", "Db"),
  new Note("D", "D#b"),
  new Note("D#", "Eb"),
  new Note("E", "Fb"),
  new Note("F", "F#b"),
  new Note("F#", "Gb"),
  new Note("G", "G#b"),
  new Note("G#", "Ab"),
];
