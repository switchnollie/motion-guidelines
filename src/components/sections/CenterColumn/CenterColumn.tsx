import React from "react";
import Column from "../../Column";
import AnimationPrinciplesSection from "./AnimationPrinciplesSection";
import SoftwareImplementationSection from "./SoftwareImplementationSection";

interface Props {
  lastAnimate: number;
  setLastAnimate: (x: number) => any;
}

export default function CenterColumn(props: Props) {
  return (
    <Column>
      <AnimationPrinciplesSection {...props} />
      <SoftwareImplementationSection {...props} />
    </Column>
  );
}
