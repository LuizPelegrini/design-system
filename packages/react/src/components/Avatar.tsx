import { ComponentProps, FC } from 'react'
import * as RadixAvatar from '@radix-ui/react-avatar'
import { User } from 'phosphor-react'

type AvatarProps = ComponentProps<typeof RadixAvatar.Image>

export const Avatar: FC<AvatarProps> = (props) => {
  return (
    <RadixAvatar.Root className="rounded-full inline-block w-12 h-12 overflow-hidden">
      <RadixAvatar.Image className="w-full h-full object-cover" {...props} />
      <RadixAvatar.Fallback
        delayMs={600}
        className="w-full h-full flex items-center justify-center bg-gray600 text-gray800 [&_svg]:w-6 [&_svg]:h-6"
      >
        <User />
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}
