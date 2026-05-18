type Modifier = 'stop' | 'prevent' | 'stopImmediate';
/**
 * Applies event modifiers to a handler, or standalone if no handler is needed.
 * Multiple modifiers can be passed as a space-separated string.
 *
 * @example
 * onclick={mod('stop')}
 *
 * @example
 * onclick={mod('stop', 'prevent')}
 *
 * @example
 * onclick={mod(on.clickDelete, 'stop')}
 *
 * @example
 * onclick={mod(on.submit, 'stop', 'prevent')}
 */
export function mod<E extends Event>(
  handlerOrModifier: ((e: E) => void) | Modifier,
  ...modifiers: Modifier[]
) {
  const handler = typeof handlerOrModifier === 'function' ? handlerOrModifier : undefined;
  const all = typeof handlerOrModifier === 'string' ? [handlerOrModifier, ...modifiers] : modifiers;

  return (e: E) => {
    if (all.includes('stop')) e.stopPropagation();
    if (all.includes('prevent')) e.preventDefault();
    if (all.includes('stopImmediate')) e.stopImmediatePropagation();
    handler?.(e);
  };
}
