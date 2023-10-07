import { FC } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'text-white bg-ignite500',
  variants: {
    size: {
      small: 'text-sm py-2 px-4',
      big: 'text-base py-3 px-6',
    },
  },
  defaultVariants: {
    size: 'small',
  },
})

type ButtonProps = {
  primary: boolean
} & VariantProps<typeof button>

export const Button: FC<ButtonProps> = ({ primary, size }) => {
  return <button className={button({ size })}>Hello World</button>
}
