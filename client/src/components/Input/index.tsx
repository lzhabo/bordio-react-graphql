import React from "react";
import { InputContainer, StyledInput, Wrapper } from "./styled";
import ErrorContainer from "@components/ErrorContainier";

export interface IInputProps {
  name: string;
  title: string;
  error: string;
  icon?: string;
  password?: boolean;
  touched: boolean;
}
const Input: React.FC<IInputProps> = ({
  title,
  error,
  icon,
  name,
  password,
  touched,
}) => (
  <Wrapper>
    <ErrorContainer error={touched ? error : ""}>
      <InputContainer icon={icon}>
        <StyledInput
          type={password ? "password" : "text"}
          name={name}
          placeholder={title}
          error={error}
        />
      </InputContainer>
    </ErrorContainer>
  </Wrapper>
);
export default Input;
