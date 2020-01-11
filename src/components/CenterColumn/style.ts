import styled, { css } from "styled-components";
import Divider from "../Divider";
import Button from "../Button";

export const StyledTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.fontPrimary};
  `}
`;

export const StyledDivider = styled(Divider)`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    top: ${theme.columnPadding};
    height: calc(100% - 2 * ${theme.columnPadding});
    box-sizing: border-box;
  `}
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    flex: 1;
  }
`;

export const StyledButton = styled(Button)`
  width: 128px;
`;

export const SelectionGrid = styled.div`
  display: flex;
  align-items: center;
`;

export const VisualizerColumn = styled.div`
  width: 128px;
`;

export const SelectionListColumn = styled.div`
  flex: 1;
`;
