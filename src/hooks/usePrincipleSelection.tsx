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
  isUglyToggled: boolean;
  setIsUglyToggled: Dispatch<SetStateAction<boolean>>;
}

const defaultPrincipleSelectionState: PrincipleSelectionState = {
  selectedMode: null,
  setSelectedMode: (): void => {},
  isUglyToggled: false,
  setIsUglyToggled: (): void => {}
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
  const [isUglyToggled, setIsUglyToggled] = useState(false);

  return (
    <PrincipleSelectionContext.Provider
      value={{ selectedMode, setSelectedMode, isUglyToggled, setIsUglyToggled }}
    >
      {children}
    </PrincipleSelectionContext.Provider>
  );
};

export default function usePrincipleSelection() {
  return useContext(PrincipleSelectionContext);
}
