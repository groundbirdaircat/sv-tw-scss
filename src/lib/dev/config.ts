import { freeze, makeLogObj } from './util';

export class Config {
  static log = makeLogObj({
    _enabled: true
  });
}

freeze(Config);
