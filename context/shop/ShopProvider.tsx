import { FC, ReactNode, useEffect, useReducer, useState } from "react";
import ShopConfig from "../../model/shop/ShopConfig";
import portfolioSummaryData from "../../public/config/portfolio-summary-data";
import ShopContext, { IShopContext } from "./ShopContext";
import shopReducer, {
  EshopActionType,
  IShopAction,
} from "../../reducers/shopReducer";
import { CartItem } from "../../model/shop/cart";
import { IPropsModal } from "@/components/modal/Modal";

//Define a new ShopConfig object
const shopConfig = new ShopConfig();
// populate shopConfig with data from portfolioSummaryData
shopConfig.initialProducts = portfolioSummaryData;
shopConfig.products = portfolioSummaryData;

interface IProps {
  children: ReactNode;
}

const defaultModalProps: IPropsModal = {
  modalId: "shopping-cart-modal",
  show: false,
  header: "Shopping Cart",
  footer: "Checkout",
  children: <div>Shopping Cart bla bla</div>,
};

const ShopProvider: FC<IProps> = ({ children }) => {
  const [shopState, dispatchShopState] = useReducer(shopReducer, shopConfig);
  const [modalProps, setModalProps] = useState<IPropsModal>(defaultModalProps);

  const addToCartClickHandler = (event: any): void => {
    const id = event.target.getAttribute("data-product-id");
    const product = shopConfig.products.find((p) => p.id === Number(id));
    if (!product) throw new Error(`Product not found for id ${id}`);
    console.log("shopProvider::", shopConfig);
    const action: IShopAction = {
      type: EshopActionType.ADD_TO_CART,
      payload: new CartItem(product, 1),
    };
    dispatchShopState(action);
  };

  const viewCartClickHandler = (): void => {
    console.log("ShopProvider.viewCart");
    // Update props with cart value
    setModalProps({
      ...modalProps,
      show: !modalProps.show,
    });
  };

  let shopContextValue: IShopContext = {
    $shopConfig: shopState,
    shopDispatch: dispatchShopState,
    addToCartClickHandler: addToCartClickHandler,
    viewCartClickHandler: viewCartClickHandler,
    $modalProps: modalProps,
    $setModalProps: setModalProps,
  };

  useEffect(() => {
    debugger;
    // @ts-ignore
    setModalProps({
      ...modalProps,
      closeHandler: () => {
        setModalProps({
          ...modalProps,
          show: false,
        });
      },
    });
  }, [modalProps.show]);

  return (
    <ShopContext.Provider value={shopContextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
