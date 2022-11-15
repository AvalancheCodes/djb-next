import React, { FC, ReactNode } from "react";
import OffcanvasHeader from "@/components/offcanvas/OffcanvasHeader";
import { Offcanvas as ReactBsOffcanvas } from "react-bootstrap/";

export interface IPropsOffcanvas {
  show: boolean | undefined;
  children: ReactNode;
  closeHandler: any;
}

const options = {
  scroll: true,
  backdrop: true,
};

const Offcanvas: FC<IPropsOffcanvas> = ({ children, show, closeHandler }) => {
  return (
    <ReactBsOffcanvas
      id="offcanvasEnd"
      {...options}
      show={show}
      onHide={closeHandler}
      className="offcanvas offcanvas-end bg-dark"
      placement="end"
    >
      <ReactBsOffcanvas.Header className="justify-content-end">
        <OffcanvasHeader closeHandler={closeHandler} />
      </ReactBsOffcanvas.Header>
      <ReactBsOffcanvas.Body className="offcanvas-body vh-lg-100 d-flex align-items-start flex-column px-5 px-md-6">
        {children}
      </ReactBsOffcanvas.Body>
    </ReactBsOffcanvas>
  );
};

export default Offcanvas;
