import ShopConfig from "../../model/shop/ShopConfig";
import { createContext } from "react";

export interface IShopContext {
  shopConfigValue: ShopConfig | null;
  shopDispatch?: (state: any, action: any) => void;
  checkProductInCart?: (product: any) => boolean;
  onAddToCartClickHandler?: (event: any) => void;
  viewCartClickHandler?: () => void;
}

const ShopContext = createContext<IShopContext>({
  shopConfigValue: new ShopConfig(),
  shopDispatch: (state, action) => {},
  checkProductInCart: (product) => false,
  onAddToCartClickHandler: (event) => {},
});

export default ShopContext;
