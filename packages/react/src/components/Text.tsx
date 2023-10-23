import { ElementType, FC, PropsWithChildren } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const text = tv({
  base: 'font-default leading-normal m-0 text-gray100',
  variants: {
    size: {
      xxs: 'text-xxs',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

type TextProps = PropsWithChildren<VariantProps<typeof text>> & {
  as?: ElementType
}

export const Text: FC<TextProps> = ({ size, children, as: Tag = 'p' }) => {
  return <Tag className={text({ size })}>{children}</Tag>
}
