import { ComponentPropsWithoutRef, FC } from 'react'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

type CheckboxProps = ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

export const Checkbox: FC<CheckboxProps> = (props) => {
  return (
    <RadixCheckbox.Root
      className="w-6 h-6 bg-gray900 border-2 border-gray900 rounded-xs cursor-pointer overflow-hidden flex items-center justify-center leading-[0] focus:border-2 focus:border-ignite300 data-[state=checked]:bg-ignite300 disabled:cursor-not-allowed disabled:opacity-50"
      {...props}
    >
      <RadixCheckbox.Indicator
        asChild
        className="text-white w-4 h-4 data-[state=checked]:animate-slideIn data-[state=unchecked]:animate-slideOut"
      >
        <Check weight="bold" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}
