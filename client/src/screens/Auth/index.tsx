import React, { useState } from "react";
import AuthView from "./view";
import { Formik } from "formik";
import * as Yup from "yup";
import { usersService } from "@services";

export interface IUser {
  name: string;
  email: string;
  password: string;
  country: string;
  gender: string;
  terms: boolean;
}

function Auth() {
  const [loading, setLoading] = useState(false);

  const yupSchema = Yup.object({
    name: Yup.string()
      .matches(/^[a-zA-Z]+$/, { message: "Only Latin letters are allowed" })
      .required("Please enter a valid name"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Please enter a valid email address"),
    password: Yup.string()
      .required("Password must contain at least 6 symbols")
      .min(6, "Password must contain at least 6 symbols"),
    country: Yup.string().required("You must select your country"),
    gender: Yup.string().required("You must select the gender"),
    terms: Yup.boolean().oneOf([true], "You must accept the policies"),
  });

  const initialValues: IUser = {
    name: "",
    email: "",
    password: "",
    country: "",
    gender: "",
    terms: false,
  };

  const handleSubmit = async (data: IUser) => {
    setLoading(true);
    const user = await usersService.register(data);
    console.log(user);
    setLoading(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={yupSchema}
      validateOnMount={true}
    >
      {(props) => (
        <AuthView {...props} loading={loading} setLoading={setLoading} />
      )}
    </Formik>
  );
}
export default Auth;
