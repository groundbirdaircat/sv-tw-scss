<script lang="ts">
  import { devState } from './dev-state.svelte';
  import { lsSet } from '$utils/storage';
  import { Config } from './config';

  const on = {
    clickTemp() {},
    clickUIDebug() {
      devState.showUIDebug = !devState.showUIDebug;
      lsSet(Config.LS.devUIDebug.show, devState.showUIDebug);
    }
  };
</script>

<div class="flex-align gap-2 text-xs">
  TEMP:
  <button onclick={on.clickTemp}> TEMP </button>

  <div class="flex-align gap-2 text-xs ms-auto">
    UI Debug:
    <button onclick={on.clickUIDebug}>{devState.showUIDebug ? 'On' : 'Off'}</button>
  </div>
</div>

<style lang="postcss">
  @reference "../../styles/tailwind.css";

  button {
    @apply bg-stone-800 hover:bg-stone-700 px-3 py-1 rounded-lg text-sm w-fit;
  }
</style>
