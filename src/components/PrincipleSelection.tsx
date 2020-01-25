import React from "react";
import SelectionList, { SelectionItem } from "./SelectionList";
import { Principle } from "../types";
import usePrincipleSelection from "../hooks/usePrincipleSelection";
import useNavigationSelection from "../hooks/useNavigationSelection";
import { NavSection } from "../types";

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
  const { focusedSection, setFocusedSection } = useNavigationSelection();
  const isDisabled = focusedSection !== NavSection.Principles;
  const handleChange = (event: React.FormEvent, newValue: any) => {
    isDisabled && setFocusedSection(NavSection.Principles);
    setValue(newValue);
  };
  return (
    <SelectionList value={value} onChange={handleChange} disabled={isDisabled}>
      {selectionListItems.map(({ id, title, subtitle }) => (
        <SelectionItem key={id} value={id} title={title} subtitle={subtitle} />
      ))}
    </SelectionList>
  );
}
