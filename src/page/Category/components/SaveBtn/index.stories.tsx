import SaveBtn from ".";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: SaveBtn, // 스토리북에 나타낼 컴포넌트
  title: "SaveBtn", // title: 스토리북에 나타날 이름 [optional]
} as ComponentMeta<typeof SaveBtn>;

export const Primary: ComponentStory<typeof SaveBtn> = () => (
  <SaveBtn text="선택 완료" />
);
