import { Chord } from "./Chord";
export declare class Progression {
    private chords;
    constructor(chords?: Chord[]);
    addChord(chord: Chord): void;
    toString(): string;
}
