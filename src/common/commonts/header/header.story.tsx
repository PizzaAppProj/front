import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./header.component";

const meta: Meta<typeof Header> = {
  title: "Common/Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  render: () => <Header />,
};
