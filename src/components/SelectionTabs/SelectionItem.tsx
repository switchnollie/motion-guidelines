import React from "react";
import { Item } from "./style";

interface Props {
  value: any;
  onChange?: (e: React.FormEvent, value: any) => void;
  children: string;
  selected?: boolean;
  disabled?: boolean;
}

export default function SelectionItem({
  value,
  onChange,
  selected,
  children,
  disabled
}: Props) {
  const handleChange = (e: React.FormEvent) => {
    onChange && onChange(e, value);
  };
  return (
    <Item onClick={handleChange} selected={selected} disabled={disabled}>
      {children}
    </Item>
  );
}
