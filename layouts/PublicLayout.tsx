import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import React, { FC, ReactNode, useEffect } from "react";
import dynamic from "next/dynamic";
import ShopContext from "@/context/shop/ShopContext";
import CartView from "@/components/shop/CartView";

const DynamicModal = dynamic(() => import("../components/modal/Modal"), {
  ssr: false,
} as any);

interface IProps {
  children?: ReactNode;
}

const PublicLayout: FC<IProps> = ({ children }) => {
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
      <main>{children}</main>
      <Footer />
      <DynamicModal {...$modalProps}>
        {/*{shopContext.$modalProps.children}*/}
        <CartView cartItems={shopContext.$shopConfig.cartItems} />
      </DynamicModal>
    </>
  );
};

export default PublicLayout;
