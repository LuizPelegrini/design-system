import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react'

type BoxProps = PropsWithChildren<ComponentPropsWithoutRef<'div'>>

export const Box: FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <div className="p-6 rounded-md bg-gray800 border border-gray600" {...rest}>
      {children}
    </div>
  )
}
