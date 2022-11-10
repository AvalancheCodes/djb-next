import React, { ReactNode, FC } from "react";
import AppContext, { IAppContext } from "./AppContext";

interface IProps {
  children: ReactNode;
}

const AppContextProvider: FC<IProps> = ({ children }) => {
  const [showOffCanvas, setShowOffCanvas] = React.useState<boolean>(false);

  const appContext: IAppContext = {
    name: "React App",
    domain: "https://react-app.com",
    // OffCanvas menu show/hide
    showOffCanvas: showOffCanvas,
    toggleOffCanvas: () => {
      setShowOffCanvas(!showOffCanvas);
    },
  };
  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
