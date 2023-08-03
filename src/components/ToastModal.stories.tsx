import type { Meta, StoryObj } from '@storybook/react';
import ToastModal from "./ToastModal"

const meta: Meta <typeof ToastModal> = {
    component: ToastModal
}

type Story = StoryObj<typeof ToastModal>;

export const Default: Story = {
    render: () => <ToastModal label='Test' />,
  };

export default meta