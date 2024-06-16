import React from 'react'

const LogoSvg = () => {
  return (
    // <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    //    viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve">
    // <style type="text/css">
    //    st0: { fill: "#FFFFFF" },
    //     st1: { fill: "#3F5AA9" },
    //     st2: { fill: "#91278D" },
    //     st3: { fill: "url(#SVGID_1_)" },
    //     st4: { fill: "url(#SVGID_2_)" },
    //     st5: { fill: "url(#SVGID_3_)" },
    //     st6: { fill: "url(#SVGID_4_)" },
    //     st7: { fill: "url(#SVGID_5_)" },
    //     st8: { fill: "url(#SVGID_6_)" },
    //     st9: { fill: "url(#SVGID_7_)" },
    //     st10: { fill: "url(#SVGID_8_)" },
    //     st11: { fill: "url(#SVGID_9_)" },
    //     st12: { fill: "url(#SVGID_10_)" },
    //     st13: { fill: "url(#SVGID_11_)" },
    //     st14: { fill: "url(#SVGID_12_)" },
    //     st15: { fill: "url(#SVGID_13_)" },
    //     st16: { fill: "url(#SVGID_14_)" }
    // </style>
    // <g>
    //   <g>
    //     <g>
    //       <g>
    //         <g>
    //           <path class="st0" d="M491.09,509.78c-4.15,10.62-9.26,15.93-15.33,15.93c-6.49,0-9.73-5.61-9.73-16.82
    //             c0-2.56,0.2-8.51,0.61-17.83c0.4-9.52,0.61-15.46,0.61-17.83c0-9.79-2.43-17.25-7.3-22.39c-4.86-5.13-11.82-7.7-20.87-7.7
    //             c-13.71,0-23.47,6.15-29.27,18.44c-1.56-5.87-4.65-10.41-9.27-13.62c-4.63-3.21-10.45-4.82-17.48-4.82
    //             c-13.57,0-23.26,5.95-29.07,17.83v-11.14c0-1.55-1.03-2.78-3.09-3.7c-2.06-0.91-4.61-1.36-7.65-1.36
    //             c-3.92,0-7.6,0.77-11.04,2.33v62.5c-4.2,10.74-9.39,16.11-15.58,16.11c-6.62,0-9.93-5.03-9.93-15.1v-60.78
    //             c0-1.55-1.1-2.78-3.29-3.7c-2.2-0.91-4.99-1.36-8.36-1.36c-4.19,0-7.9,0.77-11.14,2.33v49.53c-0.21,3.92-0.85,8.01-1.93,12.26
    //             c-1.08,4.12-3.28,7.94-6.58,11.45c-3.59,3.58-7.94,5.37-13.07,5.37c-10.13,0-15.2-7.33-15.2-21.98v-53.9
    //             c0-1.55-1.1-2.78-3.29-3.7c-2.2-0.91-4.95-1.36-8.26-1.36c-4.19,0-8,0.77-11.45,2.33v60.17c0,0.74,0.01,1.46,0.04,2.17
    //             c-4.23,10.85-9.51,16.27-15.82,16.27c-6.48,0-9.72-5.1-9.72-15.3V406.17c0-1.55-1.08-2.77-3.25-3.65
    //             c-2.16-0.88-4.96-1.31-8.4-1.31c-4.19,0-7.91,0.77-11.15,2.33v46.9c-7.02-4.86-14.45-7.3-22.28-7.3
    //             c-12.16,0-21.77,4.4-28.83,13.17c-7.05,8.78-10.58,20.84-10.58,36.17c0,14.52,3.19,25.9,9.57,34.14
    //             c6.38,8.24,15.18,12.36,26.39,12.36c14.66,0,24.45-6.92,29.38-20.77c0.67,6.55,3.11,11.65,7.29,15.3
    //             c4.19,3.65,9.59,5.47,16.21,5.47c9.86,0,17.65-4.22,23.35-12.66c0.4-0.59,0.8-1.21,1.19-1.86c1.16,2.43,2.64,4.57,4.42,6.42
    //             c5.19,5.4,12.76,8.1,22.69,8.1c16.21,0,26.78-7.33,31.71-21.98c2.02,14.65,10.33,21.98,24.92,21.98
    //             c8.5,0,15.49-3.26,20.95-9.78v4.21c0,1.35,1.16,2.48,3.49,3.39c2.33,0.91,5.12,1.37,8.36,1.37c3.98,0,7.7-0.78,11.14-2.33
    //             v-55.52c0-6.34,1.52-11.81,4.56-16.41c3.18-4.99,7.9-7.49,14.18-7.49c9.53,0,14.29,6.72,14.29,20.16v56.83
    //             c0,1.35,1.16,2.48,3.49,3.39c2.33,0.91,5.12,1.37,8.36,1.37c3.99,0,7.7-0.78,11.14-2.33v-55.52c0-6.68,1.66-12.34,4.97-16.96
    //             c3.31-4.63,7.97-6.94,13.98-6.94c9.52,0,14.28,6.65,14.28,19.95c0,2.17-0.2,7.6-0.61,16.31c-0.4,8.72-0.6,14.39-0.6,17.02
    //             c0,9.93,2.29,17.29,6.89,22.09c4.59,4.79,11,7.19,19.24,7.19c10.2,0,18.07-3.95,23.61-11.85c0.53-0.74,1.04-1.52,1.55-2.35
    //             C492.48,520.64,491.33,515.64,491.09,509.78z M175.83,500.38c0,7.5-1.74,13.59-5.21,18.29c-3.48,4.69-8.06,7.04-13.73,7.04
    //             c-6.15,0-10.93-3.01-14.34-9.02c-3.41-6.01-5.11-14.42-5.11-25.22c0-11.48,2.01-20.4,6.03-26.75c4.01-6.34,9.6-9.52,16.76-9.52
    //             c6.15,0,11.35,2.13,15.6,6.38V500.38z"/>
    //         </g>
    //         <g>
    //           <path class="st1" d="M491.09,509.78c-4.15,10.62-9.26,15.93-15.33,15.93c-6.49,0-9.73-5.61-9.73-16.82
    //             c0-2.56,0.2-8.51,0.61-17.83c0.4-9.52,0.61-15.46,0.61-17.83c0-9.79-2.43-17.25-7.3-22.39c-4.86-5.13-11.82-7.7-20.87-7.7
    //             c-13.71,0-23.47,6.15-29.27,18.44c-1.56-5.87-4.65-10.41-9.27-13.62c-4.63-3.21-10.45-4.82-17.48-4.82
    //             c-13.57,0-23.26,5.95-29.07,17.83v-11.14c0-1.55-1.03-2.78-3.09-3.7c-2.06-0.91-4.61-1.36-7.65-1.36
    //             c-3.92,0-7.6,0.77-11.04,2.33v62.5c-4.2,10.74-9.39,16.11-15.58,16.11c-6.62,0-9.93-5.03-9.93-15.1v-60.78
    //             c0-1.55-1.1-2.78-3.29-3.7c-2.2-0.91-4.99-1.36-8.36-1.36c-4.19,0-7.9,0.77-11.14,2.33v49.53c-0.21,3.92-0.85,8.01-1.93,12.26
    //             c-1.08,4.12-3.28,7.94-6.58,11.45c-3.59,3.58-7.94,5.37-13.07,5.37c-10.13,0-15.2-7.33-15.2-21.98v-53.9
    //             c0-1.55-1.1-2.78-3.29-3.7c-2.2-0.91-4.95-1.36-8.26-1.36c-4.19,0-8,0.77-11.45,2.33v60.17c0,0.74,0.01,1.46,0.04,2.17
    //             c-4.23,10.85-9.51,16.27-15.82,16.27c-6.48,0-9.72-5.1-9.72-15.3V406.17c0-1.55-1.08-2.77-3.25-3.65
    //             c-2.16-0.88-4.96-1.31-8.4-1.31c-4.19,0-7.91,0.77-11.15,2.33v46.9c-7.02-4.86-14.45-7.3-22.28-7.3
    //             c-12.16,0-21.77,4.4-28.83,13.17c-7.05,8.78-10.58,20.84-10.58,36.17c0,14.52,3.19,25.9,9.57,34.14
    //             c6.38,8.24,15.18,12.36,26.39,12.36c14.66,0,24.45-6.92,29.38-20.77c0.67,6.55,3.11,11.65,7.29,15.3
    //             c4.19,3.65,9.59,5.47,16.21,5.47c9.86,0,17.65-4.22,23.35-12.66c0.4-0.59,0.8-1.21,1.19-1.86c1.16,2.43,2.64,4.57,4.42,6.42
    //             c5.19,5.4,12.76,8.1,22.69,8.1c16.21,0,26.78-7.33,31.71-21.98c2.02,14.65,10.33,21.98,24.92,21.98
    //             c8.5,0,15.49-3.26,20.95-9.78v4.21c0,1.35,1.16,2.48,3.49,3.39c2.33,0.91,5.12,1.37,8.36,1.37c3.98,0,7.7-0.78,11.14-2.33
    //             v-55.52c0-6.34,1.52-11.81,4.56-16.41c3.18-4.99,7.9-7.49,14.18-7.49c9.53,0,14.29,6.72,14.29,20.16v56.83
    //             c0,1.35,1.16,2.48,3.49,3.39c2.33,0.91,5.12,1.37,8.36,1.37c3.99,0,7.7-0.78,11.14-2.33v-55.52c0-6.68,1.66-12.34,4.97-16.96
    //             c3.31-4.63,7.97-6.94,13.98-6.94c9.52,0,14.28,6.65,14.28,19.95c0,2.17-0.2,7.6-0.61,16.31c-0.4,8.72-0.6,14.39-0.6,17.02
    //             c0,9.93,2.29,17.29,6.89,22.09c4.59,4.79,11,7.19,19.24,7.19c10.2,0,18.07-3.95,23.61-11.85c0.53-0.74,1.04-1.52,1.55-2.35
    //             C492.48,520.64,491.33,515.64,491.09,509.78z M175.83,500.38c0,7.5-1.74,13.59-5.21,18.29c-3.48,4.69-8.06,7.04-13.73,7.04
    //             c-6.15,0-10.93-3.01-14.34-9.02c-3.41-6.01-5.11-14.42-5.11-25.22c0-11.48,2.01-20.4,6.03-26.75c4.01-6.34,9.6-9.52,16.76-9.52
    //             c6.15,0,11.35,2.13,15.6,6.38V500.38z"/>
    //         </g>
    //       </g>
    //       <g>
    //         <path class="st2" d="M885.86,463.39c0,6.31-3.26,12.13-9.57,12.13c-6.31,0-11.39-5.81-11.39-12.13s5.08-11.29,11.39-11.29
    //           C882.6,452.1,885.86,457.08,885.86,463.39z"/>
    //       </g>
    //       <g>
    //         <path class="st1" d="M168.34,423.17c0,3.16-2.62,5.56-4.69,7.63s-4.47,3.64-7.63,3.64c-3.16,0-6.22-0.91-8.29-2.98
    //           s-2.78-5.13-2.78-8.29c0-3.16,0.8-6.13,2.87-8.19s5.04-3.87,8.19-3.87c3.16,0,5.76,2.18,7.82,4.24S168.34,420.01,168.34,423.17z
    //           "/>
    //       </g>
    //       <g>
    //         <path class="st2" d="M609.62,552.87c0,6.31-4.31,12.35-10.63,12.35c-6.31,0-11.44-6.03-11.44-12.35
    //           c0-6.31,5.13-10.66,11.44-10.66C605.31,542.21,609.62,546.56,609.62,552.87z"/>
    //       </g>
    //     </g>
    //     <path class="st2" d="M871.39,484.88c-4.79,27.22-12.05,40.83-21.78,40.83c-6.48,0-9.72-5.61-9.72-16.82c0-2.56,0.2-8.51,0.6-17.83
    //       c0.41-9.52,0.61-15.46,0.61-17.83c0-9.79-2.43-17.25-7.29-22.39c-4.86-5.13-11.82-7.7-20.87-7.7c-13.71,0-23.47,6.15-29.28,18.44
    //       c-1.55-5.87-4.64-10.41-9.27-13.62c-4.62-3.21-10.45-4.82-17.47-4.82c-13.58,0-23.27,5.95-29.08,17.83v-11.14
    //       c0-1.55-1.03-2.78-3.09-3.7c-2.06-0.91-4.61-1.36-7.65-1.36c-3.91,0-7.59,0.77-11.04,2.33v62.5
    //       c-4.19,10.74-9.39,16.11-15.58,16.11c-6.62,0-9.93-5.03-9.93-15.1v-60.78c0-1.55-1.09-2.78-3.29-3.7
    //       c-2.19-0.91-4.98-1.36-8.36-1.36c-4.18,0-7.9,0.77-11.14,2.33v49.53c-0.2,3.92-0.84,8.01-1.92,12.26
    //       c-1.09,4.12-3.28,7.94-6.59,11.45c-3.58,3.58-7.94,5.37-13.07,5.37c-10.13,0-15.19-7.33-15.19-21.98v-53.9
    //       c0-1.55-1.1-2.78-3.3-3.7c-2.19-0.91-4.94-1.36-8.25-1.36c-4.19,0-8.01,0.77-11.45,2.33v58.04
    //       c-5.44,11.12-13.57,19.76-24.39,25.94v-81.25c0-1.55-1.1-2.78-3.3-3.7c-2.19-0.91-4.98-1.36-8.35-1.36
    //       c-4.19,0-7.91,0.77-11.15,2.33v49.53c-0.2,3.92-0.84,8.01-1.92,12.26c-1.08,4.12-3.28,7.94-6.59,11.45
    //       c-3.58,3.58-7.93,5.37-13.07,5.37c-10.13,0-15.19-7.33-15.19-21.98v-53.9c0-1.55-1.1-2.78-3.29-3.7c-2.2-0.91-4.95-1.36-8.26-1.36
    //       c-4.19,0-8,0.77-11.45,2.33v60.17c0,0.85,0.02,1.69,0.06,2.51c0.24,5.86,1.39,10.86,3.44,15c1.12,2.27,2.5,4.28,4.15,6.04
    //       c5.1,5.44,12.38,8.16,21.83,8.16c15.47,0,25.9-7.06,31.31-21.17v22.39l-11.25,3.74c-8.58,3.04-14.86,5.81-18.84,8.31
    //       c-4.05,2.97-7.14,5.94-9.27,8.92c-2.13,2.97-3.19,6.51-3.19,10.63c0,6.28,2.48,11.23,7.44,14.84c4.97,3.62,11.64,5.42,20.01,5.42
    //       c11.14,0,20.08-3.21,26.8-9.62c6.72-6.42,10.08-14.96,10.08-25.63v-13.88c10.82-5.55,19.55-13.05,26.19-22.51
    //       c1.29,4.15,3.29,7.64,6,10.46c5.2,5.4,12.77,8.1,22.69,8.1c16.21,0,26.78-7.33,31.71-21.98c2.03,14.65,10.33,21.98,24.92,21.98
    //       c8.51,0,15.5-3.26,20.95-9.78v4.21c0,1.35,1.17,2.48,3.5,3.39c2.33,0.91,5.11,1.37,8.36,1.37c3.98,0,7.69-0.78,11.14-2.33v-55.52
    //       c0-6.34,1.52-11.81,4.56-16.41c3.17-4.99,7.9-7.49,14.18-7.49c9.52,0,14.28,6.72,14.28,20.16v56.83c0,1.35,1.17,2.48,3.5,3.39
    //       c2.33,0.91,5.12,1.37,8.36,1.37c3.98,0,7.7-0.78,11.14-2.33v-55.52c0-6.68,1.65-12.34,4.96-16.96c3.31-4.63,7.97-6.94,13.98-6.94
    //       c9.53,0,14.29,6.65,14.29,19.95c0,2.17-0.2,7.6-0.61,16.31c-0.4,8.72-0.61,14.39-0.61,17.02c0,9.93,2.3,17.29,6.89,22.09
    //       c4.59,4.79,11.01,7.19,19.25,7.19c10.2,0,18.07-3.95,23.6-11.85c5.88-8.24,10.37-21.85,13.48-40.83
    //       C878.62,485.36,875.65,484.88,871.39,484.88z M551.82,564.31c0,5.67-1.42,10.26-4.26,13.77c-2.84,3.51-6.55,5.27-11.14,5.27
    //       c-3.52,0-6.32-1.03-8.41-3.09c-2.1-2.06-3.14-4.95-3.14-8.66c0-5.13,1.99-9.15,5.98-12.06c3.98-2.9,10.97-5.94,20.97-9.11V564.31z
    //       "/>
    //   </g>
    //   <g>
    //     <g>
    //       <g>
    //         <g>
    //            <radialGradient id="SVGID_1_" cx="500" cy="496.6345" r="281.0626" gradientUnits="userSpaceOnUse">
    //           <stop offset="0" style={{ stopColor: '#C5AF74' }} />
    //           <stop offset="0.2423" style={{ stopColor: '#CEBE86' }} />
    //           <stop offset="0.5165" style={{ stopColor: '#D8CE9B' }} />
    //           <stop offset="1" style={{ stopColor: '#B79E60' }} />
    //         </radialGradient>
    //           <path class="st3" d="M491.09,509.78c-4.15,10.62-9.26,15.93-15.33,15.93c-6.49,0-9.73-5.61-9.73-16.82
    //             c0-2.56,0.2-8.51,0.61-17.83c0.4-9.52,0.61-15.46,0.61-17.83c0-9.79-2.43-17.25-7.3-22.39c-4.86-5.13-11.82-7.7-20.87-7.7
    //             c-13.71,0-23.47,6.15-29.27,18.44c-1.56-5.87-4.65-10.41-9.27-13.62c-4.63-3.21-10.45-4.82-17.48-4.82
    //             c-13.57,0-23.26,5.95-29.07,17.83v-11.14c0-1.55-1.03-2.78-3.09-3.7c-2.06-0.91-4.61-1.36-7.65-1.36
    //             c-3.92,0-7.6,0.77-11.04,2.33v62.5c-4.2,10.74-9.39,16.11-15.58,16.11c-6.62,0-9.93-5.03-9.93-15.1v-60.78
    //             c0-1.55-1.1-2.78-3.29-3.7c-2.2-0.91-4.99-1.36-8.36-1.36c-4.19,0-7.9,0.77-11.14,2.33v49.53c-0.21,3.92-0.85,8.01-1.93,12.26
    //             c-1.08,4.12-3.28,7.94-6.58,11.45c-3.59,3.58-7.94,5.37-13.07,5.37c-10.13,0-15.2-7.33-15.2-21.98v-53.9
    //             c0-1.55-1.1-2.78-3.29-3.7c-2.2-0.91-4.95-1.36-8.26-1.36c-4.19,0-8,0.77-11.45,2.33v60.17c0,0.74,0.01,1.46,0.04,2.17
    //             c-4.23,10.85-9.51,16.27-15.82,16.27c-6.48,0-9.72-5.1-9.72-15.3V406.17c0-1.55-1.08-2.77-3.25-3.65
    //             c-2.16-0.88-4.96-1.31-8.4-1.31c-4.19,0-7.91,0.77-11.15,2.33v46.9c-7.02-4.86-14.45-7.3-22.28-7.3
    //             c-12.16,0-21.77,4.4-28.83,13.17c-7.05,8.78-10.58,20.84-10.58,36.17c0,14.52,3.19,25.9,9.57,34.14
    //             c6.38,8.24,15.18,12.36,26.39,12.36c14.66,0,24.45-6.92,29.38-20.77c0.67,6.55,3.11,11.65,7.29,15.3
    //             c4.19,3.65,9.59,5.47,16.21,5.47c9.86,0,17.65-4.22,23.35-12.66c0.4-0.59,0.8-1.21,1.19-1.86c1.16,2.43,2.64,4.57,4.42,6.42
    //             c5.19,5.4,12.76,8.1,22.69,8.1c16.21,0,26.78-7.33,31.71-21.98c2.02,14.65,10.33,21.98,24.92,21.98
    //             c8.5,0,15.49-3.26,20.95-9.78v4.21c0,1.35,1.16,2.48,3.49,3.39c2.33,0.91,5.12,1.37,8.36,1.37c3.98,0,7.7-0.78,11.14-2.33
    //             v-55.52c0-6.34,1.52-11.81,4.56-16.41c3.18-4.99,7.9-7.49,14.18-7.49c9.53,0,14.29,6.72,14.29,20.16v56.83
    //             c0,1.35,1.16,2.48,3.49,3.39c2.33,0.91,5.12,1.37,8.36,1.37c3.99,0,7.7-0.78,11.14-2.33v-55.52c0-6.68,1.66-12.34,4.97-16.96
    //             c3.31-4.63,7.97-6.94,13.98-6.94c9.52,0,14.28,6.65,14.28,19.95c0,2.17-0.2,7.6-0.61,16.31c-0.4,8.72-0.6,14.39-0.6,17.02
    //             c0,9.93,2.29,17.29,6.89,22.09c4.59,4.79,11,7.19,19.24,7.19c10.2,0,18.07-3.95,23.61-11.85c0.53-0.74,1.04-1.52,1.55-2.35
    //             C492.48,520.64,491.33,515.64,491.09,509.78z M175.83,500.38c0,7.5-1.74,13.59-5.21,18.29c-3.48,4.69-8.06,7.04-13.73,7.04
    //             c-6.15,0-10.93-3.01-14.34-9.02c-3.41-6.01-5.11-14.42-5.11-25.22c0-11.48,2.01-20.4,6.03-26.75c4.01-6.34,9.6-9.52,16.76-9.52
    //             c6.15,0,11.35,2.13,15.6,6.38V500.38z"/>
    //         </g>
    //         <g>
    //           <radialGradient id="SVGID_2_" cx="500" cy="496.6345" r="281.0626" gradientUnits="userSpaceOnUse">
    //           <stop offset="0" style={{ stopColor: '#C5AF74' }} />
    //           <stop offset="0.2423" style={{ stopColor: '#CEBE86' }} />
    //           <stop offset="0.5165" style={{ stopColor: '#D8CE9B' }} />
    //           <stop offset="1" style={{ stopColor: '#B79E60' }} />
    //         </radialGradient>
    //           <path class="st4" d="M491.09,509.78c-4.15,10.62-9.26,15.93-15.33,15.93c-6.49,0-9.73-5.61-9.73-16.82
    //             c0-2.56,0.2-8.51,0.61-17.83c0.4-9.52,0.61-15.46,0.61-17.83c0-9.79-2.43-17.25-7.3-22.39c-4.86-5.13-11.82-7.7-20.87-7.7
    //             c-13.71,0-23.47,6.15-29.27,18.44c-1.56-5.87-4.65-10.41-9.27-13.62c-4.63-3.21-10.45-4.82-17.48-4.82
    //             c-13.57,0-23.26,5.95-29.07,17.83v-11.14c0-1.55-1.03-2.78-3.09-3.7c-2.06-0.91-4.61-1.36-7.65-1.36
    //             c-3.92,0-7.6,0.77-11.04,2.33v62.5c-4.2,10.74-9.39,16.11-15.58,16.11c-6.62,0-9.93-5.03-9.93-15.1v-60.78
    //             c0-1.55-1.1-2.78-3.29-3.7c-2.2-0.91-4.99-1.36-8.36-1.36c-4.19,0-7.9,0.77-11.14,2.33v49.53c-0.21,3.92-0.85,8.01-1.93,12.26
    //             c-1.08,4.12-3.28,7.94-6.58,11.45c-3.59,3.58-7.94,5.37-13.07,5.37c-10.13,0-15.2-7.33-15.2-21.98v-53.9
    //             c0-1.55-1.1-2.78-3.29-3.7c-2.2-0.91-4.95-1.36-8.26-1.36c-4.19,0-8,0.77-11.45,2.33v60.17c0,0.74,0.01,1.46,0.04,2.17
    //             c-4.23,10.85-9.51,16.27-15.82,16.27c-6.48,0-9.72-5.1-9.72-15.3V406.17c0-1.55-1.08-2.77-3.25-3.65
    //             c-2.16-0.88-4.96-1.31-8.4-1.31c-4.19,0-7.91,0.77-11.15,2.33v46.9c-7.02-4.86-14.45-7.3-22.28-7.3
    //             c-12.16,0-21.77,4.4-28.83,13.17c-7.05,8.78-10.58,20.84-10.58,36.17c0,14.52,3.19,25.9,9.57,34.14
    //             c6.38,8.24,15.18,12.36,26.39,12.36c14.66,0,24.45-6.92,29.38-20.77c0.67,6.55,3.11,11.65,7.29,15.3
    //             c4.19,3.65,9.59,5.47,16.21,5.47c9.86,0,17.65-4.22,23.35-12.66c0.4-0.59,0.8-1.21,1.19-1.86c1.16,2.43,2.64,4.57,4.42,6.42
    //             c5.19,5.4,12.76,8.1,22.69,8.1c16.21,0,26.78-7.33,31.71-21.98c2.02,14.65,10.33,21.98,24.92,21.98
    //             c8.5,0,15.49-3.26,20.95-9.78v4.21c0,1.35,1.16,2.48,3.49,3.39c2.33,0.91,5.12,1.37,8.36,1.37c3.98,0,7.7-0.78,11.14-2.33
    //             v-55.52c0-6.34,1.52-11.81,4.56-16.41c3.18-4.99,7.9-7.49,14.18-7.49c9.53,0,14.29,6.72,14.29,20.16v56.83
    //             c0,1.35,1.16,2.48,3.49,3.39c2.33,0.91,5.12,1.37,8.36,1.37c3.99,0,7.7-0.78,11.14-2.33v-55.52c0-6.68,1.66-12.34,4.97-16.96
    //             c3.31-4.63,7.97-6.94,13.98-6.94c9.52,0,14.28,6.65,14.28,19.95c0,2.17-0.2,7.6-0.61,16.31c-0.4,8.72-0.6,14.39-0.6,17.02
    //             c0,9.93,2.29,17.29,6.89,22.09c4.59,4.79,11,7.19,19.24,7.19c10.2,0,18.07-3.95,23.61-11.85c0.53-0.74,1.04-1.52,1.55-2.35
    //             C492.48,520.64,491.33,515.64,491.09,509.78z M175.83,500.38c0,7.5-1.74,13.59-5.21,18.29c-3.48,4.69-8.06,7.04-13.73,7.04
    //             c-6.15,0-10.93-3.01-14.34-9.02c-3.41-6.01-5.11-14.42-5.11-25.22c0-11.48,2.01-20.4,6.03-26.75c4.01-6.34,9.6-9.52,16.76-9.52
    //             c6.15,0,11.35,2.13,15.6,6.38V500.38z"/>
    //         </g>
    //         <g>
    //             <radialGradient id="SVGID_3_" cx="500" cy="496.6345" r="281.0626" gradientUnits="userSpaceOnUse">
    //           <stop offset="0" style={{ stopColor: '#C5AF74' }} />
    //           <stop offset="0.2423" style={{ stopColor: '#CEBE86' }} />
    //           <stop offset="0.5165" style={{ stopColor: '#D8CE9B' }} />
    //           <stop offset="1" style={{ stopColor: '#B79E60' }} />
    //         </radialGradient>
    //           <path class="st5" d="M491.09,509.78c-4.15,10.62-9.26,15.93-15.33,15.93c-6.49,0-9.73-5.61-9.73-16.82
    //             c0-2.56,0.2-8.51,0.61-17.83c0.4-9.52,0.61-15.46,0.61-17.83c0-9.79-2.43-17.25-7.3-22.39c-4.86-5.13-11.82-7.7-20.87-7.7
    //             c-13.71,0-23.47,6.15-29.27,18.44c-1.56-5.87-4.65-10.41-9.27-13.62c-4.63-3.21-10.45-4.82-17.48-4.82
    //             c-13.57,0-23.26,5.95-29.07,17.83v-11.14c0-1.55-1.03-2.78-3.09-3.7c-2.06-0.91-4.61-1.36-7.65-1.36
    //             c-3.92,0-7.6,0.77-11.04,2.33v62.5c-4.2,10.74-9.39,16.11-15.58,16.11c-6.62,0-9.93-5.03-9.93-15.1v-60.78
    //             c0-1.55-1.1-2.78-3.29-3.7c-2.2-0.91-4.99-1.36-8.36-1.36c-4.19,0-7.9,0.77-11.14,2.33v49.53c-0.21,3.92-0.85,8.01-1.93,12.26
    //             c-1.08,4.12-3.28,7.94-6.58,11.45c-3.59,3.58-7.94,5.37-13.07,5.37c-10.13,0-15.2-7.33-15.2-21.98v-53.9
    //             c0-1.55-1.1-2.78-3.29-3.7c-2.2-0.91-4.95-1.36-8.26-1.36c-4.19,0-8,0.77-11.45,2.33v60.17c0,0.74,0.01,1.46,0.04,2.17
    //             c-4.23,10.85-9.51,16.27-15.82,16.27c-6.48,0-9.72-5.1-9.72-15.3V406.17c0-1.55-1.08-2.77-3.25-3.65
    //             c-2.16-0.88-4.96-1.31-8.4-1.31c-4.19,0-7.91,0.77-11.15,2.33v46.9c-7.02-4.86-14.45-7.3-22.28-7.3
    //             c-12.16,0-21.77,4.4-28.83,13.17c-7.05,8.78-10.58,20.84-10.58,36.17c0,14.52,3.19,25.9,9.57,34.14
    //             c6.38,8.24,15.18,12.36,26.39,12.36c14.66,0,24.45-6.92,29.38-20.77c0.67,6.55,3.11,11.65,7.29,15.3
    //             c4.19,3.65,9.59,5.47,16.21,5.47c9.86,0,17.65-4.22,23.35-12.66c0.4-0.59,0.8-1.21,1.19-1.86c1.16,2.43,2.64,4.57,4.42,6.42
    //             c5.19,5.4,12.76,8.1,22.69,8.1c16.21,0,26.78-7.33,31.71-21.98c2.02,14.65,10.33,21.98,24.92,21.98
    //             c8.5,0,15.49-3.26,20.95-9.78v4.21c0,1.35,1.16,2.48,3.49,3.39c2.33,0.91,5.12,1.37,8.36,1.37c3.98,0,7.7-0.78,11.14-2.33
    //             v-55.52c0-6.34,1.52-11.81,4.56-16.41c3.18-4.99,7.9-7.49,14.18-7.49c9.53,0,14.29,6.72,14.29,20.16v56.83
    //             c0,1.35,1.16,2.48,3.49,3.39c2.33,0.91,5.12,1.37,8.36,1.37c3.99,0,7.7-0.78,11.14-2.33v-55.52c0-6.68,1.66-12.34,4.97-16.96
    //             c3.31-4.63,7.97-6.94,13.98-6.94c9.52,0,14.28,6.65,14.28,19.95c0,2.17-0.2,7.6-0.61,16.31c-0.4,8.72-0.6,14.39-0.6,17.02
    //             c0,9.93,2.29,17.29,6.89,22.09c4.59,4.79,11,7.19,19.24,7.19c10.2,0,18.07-3.95,23.61-11.85c0.53-0.74,1.04-1.52,1.55-2.35
    //             C492.48,520.64,491.33,515.64,491.09,509.78z M175.83,500.38c0,7.5-1.74,13.59-5.21,18.29c-3.48,4.69-8.06,7.04-13.73,7.04
    //             c-6.15,0-10.93-3.01-14.34-9.02c-3.41-6.01-5.11-14.42-5.11-25.22c0-11.48,2.01-20.4,6.03-26.75c4.01-6.34,9.6-9.52,16.76-9.52
    //             c6.15,0,11.35,2.13,15.6,6.38V500.38z"/>
    //         </g>
    //       </g>
    //       <g>
    //           <radialGradient id="SVGID_4_" cx="500" cy="496.6345" r="281.0626" gradientUnits="userSpaceOnUse">
    //           <stop offset="0" style={{ stopColor: '#C5AF74' }} />
    //           <stop offset="0.2423" style={{ stopColor: '#CEBE86' }} />
    //           <stop offset="0.5165" style={{ stopColor: '#D8CE9B' }} />
    //           <stop offset="1" style={{ stopColor: '#B79E60' }} />
    //         </radialGradient>
    //         <path class="st6" d="M885.86,463.39c0,6.31-3.26,12.13-9.57,12.13c-6.31,0-11.39-5.81-11.39-12.13s5.08-11.29,11.39-11.29
    //           C882.6,452.1,885.86,457.08,885.86,463.39z"/>
    //       </g>
    //       <g>
    //            <radialGradient id="SVGID_5_" cx="500" cy="496.6345" r="281.0626" gradientUnits="userSpaceOnUse">
    //           <stop offset="0" style={{ stopColor: '#C5AF74' }} />
    //           <stop offset="0.2423" style={{ stopColor: '#CEBE86' }} />
    //           <stop offset="0.5165" style={{ stopColor: '#D8CE9B' }} />
    //           <stop offset="1" style={{ stopColor: '#B79E60' }} />
    //         </radialGradient>
    //         <path class="st7" d="M168.34,423.17c0,3.16-2.62,5.56-4.69,7.63s-4.47,3.64-7.63,3.64c-3.16,0-6.22-0.91-8.29-2.98
    //           s-2.78-5.13-2.78-8.29c0-3.16,0.8-6.13,2.87-8.19s5.04-3.87,8.19-3.87c3.16,0,5.76,2.18,7.82,4.24S168.34,420.01,168.34,423.17z
    //           "/>
    //       </g>
    //       <g>
    //        <radialGradient id="SVGID_6_" cx="500" cy="496.6345" r="281.0626" gradientUnits="userSpaceOnUse">
    //           <stop offset="0" style={{ stopColor: '#C5AF74' }} />
    //           <stop offset="0.2423" style={{ stopColor: '#CEBE86' }} />
    //           <stop offset="0.5165" style={{ stopColor: '#D8CE9B' }} />
    //           <stop offset="1" style={{ stopColor: '#B79E60' }} />
    //         </radialGradient>
    //         <path class="st8" d="M609.62,552.87c0,6.31-4.31,12.35-10.63,12.35c-6.31,0-11.44-6.03-11.44-12.35
    //           c0-6.31,5.13-10.66,11.44-10.66C605.31,542.21,609.62,546.56,609.62,552.87z"/>
    //       </g>
    //     </g>
    //       <radialGradient id="SVGID_7_" cx="500" cy="496.6345" r="281.0626" gradientUnits="userSpaceOnUse">
    //           <stop offset="0" style={{ stopColor: '#C5AF74' }} />
    //           <stop offset="0.2423" style={{ stopColor: '#CEBE86' }} />
    //           <stop offset="0.5165" style={{ stopColor: '#D8CE9B' }} />
    //           <stop offset="1" style={{ stopColor: '#B79E60' }} />
    //         </radialGradient>
    //     <path class="st9" d="M871.39,484.88c-4.79,27.22-12.05,40.83-21.78,40.83c-6.48,0-9.72-5.61-9.72-16.82c0-2.56,0.2-8.51,0.6-17.83
    //       c0.41-9.52,0.61-15.46,0.61-17.83c0-9.79-2.43-17.25-7.29-22.39c-4.86-5.13-11.82-7.7-20.87-7.7c-13.71,0-23.47,6.15-29.28,18.44
    //       c-1.55-5.87-4.64-10.41-9.27-13.62c-4.62-3.21-10.45-4.82-17.47-4.82c-13.58,0-23.27,5.95-29.08,17.83v-11.14
    //       c0-1.55-1.03-2.78-3.09-3.7c-2.06-0.91-4.61-1.36-7.65-1.36c-3.91,0-7.59,0.77-11.04,2.33v62.5
    //       c-4.19,10.74-9.39,16.11-15.58,16.11c-6.62,0-9.93-5.03-9.93-15.1v-60.78c0-1.55-1.09-2.78-3.29-3.7
    //       c-2.19-0.91-4.98-1.36-8.36-1.36c-4.18,0-7.9,0.77-11.14,2.33v49.53c-0.2,3.92-0.84,8.01-1.92,12.26
    //       c-1.09,4.12-3.28,7.94-6.59,11.45c-3.58,3.58-7.94,5.37-13.07,5.37c-10.13,0-15.19-7.33-15.19-21.98v-53.9
    //       c0-1.55-1.1-2.78-3.3-3.7c-2.19-0.91-4.94-1.36-8.25-1.36c-4.19,0-8.01,0.77-11.45,2.33v58.04
    //       c-5.44,11.12-13.57,19.76-24.39,25.94v-81.25c0-1.55-1.1-2.78-3.3-3.7c-2.19-0.91-4.98-1.36-8.35-1.36
    //       c-4.19,0-7.91,0.77-11.15,2.33v49.53c-0.2,3.92-0.84,8.01-1.92,12.26c-1.08,4.12-3.28,7.94-6.59,11.45
    //       c-3.58,3.58-7.93,5.37-13.07,5.37c-10.13,0-15.19-7.33-15.19-21.98v-53.9c0-1.55-1.1-2.78-3.29-3.7c-2.2-0.91-4.95-1.36-8.26-1.36
    //       c-4.19,0-8,0.77-11.45,2.33v60.17c0,0.85,0.02,1.69,0.06,2.51c0.24,5.86,1.39,10.86,3.44,15c1.12,2.27,2.5,4.28,4.15,6.04
    //       c5.1,5.44,12.38,8.16,21.83,8.16c15.47,0,25.9-7.06,31.31-21.17v22.39l-11.25,3.74c-8.58,3.04-14.86,5.81-18.84,8.31
    //       c-4.05,2.97-7.14,5.94-9.27,8.92c-2.13,2.97-3.19,6.51-3.19,10.63c0,6.28,2.48,11.23,7.44,14.84c4.97,3.62,11.64,5.42,20.01,5.42
    //       c11.14,0,20.08-3.21,26.8-9.62c6.72-6.42,10.08-14.96,10.08-25.63v-13.88c10.82-5.55,19.55-13.05,26.19-22.51
    //       c1.29,4.15,3.29,7.64,6,10.46c5.2,5.4,12.77,8.1,22.69,8.1c16.21,0,26.78-7.33,31.71-21.98c2.03,14.65,10.33,21.98,24.92,21.98
    //       c8.51,0,15.5-3.26,20.95-9.78v4.21c0,1.35,1.17,2.48,3.5,3.39c2.33,0.91,5.11,1.37,8.36,1.37c3.98,0,7.69-0.78,11.14-2.33v-55.52
    //       c0-6.34,1.52-11.81,4.56-16.41c3.17-4.99,7.9-7.49,14.18-7.49c9.52,0,14.28,6.72,14.28,20.16v56.83c0,1.35,1.17,2.48,3.5,3.39
    //       c2.33,0.91,5.12,1.37,8.36,1.37c3.98,0,7.7-0.78,11.14-2.33v-55.52c0-6.68,1.65-12.34,4.96-16.96c3.31-4.63,7.97-6.94,13.98-6.94
    //       c9.53,0,14.29,6.65,14.29,19.95c0,2.17-0.2,7.6-0.61,16.31c-0.4,8.72-0.61,14.39-0.61,17.02c0,9.93,2.3,17.29,6.89,22.09
    //       c4.59,4.79,11.01,7.19,19.25,7.19c10.2,0,18.07-3.95,23.6-11.85c5.88-8.24,10.37-21.85,13.48-40.83
    //       C878.62,485.36,875.65,484.88,871.39,484.88z M551.82,564.31c0,5.67-1.42,10.26-4.26,13.77c-2.84,3.51-6.55,5.27-11.14,5.27
    //       c-3.52,0-6.32-1.03-8.41-3.09c-2.1-2.06-3.14-4.95-3.14-8.66c0-5.13,1.99-9.15,5.98-12.06c3.98-2.9,10.97-5.94,20.97-9.11V564.31z
    //       "/>
    //   </g>
    // </g>
    // </svg>

    svg logo 
    
  )
}

export default LogoSvg