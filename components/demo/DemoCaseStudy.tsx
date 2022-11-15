import React, { ReactElement } from "react";

const DemoCaseStudy = (): ReactElement => {
  return (
    <div className="container">
      <div className="bg-dark text-center position-relative rounded overflow-hidden pattern-overlay-4 p-3 py-5 p-md-7 w-100">
        <h5 className="text-white mb-4">Case Study</h5>
        <img
          className="zoom-3 my-3"
          src="assets/images/clients/light/06.svg"
          alt=""
        />

        <p className="lead mt-4">
          &ldquoI am really satisfied with my service. Needless to say we are
          extremely satisfied with the results. Folio is the most valuable
          business resource we have EVER purchased, we&aposve just launched our
          5th website! You guys rock!&ldquo
        </p>
        <div className="text-secondary">
          - Kariotta C, Head of IT department
        </div>
        <a href="#" className="btn btn-line text-white mt-5">
          View Case Study
        </a>
      </div>
    </div>
  );
};

export default DemoCaseStudy;
