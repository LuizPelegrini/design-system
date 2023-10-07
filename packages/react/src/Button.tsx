import { FC } from 'react'

type ButtonProps = {
  primary: boolean
}

export const Button: FC<ButtonProps> = ({ primary }) => {
  return <h1 className="bg-slate-900">Hello World</h1>
}
