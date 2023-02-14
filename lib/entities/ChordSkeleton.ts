import { intervals } from "../intervals";

export class ChordSkeleton {
  suffix: string;
  shape: intervals[];
  constructor(suffix: string, shape: intervals[]) {
    this.suffix = suffix;
    this.shape = shape;
  }

  getShape() {
    return this.shape;
  }
}
