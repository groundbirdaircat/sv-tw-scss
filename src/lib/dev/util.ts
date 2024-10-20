import type { Dict } from '$models/general';

export function makeLogObj(init: Dict<boolean>): Dict<boolean> {
  const logObj = { enabled: init._enabled };
  for (const [key, value] of Object.entries(init)) {
    if (key === '_enabled') continue;
    Object.defineProperties(logObj, {
      ['_' + key]: { value },
      [key]: {
        get() {
          return this.enabled && this['_' + key];
        }
      }
    });
  }
  return logObj;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function freeze(object: Dict<any>) {
  Object.freeze(object);
  Object.getOwnPropertyNames(object).forEach(p => {
    const value = object[p];
    if (typeof value === 'object' && value !== null) {
      freeze(value);
    }
  });
}
