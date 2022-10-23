import React, { useEffect, useRef } from "react";
import Script from "next/script";
import { InlineWidget, PopupButton, PopupWidget } from "react-calendly";

const createCalendlyScript = () =>{
  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);
};

const Calendly = () => {
  const [rootElement, setRootElement] = React.useState(null);

  const widgetContainerRef = useRef();
  const url = "https://calendly.com/david-j-barel";

  useEffect(() => {
    const rootElement =document.getElementById("root") ;
    setRootElement(rootElement);
  } , []);

  return (
    <>
      {/*<Script id={"calendly-script"} type="text/javascript"*/}
      {/*         src="https://assets.calendly.com/assets/external/widget.js" />*/}
            <PopupButton
                url={url}
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={ rootElement }
                text="Click here to schedule!"
            />
    </>
  );
};

export default Calendly;