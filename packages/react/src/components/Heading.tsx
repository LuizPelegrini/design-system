import { ElementType, FC, PropsWithChildren } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const variant = tv({
  base: 'font-default leading-5 m-0 text-gray100',
  variants: {
    size: {
      sm: 'text-xl',
      md: 'text-2xl',
      lg: 'text-4xl',
      '2xl': 'text-5xl',
      '3xl': 'text-6xl',
      '4xl': 'text-7xl',
      '5xl': 'text-8xl',
      '6xl': 'text-9xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

type HeadingProps = PropsWithChildren<VariantProps<typeof variant>> & {
  as?: ElementType
}

export const Heading: FC<HeadingProps> = ({
  children,
  size,
  as: Tag = 'h2',
}) => {
  return <Tag className={variant({ size })}>{children}</Tag>
}
