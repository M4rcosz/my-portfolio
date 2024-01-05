import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      fontFamily: {
        "quickSand": ['Quicksand', 'sans-serif'],
        "notoSans": ['Noto Sans', 'sans-serif'],
      },
      colors: {
        "oi": "#f00"
      }
    },
  },
  plugins: [],
}
export default config
