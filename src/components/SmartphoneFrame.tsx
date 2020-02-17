import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import phoneImgPath from "../images/DeviceMockup.png";

const PhoneContainer = styled.div<{ active: boolean }>`
  ${({ active }) => css`
  position: absolute;
  height: 584px;
  width: 315px;
  right: -25px;
  bottom: -65px;
  padding: 65px 23px 115px 65px;
  box-sizing: border-box;
  background-image: url("${phoneImgPath}");
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  transform: ${active ? `translateX(0)` : `translateX(100px)`};

  & > * {
    width: 100%;
    height: 100%;
  }
`}
`;

interface Props {
  children?: ReactElement | null;
  active?: boolean;
}

export default function SmartphoneFrame({ children, active, ...props }: Props) {
  return <PhoneContainer active={!!active}>{children}</PhoneContainer>;
}
