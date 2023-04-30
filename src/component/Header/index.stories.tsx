import React from "react";
import { Meta, Story } from "@storybook/react";
import Header from ".";
import { HeaderProp } from "./intreface";
import { withRouter } from "storybook-addon-react-router-v6";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "헤더",
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
    icon: faUser,
  },
};

export const Close = Template.bind({});
Close.args = {
  headProp: {
    menus: [],
    isForward: true,
    icon: faX,
  },
};
