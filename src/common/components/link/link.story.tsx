import type { Meta, StoryObj } from "@storybook/react";
import { HeaderCategpryLink } from "./link.component";


const meta: Meta<typeof HeaderCategpryLink> = {
  title: "Common/Link",
  component: HeaderCategpryLink,
};

export default meta;
type Story = StoryObj<typeof HeaderCategpryLink>;

export const Primary: Story = {
  render: (args) => <HeaderCategpryLink {...args} />,
  args: {
    url: "/",
    children: "Піца",
  },
};
