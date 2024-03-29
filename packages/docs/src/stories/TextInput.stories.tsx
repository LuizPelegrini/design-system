import { Box, Text, TextInput } from '@stamblew-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    disabled: false,
    innerSpace: 'md',
  },
  argTypes: {
    innerSpace: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => (
      <Box>
        <Text as="label" size="sm">
          Username
        </Text>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof TextInput>

type TextInputStory = StoryObj<typeof TextInput>

export const primary: TextInputStory = {}

export const withPrefix: TextInputStory = {
  args: {
    prefix: 'https://',
    placeholder: 'example.com',
  },
}
