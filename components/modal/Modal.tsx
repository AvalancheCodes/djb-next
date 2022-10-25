import React, { FC, useEffect } from "react";
import { Modal as BootstrapModal } from "bootstrap";

export interface IPropsModal {
  show: boolean;
  header: string;
  footer: string;
  modalId: string;
  children: React.ReactNode;
  closeHandler?: () => void;
}
const Modal: FC<IPropsModal> = ({
  show,
  header,
  footer,
  modalId,
  children,
  closeHandler,
}) => {
  const [modal, setModal] = React.useState<BootstrapModal | null>(null);
  const modalRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      backdrop: true,
      keyboard: true,
      focus: false,
    };
    const modal = new BootstrapModal(
      modalRef.current as HTMLDivElement,
      options
    );
    setModal(modal);
    if (show) {
      modal.show();
    } else {
      modal.hide();
    }
  }, [show]);

  return (
    <div
      ref={modalRef}
      className="modal fade"
      id={modalId}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={closeHandler}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Checkout!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
