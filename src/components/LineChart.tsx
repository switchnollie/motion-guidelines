import React, { useEffect, useRef, useState, RefObject } from "react";
import styled, { css, keyframes } from "styled-components";
import { Principle } from "../types";

const DrawLine = keyframes`to { stroke-dashoffset: 0;}`;

const SquashNStretchLines = styled.path<{
  animationDuration: number;
  lineLength: number | undefined;
}>`
  ${({ animationDuration, lineLength, theme }) => css`
    stroke: ${theme.accentColor};
    stroke-dasharray: ${lineLength};
    stroke-dashoffset: ${lineLength};
    .animate {
      animation: ${DrawLine} ${animationDuration}ms linear forwards;
    }
  `}
`;

interface Props {
  mode: Principle | null;
  lastAnimate: number;
}

interface LineLengthState {
  [k: string]: number;
}

interface PathDomElements {
  [k: string]: {
    [k: string]: RefObject<SVGPathElement>;
  };
}

const getDuration = (mode: Principle) => {
  switch (mode) {
    case Principle.SquashNStretch:
      return 600;
    default:
      return 400;
  }
};

export default function LineChart({ mode, lastAnimate, ...props }: Props) {
  const pathDomElements: PathDomElements = {
    [Principle.SquashNStretch]: {
      lines: useRef<SVGPathElement>(null)
    }
  };
  const [pathLengths, setPathLengths] = useState<LineLengthState>({});

  const calculatePathLengths = (mode: Principle) => {
    const initialAcc: LineLengthState = {};
    const reducer = (acc: LineLengthState, pathElName: string) => {
      const currentPathEl: SVGPathElement | null =
        pathDomElements[mode][pathElName]?.current;
      if (currentPathEl) {
        acc[pathElName] = currentPathEl.getTotalLength();
      }
      return acc;
    };

    const newPathLengths: LineLengthState = Object.keys(
      pathDomElements[mode]
    ).reduce(reducer, initialAcc);
    return newPathLengths;
  };

  const startAnimation = (domEl: SVGPathElement) => {
    const classList = domEl.classList;
    if (classList && classList.contains("animate")) {
      classList.remove("animate");
    }
    classList?.add("animate");
  };
  useEffect(() => {
    if (mode && lastAnimate) {
      switch (mode as Principle) {
        case Principle.SquashNStretch:
          const domEl = pathDomElements[Principle.SquashNStretch].lines;
          domEl.current && startAnimation(domEl.current);
          break;
        default:
          console.log("running animation for ", mode);
      }
    }
  }, [lastAnimate, mode]);
  useEffect(() => {
    if (mode) {
      const newPathLengths = calculatePathLengths(mode);
      setPathLengths(newPathLengths);
    }
  }, [mode]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="131"
      height="91"
      viewBox="0 0 131 91"
      {...props}
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-677 -190) translate(677 190)">
          <path
            stroke="#989DB1"
            strokeLinecap="square"
            d="M2.716 2.465L2.408 88.5"
          ></path>
          <path fill="#989DB1" d="M2.88970588 0L5.77941176 6 0 6z"></path>
        </g>
        <g transform="translate(-677 -190) translate(677 190) translate(2.234 85)">
          <path
            fill="#989DB1"
            d="M125.220588 0.110294118L128.220588 5.88970588 122.220588 5.88970588z"
            transform="rotate(90 125.22 3)"
          ></path>
          <path
            stroke="#989DB1"
            strokeLinecap="square"
            d="M0.482 3.137L122.813 3.137"
          ></path>
        </g>
        {mode === Principle.SquashNStretch && (
          <SquashNStretchLines
            ref={pathDomElements[Principle.SquashNStretch].lines}
            lineLength={pathLengths[Principle.SquashNStretch]}
            animationDuration={getDuration(Principle.SquashNStretch)}
            strokeWidth="2"
            d="M3 21.5C17.125 32.5 30.769 38 43.931 38c20.225 0 26.967-28 41.413-28 7.223 0 13.483 15.5 20.225 15.5 6.741 0 10.112-4.5 14.928-4.5 1.284 0 2.728.167 4.334.5M3 69.75C17.125 75.25 30.769 78 43.931 78c20.225 0 26.967-14 41.413-14 7.223 0 13.483 7.75 20.225 7.75 6.741 0 10.112-2.25 14.928-2.25 1.284 0 2.728.083 4.334.25"
            transform="translate(-677 -190) translate(677 190)"
          ></SquashNStretchLines>
        )}
      </g>
    </svg>
  );
}
