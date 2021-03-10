import React, { useState } from "react";
import SelectView from "./view";

export interface ISelectProps {
  title: string;
  groupName: string;
  options: string[];
  error: string;
  touched: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Select: React.FC<ISelectProps> = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setValue] = useState<string | null>(null);
  const toggleSelect = () => {
    isOpen ? setOpen(false) : setOpen(true);
  };
  const setSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setOpen(false);
    props.onChange(e);
  };
  const viewProps = {
    isOpen,
    toggleSelect,
    selectedValue,
    setSelected,
    ...props,
  };
  return <SelectView {...viewProps} />;
};
export default Select;
