/**
 * ### Action `pressKeyCode`
 * *Accepts space separated key codes*
 * ##### Example:
 * ```svelte
 * <input
 *   use:pressKeyCode={'KeyA KeyS KeyD'}
 *   onPressKeyCode={on.pressKeyCode}
 * />
 * ```
 */
export function pressKeyCode(node: HTMLElement, codes: string) {
  const split = codes.split(' ');
  function onKeyPress(e: KeyboardEvent) {
    split.includes(e.code) &&
      node.dispatchEvent(new CustomEvent<KeyboardEvent>('PressKeyCode', { detail: e }));
  }

  node.addEventListener('keypress', onKeyPress);

  return {
    destroy() {
      node.removeEventListener('keypress', onKeyPress);
    }
  };
}
