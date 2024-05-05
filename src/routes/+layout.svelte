<script lang="ts">
  import type { SlotContent } from '$models/general';
  import '../styles/global.scss';
  import '../styles/tailwind.scss';

  let {
    children
  }: {
    children: SlotContent;
  } = $props();
</script>

{@render children()}
