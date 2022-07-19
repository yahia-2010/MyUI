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
Primary.args = {
  variant: "primary",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
};

export const Round = Template.bind({});
Round.args = {
  rounded: "md",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Elevated = Template.bind({});
Elevated.args = {
  elevation: true,
};

export const Underlined = Template.bind({});
Underlined.args = {
  underlined: true,
};

export const Custom = Template.bind({});
Custom.args = {
  style: {
    letterSpacing: "1.5px",
    backgroundImage: "linear-gradient(to bottom right, purple, blue)",
  },
};
