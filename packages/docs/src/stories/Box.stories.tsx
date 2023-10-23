import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@stamblew/react'

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: <>Hello World</>,
  },
} satisfies Meta<typeof Box>

type BoxStory = StoryObj<typeof Box>
export const primary: BoxStory = {
  args: {},
}
