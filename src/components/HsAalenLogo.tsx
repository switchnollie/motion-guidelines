import React from "react";
import styled, { css } from "styled-components";

const LogoContainer = styled.div`
  ${({ theme }) => css`
    width: 144px;
    position: absolute;
    bottom: 20px;

    svg {
      width: 100%;
      height: auto;
    }
  `}
`;

export default function HsAalenLogo() {
  const svg = require(`!raw-loader!../images/Hochschule-aalen.svg`);
  return <LogoContainer dangerouslySetInnerHTML={{ __html: svg.default }} />;
}
