import React from "react";
import { Meta, Story } from "@storybook/react";
import Header from ".";
import { HeaderProp } from "./intreface";
import { User, X } from "@phosphor-icons/react";

export default {
  title: "Header",
  component: Header,
  // decorators: [withRouter],
} as Meta;

const Template: Story<HeaderProp> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  headProp: {
    menus: [
      { key: "매뉴1", value: "menu1" },
      { key: "매뉴2", value: "menu2" },
    ],
    isForward: true,
    icon_R: User,
  },
};

export const Close = Template.bind({});
Close.args = {
  headProp: {
    menus: [],
    isForward: true,
    icon_R: X,
  },
};

export const Notification = Template.bind({});
Notification.args = {
  headProp: {
    menus: [{ key: "Title", value: "" }],
    icon_R: X,
    headerType: "V2",
  },
};

export const LeftClose = Template.bind({});
LeftClose.args = {
  headProp: {
    menus: [{ key: "Title", value: "" }],
    icon_R: X,
    headerType: "V3",
  },
};
