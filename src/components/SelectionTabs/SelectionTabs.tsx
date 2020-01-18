import React, { FormEvent } from "react";
import { TabsContainer } from "./style";
import SelectionDecorator from "../SelectionDecorator";

interface Props {
  value: any;
  onChange: (e: FormEvent, value: any) => void;
  children: JSX.Element | JSX.Element[];
}

export default function SelectionTabs({ children, ...props }: Props) {
  return (
    <TabsContainer>
      <SelectionDecorator {...props}>{children}</SelectionDecorator>
    </TabsContainer>
  );
}
