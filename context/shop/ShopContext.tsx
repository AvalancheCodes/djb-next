import React from "react";
import portfolioSummaryData from "../../public/config/portfolio-summary-data";
import ShopConfig from "../../model/shop/ShopConfig";

export interface IShopContext {
  shopConfigValue: ShopConfig | null;
  shopDispatch?: (state, action) => void;
  checkProductInCart?: (product) => boolean;
  onAddToCartClickHandler?: (event) => void;
}
const ShopContext = React.createContext<IShopContext | null>({
  shopConfigValue: new ShopConfig(),
  shopDispatch: (state, action) => {},
  checkProductInCart: (product) => false,
  onAddToCartClickHandler: (event) => {},
});

export default ShopContext;
