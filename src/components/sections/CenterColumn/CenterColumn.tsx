import React from "react";
import Column from "../../Column";
import AnimatedButton from "./AnimatedButton";
import AnimationPrinciplesSection from "./AnimationPrinciplesSection";
import SoftwareImplementationSection from "./SoftwareImplementationSection";
import { FirstTitle, TopContainer, TopRightContainer } from "./style";
import EmojiToggle from "../../EmojiToggle";

interface Props {
  lastAnimate: number;
  setLastAnimate: (x: number) => any;
}

export default function CenterColumn({ lastAnimate, setLastAnimate }: Props) {
  return (
    <Column>
      <TopContainer>
        <FirstTitle>Animationsprinzipien</FirstTitle>
        <TopRightContainer>
          <EmojiToggle
            leftEmoji="1F623"
            rightEmoji="1F60D"
            leftLabel=""
            rightLabel=""
          />
          <AnimatedButton setLastAnimate={setLastAnimate} />
        </TopRightContainer>
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
