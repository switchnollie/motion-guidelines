import styled, { css } from "styled-components";

export const TabsContainer = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  li {
    list-style-type: none;
  }
`;

export const Item = styled.li<{ selected?: boolean; disabled?: boolean }>`
  ${({ selected, theme, disabled }) => css`
    color: ${selected ? theme.accentColor : theme.fontPrimary};
    display: inline-block;
    padding: 0 7px;
    ${disabled && `opacity: 0.5;`}
    /*cursor: pointer;*/

    &:first-of-type {
      padding-left: 0 !important;
    }
    &:last-of-type {
      padding-right: 0 !important;
    }
  `}
`;
