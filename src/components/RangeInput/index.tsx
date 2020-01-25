import { ChangeEvent, CSSProperties } from "react";
export { default } from "./RangeInput";

export interface RangeInputProps {
  inverse?: boolean;
  name: string;
  min: number;
  max: number;
  value: number;
  accentColor?: string;
  baseColor?: string;
  style?: CSSProperties;
  className?: string;
  statusText?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
  disabled?: boolean;
}
