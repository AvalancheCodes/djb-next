import { createContext } from "react";

export interface IAppContext {
  name: string;
  domain: string;
  showOffCanvas: boolean;
  toggleOffcanvas: () => void;
  showBackdrop: boolean;
  setShowBackdrop: (show: boolean) => void;
}

const AppContext = createContext<IAppContext | null>(null!);

export default AppContext;
