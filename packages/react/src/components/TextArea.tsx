import { ComponentPropsWithoutRef, FC } from 'react'

type TextAreaProps = ComponentPropsWithoutRef<'textarea'>

export const TextArea: FC<TextAreaProps> = (props) => {
  return (
    <textarea
      className="bg-gray900 px-3 py-4 w-full rounded-md font-default text-sm text-white font-normal resize-y min-h-[80] focus:outline focus:outline-2 focus:outline-ignite300 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray400"
      {...props}
    ></textarea>
  )
}
