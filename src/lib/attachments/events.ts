import type { Attachment } from 'svelte/attachments';

/**
 * ### Attachment `preventDefault`
 * *Accepts space separated event names*
 * ##### Example:
 * ```svelte
 * <button {@attach preventDefault('click keypress')}>
 *   Label
 * </button>
 * ```
 */
export function preventDefault(events: string) {
  function prevent(e: Event) {
    e.preventDefault();
  }

  const split = events.split(' ');

  const attachment: Attachment<HTMLElement> = node => {
    for (const event of split) node.addEventListener(event, prevent);
    return () => {
      for (const event of split) node.removeEventListener(event, prevent);
    };
  };

  return attachment;
}

/**
 * ### Attachment `stopPropagation`
 * *Accepts space separated event names*
 * ##### Example:
 * ```svelte
 * <button {@attach stopPropagation('click keypress')}>
 *   Label
 * </button>
 * ```
 */
export function stopPropagation(events: string) {
  function stop(e: Event) {
    e.stopPropagation();
  }

  const split = events.split(' ');

  const attachment: Attachment<HTMLElement> = node => {
    for (const event of split) node.addEventListener(event, stop);
    return () => {
      for (const event of split) node.removeEventListener(event, stop);
    };
  };

  return attachment;
}
