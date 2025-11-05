/* eslint-disable  @typescript-eslint/no-explicit-any */
import { browser } from '$app/environment';

export function lsGet(key: string, fallback: any = '') {
  if (!browser) return fallback;
  return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
}

export function lsSet(key: string, value: any = null) {
  if (!browser) return;
  localStorage[key] = JSON.stringify(value);
}

export function ssGet(key: string, fallback: any = '') {
  if (!browser) return fallback;
  return JSON.parse(sessionStorage.getItem(key) || JSON.stringify(fallback));
}

export function ssSet(key: string, value: any = null) {
  if (!browser) return;
  sessionStorage[key] = JSON.stringify(value);
}
