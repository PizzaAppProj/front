import type { Meta, StoryObj } from "@storybook/react";
import { MenuCategoryLoading } from "./menu-category-loading.component";

const meta: Meta<typeof MenuCategoryLoading> = {
  title: "Menu/Menu Category Loading",
  component: MenuCategoryLoading,
};

export default meta;
type Story = StoryObj<typeof MenuCategoryLoading>;

export const Primary: Story = {
  render: () => <MenuCategoryLoading />,
};
