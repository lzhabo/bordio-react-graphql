import React from "react";
import Select, { ISelectProps } from ".";
import { Story } from "@storybook/react/types-6-0";
import { Formik } from "formik";

export default {
  component: Select,
  title: "Select",
};

const Template: Story<ISelectProps> = (args) => (
  <Formik initialValues={{ terms: true }} onSubmit={() => {}}>
    <Select {...args} />
  </Formik>
);

export const Default: Story<ISelectProps> = Template.bind({});
Default.args = {
  title: "Select country",
  options: ["Latvia", "Libia"],
  groupName: "country",
  error: "Error",
};

export const Error: Story<ISelectProps> = Template.bind({});
Error.args = {
  title: "Select country",
  options: ["Latvia", "Libia"],
  groupName: "country",
  error: "Error",
  touched: true,
};
