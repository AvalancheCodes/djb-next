import { FC, useContext, useEffect } from "react";
import { offcanvasRoutes } from "../../public/config/routes";
import Dynamic from "next/dynamic";
import TopNav from "./TopNav";
// import Offcanvas from "@/components/offcanvas";
import MenuRoute from "../../model/Navigation/MenuRoute";
import MenuRoutes from "@/components/header/MenuRoutes";
import AppContext from "@/context/AppContext";

//dynamic import of the offcanvas component
const DynOffCanvas = Dynamic(() => import("@/components/offcanvas/OffCanvas"), {
  ssr: false,
});

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
