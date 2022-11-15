import React, { ReactElement } from "react";
import NavbarBrand from "@/components/header/NavbarBrand";
import NavbarActions from "@/components/header/top-nav/NavbarActions";

const TopNav = (): ReactElement => {
  return (
    <div className="navbar navbar-expand-lg">
      <div className="container">
        <NavbarBrand />
        <NavbarActions />
      </div>
    </div>
  );
};

export default TopNav;
