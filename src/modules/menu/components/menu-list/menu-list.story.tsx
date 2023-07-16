import type { Meta, StoryObj } from "@storybook/react";
import { MenuList } from "./menu-list.component";
import pizzaMenu from "@app/mocks/pizza.json";

const meta: Meta<typeof MenuList> = {
  title: "Menu/Menu List",
  component: MenuList,
  args: {
    items: pizzaMenu,
  },
};

export default meta;
type Story = StoryObj<typeof MenuList>;

export const Primary: Story = {
  render: (args) => <MenuList {...args} />,
};
