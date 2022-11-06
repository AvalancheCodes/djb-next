import React from "react";

interface IProps {
  closeHandler: any;
}

const OffcanvasHeader: React.FC<IProps> = ({ closeHandler }) => {
  return (
    <div className="offcanvas-header">
      <a
        className="ms-auto btn btn-primary btn-round zoom-hover"
        onClick={closeHandler}
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <i className="fas fa-times p-0"></i>
      </a>
    </div>
  );
};

export default OffcanvasHeader;
