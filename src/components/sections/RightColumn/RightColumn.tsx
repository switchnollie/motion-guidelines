import React from "react";
import Column from "../../Column";
import SmartphoneFrame from "../../SmartphoneFrame";
import { StyledTitle, ListItem, List } from "./style";

export default function RightColumn() {
  return (
    <Column>
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
      <SmartphoneFrame>
        <iframe name="hero" src="http://127.0.0.1:8080/#/" />
      </SmartphoneFrame>
    </Column>
  );
}
