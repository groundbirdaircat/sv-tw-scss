import { browser } from '$app/environment';
import { readable } from 'svelte/store';

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
