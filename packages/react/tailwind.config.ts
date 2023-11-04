import type { Config } from 'tailwindcss'
import { colors, fonts, fontSizes, radii } from '@stamblew/tokens'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors,
      fontFamily: fonts,
      fontSize: fontSizes,
      borderRadius: radii,
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        slideOut: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-100%)',
          },
        },
      },
      animation: {
        slideIn: 'slideIn 150ms ease-in-out',
        slideOut: 'slideOut 150ms ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config
