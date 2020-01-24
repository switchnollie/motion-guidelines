// as seen on https://css-tricks.com/emoji-toggles/

import React from "react";
import styled, { css } from "styled-components";

interface Props {
  leftEmoji: string;
  rightEmoji: string;
  leftLabel: string;
  rightLabel: string;
}

const Wrapper = styled.div<Props>`
  ${({ leftEmoji, rightEmoji, leftLabel, rightLabel }) => css`
    position: relative;
    width: 45px;
    .well {
      display: block;
      background: #eee;
      height: 22px;
      border-radius: 11px;
      //cursor: pointer;
    }
    .toggle {
      opacity: 0;
      border: 0;
      outline: none;
      height: 100%;
      width: 100%;
      background: transparent;
      position: absolute;
      //cursor: pointer;
      z-index: 100;
      ~ .emoji:before {
        content: ${`"\\${leftEmoji}"`};
        position: absolute;
        color: #000;
        left: 0;
        top: -4px;
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

export default function EmojiToggle(props: Props) {
  console.log(`\\${props.leftEmoji}`);
  return (
    <Wrapper {...props}>
      <input type="checkbox" id="toggle1" className="toggle" />
      <div className="emoji"></div>
      <label htmlFor="toggle1" className="well"></label>
    </Wrapper>
  );
}
