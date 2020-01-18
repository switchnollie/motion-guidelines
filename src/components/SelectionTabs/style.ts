import styled, { css } from "styled-components";

export const TabsContainer = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 23px 0;
  display: flex;
  justify-content: space-between;
  li {
    list-style-type: none;
  }
`;

export const Item = styled.li<{ selected?: boolean }>`
  ${({ selected, theme }) => css`
    color: ${selected ? theme.accentColor : theme.fontPrimary};
    display: inline-block;
    padding: 0 7px;
    cursor: pointer;

    &:first-of-type {
      padding-left: 0 !important;
    }
    &:last-of-type {
      padding-right: 0 !important;
    }
  `}
`;
