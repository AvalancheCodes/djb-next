import { createContext } from "react";

export interface IAppContext {
  name: string;
  domain: string;
  showOffCanvas: boolean;
  toggleOffCanvas: () => void;
}

const AppContext = createContext<IAppContext | null>(null!);

export default AppContext;
