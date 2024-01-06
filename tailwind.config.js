const mob = '600px';
const mob1 = '601px';
const tab = '900px';
const tab1 = '901px';
const lap = '1400px';
const lap1 = '1401px';
const dsk = '2200px';
const dsk1 = '2201px';
const wde = '3300px';
const wde1 = '33001px';
const uwd = '4400px';
const uwd1 = '4401px';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,css,scss}'],
  theme: {
    extend: {},
    screens: {
      'before(tablet)': { max: mob },
      'before(laptop)': { max: tab },
      'before(desktop)': { max: lap },
      'before(wide)': { max: dsk },
      'before(ultrawide)': { max: wde },
      'before(superultrawide)': { max: uwd },

      'after(mobile)': { min: mob1 },
      'after(tablet)': { min: tab1 },
      'after(laptop)': { min: lap1 },
      'after(desktop)': { min: dsk1 },
      'after(wide)': { min: wde1 },
      'after(ultrawide)': { min: uwd1 },

      'is(small)': { max: tab },
      'is(medium)': { min: tab1, max: dsk },
      'is(large)': { min: dsk1 },

      'is(mobile)': { max: mob },
      'is(tablet)': { min: mob1, max: tab },
      'is(laptop)': { min: tab1, max: lap },
      'is(desktop)': { min: lap1, max: dsk },
      'is(wide)': { min: dsk1, max: wde },
      'is(ultrawide)': { min: wde1, max: uwd },
      'is(superultrawide)': { min: uwd1 }
    }
  },
  plugins: [
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addUtilities }) => {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center'
        },

        '.flex-align': {
          display: 'flex',
          'align-items': 'center'
        },

        '.flex-justify': {
          display: 'flex',
          'justify-content': 'center'
        },

        '.flex-col': {
          display: 'flex',
          'flex-direction': 'column'
        },

        '.flex-center-col': {
          'flex-direction': 'column',
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center'
        },

        '.flex-align-col': {
          'flex-direction': 'column',
          display: 'flex',
          'align-items': 'center'
        },

        '.flex-justify-col': {
          'flex-direction': 'column',
          display: 'flex',
          'justify-content': 'center'
        },

        '.text-2xs': {
          'font-size': '.6rem',
          'line-height': '.8rem'
        },

        '.text-balance': {
          'text-wrap': 'balance'
        },

        '.backdrop-blur-2xs': {
          'backdrop-filter': 'blur(1px)'
        },

        '.backdrop-blur-xs': {
          'backdrop-filter': 'blur(2px)'
        },

        '.wh-full': {
          width: '100%',
          height: '100%'
        }
      });
    }
  ]
};
