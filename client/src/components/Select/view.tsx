import React from "react";
import {
  Wrapper,
  OptionTitle,
  SelectBox,
  Radio,
  Option,
  OptionsContainer,
} from "./styled";
import ErrorContainer from "@components/ErrorContainier";

interface IProps {
  isOpen: boolean;
  title?: string;
  toggleSelect?: () => void;
  options: string[];
  groupName: string;
  setSelected: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedValue: string | null;
  error: string;
  touched: boolean;
}

const SelectView: React.FC<IProps> = ({
  isOpen,
  title,
  toggleSelect,
  options,
  groupName,
  setSelected,
  selectedValue,
  error,
  touched,
}) => (
  <Wrapper open={isOpen}>
    <ErrorContainer error={touched ? error : ""}>
      <SelectBox selected={!!selectedValue} onClick={toggleSelect}>
        {selectedValue ? selectedValue : title}
      </SelectBox>
    </ErrorContainer>
    <OptionsContainer>
      {options.map((option) => (
        <Option key={option}>
          <OptionTitle>{option}</OptionTitle>
          <Radio
            type="radio"
            onChange={setSelected}
            name={groupName}
            value={option}
          />
        </Option>
      ))}
    </OptionsContainer>
  </Wrapper>
);

export default SelectView;
