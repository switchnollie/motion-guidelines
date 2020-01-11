import React, { useState } from "react";
import SelectionList, { SelectionItem } from "./SelectionList";

const selectionListItems = [
  {
    id: 1,
    title: "Strecken und Stauchen",
    subtitle: "Verformung ohne Volumenveränderung"
  },
  {
    id: 2,
    title: "Antizipation",
    subtitle: "z.B. Hover-Effekte"
  },
  {
    id: 3,
    title: "Follow Through & Overlapping Actions",
    subtitle: "Ausklingen und Kopplungen von Bewegungen"
  },
  {
    id: 4,
    title: "Timing",
    subtitle: "Keine spürbaren Verzögerungen erzeugen"
  }
];

export default function PrincipleSelection() {
  const [value, setValue] = useState(null);
  const handleChange = (event: React.FormEvent, newValue: any) => {
    setValue(newValue);
  };
  return (
    <SelectionList value={value} onChange={handleChange}>
      {selectionListItems.map(({ id, title, subtitle }) => (
        <SelectionItem key={id} value={id} title={title} subtitle={subtitle} />
      ))}
    </SelectionList>
  );
}
