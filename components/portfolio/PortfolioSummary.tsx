import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import PortfolioSummaryData from "../../public/config/portfolio-summary-data";
import SummaryItem from "./SummaryItem";
import ImageHoverInfo from "../tinySlider/children/ImageHoverInfo";

const options = {
  items: 1,
  autoplay: true,
  autoplayButtonOutput: false,
  controls: false,
  nav: true,
  responsive: {
    576: {
      items: 2,
      edgePadding: 20,
      gutter: 20,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
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

  const imageHoverItems = PortfolioSummaryData.map((item, index) => {
    return (
      <ImageHoverInfo
        key={index}
        title={item.title}
        image={item.mainImage}
        description={item.description}
        imageAlt={item.mainImageAlt}
        showDescription={true}
        descriptionLength={100}
      />
    );
  });

  return (
    <div className="container">
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-sm-8 mb-3">
          <h2 className="display-5 mb-0 mb-sm-4 text-dark-stroke">
            Shop Prebuilt projects
          </h2>
        </div>
        <div className="col-sm-4 mb-4 text-start text-sm-end">
          <a href="#" className="btn btn-line text-dark mt-3">
            View all here
          </a>
        </div>
        <p className="lead mb-5">
          These are some of my latest projects, which I have developed as a
          starter for your next project. You can use these projects as the
          foundations for your next amazing project.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <TinySliderComponent options={options} classNames="dots-bordered">
            {imageHoverItems}
          </TinySliderComponent>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;
