import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import React, { FC, ReactNode, useContext, useEffect } from "react";
import dynamic from "next/dynamic";
import ShopContext from "@/context/shop/ShopContext";
import CartView from "@/components/shop/CartView";
import Dynamic from "next/dynamic";
import MenuRoutes from "@/components/header/MenuRoutes";
import AppContext from "@/context/AppContext";
import { offcanvasRoutes } from "../public/config/routes";
import MenuRoute from "../model/Navigation/MenuRoute";

const DynamicModal = dynamic(() => import("../components/modal/Modal"), {
  ssr: false,
} as any);

const DynOffCanvas = Dynamic(() => import("@/components/offcanvas/OffCanvas"), {
  ssr: false,
});

const menuRoutes = offcanvasRoutes.map(
  (route) =>
    new MenuRoute(route.name, route.friendlyName, route.title, route.path)
);

interface IProps {
  children?: ReactNode;
}

const PublicLayout: FC<IProps> = ({ children }) => {
  const appContext = useContext(AppContext);
  const shopContext = React.useContext(ShopContext);
  const { $setModalProps, $modalProps } = shopContext;

  useEffect(() => {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    if (!main || !footer) throw new Error("main or footer are missing!");
    main.style.marginBottom = footer.offsetHeight + "px";
  }, []);
  return (
    <>
      <Header />
      <div id="sticky-space"></div>
      <main>{children}</main>
      <Footer />
      <DynamicModal {...$modalProps}>
        {/*{shopContext.$modalProps.children}*/}
        <CartView cartItems={shopContext.$shopConfig.cartItems} />
      </DynamicModal>
      <DynOffCanvas
        show={appContext?.showOffCanvas}
        closeHandler={appContext?.toggleOffCanvas}
      >
        {<MenuRoutes routes={menuRoutes} />}
      </DynOffCanvas>
    </>
  );
};

export default PublicLayout;
