import React from "react";
import styled, { css } from "styled-components";

const LogoContainer = styled.div`
  ${({ theme }) => css`
    width: 144px;
    position: absolute;
    opacity: 0.5;
    top: ${theme.columnPadding};
    right: ${theme.columnPadding};
    transition: transform 2s ease-out;

    svg {
      width: 100%;
      height: auto;
    }
  `}
`;

export default function HsAalenLogo() {
  const svg = require(`!raw-loader!../images/HochschuleAalenLogoGrau.svg`);
  return <LogoContainer dangerouslySetInnerHTML={{ __html: svg.default }} />;
}
