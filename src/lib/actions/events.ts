/**
 * ### Action `preventDefault`
 * *Accepts space separated event names*
 * ##### Example:
 * ```svelte
 * <button use:preventDefault={'click keypress'}>
 *   Label
 * </button>
 * ```
 */
export function preventDefault(node: HTMLElement, events: string) {
  function prevent(e: Event) {
    e.preventDefault();
  }
  const split = events.split(' ');
  for (const event of split) node.addEventListener(event, prevent);
  return {
    destroy() {
      for (const event of split) node.removeEventListener(event, prevent);
    }
  };
}

/**
 * ### Action `stopPropagation`
 * *Accepts space separated event names*
 * ##### Example:
 * ```svelte
 * <button use:stopPropagation={'click keypress'}>
 *   Label
 * </button>
 * ```
 */
export function stopPropagation(node: HTMLElement, events: string) {
  function stop(e: Event) {
    e.stopPropagation();
  }

  const split = events.split(' ');
  for (const event of split) node.addEventListener(event, stop);
  return {
    destroy() {
      for (const event of split) node.removeEventListener(event, stop);
    }
  };
}
