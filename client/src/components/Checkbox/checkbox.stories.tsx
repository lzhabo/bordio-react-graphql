import React from "react";
import Checkbox, { ICheckboxProps } from ".";
import { Story } from "@storybook/react/types-6-0";
import { Formik } from "formik";

export default {
  component: Checkbox,
  title: "Checkbox",
};

const Template: Story<ICheckboxProps> = (args) => (
  <Formik initialValues={{ terms: true }} onSubmit={() => {}}>
    <Checkbox {...args} />
  </Formik>
);

type TCheckboxStory = Story<
  ICheckboxProps & { title: string; children: string }
>;

export const Default: TCheckboxStory = Template.bind({});
Default.args = {
  name: "terms",
  title: "Default",
  children: "Check",
  touched: [],
};

export const Error: TCheckboxStory = Template.bind({});
Error.args = {
  name: "terms",
  error: "Password must contain at least 6 symbols",
  children: "Check",
  touched: { terms: true },
};
