import Product from "./Product";
import { CartItem, ICartModal } from "./cart";
import { IPropsModal } from "@/components/modal/Modal";

class ShopConfig {
  initialProducts: Product[];
  products: Product[];
  productsPerPage: number;
  productsPerPageOptions: number[];
  cartItems: CartItem[];
  cartModal: ICartModal;
  cartModalProps: IPropsModal;
  constructor() {
    this.initialProducts = [];
    this.products = [];
    this.productsPerPage = 0;
    this.productsPerPageOptions = [];
    this.cartItems = [];
    this.cartModal = {
      show: false,
      product: {} as Product,
      quantity: 0,
      type: "add",
    };
    this.cartModalProps = {
      modalId: "shopping-cart-modal",
      show: false,
      header: "Shopping Cart",
      footer: "Checkout",
      children: null,
      closeHandler: undefined,
    };
  }
}

export default ShopConfig;
