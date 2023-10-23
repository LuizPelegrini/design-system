import type { Config } from 'tailwindcss'
import { colors, fonts, fontSizes } from '@stamblew/tokens'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors,
      fontFamily: fonts,
      fontSize: fontSizes,
    },
  },
  plugins: [],
} satisfies Config
