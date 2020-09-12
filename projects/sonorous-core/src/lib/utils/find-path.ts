import {isObject} from './is-object';

export function findPath(store = {}, particlePath = []): any {
  let pivot = store;
  particlePath.forEach((a: any) => {
    pivot = isObject(pivot) && pivot[a];
  });
  return pivot;
}
