import { ComponentPropsWithRef, FC, forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const variant = tv({
  base: 'bg-gray900 px-3 py-4 rounded-md flex items-center gap-[.125rem] focus-within:outline focus-within:outline-2 focus-within:outline-ignite300 [&:has(input:disabled)]:opacity-50 [&:has(input:disabled)]:cursor-not-allowed hover:cursor-text',
  variants: {
    innerSpace: {
      sm: 'px-2 py-3',
      md: 'px-3 py-4',
    },
  },
  defaultVariants: {
    innerSpace: 'md',
  },
})

type TextInputProps = {
  prefix?: string
} & ComponentPropsWithRef<'input'> &
  VariantProps<typeof variant>

export const TextInput: FC<TextInputProps> = forwardRef(
  ({ prefix, innerSpace, ...rest }, ref) => {
    return (
      <div className={variant({ innerSpace })}>
        {!!prefix && (
          <span className="font-default text-sm font-normal text-gray400 pointer-events-auto">
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          className="font-default text-sm font-normal bg-transparent text-white flex-grow focus:outline-none disabled:cursor-not-allowed placeholder-gray400"
          {...rest}
        />
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'
