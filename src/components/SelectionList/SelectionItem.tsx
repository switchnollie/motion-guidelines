import React from "react";
import { ItemTitle, ItemSubtitle, Item } from "./style";

// TODO: Make onChange mandatory (is always injected through children cloning from parent (SelectionList))
interface Props {
  value: any;
  onChange?: (e: React.FormEvent, value: any) => void;
  title: string;
  subtitle: string;
  selected?: boolean;
}

export default function SelectionItem({
  value,
  onChange,
  title,
  subtitle,
  selected
}: Props) {
  const handleChange = (e: React.FormEvent) => {
    onChange && onChange(e, value);
  };
  return (
    <Item onClick={handleChange} selected={selected}>
      <ItemTitle>{`${title}:`}</ItemTitle>
      <ItemSubtitle>{subtitle}</ItemSubtitle>
    </Item>
  );
}
