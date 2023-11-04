import { ComponentPropsWithoutRef, FC } from 'react'

type TextInputProps = {
  prefix?: string
} & ComponentPropsWithoutRef<'input'>

export const TextInput: FC<TextInputProps> = ({ prefix, ...rest }) => {
  return (
    <div className="bg-gray900 px-3 py-4 rounded-md flex items-baseline gap-[.125rem] focus-within:outline focus-within:outline-2 focus-within:outline-ignite300 [&:has(input:disabled)]:opacity-50 [&:has(input:disabled)]:cursor-not-allowed hover:cursor-text">
      {!!prefix && (
        <span className="font-default text-sm font-normal text-gray400 pointer-events-auto">
          {prefix}
        </span>
      )}
      <input
        className="font-default text-sm font-normal bg-transparent text-white flex-grow focus:outline-none disabled:cursor-not-allowed placeholder-gray400"
        {...rest}
      />
    </div>
  )
}
