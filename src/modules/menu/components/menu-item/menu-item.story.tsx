import type { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "./menu-item.component";

const meta: Meta<typeof MenuItem> = {
  title: "Menu/Menu Item",
  component: MenuItem,
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const General: Story = {
  render: (args) => <MenuItem {...args} />,
  args: {
    image: "menu/menu-1691077891",
    weight: 555,
    title: "Піца Мангеттен",
    ingredients: "asdasd",
    price: 215,
  },
};
export const Drink: Story = {
  render: (args) => <MenuItem {...args} />,
  args: {
    image: "menu/menu-1691327952",
    price: 55,
    title: 'Сік "Наш Сік" яблучний 0.95л',
    ingredients: "",
    fitImage: true,
  },
};
