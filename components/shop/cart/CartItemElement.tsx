import React, { FC } from "react";
import { CartItem } from "../../../model/shop/cart";
import Image from "next/image";

interface ICartItemElementProps {
  cartItem: CartItem;
}
const CartItemElement: FC<ICartItemElementProps> = ({
  cartItem,
}): JSX.Element => {
  const { product, id, totalPrice, quantity } = cartItem;
  return (
    <div className="row">
      <div className="col-10">
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <Image
                src={product.mainImage}
                alt={product.mainImageAlt}
                width={200}
                height={200}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {product.description.substring(0, 100)}
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
};

export default CartItemElement;
