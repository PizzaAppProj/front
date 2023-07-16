import type { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "./menu-item.component";

const meta: Meta<typeof MenuItem> = {
  title: "Menu/Menu Item",
  component: MenuItem,
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Primary: Story = {
  render: (args) => <MenuItem {...args} />,
};
