import type { Attachment } from 'svelte/attachments';

/**
 * ### Attachment `onKeydown`
 * *Accepts space separated key codes*
 * ##### Example:
 * ```svelte
 * <input
 *   {@attach onKeydown('Enter KeyA KeyS KeyD')}
 *   onKeydown={on.keydown}
 * />
 * ```
 */
export function onKeydown(codes: string) {
  const split = codes.split(' ');

  const attachment: Attachment<HTMLElement> = node => {
    function onKeyressHandler(e: KeyboardEvent) {
      split.includes(e.code) &&
        node.dispatchEvent(new CustomEvent<KeyboardEvent>('Keydown', { detail: e }));
    }

    node.addEventListener('keydown', onKeyressHandler);
    return () => node.removeEventListener('keydown', onKeyressHandler);
  };

  return attachment;
}
