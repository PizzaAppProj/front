import type { Meta, StoryObj } from "@storybook/react";
import { FooterLink } from "./footer-link.component";

const meta: Meta<typeof FooterLink> = {
  title: "Common/FooterLink",
  component: FooterLink,
};

export default meta;
type Story = StoryObj<typeof FooterLink>;

export const Primary: Story = {
  render: (args) => (
    <ul>
      <FooterLink {...args} />
    </ul>
  ),
  args: {
    href: "tel:+3800441234597",
    children: "044 123 45 97",
  },
};
