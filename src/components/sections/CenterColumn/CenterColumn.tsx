import React from "react";
import Column from "../../Column";
import AnimatedButton from "./AnimatedButton";
import AnimationPrinciplesSection from "./AnimationPrinciplesSection";
import SoftwareImplementationSection from "./SoftwareImplementationSection";
import { FirstTitle, TopContainer } from "./style";

interface Props {
  lastAnimate: number;
  setLastAnimate: (x: number) => any;
}

export default function CenterColumn({ lastAnimate, setLastAnimate }: Props) {
  return (
    <Column>
      <TopContainer>
        <FirstTitle>Animationsprinzipien</FirstTitle>
        <AnimatedButton setLastAnimate={setLastAnimate} />
      </TopContainer>
      <AnimationPrinciplesSection
        setLastAnimate={setLastAnimate}
        lastAnimate={lastAnimate}
      />
      <SoftwareImplementationSection
        setLastAnimate={setLastAnimate}
        lastAnimate={lastAnimate}
      />
    </Column>
  );
}
