<script lang="ts">
  import { Icon } from '$assets/icon';
  import type { Icons } from '$models/icon';

  let {
    color,
    type,
    class: iconClass = ''
  }: {
    color?: string;
    type: Icons;
    class?: string;
  } = $props();

  const replaceContent = `<svg xmlns="http://www.w3.org/2000/svg" class="${iconClass}"`;
  const svgContent = Icon[type].replace('<svg', replaceContent);

  let svgColored = $derived(
    color ? svgContent.replaceAll(/fill="(?!none")[^"]+"/gi, `fill="${color}"`) : svgContent
  );
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
{@html svgColored}
