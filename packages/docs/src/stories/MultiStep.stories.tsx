import { Box, MultiStep } from '@stamblew-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    currentStep: 1,
    totalSteps: 3,
  },
  argTypes: {
    totalSteps: {
      control: { type: 'number', min: 1, max: 30, step: 2 },
    },
  },
  decorators: [
    (Story) => (
      <Box>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof MultiStep>

type MultiStepStory = StoryObj<typeof MultiStep>
export const Primary: MultiStepStory = {}
