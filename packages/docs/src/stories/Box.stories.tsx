import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text } from '@stamblew-ignite-ui/react'

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: <Text>Hello World</Text>,
  },
  argTypes: {
    children: {
      control: { type: null }, // disable control
    },
  },
} satisfies Meta<typeof Box>

type BoxStory = StoryObj<typeof Box>
export const primary: BoxStory = {
  args: {},
}
