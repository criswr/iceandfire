/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      button: {
        color: {
          primary: 'bg-red-500 hover:bg-red-600',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

