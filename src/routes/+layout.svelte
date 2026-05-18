<script lang="ts">
  import DevBreakpointStatus from '$modules/dev/components/DevBreakpointStatus.svelte';
  import type { SlotContent } from '$modules/general/general.model';
  import DevMenu from '$modules/dev/components/DevMenu.svelte';
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

  <DevBreakpointStatus />
  <DevMenu />
</div>
