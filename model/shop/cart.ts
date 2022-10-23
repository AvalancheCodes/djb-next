import Product from "./Product";

export class CartItem {
  // TODO: What is that?
  // Why was it not initialized in any way?
  id: number = 1;

  product: Product;
  quantity: number;
  totalPrice: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
    this.totalPrice = this.product.price * this.quantity;
  }
}

export interface ICartModal {
  show: boolean;
  product: Product;
  quantity: number;
  type: string;
}

class Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;

  constructor() {
    this.items = [];
    this.totalItems = 0;
    this.totalPrice = 0;
  }
}

export default Cart;
