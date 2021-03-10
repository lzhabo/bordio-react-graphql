import React from "react";
import { Wrapper, ErrorText } from "./styled";

interface IProps {
  error: string;
  children: React.ReactNode;
}
const ErrorContainer: React.FC<IProps> = ({ error, children }) => (
  <Wrapper>
    {children}
    <ErrorText>{error}</ErrorText>
  </Wrapper>
);

export default ErrorContainer;
