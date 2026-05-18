import type { Attachment } from 'svelte/attachments';

/**
 * ### Attachment `onKeypress`
 * *Accepts space separated key codes*
 * ##### Example:
 * ```svelte
 * <input
 *   {@attach onKeypress('Enter KeyA KeyS KeyD')}
 *   onKeypress={on.keypress}
 * />
 * ```
 */
export function onKeypress(codes: string) {
  const split = codes.split(' ');

  const attachment: Attachment<HTMLElement> = node => {
    function onKeyressHandler(e: KeyboardEvent) {
      split.includes(e.code) &&
        node.dispatchEvent(new CustomEvent<KeyboardEvent>('Keypress', { detail: e }));
    }

    node.addEventListener('keypress', onKeyressHandler);
    return () => node.removeEventListener('keypress', onKeyressHandler);
  };

  return attachment;
}
