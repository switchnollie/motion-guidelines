// as seen on https://css-tricks.com/emoji-toggles/

import React, { ChangeEvent } from "react";
import styled, { css } from "styled-components";
import { useSpring, animated, config } from "react-spring";

interface MainProps {
  leftEmoji: string;
  rightEmoji: string;
  leftLabel: string;
  rightLabel: string;
  disabled?: boolean;
  isShown?: boolean;
}

interface CheckboxProps {
  value: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
}

type Props = MainProps & CheckboxProps;

const AnimatedWrapper = styled(animated.div)<MainProps>`
  ${({ leftEmoji, rightEmoji, leftLabel, rightLabel, disabled }) => css`
    position: relative;
    width: 45px;
    .well {
      display: block;
      background: #eee;
      height: 22px;
      border-radius: 11px;
      /*cursor: pointer;*/
    }
    .toggle {
      opacity: 0;
      border: 0;
      outline: none;
      height: 100%;
      width: 100%;
      background: transparent;
      position: absolute;
      /*cursor: pointer;*/
      z-index: 100;
      ~ .emoji:before {
        content: ${`"\\${leftEmoji}"`};
        position: absolute;
        color: ${disabled ? "rgba(0,0,0,0.5)" : "#000"};
        left: 0;
        top: -5px;
        font-size: 25px;
        transition: 0.2s;
      }
      &:checked {
        ~ .emoji:before {
          content: ${`"\\${rightEmoji}"`};
          left: 100%;
          margin-left: -1em;
        }
      }
      ~ label {
        white-space: nowrap;
        &:before {
          content: ${leftLabel};
          position: absolute;
          right: 100%;
          margin-right: 5px;
          top: 0;
        }
        &:after {
          content: ${rightLabel};
          position: absolute;
          left: 100%;
          margin-left: 5px;
          top: 0;
        }
      }
    }
  `}
`;

export default function EmojiToggle({
  isShown,
  value,
  onChange,
  ...props
}: Props) {
  // @ts-ignore
  const { transform } = useSpring({
    from: {
      transform: "translateX(57px)"
    },
    to: {
      transform: isShown ? "translateX(0)" : "translateX(57px)"
    },
    config: config.stiff
  });
  return (
    <AnimatedWrapper style={{ transform }} {...props}>
      <input
        type="checkbox"
        id="toggle1"
        className="toggle"
        disabled={props.disabled}
        checked={value}
        onChange={onChange}
      />
      <div className="emoji"></div>
      <label htmlFor="toggle1" className="well"></label>
    </AnimatedWrapper>
  );
}
