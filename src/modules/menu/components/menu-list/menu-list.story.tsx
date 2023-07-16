import type { Meta, StoryObj } from "@storybook/react";
import { MenuList } from "./menu-list.component";

const meta: Meta<typeof MenuList> = {
  title: "Menu/Menu List",
  component: MenuList,
  args: {},
};

export default meta;
type Story = StoryObj<typeof MenuList>;

export const Primary: Story = {
  render: () => <MenuList />,
};
