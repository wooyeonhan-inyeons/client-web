import SaveBtn, { SaveTextProps } from ".";
import React from "react";
import { Meta, Story } from "@storybook/react";

export default {
  title: "선택 완료 버튼", // title: 스토리북에 나타날 이름 [optional]
  component: SaveBtn, // 스토리북에 나타낼 컴포넌트
} as Meta;

const Template: Story<SaveTextProps> = (args) => <SaveBtn {...args} />;

export const Basic = Template.bind({});
Basic.args = { text: "선택 완료" };
