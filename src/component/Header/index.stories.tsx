import React from "react";
import { Meta, Story } from "@storybook/react";
import Header from ".";
import { HeaderProp } from "./intreface";
import { withRouter } from "storybook-addon-react-router-v6";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { HEAD_TYPE } from "../../interface.d";

export default {
  title: "Header",
  component: Header,
  decorators: [withRouter],
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
    icon_R: faUser,
  },
};

export const Close = Template.bind({});
Close.args = {
  headProp: {
    menus: [],
    isForward: true,
    icon_R: faXmark,
  },
};

export const Notification = Template.bind({});
Notification.args = {
  headProp: {
    menus: [{ key: "Title", value: "" }],
    icon_R: faXmark,
    headerType: HEAD_TYPE.v2,
  },
};

export const LeftClose = Template.bind({});
LeftClose.args = {
  headProp: {
    menus: [{ key: "Title", value: "" }],
    icon_R: faXmark,
    headerType: HEAD_TYPE.v3,
  },
};
