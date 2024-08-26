import React from "react";
import { Meta } from "@storybook/react";
import Grid, { GridProps } from "../Grid/Grid";

export default {
  title: "Components/Grid",
  tags: ["autodocs"],
  component: Grid,
} as Meta;

export const Default = {
  args: {
    boxTest: 10,
    columns: 15,
    spacing: 4,
    rowSpacing: 9,
  },
  render: (args: GridProps) => <Grid {...args} />,
};
