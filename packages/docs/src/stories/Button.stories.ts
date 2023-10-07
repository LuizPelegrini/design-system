import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@stamblew/react'

export default {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>

type ButtonStory = StoryObj<typeof Button>

export const primary: ButtonStory = {
  args: {
    primary: true,
    size: 'big',
  },
}

export const secondary: ButtonStory = {
  args: {
    primary: false,
  },
}
