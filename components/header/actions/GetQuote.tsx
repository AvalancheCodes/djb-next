import React, { ReactElement } from "react";
import Link from "next/link";

const GetQuote = (): ReactElement => {
  return (
    <div className="nav-item d-none d-xl-block">
      <Link href={"#"}>
        <a className="btn btn-sm btn-primary mb-0 mx-2">Get Quote!</a>
      </Link>
    </div>
  );
};

export default GetQuote;
