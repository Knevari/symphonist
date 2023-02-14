import { GenericObject } from "./types";

export function getRandomFromArray<T>(arr: Array<T>) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomObjectProp(obj: GenericObject) {
  const property = getRandomFromArray(Object.keys(obj));
  return [property, obj[property]];
}
