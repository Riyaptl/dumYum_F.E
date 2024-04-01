// module.exports = {
//   content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {
//       animation: {
//         'fade-in': 'fadeIn 0.3s ease-in-out',
//         'fade-out': 'fadeOut 0.3s ease-in-out',
//         'fade-in-zoom-out': 'fade-in-zoom-out 0.5s ease-out',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         fadeOut: {
//           '0%': { opacity: '1' },
//           '100%': { opacity: '0' },
//         },
//         'fade-in-zoom-out': {
//           '0%': {
//             opacity: '0',
//             transform: 'scale(0.5)',
//           },
//           '50%': {
//             opacity: '0.5',
//             transform: 'scale(1.05)',
//           },
//           '100%': {
//             opacity: '1',
//             transform: 'scale(1)',
//           },
//         },
//       },
//     },
//   },
//   plugins: [],
// };



// tailwind.config.css

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transitionDuration: {
        '500': '500ms',
      },
      keyframes: {
        'fade-in-zoom-out': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        'fade-in-zoom-out': 'fade-in-zoom-out 500ms ease-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
