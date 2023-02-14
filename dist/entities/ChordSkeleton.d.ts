import { intervals } from "../intervals";
export declare class ChordSkeleton {
    suffix: string;
    shape: intervals[];
    constructor(suffix: string, shape: intervals[]);
    getShape(): intervals[];
}
