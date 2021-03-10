import React from "react";
import Input, { IInputProps } from ".";
import { Story } from "@storybook/react/types-6-0";
import { Formik } from "formik";

import password from "@src/assets/password.svg";

export default {
  component: Input,
  title: "Input",
};

const Template: Story<IInputProps> = (args) => (
  <Formik initialValues={{ name: "John Doe" }} onSubmit={() => {}}>
    <Input {...args} children={<span>Checkbox</span>} />
  </Formik>
);

type TInputStory = Story<IInputProps & { title: string; children: string }>;

export const Default: TInputStory = Template.bind({});
Default.args = {
  name: "name",
  title: "Default",
  children: "Check",
};

export const Error: TInputStory = Template.bind({});
Error.args = {
  name: "name",
  title: "Ju1455^$#",
  error: "Password must contain at least 6 symbols",
  touched: true,
};

export const Icon: TInputStory = Template.bind({});
Icon.args = {
  name: "name",
  title: "Icon",
  icon: password,
};
