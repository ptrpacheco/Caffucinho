/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          black: '#000000',
          brown: {
            100: '#261000',
            200: '#693F20',
            300: '#836D57',
            400: '#C09D7A'
          },
          beige: '#FFF5DD',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-baloo)', ...fontFamily.sans],
        cherry: 'var(--font-cherry)',
      },
    },
  },
  plugins: [],
}