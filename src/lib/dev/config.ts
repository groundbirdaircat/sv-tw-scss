import { PUBLIC_ENVIRONMENT } from '$env/static/public';
import { freeze, makeLogObj } from './util';

export class Config {
  static projectName = 'default-project-name'; // TODO

  // Dev
  static isDevEnvironment = ['dev', 'int'].includes(PUBLIC_ENVIRONMENT);
  static log = makeLogObj({
    _enabled: true
  });

  // Local Storage
  private static lsKey(k: string) {
    return `${Config.projectName}-${k}`;
  }

  static LS = {
    devUIDebug: {
      show: Config.lsKey('dev-ui-debug-show')
    },
    devMenu: {
      show: Config.lsKey('dev-menu-show'),
      position: Config.lsKey('dev-menu-position'),
      positionBeforeMin: Config.lsKey('dev-menu-position-before-min'),
      minimized: Config.lsKey('dev-menu-minimized')
    }
  } as const;
}

freeze(Config);
