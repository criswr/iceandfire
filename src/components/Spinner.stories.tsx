import type { Meta, StoryObj } from '@storybook/react';
import Spinner from "./Spinner"

const meta: Meta <typeof Spinner> = {
    component: Spinner
}

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
    render: () => <Spinner  />,
}

export default meta