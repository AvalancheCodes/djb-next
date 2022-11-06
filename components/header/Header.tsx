import { FC } from "react";
import { offcanvasRoutes } from "../../public/config/routes";
import TopNav from "./TopNav";

import MenuRoute from "../../model/Navigation/MenuRoute";

const menuRoutes = offcanvasRoutes.map(
  (route) =>
    new MenuRoute(route.name, route.friendlyName, route.title, route.path)
);

const Header: FC = () => {
  return (
    <>
      <header className="navbar-light header-static navbar-sticky">
        <TopNav />
      </header>
    </>
  );
};

export default Header;
