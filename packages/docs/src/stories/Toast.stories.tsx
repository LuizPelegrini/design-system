import { Toast } from '@stamblew-ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Data Display/Toast',
  component: Toast,
} satisfies Meta<typeof Toast>

export const primary: StoryObj<typeof Toast> = {
  args: {
    title: 'Toast Title',
    message: 'Toast Message',
  }
}
