import { Meta } from "@storybook/react";
import Layouts, { LayoutProps } from "../layouts/Layouts";

export default {
  title: "Components/Layouts",
  tags: ["autodocs"],
  component: Layouts,
} as Meta;

export const Defualt = {
  render: (args: LayoutProps) => <Layouts {...args} />,
};
