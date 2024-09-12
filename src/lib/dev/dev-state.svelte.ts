import { lsGet } from '$utils/storage';
import { Config } from './config';

class DevState {
  _showDevMenu = $state(lsGet(Config.LS.devMenu.show, false));
  _showUIDebug = $state(lsGet(Config.LS.devUIDebug.show, false));

  get showDevMenu() {
    return Config.isDevEnvironment && this._showDevMenu;
  }

  get showUIDebug() {
    return Config.isDevEnvironment && this._showUIDebug;
  }

  set showDevMenu(value: boolean) {
    if (!Config.isDevEnvironment) return;
    this._showDevMenu = value;
  }

  set showUIDebug(value: boolean) {
    if (!Config.isDevEnvironment) return;
    this._showUIDebug = value;
  }
}

export const devState = new DevState();
