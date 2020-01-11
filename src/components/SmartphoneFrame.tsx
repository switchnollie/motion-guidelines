import React, { ReactElement } from "react";
import styled from "styled-components";
import phoneImgPath from "../images/DeviceMockup.png";

const PhoneContainer = styled.div`
  position: absolute;
  height: 584px;
  width: 315px;
  right: -29px;
  bottom: -65px;
  padding: 65px 29px 111px 65px;
  box-sizing: border-box;
  background-image: url("${phoneImgPath}");
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;

  & > * {
    width: 100%;
    height: 100%;
  }
`;

interface Props {
  children?: ReactElement;
}

export default function SmartphoneFrame({ children, ...props }: Props) {
  return <PhoneContainer>{children}</PhoneContainer>;
}
