import { Meta } from "@storybook/react";
import Layouts, { LayoutProps } from "../Layouts/Layouts";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default {
  title: "Components/Layouts",
  tags: ["autodocs"],
  component: Layouts,
} as Meta;

export const Default = {
  args: {
    imgUrl:
      "https://seeklogo.com/images/O/onic-esports-logo-0B89870F45-seeklogo.com.png",
    menuList: [
      { icons: <IoMdNotificationsOutline /> },
      { icons: <IoSettingsOutline /> },
      { icons: <MdOutlineLightMode /> },
      { icons: <CgProfile /> },
    ],
  },
  render: (args: LayoutProps) => <Layouts {...args} />,
};
