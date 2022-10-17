import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import PortfolioSummaryData from "../../public/config/portfolio-summary-data";
import SummaryItem from "./SummaryItem";

const options = {
  items: 1,
  autoplay: true,
  autoplayButtonOutput: false,
  controls: false,
  nav: true,
};

// import TinySliderComponent dynamically
const TinySliderComponent = dynamic(
  () => import("../tinySlider/NextTinySlider"),
  {
    ssr: false,
  }
);

const PortfolioSummary = () => {
  const items = PortfolioSummaryData.map((item, index) => {
    return (
      <SummaryItem
        key={index}
        title={item.title}
        text={item.text}
        mainImage={item.mainImage}
        secondaryImage={item.secondaryImage}
        link={item.link}
        description={undefined}
        mainImageAlt={undefined}
        secondaryImageAlt={undefined}
        linkText={undefined}
      />
    );
  });

  return (
    <div className="container">
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-sm-8 mb-3">
          <h2 className="display-5 mb-0 mb-sm-4 text-dark-stroke">
            Our Portfolio
          </h2>
        </div>
        <div className="col-sm-4 mb-4 text-start text-sm-end">
          <a href="#" className="btn btn-line text-dark mt-3">
            View our work
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <TinySliderComponent options={options} classNames="dots-bordered">
            {items}
          </TinySliderComponent>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;
