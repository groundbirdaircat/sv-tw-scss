import type { Attachment } from 'svelte/attachments';
import { tick } from 'svelte';

export function autoFocus(focus?: boolean) {
  const attachment: Attachment<HTMLElement> = node => {
    if (focus === false) return;

    (async () => {
      await tick();
      node.focus();
    })();
  };

  return attachment;
}
