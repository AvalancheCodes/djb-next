import React from "react";
import dynamic from "next/dynamic";
import PortfolioSummaryData from "../../public/config/portfolio-summary-data";
import ImageHoverInfo from "../tinySlider/children/ImageHoverInfo";
import CartIcon from "../shop/CartIcon";
import ShopContext from "../../context/shop/ShopContext";
import options from "./options";

// import TinySliderComponent dynamically
const TinySliderComponent = dynamic(
  () => import("../tinySlider/NextTinySlider"),
  {
    ssr: false,
  }
);

const DynamicModal = dynamic(() => import("../modal/Modal"), {
  ssr: false,
} as any);

const PortfolioSummary = (): JSX.Element => {
  const shopContext = React.useContext(ShopContext);
  const imageHoverItems = PortfolioSummaryData.map((item, index) => {
    return (
      <ImageHoverInfo
        id={item.id}
        key={index}
        title={item.title}
        image={item.mainImage}
        description={item.description}
        imageAlt={item.mainImageAlt}
        showDescription={true}
        descriptionLength={100}
      >
        {
          <CartIcon
            iconContent={"+"}
            dataProductId={item.id}
            iconClickHandler={shopContext.addToCartClickHandler}
          />
        }
      </ImageHoverInfo>
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
          <TinySliderComponent
            options={options}
            classNames="dots-bordered"
            innerClassNames={"h-400"}
          >
            {imageHoverItems}
          </TinySliderComponent>
        </div>
      </div>
      <DynamicModal
        modalId={"testModal"}
        footer={"footer"}
        header={"shopping cart"}
        show={false}
      >
        <h1>this is the body</h1>
      </DynamicModal>
    </div>
  );
};

export default PortfolioSummary;
