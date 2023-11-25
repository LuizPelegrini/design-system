import { Box, Text, Tooltip } from '@stamblew-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    label: 'Tooltip',
    children: <Text>Hover here</Text>,
  },
  argTypes: {
    children: {
      control: { type: null },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: 'calc(100vh - 100px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>

type TooltipStory = StoryObj<typeof Tooltip>
export const primary: TooltipStory = {}
