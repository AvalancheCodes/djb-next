import ShopConfig from "../model/shop/ShopConfig";

export enum EshopActionType {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY",
  UPDATE_CART_PROPS = "UPDATE_CART_PROPS",
  TOGGLE_CART = "TOGGLE_CART",
}

export interface IShopAction {
  type: EshopActionType;
  payload?: any;
}

const shopReducer = (state: ShopConfig, action: IShopAction): ShopConfig => {
  switch (action.type) {
    case EshopActionType.TOGGLE_CART:
      return {
        ...state,
        cartModal: {
          ...state.cartModal,
          show: !state.cartModal.show,
        },
      };
    case EshopActionType.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case EshopActionType.UPDATE_CART_PROPS:
      return {
        ...state,
        cartModalProps: { ...state.cartModalProps, ...action.payload },
      };
    case EshopActionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item: any) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default shopReducer;
