import React, {
  useContext,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode
} from "react";
import { SoftwareImplementation, Easing } from "../types";

interface ImplementationConfigState {
  selectedMode: SoftwareImplementation | null;
  setSelectedMode: Dispatch<SetStateAction<SoftwareImplementation | null>>;
  selectedEasing: Easing | null;
  setSelectedEasing: Dispatch<SetStateAction<Easing | null>>;
  stiffness: number;
  setStiffness: Dispatch<SetStateAction<number>>;
  damping: number;
  setDamping: Dispatch<SetStateAction<number>>;
}

const defaultImplementationConfigState: ImplementationConfigState = {
  selectedMode: null,
  setSelectedMode: (): void => {},
  selectedEasing: null,
  setSelectedEasing: (): void => {},
  stiffness: 30,
  setStiffness: (): void => {},
  damping: 30,
  setDamping: (): void => {}
};

export const ImplementationConfigContext = createContext<
  ImplementationConfigState
>(defaultImplementationConfigState);

export const ImplementationConfigProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [
    selectedMode,
    setSelectedMode
  ] = useState<SoftwareImplementation | null>(null);
  const [selectedEasing, setSelectedEasing] = useState<Easing | null>(
    Easing.EaseOut
  );
  const [stiffness, setStiffness] = useState(30);
  const [damping, setDamping] = useState(30);

  return (
    <ImplementationConfigContext.Provider
      value={{
        selectedMode,
        setSelectedMode,
        selectedEasing,
        setSelectedEasing,
        stiffness,
        setStiffness,
        damping,
        setDamping
      }}
    >
      {children}
    </ImplementationConfigContext.Provider>
  );
};

export default function useImplementationConfig() {
  return useContext(ImplementationConfigContext);
}
