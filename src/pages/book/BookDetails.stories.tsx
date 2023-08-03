import type { Meta, StoryObj } from '@storybook/react';
import BookDetails from "./BookDetails"

const meta: Meta <typeof BookDetails> = {
    component: BookDetails
}

type Story = StoryObj<typeof BookDetails>;

export const Default: Story = {
    render: () => <BookDetails />,
  };

export default meta