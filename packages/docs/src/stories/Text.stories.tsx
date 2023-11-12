import { Text } from '@stamblew-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos earum quis dolore fugit incidunt dolores molestiae facilis inventore nemo!',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
      ],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<typeof Text>

type TextStory = StoryObj<typeof Text>
export const primary: TextStory = {
  args: {},
}

export const customTag: TextStory = {
  args: {
    as: 'strong',
  },
}
