import { ChordSkeleton } from "./entities/ChordSkeleton";
import { ChordCollection } from "./types";
export declare const chordsShapes: {
    sus2: ChordSkeleton;
    sus4: ChordSkeleton;
    dominant: ChordSkeleton;
    diminishedSeventh: ChordSkeleton;
    halfDiminished: ChordSkeleton;
    majorSeventh: ChordSkeleton;
    augmentedMajorSeventh: ChordSkeleton;
    minorSeventh: ChordSkeleton;
    major: ChordSkeleton;
    minor: ChordSkeleton;
    diminished: ChordSkeleton;
    augmentedFifth: ChordSkeleton;
};
export declare function getAllChords(): ChordCollection;
export declare const chords: ChordCollection;
