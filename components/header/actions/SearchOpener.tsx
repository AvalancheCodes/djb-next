import React, { FC, ReactElement } from "react";

interface SearchOpenerProps {
  clickHandler: () => void;
}

const SearchOpener: FC<SearchOpenerProps> = ({
  clickHandler,
}): ReactElement => {
  return (
    <div className="nav-item">
      <a
        onClick={clickHandler}
        className="nav-link ms-2"
        data-bs-toggle="collapse"
        // href={`javascript:${void 0}`}
        data-bs-target="#search-open"
      >
        <i className="bi bi-search display-9 "> </i>
      </a>
    </div>
  );
};

export default SearchOpener;
