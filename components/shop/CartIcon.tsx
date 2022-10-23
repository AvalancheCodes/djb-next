import { FC, useEffect, useRef } from "react";

interface IProps {
  iconContent: any;
  dataProductId: any;
  iconClickHandler: any;
}

const CartIcon: FC<IProps> = ({
  iconContent,
  dataProductId,
  iconClickHandler,
}) => {
  const iconRef = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    if (iconRef.current !== null) {
      console.log("CartIcon.useEffect", iconRef.current);
      iconRef.current.setAttribute("data-product-id", dataProductId);
    }
  }, [dataProductId]);

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
