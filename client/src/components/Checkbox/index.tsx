import React from "react";
import { Wrapper, Title, HiddenCheckbox } from "./styled";
import ErrorContainer from "@components/ErrorContainier";

export interface ICheckboxProps {
  name: string;
  error: string;
  touched: any;
  setTouched: (name: string) => void;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  error,
  name,
  children,
  setTouched,
  touched,
}) => (
  <ErrorContainer error={touched[name] ? error : ""}>
    <Wrapper>
      <HiddenCheckbox id={name} type="checkbox" name={name} />
      <Title
        onClick={() => setTouched({ ...touched, [name]: true })}
        htmlFor={name}
      >
        {children}
      </Title>
    </Wrapper>
  </ErrorContainer>
);
export default Checkbox;
