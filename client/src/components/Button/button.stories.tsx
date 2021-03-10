import React from "react";
import Button, { IButtonProps } from "./index";
import { Story } from "@storybook/react/types-6-0";

export default {
  component: Button,
  title: "Button",
};

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Default: Story = Template.bind({});
Default.args = {
  children: "Button",
  disabled: false,
};
export const Disabled: Story = Template.bind({});
Disabled.args = {
  children: "Button",
  disabled: true,
};
export const Loading: Story = Template.bind({});
Loading.args = {
  children: "Button",
  loading: true,
};
