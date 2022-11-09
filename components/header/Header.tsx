import { FC } from "react";
import { offcanvasRoutes } from "../../public/config/routes";

import MenuRoute from "../../model/Navigation/MenuRoute";
import TransparentTopNav from "@/components/header/top-nav/TransparentTopNav";

const menuRoutes = offcanvasRoutes.map(
  (route) =>
    new MenuRoute(route.name, route.friendlyName, route.title, route.path)
);

const Header: FC = () => {
  return (
    <>
      <header className="navbar-dark navbar-transparent navbar-sticky">
        {/*<TopNav />*/}
        <TransparentTopNav />
        <div className="divider-light opacity-1"></div>
      </header>
    </>
  );
};

export default Header;
