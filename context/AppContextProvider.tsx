import React, { ReactNode, FC } from "react";
import AppContext, { IAppContext } from "./AppContext";

interface IProps {
  children: ReactNode;
}

const AppContextProvider: FC<IProps> = ({ children }) => {
  const [showOffCanvas, setShowOffCanvas] = React.useState<boolean>(false);
  const [showBackdrop, setShowBackdrop] = React.useState<boolean>(false);

  const appContext: IAppContext = {
    name: "React App",
    domain: "https://react-app.com",
    // OffCanvas menu show/hide
    showOffCanvas: showOffCanvas,
    toggleOffcanvas: () => {
      return setShowOffCanvas(!showOffCanvas);
    },
    showBackdrop: showBackdrop,
    setShowBackdrop: (show) => {
      return setShowBackdrop(show);
    },
  };
  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
