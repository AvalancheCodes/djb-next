import React from "react";
import ShopConfig from "../../model/shop/ShopConfig";
import portfolioSummaryData from "../../public/config/portfolio-summary-data";
import ShopContext, { IShopContext } from "./ShopContext";

//Define a new ShopConfig object
const shopConfig = new ShopConfig();
// populate shopConfig with data from portfolioSummaryData
shopConfig.initialProducts = portfolioSummaryData;
shopConfig.products = portfolioSummaryData;

const ShopProvider = ({ children }) => {
  const shopContextValue: IShopContext = {
    shopConfig: shopConfig,
  };
  return (
    <ShopContext.Provider value={shopContextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
