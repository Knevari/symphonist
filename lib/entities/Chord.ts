import { ChordSkeleton } from "./ChordSkeleton";
import { Note } from "./Note";
import { notes, getNoteIndex } from "../notes";

export class Chord {
  root: Note;
  name!: string;
  notes!: Note[];
  constructor(root: Note, chordSkeleton: ChordSkeleton) {
    this.root = root;
    this.init(chordSkeleton);
  }

  getRootName() {
    return this.root.name;
  }

  init(chordSkeleton: ChordSkeleton) {
    this.createChordRepresentation(chordSkeleton);
    this.createChordNotes(chordSkeleton);
  }

  private createChordRepresentation(chordSkeleton: ChordSkeleton) {
    this.name = this.root.name + chordSkeleton.suffix;
  }

  private createChordNotes(chordSkeleton: ChordSkeleton) {
    const chordNotes = [];
    const rootNoteIndex = getNoteIndex(this.getRootName());
    for (let i = 0; i < chordSkeleton.getShape().length; i++) {
      const intervalIndex =
        (rootNoteIndex + chordSkeleton.getShape()[i]) % notes.length;
      chordNotes.push(notes[intervalIndex]);
    }
    this.notes = chordNotes;
  }

  toString() {
    return this.name;
  }
}
