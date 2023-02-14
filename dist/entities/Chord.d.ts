import { ChordSkeleton } from "./ChordSkeleton";
import { Note } from "./Note";
export declare class Chord {
    root: Note;
    name: string;
    notes: Note[];
    constructor(root: Note, chordSkeleton: ChordSkeleton);
    getRootName(): import("..").NoteType;
    init(chordSkeleton: ChordSkeleton): void;
    private createChordRepresentation;
    private createChordNotes;
    toString(): string;
}
