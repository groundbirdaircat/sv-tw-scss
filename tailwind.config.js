/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,css,scss}'],
  theme: {
    extend: {}
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
