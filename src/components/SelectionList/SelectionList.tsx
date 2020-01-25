import React, { FormEvent } from "react";
import { ListContainer } from "./style";
import SelectionDecorator from "../SelectionDecorator";

interface Props {
  value: any;
  onChange: (e: FormEvent, value: any) => void;
  children: JSX.Element | JSX.Element[];
  disabled?: boolean;
}

export default function SelectionList({ children, ...props }: Props) {
  return (
    <ListContainer>
      <SelectionDecorator {...props}>{children}</SelectionDecorator>
    </ListContainer>
  );
}
