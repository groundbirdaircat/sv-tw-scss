import type { Attachment } from 'svelte/attachments';

export function clickOutside(_mousedown?: 'mousedown') {
  const mousedown = _mousedown ?? 'click';

  const attachment: Attachment<HTMLElement> = node => {
    const on = {
      click(event: MouseEvent) {
        if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
          node.dispatchEvent(new CustomEvent('ClickOutside', { detail: event }));
        }
      }
    };

    document.addEventListener(mousedown, on.click, true);

    return () => {
      document.removeEventListener(mousedown, on.click, true);
    };
  };

  return attachment;
}
