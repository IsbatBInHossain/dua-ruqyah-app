import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1140px',
      xl: '1280px',
      '2xl': '1640px',
    },
    extend: {
      colors: {
        primary: '#1FA45B',
        secondary: {
          DEFAULT: '#ebeef2',
          dark: '#122337',
        },
        lettering: '#393939',
        background: {
          1: {
            DEFAULT: '#f7f7f8',
            dark: '#223449',
          },
          2: {
            DEFAULT: '#E8F0F5',
            dark: '#182c43',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
