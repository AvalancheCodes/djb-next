import { FC, ReactNode, useReducer } from "react";
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

interface IProps {
  children: ReactNode;
}

const ShopProvider: FC<IProps> = ({ children }) => {
  const [shopState, dispatchShopState] = useReducer(shopReducer, shopConfig);

  let shopContextValue: IShopContext = {
    shopConfigStateValue: shopState,
    shopDispatch: dispatchShopState,
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
