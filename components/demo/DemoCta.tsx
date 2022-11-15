import React, { ReactElement } from "react";

const DemoCta = (): ReactElement => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2 className="text-white-stroke display-5">Hire Me on Upwork</h2>
              <p className="lead text-white pe-0 pe-lg-6">
                We are hiring! Join our team Creative Agency Specializing in:
                Video Production, Web Design, Branding, Brand Strategy.
              </p>
            </div>
            <div>
              <a href="#" className="btn btn-secondary btn-line btn-lg">
                Hire now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCta;
