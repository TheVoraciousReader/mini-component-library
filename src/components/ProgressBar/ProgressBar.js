/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const computedStyles = {
  small: {
    height: "8px",
    padding: "0px",
    radius: "4px",
  },
  medium: {
    height: "16px",
    padding: "0px",
    radius: "4px",
  },
  large: {
    height: "16px",
    padding: "4px",
    radius: "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = computedStyles[size];
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ "--inner": styles.padding, "--radius": styles.radius }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <ProgressWrapper>
        <Progress
          value={value}
          size={size}
          style={{ "--height": styles.height, "--width": value + "%" }}
        ></Progress>
      </ProgressWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--inner);
`;

const ProgressWrapper = styled.div`
  border-radius: 4px;
  /* Overflow set to hidden so that trimmed edges appear at 99% of progress */
  overflow: hidden;
`;

const Progress = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
`;

export default ProgressBar;
