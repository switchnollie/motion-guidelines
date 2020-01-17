import React, {
  useContext,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode
} from "react";
import { SoftwareImplementation } from "../types";

interface ImplementationSelectionState {
  selectedMode: SoftwareImplementation | null;
  setSelectedMode: Dispatch<SetStateAction<SoftwareImplementation | null>>;
}

const defaultImplementationSelectionState: ImplementationSelectionState = {
  selectedMode: null,
  setSelectedMode: (): void => {}
};

export const ImplementationSelectionContext = createContext<
  ImplementationSelectionState
>(defaultImplementationSelectionState);

export const ImplementationSelectionProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [
    selectedMode,
    setSelectedMode
  ] = useState<SoftwareImplementation | null>(null);

  return (
    <ImplementationSelectionContext.Provider
      value={{ selectedMode, setSelectedMode }}
    >
      {children}
    </ImplementationSelectionContext.Provider>
  );
};

export default function useImplementationSelection() {
  return useContext(ImplementationSelectionContext);
}
