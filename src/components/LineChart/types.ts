import { RefObject } from "react";
import { Principle } from "../../types";

export interface Props {
  mode: Principle | null;
  lastAnimate: number;
  badAnimation?: boolean;
}

export interface LineLengthState {
  [k: string]: number;
}

export interface PathDomElements {
  [k: string]: RefObject<SVGPathElement>;
}

export interface LineConfig {
  id: string;
  modeId: Principle;
  path: string;
  animationDuration: number;
  animationDelay?: number;
  transform?: string;
  isBad: boolean;
  fill?: string;
  fillOpacity?: number;
}
