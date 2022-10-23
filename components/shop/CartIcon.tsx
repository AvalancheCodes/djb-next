import React, { useCallback, useContext, useEffect, useRef } from "react";

const CartIcon = ({ iconContent, dataProductId, iconClickHandler }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    if (iconRef.current !== null) {
      console.log("CartIcon.useEffect", iconRef.current);
      iconRef.current.setAttribute("data-product-id", dataProductId);
    }
  }, []);

  return (
    <button
      className="btn btn-cart-icon p-0"
      onClick={iconClickHandler}
      ref={iconRef}
    >
      <span
        data-icon-content={iconContent}
        className="
              fa-stack fa-2x number-badge
              d-flex flex-row justify-content-center
              align-items-center"
      >
        <i className="fa fa-shopping-cart fa-stack-1x fs-4"></i>
      </span>
    </button>
  );
};

export default CartIcon;
