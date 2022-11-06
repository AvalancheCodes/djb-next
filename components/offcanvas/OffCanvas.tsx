import React, { FC, ReactNode, useEffect } from "react";
import { Offcanvas as BootstrapOffcanvas } from "bootstrap";
import OffcanvasHeader from "@/components/offcanvas/OffcanvasHeader";

export interface IPropsOffcanvas {
  show: boolean | undefined;
  children: ReactNode;
  closeHandler: any;
  setShowBackdrop: any;
}

const Offcanvas: FC<IPropsOffcanvas> = ({
  children,
  show,
  closeHandler,
  setShowBackdrop,
}) => {
  const [offcanvas, setOffcanvas] = React.useState<BootstrapOffcanvas | null>(
    null
  );
  const offcanvasRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const options = {
      backdrop: true,
      keyboard: false,
      scroll: false,
    };
    const offcanvas = new BootstrapOffcanvas(
      offcanvasRef.current as HTMLDivElement
    );
    // @ts-ignore
    // offcanvas._config["backdrop"] = true;
    debugger;
    setOffcanvas(offcanvas);
    // Toggle offcanvas state
    // Todo: why is backdrop not showing?
    show ? offcanvas.show() : offcanvas.hide();
  }, [show]);
  return (
    <div
      ref={offcanvasRef}
      data-bs-keyboard="false"
      className="offcanvas offcanvas-end bg-dark"
      tabIndex={-1}
      id="offcanvasEnd"
      aria-labelledby="offcanvasEnd"
    >
      <OffcanvasHeader closeHandler={closeHandler} />
      <div className="offcanvas-body vh-lg-100 d-flex align-items-start flex-column px-5 px-md-6">
        {children}
      </div>
    </div>
  );
};

export default Offcanvas;
