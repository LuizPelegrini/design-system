import type { Config } from 'tailwindcss'
import { colors } from '@stamblew/tokens'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
} satisfies Config
