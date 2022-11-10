import React, { ReactElement, useContext } from "react";
import SearchOpener from "@/components/header/actions/SearchOpener";
import GetQuote from "@/components/header/actions/GetQuote";
import MenuOpener from "@/components/header/actions/MenuOpener";
import AppContext from "@/context/AppContext";

const NavbarActions = (): ReactElement => {
  const appContext = useContext(AppContext);
  return (
    <div className="nav flex-nowrap align-items-center">
      <SearchOpener clickHandler={() => {}} />
      <GetQuote />
      <MenuOpener clickHandler={appContext?.toggleOffCanvas} />
    </div>
  );
};

export default NavbarActions;
