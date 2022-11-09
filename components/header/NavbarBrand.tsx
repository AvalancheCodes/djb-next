import React, { ReactElement } from "react";
import Link from "next/link";

const NavbarBrand = (): ReactElement => {
  return (
    <Link href="/pages">
      <a className="navbar-brand">
        <h3 className="me-2 mb-0 text-white">
          David J<span className="text-primary">.</span> Barel
        </h3>
        <h6 className="smaller text-muted mb-0 d-none">
          Creative FUll-Stack Developer
        </h6>
      </a>
    </Link>
  );
};

export default NavbarBrand;
