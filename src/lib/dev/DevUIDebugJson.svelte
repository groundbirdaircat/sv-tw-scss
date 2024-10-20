<script lang="ts">
  import { devState } from './dev-state.svelte';

  let {
    show = true,
    data
  }: {
    data?: unknown;
    show?: boolean;
  } = $props();
</script>

{#if devState.showUIDebug && show}
  <div class="whitespace-pre-wrap text-xs font-medium">
    {#if data === undefined}
      undefined
    {:else}
      {JSON.stringify(data, undefined, 4)}
    {/if}
  </div>
{/if}
