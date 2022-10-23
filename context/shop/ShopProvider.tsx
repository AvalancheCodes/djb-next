import React, { useReducer } from "react";
import ShopConfig from "../../model/shop/ShopConfig";
import portfolioSummaryData from "../../public/config/portfolio-summary-data";
import ShopContext, { IShopContext } from "./ShopContext";
import shopReducer, { EshopActionType } from "../../reducers/shopReducer";
import { CartItem } from "../../model/shop/cart";

//Define a new ShopConfig object
const shopConfig = new ShopConfig();
// populate shopConfig with data from portfolioSummaryData
shopConfig.initialProducts = portfolioSummaryData;
shopConfig.products = portfolioSummaryData;

const ShopProvider = ({ children }) => {
  const [shopState, dispatchShopState] = useReducer(shopReducer, shopConfig);

  const shopContextValue: IShopContext = {
    shopConfigValue: shopConfig,
    shopDispatch: dispatchShopState,
    // onAddToCartClickHandler: (event) => {
    //   const id = event.target.getAttribute("data-product-id");
    //   const product = shopConfig.products.find((p) => p.id === Number(id));
    //   // shopConfig.cartItems.push(new CartItem(product, 1));
    //   console.log("shopProvider::", shopConfig);
    //   shopReducer(
    //     { shopConfig },
    //     {
    //       type: EshopActionType.ADD_TO_CART,
    //       payload: new CartItem(product, 1),
    //     }
    //   );
    // },
    viewCartClickHandler: () => {
      console.log("ShopProvider.viewCart");
    },
  };
  return (
    <ShopContext.Provider value={shopContextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
