import { AlternativeNoteType, NoteType } from "../types";
export declare class Note {
    name: NoteType;
    alternative?: AlternativeNoteType;
    constructor(name: NoteType, alternativeName?: AlternativeNoteType);
    toString(): NoteType;
}
