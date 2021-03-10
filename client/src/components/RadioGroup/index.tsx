import React from "react";
import { Wrapper, Label, Title, Radio } from "./styled";
import ErrorContainer from "@components/ErrorContainier";

export type TOption = {
  name: string;
  value: number | string;
};
export interface IRadioProps {
  error: string;
  options: TOption[];
  groupName: string;
  touched: boolean;
}

const RadioGroup: React.FC<IRadioProps> = ({
  error,
  options,
  groupName,
  touched,
}) => (
  <ErrorContainer error={touched ? error : ""}>
    <Wrapper>
      {options.map((item) => (
        <Label key={item.value}>
          <Radio type="radio" name={groupName} value={item.value} />
          <Title>{item.name}</Title>
        </Label>
      ))}
    </Wrapper>
  </ErrorContainer>
);
export default RadioGroup;
