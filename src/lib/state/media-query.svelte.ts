import { browser } from '$app/environment';

/* eslint-disable prefer-const */

enum Breakpoint {
  mobile = 600,
  tablet = 900,
  laptop = 1400,
  desktop = 2200,
  wide = 3300,
  ultrawide = 4400,
  superultrawide = 99999
}

let _value = $state() as number;

let beforeTablet = $derived(_value < 1);
let beforeLaptop = $derived(_value < 2);
let beforeDesktop = $derived(_value < 3);
let beforeWide = $derived(_value < 4);
let beforeUltrawide = $derived(_value < 5);
let beforeSuperultrawide = $derived(_value < 6);

let afterMobile = $derived(_value > 0);
let afterTablet = $derived(_value > 1);
let afterLaptop = $derived(_value > 2);
let afterDesktop = $derived(_value > 3);
let afterWide = $derived(_value > 4);
let afterUltrawide = $derived(_value > 5);

let isSmall = $derived([0, 1].includes(_value));
let isMedium = $derived([2, 3].includes(_value));
let isLarge = $derived([4, 5, 6].includes(_value));

let isMobile = $derived(_value === 0);
let isTablet = $derived(_value == 1);
let isLaptop = $derived(_value == 2);
let isDesktop = $derived(_value == 3);
let isWide = $derived(_value == 4);
let isUltrawide = $derived(_value == 5);
let isSuperultrawide = $derived(_value == 6);

export class Size {
  static get beforeTablet() {
    return beforeTablet;
  }
  static get beforeLaptop() {
    return beforeLaptop;
  }
  static get beforeDesktop() {
    return beforeDesktop;
  }
  static get beforeWide() {
    return beforeWide;
  }
  static get beforeUltrawide() {
    return beforeUltrawide;
  }
  static get beforeSuperultrawide() {
    return beforeSuperultrawide;
  }

  static get afterMobile() {
    return afterMobile;
  }
  static get afterTablet() {
    return afterTablet;
  }
  static get afterLaptop() {
    return afterLaptop;
  }
  static get afterDesktop() {
    return afterDesktop;
  }
  static get afterWide() {
    return afterWide;
  }
  static get afterUltrawide() {
    return afterUltrawide;
  }

  static get isSmall() {
    return isSmall;
  }
  static get isMedium() {
    return isMedium;
  }
  static get isLarge() {
    return isLarge;
  }

  static get isMobile() {
    return isMobile;
  }
  static get isTablet() {
    return isTablet;
  }
  static get isLaptop() {
    return isLaptop;
  }
  static get isDesktop() {
    return isDesktop;
  }
  static get isWide() {
    return isWide;
  }
  static get isUltrawide() {
    return isUltrawide;
  }
  static get isSuperultrawide() {
    return isSuperultrawide;
  }
}

[
  { max: Breakpoint.mobile },
  { min: Breakpoint.mobile, max: Breakpoint.tablet },
  { min: Breakpoint.tablet, max: Breakpoint.laptop },
  { min: Breakpoint.laptop, max: Breakpoint.desktop },
  { min: Breakpoint.desktop, max: Breakpoint.wide },
  { min: Breakpoint.wide, max: Breakpoint.ultrawide },
  { min: Breakpoint.ultrawide }
].forEach(({ min, max }, index) => {
  if (!browser) return;

  const q = `${max ? `(max-width: ${max}px)` : ''}${min && max ? ' and ' : ''}${min ? `(min-width: ${min + 1}px)` : ''}`;
  const query = window.matchMedia(q);
  query.addEventListener('change', (e: MediaQueryListEvent) => e.matches && (_value = index));
  query.matches && (_value = index);
});
