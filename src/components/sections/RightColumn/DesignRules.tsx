import React from "react";
import { StyledTitle, ListItem, List } from "./style";
import { NavSection } from "../../../types";

export default function DesignRules() {
  return (
    <>
      <StyledTitle>Design-Regeln</StyledTitle>
      <h6>Animationen</h6>
      <List>
        <ListItem>
          <span>informieren</span> über räumliche und hierarchische Struktur.
        </ListItem>
        <ListItem>
          <span>fokussieren</span> auf die wesentliche Information.
        </ListItem>
        <ListItem>
          <span>zelebrieren</span> wichtige Momente.
        </ListItem>
        <ListItem>
          schaffen <span>Kontinuität</span>.
        </ListItem>
        <ListItem>
          besitzen angemessenes <span>Tempo</span> und <span>Dauer</span>.
        </ListItem>
        <ListItem>
          laufen <span>parallel</span> oder <span>sequentiell</span> ab.
        </ListItem>
        <ListItem>
          beachten <span>physikalische Gesetze</span>.
        </ListItem>
      </List>
    </>
  );
}
