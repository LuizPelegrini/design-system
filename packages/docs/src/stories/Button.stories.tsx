import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@stamblew-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    disabled: false,
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' },
    },
    onClick: {
      action: 'click',
    },
    onMouseOver: {
      action: 'hover',
    },
  },
} satisfies Meta<typeof Button>

type ButtonStory = StoryObj<typeof Button>

export const primary: ButtonStory = {}

export const secondary: ButtonStory = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const tertiary: ButtonStory = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const small: ButtonStory = {
  args: {
    size: 'sm',
  },
}

export const withIcon: ButtonStory = {
  args: {
    children: (
      <>
        Next Step
        <ArrowRight weight="bold" />
      </>
    ),
  },
  argTypes: {
    children: {
      control: { disable: true },
    },
  },
}
