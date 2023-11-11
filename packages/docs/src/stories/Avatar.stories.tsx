import { Avatar } from '@stamblew/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/10660468?v=4',
    alt: 'Stefan Stamberger',
  },
  argTypes: {
    src: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Avatar>

type AvatarStory = StoryObj<typeof Avatar>

export const primary: AvatarStory = {}

export const withFallback: AvatarStory = {
  args: {
    src: undefined,
  },
}
