import React from "react";
import { StyledButton, Text } from "./styled";
import spinner from "@src/assets/spinner.gif";

export interface IButtonProps {
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<IButtonProps> = ({
  children,
  disabled,
  onClick,
  type,
  loading,
}) => (
  <StyledButton disabled={disabled || loading} onClick={onClick} type={type}>
    <Text loading={loading}>
      {loading && <img src={spinner} alt="loader" />}
      {children}
    </Text>
  </StyledButton>
);
export default Button;
