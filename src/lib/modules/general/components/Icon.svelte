<script lang="ts">
  import type { Icons } from '../general.model';
  import { Icon } from '$modules/general/icon';

  let {
    color,
    type,
    class: iconClass = ''
  }: {
    color?: string;
    type: Icons;
    class?: string;
  } = $props();

  const replaceContent = $derived(`<svg xmlns="http://www.w3.org/2000/svg" class="${iconClass}"`);
  const svgContent = $derived(Icon[type].replace('<svg', replaceContent));

  let svgColored = $derived(
    color ? svgContent.replaceAll(/fill="(?!none")[^"]+"/gi, `fill="${color}"`) : svgContent
  );
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
{@html svgColored}
