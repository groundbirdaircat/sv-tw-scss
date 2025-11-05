<script lang="ts">
  import type { SlotContent } from '$modules/general/general.model';
  import BreakpointStatus from '$dev/BreakpointStatus.svelte';
  import DevMenu from '$dev/DevMenu.svelte';
  import '../styles/tailwind.css';
  import '../styles/global.scss';

  let {
    children
  }: {
    children: SlotContent;
  } = $props();
</script>

<div class="relative wh-full overflow-clip">
  <div class="wh-full overflow-auto">
    {@render children()}
  </div>

  <BreakpointStatus />
  <DevMenu />
</div>
