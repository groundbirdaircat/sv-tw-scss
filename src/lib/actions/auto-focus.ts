import { tick } from 'svelte';

export function autoFocus(element: HTMLElement, focus?: boolean) {
  if (focus === false) return;

  (async () => {
    await tick();
    element.focus();
  })();
}
