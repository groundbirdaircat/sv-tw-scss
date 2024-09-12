<script lang="ts">
  import DevMenuContent from '$dev/DevMenuContent.svelte';
  import Icon from '$components/general/Icon.svelte';
  import { stopPropagation } from '$actions/events';
  import { lsGet, lsSet } from '$utils/storage';
  import { devState } from './dev-state.svelte';
  import { Color } from '$classes/color';
  import { Config } from './config';

  let devMenuRef = $state() as HTMLDivElement;

  const defaultPosition = { x: 50, y: 50 };

  let isDragging = $state(false);
  const offset = $state({ x: 0, y: 0 });
  let position = $state(lsGet(Config.LS.devMenu.position, defaultPosition));
  let positionBeforeMin = lsGet(Config.LS.devMenu.positionBeforeMin, defaultPosition);
  let isMinimized = $state(lsGet(Config.LS.devMenu.minimized, false));

  let left = $derived(position.x + 'px');
  let top = $derived(position.y + 'px');

  let doubleTapTimeout: number;
  let recentlyTapped = false;
  let doubleTapMs = 200;

  const fn = {
    async toggleMenu() {
      if (!Config.isDevEnvironment) return;

      devState.showDevMenu = !devState.showDevMenu;

      if (recentlyTapped) on.doubleTapTilde();
      else recentlyTapped = true;

      lsSet(Config.LS.devMenu.show, devState.showDevMenu);

      clearTimeout(doubleTapTimeout);
      doubleTapTimeout = window.setTimeout(() => {
        recentlyTapped = false;
      }, doubleTapMs);
    },
    save() {
      const { show, position: pos, minimized, positionBeforeMin: posBeforeMin } = Config.LS.devMenu;
      lsSet(posBeforeMin, positionBeforeMin);
      lsSet(minimized, isMinimized);
      lsSet(show, devState.showDevMenu);
      lsSet(pos, position);
    }
  };

  const on = {
    clickExit() {
      devState.showDevMenu = false;
      fn.save();
    },
    clickMinimize() {
      positionBeforeMin = { ...position };
      position.x = 0;
      position.y = 0;
      isMinimized = true;
      fn.save();
    },
    clickMaximize() {
      position = { ...positionBeforeMin };
      isMinimized = false;
      fn.save();
    },
    keydown(e: KeyboardEvent) {
      Config.isDevEnvironment && e.key == '`' && fn.toggleMenu();
    },
    doubleTapTilde() {
      devState.showDevMenu = true;
      position = { ...defaultPosition };
      isMinimized = false;
      fn.save();
    },
    mousedownTitleBar({ clientX, clientY }: MouseEvent) {
      const { left, top } = devMenuRef.getBoundingClientRect();
      offset.x = left - clientX;
      offset.y = top - clientY;
      isDragging = true;
    },
    mouseupTitleBar() {
      isDragging = false;
    },
    mousemoveBody({ clientX: x, clientY: y }: MouseEvent) {
      if (!isDragging) return;
      isMinimized = false;
      position.x = offset.x + x;
      position.y = offset.y + y;
      fn.save();
    },
    mouseleaveBody() {
      isDragging = false;
    }
  };
</script>

<svelte:body
  onkeydown={on.keydown}
  onmousemove={on.mousemoveBody}
  onmouseleave={on.mouseleaveBody}
/>

{#if Config.isDevEnvironment && devState.showDevMenu}
  <div
    class="absolute z-50 left-0 top-0 bg-black overflow-clip rounded-lg"
    bind:this={devMenuRef}
    style:left
    style:top
  >
    <div
      role="none"
      class="h-6 flex bg-stone-900"
      onmousedown={on.mousedownTitleBar}
      onmouseup={on.mouseupTitleBar}
    >
      {#if isMinimized}
        <button
          class="w-6 ms-auto flex-center opacity-50 hover:opacity-100 transition-opacity"
          onclick={on.clickMaximize}
          use:stopPropagation={'mousedown'}
        >
          <Icon type="maximize" class="h-3" color={Color.white} />
        </button>
      {:else}
        <button
          class="w-6 ms-auto flex-center opacity-30 hover:opacity-100 transition-opacity"
          onclick={on.clickMinimize}
          use:stopPropagation={'mousedown'}
        >
          <span class="font-bold text-white text-2xl pb-2.5"> _ </span>
        </button>
      {/if}

      <button
        class="w-6 flex-center opacity-40 hover:opacity-100 transition-opacity"
        onclick={on.clickExit}
        use:stopPropagation={'mousedown'}
      >
        <Icon type="exit" class="h-3" color={Color.white} />
      </button>
    </div>
    {#if !isMinimized}
      <div class="dev-menu-content p-4 text-white flex-col gap-2 max-h-[40rem] overflow-auto">
        <DevMenuContent />
      </div>
    {/if}
  </div>
{/if}

<style lang="scss">
  .dev-menu-content::-webkit-scrollbar {
    width: 10px;
  }

  .dev-menu-content::-webkit-scrollbar-track {
    background: #222;
  }

  .dev-menu-content::-webkit-scrollbar-thumb {
    background: #444;
  }
</style>
