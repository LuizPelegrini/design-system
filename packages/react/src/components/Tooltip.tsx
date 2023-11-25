import { FC, PropsWithChildren } from 'react'

type TooltipProps = {
  label: string
}

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  label,
  children,
}) => {
  return (
    <div className="relative [&>span]:hover:opacity-100">
      {children}
      <span className="opacity-0 absolute left-1/2 bottom-[150%] -translate-x-1/2 bg-gray900 px-4 py-3 rounded-xs w-max text-white transition-opacity after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-solid after:border-t-gray900 after:border-x-transparent after:border-b-transparent">
        {label}
      </span>
    </div>
  )
}
