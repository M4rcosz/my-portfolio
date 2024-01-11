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
      keyframes: {
        "downUp": {
          "0%": { top: "-2.5%" },
          "50%": { top: "103%" },
          "100%": { top: "-2.5%" },
        }
      },
      colors: {
        "light": "#ffffffdf",
        "red": "#d60101d5",
        "darkRed": "#dd000070",
        "textColor": "#ffffffc0",
        "primaryBg": "#040D12",
      }
    },
  },
  plugins: [],
}
export default config
