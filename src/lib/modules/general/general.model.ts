import type { Color } from '$modules/general/color';
import { Icon } from '$modules/general/icon';

/**
 * **CurrentTarget<event?, element?>**
 */
export type CurrentTarget<R extends Event = Event, T extends HTMLElement = HTMLElement> = R & {
  currentTarget: T;
};

export type SlotContent = () => any; //eslint-disable-line

export type AnyFn = (...args: any[]) => any; //eslint-disable-line

export type TimeoutId = ReturnType<typeof setTimeout>;

export type Dict<T = string> = Record<string, T>;

export type ColorValue = (typeof Color)[keyof typeof Color];

export type Icons = keyof typeof Icon;

export type ConstEnumValues<T> = T[keyof T];
