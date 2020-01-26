import React, { useState } from "react";
import Column from "../../Column";
import AnimatedButton from "./AnimatedButton";
import AnimationPrinciplesSection from "./AnimationPrinciplesSection";
import SoftwareImplementationSection from "./SoftwareImplementationSection";
import { FirstTitle, TopContainer, TopRightContainer } from "./style";
import EmojiToggle from "../../EmojiToggle";
import usePrincipleSelection from "../../../hooks/usePrincipleSelection";
import { Principle, NavSection } from "../../../types";
import useNavigationSelection from "../../../hooks/useNavigationSelection";

interface Props {
  lastAnimate: number;
  setLastAnimate: (x: number) => any;
}

export default function CenterColumn({ lastAnimate, setLastAnimate }: Props) {
  const {
    selectedMode,
    isUglyToggled,
    setIsUglyToggled
  } = usePrincipleSelection();
  const { focusedSection } = useNavigationSelection();

  const hasEmojiToggle = !!(
    focusedSection === NavSection.Principles &&
    selectedMode !== null &&
    selectedMode !== Principle.Anticipation
  );
  return (
    <Column>
      <TopContainer>
        <FirstTitle hasHighlight={focusedSection === NavSection.Principles}>
          Animationsprinzipien
        </FirstTitle>
        <TopRightContainer>
          <EmojiToggle
            leftEmoji="1F623"
            rightEmoji="1F60D"
            leftLabel=""
            rightLabel=""
            value={!isUglyToggled}
            onChange={e => setIsUglyToggled(!e.target.checked)}
            isShown={hasEmojiToggle}
            disabled={focusedSection !== NavSection.Principles}
          />
          <AnimatedButton
            setLastAnimate={setLastAnimate}
            disabled={focusedSection !== NavSection.Principles}
          />
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
