import type { Dict } from '$models';

export class Config {
  static log = makeLogObj({
    _enabled: true
  });
}

function makeLogObj(init: Dict<boolean>): Dict<boolean> {
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
(function freeze(cfg: Dict<any>) {
  Object.freeze(cfg);
  Object.getOwnPropertyNames(cfg).forEach(p => {
    const value = cfg[p];
    if (typeof value === 'object' && value !== null) {
      freeze(value);
    }
  });
})(Config);
