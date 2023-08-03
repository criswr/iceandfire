import type { Meta, StoryObj } from '@storybook/react';
import Favorites from "./Favorites"

const meta: Meta <typeof Favorites> = {
    component: Favorites
}

type Story = StoryObj<typeof Favorites>;

export const Default: Story = {
    render: () => <Favorites />,
  };

export default meta