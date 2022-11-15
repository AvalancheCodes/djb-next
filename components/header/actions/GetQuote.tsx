import React, { ReactElement } from "react";
import Link from "next/link";

const GetQuote = (): ReactElement => {
  return (
    <div className="nav-item">
      <Link href={"#"}>
        <a className="btn btn-sm btn-primary mb-0 mx-2">
          Hire on
          <span>
            {" "}
            <em className="fw-bold">Up</em>work
          </span>
        </a>
      </Link>
    </div>
  );
};

export default GetQuote;
