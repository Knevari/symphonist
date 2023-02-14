"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomObjectProp = exports.getRandomFromArray = void 0;
function getRandomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
exports.getRandomFromArray = getRandomFromArray;
function getRandomObjectProp(obj) {
    const property = getRandomFromArray(Object.keys(obj));
    return [property, obj[property]];
}
exports.getRandomObjectProp = getRandomObjectProp;
