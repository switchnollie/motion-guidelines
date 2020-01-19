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
  tension: number;
  setTension: Dispatch<SetStateAction<number>>;
  friction: number;
  setFriction: Dispatch<SetStateAction<number>>;
}

const defaultImplementationConfigState: ImplementationConfigState = {
  selectedMode: null,
  setSelectedMode: (): void => {},
  selectedEasing: null,
  setSelectedEasing: (): void => {},
  tension: 310,
  setTension: (): void => {},
  friction: 40,
  setFriction: (): void => {}
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
  const [selectedEasing, setSelectedEasing] = useState<Easing | null>(null);
  const [tension, setTension] = useState(310);
  const [friction, setFriction] = useState(40);

  return (
    <ImplementationConfigContext.Provider
      value={{
        selectedMode,
        setSelectedMode,
        selectedEasing,
        setSelectedEasing,
        tension,
        setTension,
        friction,
        setFriction
      }}
    >
      {children}
    </ImplementationConfigContext.Provider>
  );
};

export default function useImplementationConfig() {
  return useContext(ImplementationConfigContext);
}
