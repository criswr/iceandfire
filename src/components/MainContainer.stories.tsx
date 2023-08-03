import type { Meta, StoryObj } from '@storybook/react';
import MainContainer from "./MainContainer"

const meta: Meta <typeof MainContainer> = {
    component: MainContainer
}

type Story = StoryObj<typeof MainContainer>;

export const Default: Story = {
    render: () => <MainContainer title='Test'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rem iusto iste. Sequi, recusandae ad? Omnis optio vitae nisi soluta tempora id odio quidem aliquid commodi, quisquam delectus est voluptas.</p>
    </MainContainer>,
}

export default meta