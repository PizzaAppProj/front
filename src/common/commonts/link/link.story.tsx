import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./link.component";

const meta: Meta<typeof Link> = {
  title: "Common/Link",
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  render: (args) => <Link {...args} />,
  args: {
    url: "/",
    children: "Піца",
  },
};
