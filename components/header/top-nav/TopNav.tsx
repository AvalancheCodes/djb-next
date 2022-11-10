import React, { FC, useContext } from "react";
import dynamic from "next/dynamic";
import ShopContext from "@/context/shop/ShopContext";
import AppContext from "@/context/AppContext";
import NavbarBrand from "@/components/header/NavbarBrand";

const CartIcon = dynamic(() => import("../../shop/CartIcon"), {
  ssr: false,
} as any);

const TopNav: FC = () => {
  const shopContext = useContext(ShopContext);
  const appContext = useContext(AppContext);

  return (
    <>
      <nav className="navbar navbar-expand">
        <div className="container">
          <NavbarBrand />
          <div className="navbar-nav flex-row align-items-center p-2">
            <div className="nav-item">
              <CartIcon
                iconContent={shopContext.$shopConfig.cartItems.length}
                dataProductId={0}
                iconClickHandler={shopContext.viewCartClickHandler}
              />
            </div>
            <div className="nav-item ms-1">
              <a
                onClick={appContext?.toggleOffCanvas}
                className="nav-link p-0 flex-row"
                role="button"
                aria-controls="offcanvasEnd"
              >
                <span
                  className="font-heading fw-bold me-2 d-none d-md-block"
                  data-bs-target="#offcanvasEnd"
                >
                  Menu
                </span>
                <i className="bi bi-text-right rtl-flip display-8 align-middle"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
