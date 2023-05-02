import React from "react";
import { Meta, Story } from "@storybook/react";
import { useCategory } from ".";
import { CategoryItemProps } from "./interface";
import { ThemeProvider, createTheme } from "@mui/material";

const { CategoryItem } = useCategory();

const theme = createTheme({
  palette: {
    primary: {
      main: "#00A651",
    },
  },
});

export default {
  title: "useCategory",
  component: CategoryItem,
} as Meta;

const Template: Story<CategoryItemProps> = (args) => (
  <ThemeProvider theme={theme}>
    <CategoryItem {...args} />
  </ThemeProvider>
);
export const Default = Template.bind({});
Default.args = {
  children: "default",
};
