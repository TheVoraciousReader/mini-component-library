import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const computedStyles = {
  small: {
    border: "1px",
    padding: "4px 0 4px 24px",
    iconSize: 16,
    fontSize: 14 / 16,
    height: 24 / 16,
  },
  large: {
    border: "2px",
    padding: "4px 0 4px 36px",
    iconSize: 24,
    fontSize: 18 / 16,
    height: 36 / 16,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...props
}) => {
  const styles = computedStyles[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper id={icon} as={Icon} size={styles.iconSize} />
      <TextInput
        {...props}
        type="text"
        placeholder={placeholder}
        style={{
          "--border": styles.border,
          "--width": width + "px",
          "--padding": styles.padding,
          "--font-size": styles.fontSize + "rem",
          "--height": styles.height + "rem",
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  color: inherit;
  pointer-events: none;
`;

const TextInput = styled.input`
  box-sizing: border-box;
  width: var(--width);
  border: none;
  padding: var(--padding);
  border-bottom: var(--border) solid currentColor;
  color: inherit;
  font-weight: bold;
  font-size: var(--font-size);
  height: var(--height);
  outline-offset: 2px;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }
`;

export default IconInput;
