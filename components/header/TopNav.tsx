import React, { FC, useContext } from "react";
import Link from "next/link";
// import CartIcon from "../shop/CartIcon";
import dynamic from "next/dynamic";
import ShopContext from "../../context/shop/ShopContext";
import AppContext from "@/context/AppContext";

const CartIcon = dynamic(() => import("../shop/CartIcon"), {
  ssr: false,
} as any);

const TopNav: FC = () => {
  const shopContext = useContext(ShopContext);
  const appContext = useContext(AppContext);

  return (
    <>
      <nav className="navbar navbar-expand">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand ">
              {/*<img className="navbar-brand-item"*/}
              {/*     src="assets/images/logo.png" alt="Logo" />*/}
              <h3 className="me-2 mb-0 my-2">
                {/*<span className="badge bg-primary mx-2"></span>*/}
                David J<span className="text-primary">.</span> Barel
              </h3>
              <h6 className="smaller text-muted mb-0 d-none">
                Creative FUll-Stack Developer
              </h6>
            </a>
          </Link>

          <div className="navbar-nav flex-row align-items-center">
            <div className="nav-item">
              <CartIcon
                iconContent={shopContext.$shopConfig.cartItems.length}
                dataProductId={0}
                iconClickHandler={shopContext.viewCartClickHandler}
              />
            </div>
            <div className="nav-item ms-1">
              <a
                onClick={appContext?.toggleOffcanvas}
                className="nav-link p-0 flex-row"
                // data-bs-toggle="offcanvas"
                // href="#offcanvasEnd" todo: check if this is needed?
                role="button"
                aria-controls="offcanvasEnd"
              >
                <span
                  className="font-heading fw-bold me-2"
                  data-bs-target="#offcanvasEnd"
                >
                  Menu
                </span>
                <i
                  className="bi bi-text-right rtl-flip display-8 align-middle"
                  onMouseOver={appContext?.toggleOffcanvas}
                  // data-bs-target="#offcanvasEnd"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
