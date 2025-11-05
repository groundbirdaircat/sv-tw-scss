import type { Color } from '$modules/general/color';
import { Icon } from '$modules/general/icon';

export type SlotContent = () => any; //eslint-disable-line
export type AnyFn = (...args: any[]) => any; //eslint-disable-line
export type EventWithTarget<T> = Event & { currentTarget: T };

export type Dict<T> = Record<string, T>;

export type ColorValue = (typeof Color)[keyof typeof Color];

export type Icons = keyof typeof Icon;
