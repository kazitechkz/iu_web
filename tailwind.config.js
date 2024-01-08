/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [
    './src/**/*.{html,ts}', './projects/**/*.{html,ts}',
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'mobile': {min: '320px', max: '640px'},
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
    }
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin')
  ],
}

