import React, { useEffect, useRef } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartIcon = ({ iconContent }) => {
  const iconRef = useRef(null);

  return (
    <div className="notification-indicator">
      <span
        className="fa-stack fa-2x number-badge d-flex flex-row
        justify-content-center align-items-center"
        data-icon-content={iconContent}
      >
        <i
          ref={iconRef}
          className="p3 fa fa-shopping-cart fa-stack-1x xfa-inverse fs-3"
          data-count="4b"
        ></i>
      </span>
    </div>
  );
};

export default CartIcon;
