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
  static LS = {
    devUIDebug: {
      show: `${Config.projectName}-dev-ui-debug-show`
    },
    devMenu: {
      show: `${Config.projectName}-dev-menu-show`,
      position: `${Config.projectName}-dev-menu-position`,
      positionBeforeMin: `${Config.projectName}-dev-menu-position-before-min`,
      minimized: `${Config.projectName}-dev-menu-minimized`
    }
  } as const;
}

freeze(Config);
