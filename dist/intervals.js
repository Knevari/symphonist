"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intervals = void 0;
var intervals;
(function (intervals) {
    intervals[intervals["root"] = 0] = "root";
    intervals[intervals["minor_second"] = 1] = "minor_second";
    intervals[intervals["major_second"] = 2] = "major_second";
    intervals[intervals["minor_third"] = 3] = "minor_third";
    intervals[intervals["major_third"] = 4] = "major_third";
    intervals[intervals["perfect_fourth"] = 5] = "perfect_fourth";
    intervals[intervals["augmented_fouth"] = 6] = "augmented_fouth";
    intervals[intervals["diminished_fifth"] = 6] = "diminished_fifth";
    intervals[intervals["perfect_fifth"] = 7] = "perfect_fifth";
    intervals[intervals["augmented_fifth"] = 8] = "augmented_fifth";
    intervals[intervals["minor_sixth"] = 8] = "minor_sixth";
    intervals[intervals["major_sixth"] = 9] = "major_sixth";
    intervals[intervals["diminished_seventh"] = 9] = "diminished_seventh";
    intervals[intervals["minor_seventh"] = 10] = "minor_seventh";
    intervals[intervals["major_seventh"] = 11] = "major_seventh";
    intervals[intervals["octave"] = 12] = "octave";
    intervals[intervals["ninth"] = 14] = "ninth";
    intervals[intervals["eleventh"] = 17] = "eleventh";
    intervals[intervals["thirteenth"] = 23] = "thirteenth";
})(intervals = exports.intervals || (exports.intervals = {}));
// 0 1  2 3  4 5 6  7 8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24
// C C# D D# E F F# G G# A A# B  C  C# D  D# E  F  F# G  G# A  A# B  C
