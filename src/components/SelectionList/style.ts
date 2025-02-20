import styled, { css } from "styled-components";

export const ListContainer = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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

export const Item = styled.li<{ selected?: boolean; disabled?: boolean }>`
  ${({ selected, disabled, theme }) => css`
    background-color: ${selected ? theme.accentColor : "unset"};
    color: ${selected ? theme.fontInverse : theme.fontPrimary};
    margin-left: -${theme.columnPadding};
    padding: 0 11px 0 ${theme.columnPadding};
    height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: ${disabled ? 0.66 : 1};
    /*cursor: pointer;*/
    transition: background-color 0.2s ease-out;

    ${!selected &&
      css`
        &:hover {
          background-color: ${theme.listHoverBackground};
        }
      `}
  `}
`;
