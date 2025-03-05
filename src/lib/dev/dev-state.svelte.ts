import { lsGet, lsSet } from '$utils/storage';
import { Config } from './config';

class DevState {
  private _showDevMenu = $state(lsGet(Config.LS.devMenu.show, false));
  private _showUIDebug = $state(lsGet(Config.LS.devUIDebug.show, false));
  private _showBreakpointStatus = $state(lsGet(Config.LS.devBreakpointStatus.show, false));

  get showDevMenu() {
    return Config.isDevEnvironment && this._showDevMenu;
  }

  set showDevMenu(value: boolean) {
    if (!Config.isDevEnvironment) return;

    this._showDevMenu = value;
  }

  get showUIDebug() {
    return Config.isDevEnvironment && this._showUIDebug;
  }

  set showUIDebug(value: boolean) {
    if (!Config.isDevEnvironment) return;

    this._showUIDebug = value;
    lsSet(Config.LS.devUIDebug.show, devState.showUIDebug);
  }

  get showBreakpointStatus() {
    return Config.isDevEnvironment && this._showBreakpointStatus;
  }

  set showBreakpointStatus(value: boolean) {
    if (!Config.isDevEnvironment) return;

    this._showBreakpointStatus = value;
    lsSet(Config.LS.devBreakpointStatus.show, value);
  }
}

export const devState = new DevState();
