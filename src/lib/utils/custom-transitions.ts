import { cubicOut } from 'svelte/easing';

export function flyScale(
  node: Element,
  { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0, scaleStart = 0 } = {}
) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === 'none' ? '' : style.transform;
  const sd = 1 - scaleStart;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (t: number, u: number) => `
    transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px) scale(${1 - sd * u});
    opacity: ${target_opacity - od * u}`
  };
}
