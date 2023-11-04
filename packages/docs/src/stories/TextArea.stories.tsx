import { Box, Text, TextArea } from '@stamblew/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    disabled: false,
    placeholder: 'Add a comment...',
  },
  decorators: [
    (Story) => (
      <Box>
        <Text size="sm">Comments</Text>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof TextArea>

type TextAreaStory = StoryObj<typeof TextArea>
export const primary: TextAreaStory = {}
