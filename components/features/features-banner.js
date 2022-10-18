import React from "react";
import featureSummaryData from "../../public/config/featureSummaryData";
import FeatureItem from "./feature-item";

const FeaturesBanner = () => {
  return (
    <section className="bg-dark position-relative pattern-overlay-5 mx-xl-3 mx-xxxl-9 rounded">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mb-5">
            <h2 className="display-5 text-white-stroke">Services</h2>
            <p>
              Building a strong brand. Distinctive, recognizable and consistent.
              Effective communication campaigns that activate your target group.
            </p>
          </div>
          <div className="col-md-7 mb-5">
            <div className="row">
              {featureSummaryData.map((feature, index) => {
                return (
                  <FeatureItem
                    title={feature.title}
                    shortDescription={feature.shortDescription}
                    icon={feature.icon}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBanner;
