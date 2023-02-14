import { AlternativeNoteType, NoteType } from "../types";

export class Note {
  name: NoteType;
  alternative?: AlternativeNoteType;
  constructor(name: NoteType, alternativeName?: AlternativeNoteType) {
    this.name = name;
    this.alternative = alternativeName;
  }

  toString() {
    return this.name;
  }
}
