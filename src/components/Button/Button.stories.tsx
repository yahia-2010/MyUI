import React from "react";
import Button, { ButtonProps } from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "MyUI/Button",
  component: Button,
  argTypes: { onClick: { action: "onClick" } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {};
