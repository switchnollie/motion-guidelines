import React, { useState } from "react";
import { StyledButton } from "./style";
import TooltipMenu from "../../TooltipMenu";
import { Principle, NavSection } from "../../../types";
import usePrincipleSelection from "../../../hooks/usePrincipleSelection";
import useNavigationSelection from "../../../hooks/useNavigationSelection";

interface Props {
  setLastAnimate: (x: number) => any;
  disabled?: boolean;
}

export default function AnimatedButton({ setLastAnimate, disabled }: Props) {
  const { selectedMode } = usePrincipleSelection();
  const { focusedSection } = useNavigationSelection();
  const [isTooltipShown, setIsTooltipShown] = useState(false);
  const toggleTooltip = () => setIsTooltipShown(!isTooltipShown);
  const handleButtonClick = () => setLastAnimate(Date.now());
  const isInAnticipationMode =
    selectedMode === Principle.Anticipation &&
    focusedSection === NavSection.Principles;
  const isInTimingMode = selectedMode === Principle.Timing;
  const svg = require(`!raw-loader!../../../images/play-arrow.svg`);
  const tooltipMenuItems = ["🦄", "🦍", "🐙", "🐠"];
  return (
    <div style={{ position: "relative" }}>
      <StyledButton
        round={isInAnticipationMode}
        onClick={
          isInTimingMode
            ? () => {
                toggleTooltip();
                handleButtonClick();
              }
            : handleButtonClick
        }
        disabled={disabled}
        pulse={isInAnticipationMode}
      >
        {isInAnticipationMode ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "20px"
            }}
            dangerouslySetInnerHTML={{
              __html: svg.default
            }}
          />
        ) : (
          "Animate"
        )}
      </StyledButton>
      {isInTimingMode && (
        <TooltipMenu
          isOpen={isTooltipShown}
          setIsOpen={setIsTooltipShown}
          items={tooltipMenuItems}
        />
      )}
    </div>
  );
}
