import { ComponentProps, FC, PropsWithChildren } from 'react'

type BoxProps = PropsWithChildren<ComponentProps<'div'>>

export const Box: FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <div className="p-4 rounded-md bg-gray800 border border-gray600" {...rest}>
      {children}
    </div>
  )
}
