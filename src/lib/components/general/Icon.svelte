<script lang="ts">
  import type { Icons } from '$models';
  import { Icon } from '$assets';

  export let color = '';
  export let type: Icons;

  const replaceContent = `<svg xmlns="http://www.w3.org/2000/svg" class="${$$props.class || ''}"`;
  const svgContent = Icon[type].replace('<svg', replaceContent);

  $: svgColored = color
    ? svgContent.replaceAll(/fill="(?!none")[^"]+"/gi, `fill="${color}"`)
    : svgContent;
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
{@html svgColored}
