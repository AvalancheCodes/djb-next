import React from "react";
import ContactMap from "../components/contact/ContactMap";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <section className="p-0 pb-4 pb-md-0 bg-dark position-relative">
      <div className="container">
        <div className="row g-0 justify-content-lg-between">
          <div className="col-md-6 bg-dark-start z-index-m9 position-relative h-md-800 d-flex align-items-center z-index-9">
            <div className="position-relative py-5 pe-0 pe-md-6">
              <h1 className="text-white-stroke">Don't be shy, say hi!</h1>
              <h6 className="text-white">
                Have a question, a project? We'd love to discuss...{" "}
              </h6>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
