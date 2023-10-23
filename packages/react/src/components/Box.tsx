import { ComponentProps, FC } from 'react'

type BoxProps = ComponentProps<'div'>

export const Box: FC<BoxProps> = ({ children }) => {
  return (
    <div className="p-4 rounded-md bg-gray800 border border-gray600">
      {children}
    </div>
  )
}
