import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { useDrawer } from ".";
import { DrawerProps } from "./inderface";

const { open, Drawer, toggleDrawer } = useDrawer();

export default {
  title: "useDrawer",
  component: Drawer,
  decorators: [
    () => {
      const [open, setOpen] = useState(false);
      const toggleDrawer = () => {
        setOpen(!open);
      };
      return (
        <Drawer open={open} toggleDrawer={toggleDrawer}>
          someone
        </Drawer>
      );
    },
  ],
} as Meta;

const Template: Story<DrawerProps> = (args) => <Drawer {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: open,
  toggleDrawer: toggleDrawer,
};
