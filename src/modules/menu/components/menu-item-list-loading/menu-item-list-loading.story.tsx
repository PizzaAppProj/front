import type { Meta, StoryObj } from "@storybook/react";
import { MenuListLoading } from "./menu-item-list-loading.component";

const meta: Meta<typeof MenuListLoading> = {
  title: "Menu/Menu List Loading",
  component: MenuListLoading,
  args: {
    items: 3,
  },
};

export default meta;
type Story = StoryObj<typeof MenuListLoading>;

export const Primary: Story = {
  render: (args) => <MenuListLoading {...args} />,
};
