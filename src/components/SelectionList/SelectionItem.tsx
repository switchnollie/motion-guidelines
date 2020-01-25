import React, { CSSProperties } from "react";
import { ItemTitle, ItemSubtitle, Item } from "./style";

// TODO: Make onChange mandatory (is always injected through children cloning from parent (SelectionList))
interface Props {
  value: any;
  onChange?: (e: React.FormEvent, value: any) => void;
  title: string;
  subtitle?: string;
  selected?: boolean;
  style?: CSSProperties;
  disabled?: boolean;
}

export default function SelectionItem({
  value,
  onChange,
  title,
  subtitle,
  selected,
  disabled,
  style
}: Props) {
  const handleChange = (e: React.FormEvent) => {
    onChange && onChange(e, value);
  };
  return (
    <Item
      onClick={handleChange}
      selected={selected}
      style={style}
      disabled={disabled}
    >
      <ItemTitle>{`${title}:`}</ItemTitle>
      <ItemSubtitle>{subtitle}</ItemSubtitle>
    </Item>
  );
}
