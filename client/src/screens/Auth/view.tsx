import React from "react";
import Input from "@src/components/Input";
import Select from "@src/components/Select";
import RadioGroup from "@src/components/RadioGroup";
import Checkbox from "@src/components/Checkbox";
import { Wrapper, Form, Fields, FormTitle } from "./styled";
import mail from "@src/assets/mail.svg";
import password from "@src/assets/password.svg";
import { Link } from "@components/styled";
import Button from "@src/components/Button";

type TProps = any;

interface IProps extends TProps {
  loading: boolean;
}

const AuthView: React.FC<IProps> = (props) => (
  <Wrapper>
    <Form onSubmit={props.handleSubmit}>
      <FormTitle>Create a new account</FormTitle>
      <Fields>
        <Input
          name="name"
          title="Enter your name"
          error={props.errors.name}
          touched={!!props.touched.name}
        />
        <Input
          name="email"
          title="Email"
          icon={mail}
          error={props.errors.email}
          touched={!!props.touched.email}
        />
        <Input
          name="password"
          title="Password"
          password
          icon={password}
          error={props.errors.password}
          touched={!!props.touched.password}
        />
        <Select
          title="Select country"
          options={["Libia", "Latvia"]}
          groupName="country"
          error={props.errors.country}
          touched={!!props.touched.country}
          onChange={props.handleChange}
        />
        <RadioGroup
          groupName="gender"
          options={[
            { name: "Male", value: "male" },
            { name: "Female", value: "female" },
          ]}
          error={props.errors.gender}
          touched={!!props.touched.gender}
        />
        <Checkbox
          name="terms"
          error={props.errors.terms}
          touched={props.touched}
          setTouched={props.setTouched}
        >
          <span>
            Accept <Link>terms</Link> and <Link>conditions</Link>
          </span>
        </Checkbox>
      </Fields>

      <Button disabled={!props.isValid} type="submit">
        Sign up
      </Button>
    </Form>
  </Wrapper>
);
export default AuthView;
