<script lang="ts">
  import { Size } from '$lib/state/media-query.svelte';
  import Icon from '$components/general/Icon.svelte';
  import { devState } from './dev-state.svelte';

  let innerWidth = $state<number>();

  const color = {
    tw: '#42c0f8',
    sc: '#cf6e9e',
    sv: '#ff3737'
  };
</script>

<svelte:window bind:innerWidth />

{#snippet row(scss: string, tailwind: string, svelte: Size)}
  <div class="contents group">
    <div class="w-full flex-align justify-end group-hover:bg-neutral-900 py-0.5 rounded-l-lg">
      <div class="ps-2 pe-4">
        {scss}
      </div>
    </div>

    <div class="wh-full group-hover:bg-neutral-900">
      <div class="wh-full flex-center px-2">
        <div class="hidden {tailwind}">
          <Icon type="check" class="h-4" color={color.tw} />
        </div>
      </div>
    </div>

    <div class="wh-full group-hover:bg-neutral-900">
      <div class="wh-full flex-center px-2">
        <div class="hidden {scss}">
          <Icon type="check" class="h-4" color={color.sc} />
        </div>
      </div>
    </div>

    <div class="wh-full group-hover:bg-neutral-900 rounded-r-lg">
      <div class="wh-full flex-center px-2">
        {#if svelte}
          <Icon type="check" class="h-4" color={color.sv} />
        {/if}
      </div>
    </div>
  </div>
{/snippet}

{#if devState.showBreakpointStatus}
  <div
    class="absolute z-[999] left-4 top-4 px-4 py-8 rounded-2xl grid grid-cols-[auto_auto_auto_auto] justify-items-center text-sm text-neutral-300 bg-black select-none"
  >
    <div class="flex-align justify-end pb-4 w-full text-right pe-4 font-bold">
      <div>width:</div>

      <div class="w-14">
        {innerWidth}px
      </div>
    </div>

    <div class="flex-center h-5 w-5">
      <svg viewBox="0 0 54 33" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#38bdf8"
          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
        />
      </svg>
    </div>

    <div class="flex-center h-4 w-4">
      <svg viewBox="0 0 23.522959 27.972539" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m 11.932847,16.703099 c -0.481,0.221 -1.008,0.509 -2.0629997,1.088 -0.4,0.225 -0.818,0.45 -1.207,0.662 -0.027,-0.027 -0.055,-0.061 -0.082,-0.089 -2.087,-2.23 -5.947,-3.805 -5.783,-6.8 0.061,-1.091 0.436,-3.9549997 7.4129997,-7.4329997 5.742,-2.83 10.311,-2.046 11.1,-0.307 1.134,2.479 -2.449,7.0919997 -8.379,7.7609997 a 4.469,4.469 0 0 1 -3.7509997,-0.948 c -0.314,-0.341 -0.361,-0.361 -0.477,-0.293 -0.191,0.1 -0.068,0.409 0,0.586 a 3.5,3.5 0 0 0 2.1409997,1.684 11.4,11.4 0 0 0 6.956,-0.689 c 3.594,-1.391 6.4,-5.2579997 5.578,-8.4999997 -0.825,-3.28700002 -6.281,-4.37100002 -11.443,-2.53700002 A 26,26 0 0 0 3.1458473,5.9350993 c -2.84400003,2.66 -3.29400003,4.9719997 -3.11000003,5.9399997 0.662,3.437 5.40000003,5.674 7.30000003,7.331 -0.1,0.055 -0.184,0.1 -0.259,0.143 -0.948,0.471 -4.562,2.36 -5.463,4.358 -1.02300003,2.264 0.164,3.887 0.948,4.105 a 5.832,5.832 0 0 0 6.281,-2.544 6.3,6.3 0 0 0 0.559,-5.8 5.03,5.03 0 0 1 0.7159997,-0.477 c 0.484,-0.286 0.945,-0.568 1.354,-0.786 v 0 a 10.475,10.475 0 0 1 4.475,-0.989 c 3.246,0.382 3.887,2.407 3.764,3.26 a 2.157,2.157 0 0 1 -1.03,1.459 c -0.225,0.143 -0.3,0.191 -0.28,0.293 0.027,0.15 0.136,0.143 0.327,0.116 a 2.535,2.535 0 0 0 1.766,-2.257 c 0.1,-2 -1.807,-4.194 -5.183,-4.174 a 7.753,7.753 0 0 0 -2.946,0.587 q -0.225,0.093 -0.437,0.2 z m -4.8249997,7.839 c -1.078,1.173 -2.578,1.616 -3.226,1.241 -0.7,-0.4 -0.423,-2.135 0.9,-3.376 a 17.18,17.18 0 0 1 2.53,-1.889 c 0.157,-0.1 0.389,-0.232 0.668,-0.4 0.048,-0.027 0.075,-0.041 0.075,-0.041 l 0.164,-0.1 a 4.658,4.658 0 0 1 -1.111,4.565 z"
          style="fill:#cd6799"
        />
      </svg>
    </div>

    <div class="flex-center h-4 w-4">
      <svg viewBox="0 0 413.97837 497.12887" xmlns="http://www.w3.org/2000/svg">
        <path
          style="fill:#ff2a2a;stroke-width:1.06085"
          d="M 129.54698,495.72863 C 66.12861,485.6155 15.138165,438.08163 2.809105,377.58211 -4.004666,344.1462 1.753452,307.88224 18.166367,280.86363 l 3.62781,-5.97197 -4.271323,-9.90732 C -6.757974,208.66442 8.417086,143.10717 54.41505,105.6078 65.08091,96.91259 187.18626,19.381566 199.56322,13.445702 220.95835,3.1848732 240.72408,-0.75672077 266.39688,0.11806023 284.92437,0.74935923 293.6316,2.2647812 310.04491,7.7145802 361.66357,24.853826 400.67438,67.96269 411.16925,119.46217 c 6.81377,33.4359 1.05574,69.69987 -15.35718,96.71847 l -3.62779,5.97198 4.27122,9.90732 c 24.28091,56.31992 9.10585,121.87716 -36.8921,159.37653 -10.66585,8.69521 -132.77127,86.22622 -145.14823,92.16209 -12.05536,5.78158 -25.26622,9.86783 -39.2199,12.1311 -11.50486,1.86601 -33.94317,1.86546 -45.64829,-8e-4 z m 40.10707,-56.45145 c 8.46225,-1.86376 18.22991,-5.67618 24.43701,-9.53802 35.71877,-22.22301 123.57408,-78.88694 127.59182,-82.29275 12.12721,-10.28013 21.7316,-25.24374 26.04484,-40.57742 3.40056,-12.08933 3.39587,-31.50401 -0.0103,-43.49493 -13.83736,-48.7091 -63.66416,-77.61079 -112.3555,-65.17106 -10.86779,2.7765 -18.71375,6.92954 -45.77987,24.23217 -13.07489,8.35844 -25.35215,15.85717 -27.28285,16.66386 -4.16055,1.73841 -13.8887,1.92472 -18.09619,0.34658 -17.67082,-6.62799 -23.84864,-28.20953 -11.64457,-40.6791 5.37764,-5.49462 122.03852,-79.89425 127.74898,-81.47098 9.03734,-2.49532 20.35252,1.01348 26.74429,8.29336 4.88235,5.56073 6.72776,10.51944 6.69498,17.99015 l -0.0286,6.44633 4.90431,1.30608 c 12.30679,3.2775 34.05764,14.24546 45.35046,22.86816 2.71981,2.07674 5.28432,3.77588 5.69892,3.77588 1.2887,0 5.25544,-14.95016 6.40012,-24.12142 3.40669,-27.29554 -9.06256,-57.13148 -31.93272,-76.40745 -26.2938,-22.16146 -62.30409,-28.000167 -94.06735,-15.25207 -6.57691,2.63965 -0.19899,-1.28949 -74.00358,45.59006 -55.79155,35.438 -59.99077,38.31911 -68.98738,47.33257 -10.85808,10.87853 -16.75216,20.81625 -20.8287,35.11814 -3.4144,11.97894 -3.41035,31.39822 0.009,43.43489 13.83735,48.70909 63.66407,77.61079 112.35552,65.17107 10.82403,-2.76533 18.63163,-6.89609 45.87653,-24.2717 13.12804,-8.37251 25.40531,-15.86811 27.28286,-16.65689 4.07128,-1.71045 13.82287,-1.88059 17.99949,-0.31402 17.67082,6.62797 23.84864,28.20952 11.64458,40.6791 -5.37765,5.49461 -122.03851,79.89423 -127.74899,81.47097 -9.03734,2.49533 -20.35252,-1.01349 -26.74428,-8.29336 -4.88244,-5.56073 -6.72777,-10.51943 -6.69499,-17.99015 l 0.0286,-6.44633 -4.90432,-1.30609 c -12.30615,-3.27749 -34.057,-14.24545 -45.34982,-22.86815 -2.71981,-2.07673 -5.28431,-3.77588 -5.69892,-3.77588 -1.28869,0 -5.25543,14.95016 -6.40012,24.12143 -4.26565,34.1778 16.12744,70.80759 48.83225,87.71164 20.18679,10.4339 40.9929,13.20364 62.91532,8.37533 z"
        />
      </svg>
    </div>

    {@render row('beforeTablet', 'beforeTablet:block', Size.beforeTablet)}
    {@render row('beforeLaptop', 'beforeLaptop:block', Size.beforeLaptop)}
    {@render row('beforeDesktop', 'beforeDesktop:block', Size.beforeDesktop)}
    {@render row('beforeWide', 'beforeWide:block', Size.beforeWide)}
    {@render row('beforeUltrawide', 'beforeUltrawide:block', Size.beforeUltrawide)}
    {@render row('beforeSuperultrawide', 'beforeSuperultrawide:block', Size.beforeSuperultrawide)}
    {@render row('afterMobile', 'afterMobile:block', Size.afterMobile)}
    {@render row('afterTablet', 'afterTablet:block', Size.afterTablet)}
    {@render row('afterLaptop', 'afterLaptop:block', Size.afterLaptop)}
    {@render row('afterDesktop', 'afterDesktop:block', Size.afterDesktop)}
    {@render row('afterWide', 'afterWide:block', Size.afterWide)}
    {@render row('afterUltrawide', 'afterUltrawide:block', Size.afterUltrawide)}
    {@render row('isSmall', 'isSmall:block', Size.isSmall)}
    {@render row('isMedium', 'isMedium:block', Size.isMedium)}
    {@render row('isLarge', 'isLarge:block', Size.isLarge)}
    {@render row('isMobile', 'isMobile:block', Size.isMobile)}
    {@render row('isTablet', 'isTablet:block', Size.isTablet)}
    {@render row('isLaptop', 'isLaptop:block', Size.isLaptop)}
    {@render row('isDesktop', 'isDesktop:block', Size.isDesktop)}
    {@render row('isWide', 'isWide:block', Size.isWide)}
    {@render row('isUltrawide', 'isUltrawide:block', Size.isUltrawide)}
    {@render row('isSuperultrawide', 'isSuperultrawide:block', Size.isSuperultrawide)}
  </div>
{/if}

<style lang="scss">
  @include Size(beforeTablet) {
    .beforeTablet {
      display: block;
    }
  }
  @include Size(beforeLaptop) {
    .beforeLaptop {
      display: block;
    }
  }
  @include Size(beforeDesktop) {
    .beforeDesktop {
      display: block;
    }
  }
  @include Size(beforeWide) {
    .beforeWide {
      display: block;
    }
  }
  @include Size(beforeUltrawide) {
    .beforeUltrawide {
      display: block;
    }
  }
  @include Size(beforeSuperultrawide) {
    .beforeSuperultrawide {
      display: block;
    }
  }
  @include Size(afterMobile) {
    .afterMobile {
      display: block;
    }
  }
  @include Size(afterTablet) {
    .afterTablet {
      display: block;
    }
  }
  @include Size(afterLaptop) {
    .afterLaptop {
      display: block;
    }
  }
  @include Size(afterDesktop) {
    .afterDesktop {
      display: block;
    }
  }
  @include Size(afterWide) {
    .afterWide {
      display: block;
    }
  }
  @include Size(afterUltrawide) {
    .afterUltrawide {
      display: block;
    }
  }
  @include Size(isSmall) {
    .isSmall {
      display: block;
    }
  }
  @include Size(isMedium) {
    .isMedium {
      display: block;
    }
  }
  @include Size(isLarge) {
    .isLarge {
      display: block;
    }
  }
  @include Size(isMobile) {
    .isMobile {
      display: block;
    }
  }
  @include Size(isTablet) {
    .isTablet {
      display: block;
    }
  }
  @include Size(isLaptop) {
    .isLaptop {
      display: block;
    }
  }
  @include Size(isDesktop) {
    .isDesktop {
      display: block;
    }
  }
  @include Size(isWide) {
    .isWide {
      display: block;
    }
  }
  @include Size(isUltrawide) {
    .isUltrawide {
      display: block;
    }
  }
  @include Size(isSuperultrawide) {
    .isSuperultrawide {
      display: block;
    }
  }
</style>
