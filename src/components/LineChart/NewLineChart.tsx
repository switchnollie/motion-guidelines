import React, { useEffect, useRef, useState, createRef } from "react";
import { Props, LineLengthState, PathDomElements } from "./types";
import { AnimatedLine } from "./style";
import lineData from "./lineData";

export default function NewLineChart({
  mode,
  lastAnimate,
  badAnimation,
  ...props
}: Props) {
  const domElObj = lineData.reduce((acc: PathDomElements, { id }) => {
    acc[id] = createRef();
    return acc;
  }, {});
  const pathDomElements = useRef<PathDomElements>(domElObj);

  const [pathLengths, setPathLengths] = useState<LineLengthState>({});

  const calculatePathLengths = () => {
    const initialAcc: LineLengthState = {};
    const reducer = (acc: LineLengthState, pathElId: string) => {
      const currentPathEl: SVGPathElement | null =
        pathDomElements?.current[pathElId]?.current;
      if (currentPathEl) {
        acc[pathElId] = currentPathEl.getTotalLength();
      }
      return acc;
    };
    const newPathLengths: LineLengthState = Object.keys(
      pathDomElements.current || {}
    ).reduce(reducer, initialAcc);
    return newPathLengths;
  };

  const clearAnimateClasses = () => {
    Object.keys(pathDomElements.current || {})
      .filter(
        key => (lineData as any)[key] && (lineData as any)[key].modeId === mode
      )
      .forEach(pathKey => {
        const domEl = pathDomElements?.current[pathKey]?.current;
        const classList = domEl?.classList;
        if (classList && classList.contains("animate")) {
          classList.remove("animate");
        }
      });
  };

  const startAnimation = (domEl: SVGPathElement) => {
    const classList = domEl.classList;
    if (classList && classList.contains("animate")) {
      classList.remove("animate");
      void domEl.clientHeight;
    }
    classList?.add("animate");
  };
  useEffect(() => {
    if (mode !== null && lastAnimate) {
      lineData
        .filter(({ modeId }) => mode === modeId)
        .forEach(({ id }) => {
          const domEl = pathDomElements?.current[id];
          domEl?.current && startAnimation(domEl.current);
        });
    }
  }, [lastAnimate, mode, badAnimation]);
  useEffect(() => {
    clearAnimateClasses();
    if (mode !== null && pathDomElements?.current) {
      const newPathLengths = calculatePathLengths();
      setPathLengths(newPathLengths);
    }
  }, [mode, badAnimation]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="131"
      height="92"
      viewBox="0 0 131 92"
      {...props}
    >
      <g
        className="page1"
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
      >
        <g
          className="Koordinatensystem PfeilVertikal"
          transform="translate(-677 -189) translate(677 189) translate(0 1)"
        >
          <path
            stroke="#989DB1"
            strokeLinecap="square"
            d="M2.716 2.465L2.408 88.5"
          ></path>
          <path fill="#989DB1" d="M2.88970588 0L5.77941176 6 0 6z"></path>
        </g>
        <g
          className="Koordinatensystem PfeilHorizontal"
          transform="translate(-677 -189) translate(677 189) translate(0 1) translate(2.234 85)"
        >
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
      </g>
      {lineData
        .filter(
          ({ modeId, isBad }) => isBad === badAnimation && modeId === mode
        )
        .map(({ path, id, ...other }) => (
          <AnimatedLine
            key={id}
            lineLength={pathLengths[id]}
            ref={pathDomElements.current[id]}
            d={path}
            {...other}
          />
        ))}
    </svg>
  );
}
