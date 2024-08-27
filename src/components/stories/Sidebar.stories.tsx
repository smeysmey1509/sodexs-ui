import { Meta, Story } from "@storybook/react";
import Sidebar, { SidebarProps } from "../Sidebar/Sidebar";

export default {
  title: "Components/Sidebar",
  tags: ["autodocs"],
  component: Sidebar,
} as Meta;

export const Default = {
  args: {
    bgColor: "#3444B5",
  },
  render: (args: any) => <Sidebar {...args} />,
};
