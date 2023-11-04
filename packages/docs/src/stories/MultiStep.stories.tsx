import { Box, MultiStep } from '@stamblew/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    currentStep: 1,
    totalSteps: 3,
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
