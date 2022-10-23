import ShopConfig from "../../model/shop/ShopConfig";
import { createContext, Dispatch } from "react";
import { IShopAction } from "@/reducers/shopReducer";

export interface IShopContext {
  shopConfigStateValue: ShopConfig;
  shopDispatch: Dispatch<IShopAction>;
  checkProductInCart?: (product: any) => boolean;
  onAddToCartClickHandler?: (event: any) => void;
  viewCartClickHandler?: () => void;
}

const ShopContext = createContext<IShopContext>({
  shopConfigStateValue: new ShopConfig(),
  shopDispatch: (action) => {},
  checkProductInCart: (product) => false,
  onAddToCartClickHandler: (event) => {},
});

export default ShopContext;
