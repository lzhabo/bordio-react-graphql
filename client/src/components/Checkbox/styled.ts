import { Field } from "formik";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Title = styled.label`
  font-size: 14px;
  min-height: 21px;
  display: flex;
  align-items: center;
  &:before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 3px;
    border: 1px solid #0094ff;
    margin-right: 10px;
    cursor: pointer;
  }
`;
export const HiddenCheckbox = styled(Field)`
  display: none;
  &:checked + ${Title}:after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 7px;
    height: 4px;
    top: 7px;
    left: 3px;
    border-left: 1px solid #0094ff;
    border-bottom: 1px solid #0094ff;
    transform: rotate(-45deg);
  }
`;
