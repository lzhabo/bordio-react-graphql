import { Field } from "formik";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;
export const Label = styled.label`
  margin-right: 25px;
`;
export const Title = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  &:before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 8px;
    border-radius: 50%;
    border: 1px solid #0094ff;
  }
`;
export const Radio = styled(Field)`
  display: none;
  &:checked + ${Title} {
    &:after {
      content: "";
      display: inline-block;
      position: absolute;
      left: 3px;
      width: 8px;
      height: 8px;
      background-color: #0094ff;
      border-radius: 50%;
    }
  }
`;
