import { steps } from "./steps";
import { Scale, ScaleCollection } from "./types";
export declare const scaleShapes: {
    major: steps[];
    minor: steps[];
    hexaphonic: steps[];
    diminished: steps[];
};
export declare function getScale(root: string, pattern: number[]): Scale;
export declare function getAllScales(): ScaleCollection;
export declare const scales: ScaleCollection;
