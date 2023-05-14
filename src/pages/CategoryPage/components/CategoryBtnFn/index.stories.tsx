import CategoryBtn from ".";
import React from "react";
import { Meta, Story } from "@storybook/react";

export default {
  title: "카테고리 태그 버튼",
  component: CategoryBtn,
} as Meta;

const Template: Story<any> = (args) => <CategoryBtn {...args} />;

export const Basic = Template.bind({});
Basic.args = { text: "일상" };
