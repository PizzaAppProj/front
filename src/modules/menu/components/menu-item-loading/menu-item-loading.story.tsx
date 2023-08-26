import type { Meta, StoryObj } from "@storybook/react";
import { MenuItemLoading } from "./menu-item-loading.component";

const meta: Meta<typeof MenuItemLoading> = {
  title: "Menu/Menu Item Loading",
  component: MenuItemLoading,
};

export default meta;
type Story = StoryObj<typeof MenuItemLoading>;

export const Primary: Story = {
  render: () => <MenuItemLoading />,
};
