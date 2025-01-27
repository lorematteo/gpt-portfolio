import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#292A2D',
        'medium-gray': '#404045',
        'neutral-gray': '#565759',
        'light-gray': '#DCE0E9',
      },
      fontFamily: {
        primary: ['var(--font-primary)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
