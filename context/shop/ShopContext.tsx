import ShopConfig from "../../model/shop/ShopConfig";
import { createContext, Dispatch } from "react";
import { IShopAction } from "@/reducers/shopReducer";
import dynamic from "next/dynamic";
import { IPropsModal } from "@/components/modal/Modal";

const DynamicModal = dynamic(() => import("../../components/modal/Modal"), {
  ssr: false,
} as any);

export interface IShopContext {
  $shopConfig: ShopConfig;
  shopDispatch: Dispatch<IShopAction>;
  checkProductInCart?: (product: any) => boolean;
  addToCartClickHandler?: (event: any) => void;
  viewCartClickHandler?: () => void;
  $modalProps: IPropsModal;
  $setModalProps?: (modalProps: IPropsModal) => void;
  dynamicModal?: JSX.Element;
}

const ShopContext = createContext<IShopContext>({
  $shopConfig: new ShopConfig(),
  shopDispatch: (action) => {},
  checkProductInCart: (product) => false,
  addToCartClickHandler: (event) => {},
  $modalProps: {
    modalId: "shopping-cart-modal",
    show: false,
    header: "Shopping Cart",
    footer: "Checkout",
    children: <div>Shopping Cart bla bla</div>,
  },
});

export default ShopContext;
