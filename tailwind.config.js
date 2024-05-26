module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      top: {
        '2/5': '50%',
      },
      transitionDuration: {
        '500': '500ms',
      },
      keyframes: {
        fadeInZoomOut: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInOut: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        fadeInZoomOut: 'fade-in-zoom-out 500ms ease-out',
        fadeIn: 'fadeIn 0.5s ease-out',
        fadeInOut: 'fadeInOut 1s ease-in-out',
      },
    },
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [],
}
