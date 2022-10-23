import { useState, useEffect, FC } from "react";
import { PopupButton } from "react-calendly";

const createCalendlyScript = (): void => {
  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);
};

const Calendly: FC = () => {
  const [rootElement, setRootElement] = useState<HTMLElement>();
  const url = "https://calendly.com/david-j-barel";

  useEffect(() => {
    const rootElement = document.getElementById("root");
    setRootElement(rootElement!);
  }, []);

  return (
    <>
      <PopupButton
        url={url}
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={rootElement!}
        text="Click here to schedule!"
      />
    </>
  );
};

export default Calendly;
