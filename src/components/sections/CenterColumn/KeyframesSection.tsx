import React from "react";
import { SelectionItem } from "../../SelectionList";
import SelectionGrid, {
  SelectionListColumn,
  VisualizerColumn
} from "../../SelectionGrid";

interface Props {
  selected?: boolean;
  value?: any;
  onChange?: (e: React.FormEvent, value: any) => void;
}

export default function KeyframesSection({ selected, value, onChange }: Props) {
  return (
    <SelectionGrid>
      <SelectionListColumn>
        <SelectionItem
          onChange={onChange}
          selected={selected}
          value={value}
          title="Keyframes"
        />
      </SelectionListColumn>
      <VisualizerColumn></VisualizerColumn>
    </SelectionGrid>
  );
}
