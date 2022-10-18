import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import ContactMap from "../../components/contact/ContactMap";
import ContactForm from "../../components/contact/ContactForm";
import AppContext from "../../context/AppContext";
import GoogleIframeMap from "../../components/googleMap/GoogleIframeMap";
import { IGeoLocation } from "../../model/ILocation";
import ContactChannels from "../../components/contact/contactChannels/ContactChannels";

const DynamicGoogleMap = dynamic(
  () => import("../../components/googleMap/GoogleIframeMap"),
  { ssr: false }
);

const Contact = () => {
  const appContext = React.useContext(AppContext);

  // todo: how to correct the appContext not initialized on time
  // const appConfig = appContext.configData;
  // const geo = appConfig.locations[0].geoLocation;
  const geo: IGeoLocation = {
    lat: 34.067407,
    lng: -118.388431,
  };

  return (
    <>
      <section className="p-0 pb-4 pb-md-0 bg-dark position-relative">
        <div className="container">
          <div className="row g-0 justify-content-lg-between">
            <div className="col-md-6 bg-dark-start z-index-m9 position-relative h-md-800 d-flex align-items-center z-index-9">
              <div className="position-relative py-5 pe-0 pe-md-6">
                <h1 className="text-white-stroke">Have a question?</h1>
                <h6 className="text-white">
                  Have a project? Have an issue with a product? I am here to
                  help.
                </h6>
                <ContactForm />
              </div>
            </div>
            <div className="col-md-6 col-md-full-right">
              <div className="position-md-absolute end-0 top-0 w-100 h-400 h-md-800 bg-dark">
                <DynamicGoogleMap
                  geo={geo}
                  size={{ width: 400, height: 400 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"pb-5"}>
        <ContactChannels></ContactChannels>
      </section>
    </>
  );
};

export default Contact;
