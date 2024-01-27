import { get, readable, type Readable } from 'svelte/store';
import { type Dict } from '$models';
import { browser } from '$app/environment';

export const prefersReducedMotion = readable(false, set => {
  const query = '(prefers-reduced-motion: no-preference)';
  const mediaQueryList = browser ? window.matchMedia(query) : ({} as MediaQueryList);

  const onChange = () => set(!mediaQueryList.matches);

  if (browser) {
    mediaQueryList.addListener(onChange);
    onChange();
  }

  return () => {
    if (browser) mediaQueryList.removeListener(onChange);
  };
});

export enum Spin {
  PORTRAIT = 1,
  LANDSCAPE
}
// $pin
export const pin: Readable<Spin> = makeSpinStore();

export function getSpin(): Spin {
  return get(pin);
}

function makeSpinStore(): Readable<Spin> {
  if (!browser) return readable(Spin.LANDSCAPE);

  const landscapeQuery = window.matchMedia('(orientation:landscape)');
  const initialValue = landscapeQuery.matches ? Spin.LANDSCAPE : Spin.PORTRAIT;

  return readable<Spin>(initialValue, set => {
    const listener = (e: MediaQueryListEvent | MediaQueryList) =>
      set(e.matches ? Spin.LANDSCAPE : Spin.PORTRAIT);

    landscapeQuery.addEventListener('change', listener);
    return () => landscapeQuery.removeEventListener('change', listener);
  });
}

export enum Size {
  MOBILE = 1,
  TABLET,
  LAPTOP,
  DESKTOP,
  WIDE,
  ULTRAWIDE,
  SUPERULTRAWIDE
}

const breakpoint = {
  mobile: 600,
  tablet: 900,
  laptop: 1400,
  desktop: 2200,
  wide: 3300,
  ultrawide: 4400,
  superultrawide: 99999
};

// $ize
export const ize: Readable<Size> = makeSizeStore();

export function getSize(): Size {
  return get(ize);
}

function makeSizeStore(): Readable<Size> {
  if (browser) {
    const q: Dict<{
      query: MediaQueryList;
      size: Size;
      listener: (e: MediaQueryListEvent | MediaQueryList) => void;
    }> = {
      mobile: {
        query: makeSizeQuery({ max: breakpoint.mobile }),
        size: Size.MOBILE,
        listener: () => {}
      },
      tablet: {
        query: makeSizeQuery({ min: breakpoint.mobile, max: breakpoint.tablet }),
        size: Size.TABLET,
        listener: () => {}
      },
      laptop: {
        query: makeSizeQuery({ min: breakpoint.tablet, max: breakpoint.laptop }),
        size: Size.LAPTOP,
        listener: () => {}
      },
      desktop: {
        query: makeSizeQuery({ min: breakpoint.laptop, max: breakpoint.desktop }),
        size: Size.DESKTOP,
        listener: () => {}
      },
      wide: {
        query: makeSizeQuery({ min: breakpoint.desktop, max: breakpoint.wide }),
        size: Size.WIDE,
        listener: () => {}
      },
      ultrawide: {
        query: makeSizeQuery({ min: breakpoint.wide, max: breakpoint.ultrawide }),
        size: Size.ULTRAWIDE,
        listener: () => {}
      },
      superultrawide: {
        query: makeSizeQuery({ min: breakpoint.ultrawide }),
        size: Size.SUPERULTRAWIDE,
        listener: () => {}
      }
    };

    let initialValue = Size.DESKTOP;
    for (const { query, size } of Object.values(q)) {
      query.matches && (initialValue = size);
    }

    return readable<Size>(initialValue, set => {
      function makeListener(size: Size) {
        return function (e: MediaQueryListEvent | MediaQueryList) {
          e.matches && set(size);
        };
      }

      for (const [key, { query, size }] of Object.entries(q)) {
        const listener = makeListener(size);
        query.addEventListener('change', listener);
        q[key].listener = listener;
      }

      return () => {
        for (const { query, listener } of Object.values(q)) {
          query.removeEventListener('change', listener);
        }
      };
    });
  } else return readable(Size.DESKTOP);
}

function makeSizeQuery({ min, max }: { min?: number; max?: number }) {
  let query = '';

  if (max !== undefined) {
    query = `(max-width: ${max}px)`;

    if (min !== undefined) {
      query += ' and ';
    }
  }

  if (min !== undefined) {
    query += `(min-width: ${++min}px)`;
  }

  return window.matchMedia(query);
}
