import { RefObject } from "react";
import { Principle } from "../../types";

export interface Props {
  mode: Principle | null;
  lastAnimate: number;
}

export interface LineLengthState {
  [k: string]: number;
}

export interface PathDomElements {
  [k: string]: {
    [k: string]: RefObject<SVGPathElement>;
  };
}
