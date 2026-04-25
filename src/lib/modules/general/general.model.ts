import type { Color } from '$modules/general/color';
import { Icon } from '$modules/general/icon';

export type SlotContent = () => any; //eslint-disable-line

export type AnyFn = (...args: any[]) => any; //eslint-disable-line

export type EventWithTarget<T> = Event & { currentTarget: T };

export type WithTarget<R extends Event, T> = R & { currentTarget: T };

export type TimeoutId = ReturnType<typeof setTimeout>;

export type Dict<T = string> = Record<string, T>;

export type ColorValue = (typeof Color)[keyof typeof Color];

export type Icons = keyof typeof Icon;
