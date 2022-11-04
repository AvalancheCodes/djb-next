import React from "react";
import CartItemElement from "@/components/shop/cart/CartItemElement";
import { CartItem } from "../../model/shop/cart";

export interface ICartViewProps {
  cartItems: CartItem[];
}

const CartView: React.FC<ICartViewProps> = ({ cartItems }): JSX.Element => {
  if (cartItems.length === 0) {
    return <div>Cart is empty</div>;
  }

  const items = cartItems.map((cartItem, index) => {
    return <CartItemElement cartItem={cartItem} key={index} />;
  });

  return (
    <div className="container">
      {/*   Header Row */}
      <div className="row d-none">
        <div className="col-10">Product</div>
        <div className="col-2">Price</div>
      </div>
      {items}
    </div>
  );
};

export default CartView;
