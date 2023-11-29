/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'sm': '1100px',
        'lg': '1100px',
        'xl': '1400px',
      },
    }
  },
  plugins: [require('flowbite/plugin')],
}

