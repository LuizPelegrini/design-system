import { Text } from '@stamblew/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos earum quis dolore fugit incidunt dolores molestiae facilis inventore nemo!',
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
