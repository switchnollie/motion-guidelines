import React, {
  useContext,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode
} from "react";
import { NavSection } from "../types";

interface NavigationSelectionState {
  focusedSection: NavSection | null;
  setFocusedSection: Dispatch<SetStateAction<NavSection | null>>;
}

const defaultNavigationSelectionState: NavigationSelectionState = {
  focusedSection: null,
  setFocusedSection: (): void => {}
};

export const NavigationSelectionContext = createContext<
  NavigationSelectionState
>(defaultNavigationSelectionState);

export const NavigationSelectionProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [focusedSection, setFocusedSection] = useState<NavSection | null>(null);

  return (
    <NavigationSelectionContext.Provider
      value={{ focusedSection, setFocusedSection }}
    >
      {children}
    </NavigationSelectionContext.Provider>
  );
};

export default function useNavigationSelection() {
  return useContext(NavigationSelectionContext);
}
