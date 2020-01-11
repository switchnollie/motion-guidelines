import styled, { css } from "styled-components";

export const ListContainer = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 0 25px 0 0;
  li {
    list-style-type: none;
  }
`;

export const ItemTitle = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const ItemSubtitle = styled.p`
  font-weight: normal;
  margin: 0;
`;

export const Item = styled.li<{ selected?: boolean }>`
  ${({ selected, theme }) => css`
    background-color: ${selected ? theme.accentColor : "unset"};
    color: ${selected ? theme.fontInverse : theme.fontPrimary};
    margin-left: -${theme.columnPadding};
    padding: 16px 0 16px ${theme.columnPadding};
    cursor: pointer;
  `}
`;
