import { Note } from "./entities/Note";
export declare function getNote(name: string): Note | undefined;
export declare function getNoteIndex(name: string): number;
export declare const notes: Note[];
