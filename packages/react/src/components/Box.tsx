import { ComponentProps, FC } from 'react'

type BoxProps = ComponentProps<'div'>

export const Box: FC<BoxProps> = ({ children }) => {
  return <div>{children}</div>
}
