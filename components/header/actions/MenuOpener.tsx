import React, { FC, ReactElement } from "react";

interface NavbarOpenerProps {
  clickHandler: any;
}

const MenuOpener: FC<NavbarOpenerProps> = ({ clickHandler }): ReactElement => {
  return (
    <div className="nav-item ms-1">
      <a
        onClick={clickHandler}
        className="nav-link p-0 flex-row"
        role="button"
        aria-controls="offcanvasEnd"
      >
        <span
          className="font-heading fw-bold me-2 d-none d-md-block"
          data-bs-target="#offcanvasEnd"
        >
          Menu
        </span>
        <i className="bi bi-text-right rtl-flip display-8 align-middle"></i>
      </a>
    </div>
  );
};

export default MenuOpener;
