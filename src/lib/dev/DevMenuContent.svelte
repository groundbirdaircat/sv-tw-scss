<script lang="ts">
  import { devState } from './dev-state.svelte';

  const on = {
    clickTemp() {},
    clickUIDebug() {
      devState.showUIDebug = !devState.showUIDebug;
    },
    clickBreakpointStatus() {
      devState.showBreakpointStatus = !devState.showBreakpointStatus;
    }
  };
</script>

<div class="flex-align gap-2 text-xs">
  Temp:
  <button onclick={on.clickTemp}> Temp </button>

  <div class="flex-align gap-2 text-xs ms-auto">
    UI Debug:
    <button onclick={on.clickUIDebug}>{devState.showUIDebug ? 'On' : 'Off'}</button>
  </div>
</div>

<div class="flex-align gap-2 text-xs">
  <div class="flex-align gap-2 text-xs">
    Breakpoint Status:
    <button onclick={on.clickBreakpointStatus}
      >{devState.showBreakpointStatus ? 'On' : 'Off'}</button
    >
  </div>
</div>

<style lang="postcss">
  @reference "../../styles/tailwind.css";

  button {
    @apply bg-stone-800 hover:bg-stone-700 px-3 py-1 rounded-lg text-sm w-fit;
  }
</style>
