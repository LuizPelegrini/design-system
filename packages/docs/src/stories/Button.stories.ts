import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@stamblew/react'

export default {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const primary: Story = {
  args: {
    primary: false,
  },
}
