import React from "react";
import RadioGroup, { IRadioProps } from "./index";
import { Story } from "@storybook/react/types-6-0";
import { Formik } from "formik";

export default {
  component: RadioGroup,
  title: "RadioGroup",
};

const Template: Story<IRadioProps> = (args) => (
  <Formik initialValues={{ gender: "" }} onSubmit={() => {}}>
    <RadioGroup {...args} />
  </Formik>
);

export const Default: Story<IRadioProps> = Template.bind({});
Default.args = {
  error: "",
  groupName: "gender",
  options: [
    { name: "Male", value: 1 },
    { name: "Female", value: 2 },
  ],
  touched: false,
};

export const Error: Story<IRadioProps> = Template.bind({});
Error.args = {
  error: "Error messssage",
  touched: true,
  groupName: "gender",
  options: [
    { name: "Male", value: 1 },
    { name: "Female", value: 2 },
  ],
};
