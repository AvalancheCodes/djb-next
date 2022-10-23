import Product from "./Product";
import { CartItem, ICartModal } from "./cart";

class ShopConfig {
  initialProducts: Product[];
  products: Product[];
  productsPerPage: number;
  productsPerPageOptions: number[];
  cartItems: CartItem[];
  cartModal: ICartModal;
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
  }

  cartItemsCount() {
    return this.cartItems.length;
  }
}

export default ShopConfig;
