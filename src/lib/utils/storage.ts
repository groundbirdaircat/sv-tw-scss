/* eslint-disable  @typescript-eslint/no-explicit-any */
import { browser } from '$app/environment';

export function lsGet(key: string, fallback: any = '') {
  if (!browser) return;
  return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
}

export function lsSet(key: string, value: any = null) {
  if (!browser) return;
  localStorage[key] = JSON.stringify(value);
}
