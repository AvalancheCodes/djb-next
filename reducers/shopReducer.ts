import ShopConfig from "../model/shop/ShopConfig";

export enum EshopActionType {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY",
  TOGGLE_CART = "TOGGLE_CART",
  SET_REDUCER = "SET_REDUCER",
}

export interface IShopAction {
  type: EshopActionType;
  payload: any;
}

const shopReducer = (state: ShopConfig, action: IShopAction): ShopConfig => {
  debugger;
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
      state.cartItems.push(action.payload);
      return state;
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
