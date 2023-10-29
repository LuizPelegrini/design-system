import { Heading } from '@stamblew/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom heading',
  },
} satisfies Meta<typeof Heading>

type HeadingStory = StoryObj<typeof Heading>

export const primary: HeadingStory = {
  parameters: {
    docs: {
      description: {
        story:
          'By default, the `Heading` component renders an `h2` element. You can change this by passing the `as` prop.',
      },
    },
  },
}

export const heading1: HeadingStory = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
    size: '6xl',
  },
}
