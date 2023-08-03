import type { Meta, StoryObj } from '@storybook/react';
import Modal from "./Modal"

const meta: Meta <typeof Modal> = {
    component: Modal
}

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    render: () => <Modal isOpen={true} setIsOpen={()=>{}}/>,
}

export default meta