import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: '#1FA45B',
        secondary: {
          DEFAULT: '#F7F8FA',
          dark: '#122337',
        },
        background: {
          1: {
            DEFAULT: '#fff',
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
