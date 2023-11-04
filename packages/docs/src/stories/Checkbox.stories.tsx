import { Box, Checkbox, Text } from '@stamblew/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    disabled: false,
  },
  decorators: [
    (Story) => (
      <Box style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Story />
        <Text as="label" size="sm">
          Accept terms of use
        </Text>
      </Box>
    ),
  ],
} satisfies Meta<typeof Checkbox>

type CheckboxStory = StoryObj<typeof Checkbox>
export const primary: CheckboxStory = {}
