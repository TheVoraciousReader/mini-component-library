import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <SelectUI>
        {displayedValue}
        <Chevron as={Icon} id="chevron-down" size={24} />
      </SelectUI>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const SelectWrapper = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
  -webkit-appearance: none;
`;

const SelectUI = styled.div`
  width: fit-content;
  padding: 12px 16px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: ${16 / 16}rem;
  border-radius: 8px;
  padding-right: 52px;

  ${SelectWrapper}:focus + & {
    outline: 1px dotted #212121; /* fallback */
    outline: 5px auto Highlight; /* firefox */
    outline: 5px auto -webkit-focus-ring-color; /* works on webkit based browsers - chrome, safari */
  }

  ${SelectWrapper}:hover + & {
    color: ${COLORS.black};
  }
`;

const Chevron = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  right: 10px;
  margin: auto;
  bottom: 0;
`;

export default Select;
