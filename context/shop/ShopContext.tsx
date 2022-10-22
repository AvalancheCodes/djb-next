import React from "react";
import portfolioSummaryData from "../../public/config/portfolio-summary-data";
import ShopConfig from "../../model/shop/ShopConfig";

export interface IShopContext {
  shopConfig: object | null;
  shopDispatch?: (state, action) => void;
  checkProductInCart?: (product) => boolean;
}
const ShopContext = React.createContext<IShopContext | null>({
  shopConfig: new ShopConfig(),
});

export default ShopContext;
