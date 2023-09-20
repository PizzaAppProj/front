import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./header.component";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Header> = {
  title: "Common/Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  render: (args) => (
    <MemoryRouter>
      <Header {...args} />,
    </MemoryRouter>
  ),
  args: {
    categories: [
      {
        slug: "pizza",
        id: "4d4c7f85-b280-4932-9df1-7dc5ae6ef047",
        title: "Піца",
      },
      {
        slug: "drinks",
        id: "6c0bbb05-2c2d-47dd-829a-4a9d3534e9ac",
        title: "Напої",
      },
    ],
  },
};

export const Loading: Story = {
  render: (args) => <Header {...args} />,
  args: {
    isLoading: true,
  },
};
