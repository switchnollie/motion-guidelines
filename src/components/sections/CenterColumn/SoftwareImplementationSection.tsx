import React from "react";
import { StyledDivider, SecondTitle, BoxWrapper, Box } from "./style";
import SelectionList, { SelectionItem } from "../../SelectionList";
import useImplementationSelection from "../../../hooks/useSoftwareSelection";
import SelectionGrid, {
  SelectionListColumn,
  VisualizerColumn
} from "../../SelectionGrid";

interface Props {
  lastAnimate: number;
  setLastAnimate: (x: number) => any;
}
const selectionListItems = [
  {
    id: "keyframes",
    title: "Keyframes"
  },
  {
    id: "spring",
    title: "Physikalische Modelle"
  }
];

export default function SoftwareImplementationSection(props: Props) {
  const {
    selectedMode: value,
    setSelectedMode: setValue
  } = useImplementationSelection();
  const handleChange = (event: React.FormEvent, newValue: any) => {
    setValue(newValue);
  };
  return (
    <>
      <SecondTitle>Modellierung in Software</SecondTitle>
      <StyledDivider vertical />
      <BoxWrapper>
        <Box keyLeft />
        <Box keyRight />
        <Box main />
      </BoxWrapper>
      <SelectionGrid>
        <SelectionListColumn>
          <SelectionList value={value} onChange={handleChange}>
            {selectionListItems.map(({ id, title }) => (
              <SelectionItem key={id} value={id} title={title} />
            ))}
          </SelectionList>
        </SelectionListColumn>
        <VisualizerColumn></VisualizerColumn>
      </SelectionGrid>
    </>
  );
}
