import CategoryBtn from ".";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: CategoryBtn, // 스토리북에 나타낼 컴포넌트
  title: "CategoryBtn", // title: 스토리북에 나타날 이름 [optional]
} as ComponentMeta<typeof CategoryBtn>;

export const Primary: ComponentStory<typeof CategoryBtn> = () => (
  <CategoryBtn text="hihi" /> // props 테스트 문구
);
