import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import PortfolioSummaryData from "../../public/config/portfolio-summary-data";
import SummaryItem from "./SummaryItem";
import ImageHoverInfo from "../tinySlider/children/ImageHoverInfo";
import CartIcon from "../shop/CartIcon";
import ShopContext from "../../context/shop/ShopContext";
import shopReducer, {
  EshopActionType,
  IShopAction,
} from "../../reducers/shopReducer";
import { CartItem } from "../../model/shop/cart";

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

const CartIconDynamic = dynamic(() => import("../shop/CartIcon"), {
  ssr: false,
} as any);

const PortfolioSummary = () => {
  const shopContext = React.useContext(ShopContext);

  // Handle Add to Cart click
  const onAddToCartClickHandler = (event: any) => {
    const id = event.target.getAttribute("data-product-id");
    const shopConfig = shopContext.shopConfigValue;
    const product = shopConfig.products.find((p) => p.id === Number(id));
    debugger;
    if (!product) throw new Error(`Product not found for id ${id}`);
    console.log("shopProvider::", shopConfig);

    const action: IShopAction = {
      type: EshopActionType.ADD_TO_CART,
      payload: new CartItem(product, 1),
    };
    shopContext.shopDispatch(shopConfig, action);
  };

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
            iconClickHandler={onAddToCartClickHandler}
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
          <TinySliderComponent options={options} classNames="dots-bordered">
            {imageHoverItems}
          </TinySliderComponent>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;
