import React from "react";
import SelectionList, { SelectionItem } from "./SelectionList";
import { Principle } from "../types";
import usePrincipleSelection from "../hooks/usePrincipleSelection";

const selectionListItems = [
  {
    id: Principle.SquashNStretch,
    title: "Strecken und Stauchen",
    subtitle: "Verformung ohne Volumenveränderung"
  },
  {
    id: Principle.Anticipation,
    title: "Antizipation",
    subtitle: "z.B. Hover-Effekte"
  },
  {
    id: Principle.FollowThrough,
    title: "Follow Through/ Overlapping Actions",
    subtitle: "Ausklingen und Kopplungen von Bewegungen"
  },
  {
    id: Principle.Timing,
    title: "Timing",
    subtitle: "Keine spürbaren Verzögerungen erzeugen"
  }
];

export default function PrincipleSelection() {
  const {
    selectedMode: value,
    setSelectedMode: setValue
  } = usePrincipleSelection();
  const handleChange = (event: React.FormEvent, newValue: any) => {
    console.log("change: new Value is", newValue);
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
