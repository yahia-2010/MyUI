import React from "react";
import ButtonGroup, { ButtonGroupProps } from "./ButtonGroup";
import Button from "../Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "MyUI/ButtonGroup",
  component: ButtonGroup,
  argTypes: { childrenNum: { type: "number", defaultValue: 2 } },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<any> = ({
  childrenNum,
  ...args
}: {
  childrenNum: number;
  args: ButtonGroupProps;
}) => (
  <ButtonGroup {...args}>
    {[...Array(childrenNum).keys()].map((n: number) => (
      <Button key={n}>Button{n + 1}</Button>
    ))}
  </ButtonGroup>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Three = Template.bind({});
Three.args = {
  childrenNum: 3,
};

export const NoSpacing = Template.bind({});
NoSpacing.args = {
  spacing: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Custom = Template.bind({});
Custom.args = {
  style: {
    gap: ".5rem",
    flexDirection: "column",
    width: "5rem",
  },
};
