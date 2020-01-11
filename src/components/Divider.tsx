import styled, { css } from "styled-components";

const horizontalStyles = css`
  height: 1px;
  width: 100%;
`;

const verticalStyles = css`
  width: 1px;
  height: 100%;
`;

const Divider = styled.div<{
  horizontal?: boolean;
  vertical?: boolean;
  inverse?: boolean;
}>`
  ${({ vertical, inverse, theme }) => css`
    background-color: ${inverse
      ? theme.fontInverseSecondary
      : theme.fontSecondary};
    ${vertical ? verticalStyles : horizontalStyles};
  `}
`;

export default Divider;
