import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'px-0 py-4 rounded-md text-sm font-medium font-default text-center min-w-[120px] flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed focus:ring-2 focus:ring-gray100 [&_svg]:w-4 [&_svg]:h-4',

  variants: {
    variant: {
      primary:
        'text-white bg-ignite500 disabled:bg-gray200 enabled:hover:bg-ignite300',
      secondary:
        'text-ignite300 border-2 border-ignite500 disabled:text-gray200 disabled:border-gray200 enabled:hover:bg-ignite500 enabled:hover:text-white ',
      tertiary: 'text-gray100 disabled:text-gray600 enabled:hover:text-white',
      transparent: 'p-0 min-w-0 bg-transparent',
    },
    size: {
      auto: 'h-auto',
      sm: 'h-9',
      md: 'h-12',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

type ButtonProps = PropsWithChildren<
  VariantProps<typeof button> & ComponentPropsWithoutRef<'button'>
>

export const Button: FC<ButtonProps> = ({
  variant,
  size,
  children,
  ...rest
}) => {
  return (
    <button className={button({ variant, size })} {...rest}>
      {children}
    </button>
  )
}
