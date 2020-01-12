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
    padding: 0 11px 0 ${theme.columnPadding};
    height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
  `}
`;
