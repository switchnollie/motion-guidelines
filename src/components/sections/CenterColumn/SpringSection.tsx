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

export default function SpringSection({ selected, value, onChange }: Props) {
  return (
    <SelectionGrid>
      <SelectionListColumn>
        <SelectionItem
          onChange={onChange}
          selected={selected}
          value={value}
          title="Physikalische Modelle"
        />
      </SelectionListColumn>
      <VisualizerColumn></VisualizerColumn>
    </SelectionGrid>
  );
}
