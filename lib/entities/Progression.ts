import { Chord } from "./Chord";

export class Progression {
  constructor(private chords: Chord[] = []) {}

  addChord(chord: Chord) {
    this.chords.push(chord);
  }

  toString() {
    return this.chords.join(" -> ");
  }
}
