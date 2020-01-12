import React, {
  useContext,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode
} from "react";
import { Principle } from "../types";

interface PrincipleSelectionState {
  selectedMode: Principle | null;
  setSelectedMode: Dispatch<SetStateAction<Principle | null>>;
}

const defaultPrincipleSelectionState: PrincipleSelectionState = {
  selectedMode: null,
  setSelectedMode: (): void => {}
};

export const PrincipleSelectionContext = createContext<PrincipleSelectionState>(
  defaultPrincipleSelectionState
);

export const PrincipleSelectionProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [selectedMode, setSelectedMode] = useState<Principle | null>(null);

  return (
    <PrincipleSelectionContext.Provider
      value={{ selectedMode, setSelectedMode }}
    >
      {children}
    </PrincipleSelectionContext.Provider>
  );
};

export default function usePrincipleSelection() {
  return useContext(PrincipleSelectionContext);
}
