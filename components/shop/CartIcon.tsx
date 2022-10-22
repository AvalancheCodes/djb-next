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
      className="notification-indicator"
      onClick={iconClickHandler}
      data-icon-content={iconContent}
      ref={iconRef}
    >
      <span
        className="
              fa-stack fa-2x number-badge
              d-flex flex-row justify-content-center
              align-items-center"
      >
        <i
          className="p3 fa fa-shopping-cart fa-stack-1x xfa-inverse fs-3"
          data-count="4b"
        ></i>
      </span>
    </button>
  );
};

export default CartIcon;
