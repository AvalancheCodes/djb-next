import React, { ReactElement } from "react";
import dynamic from "next/dynamic";
import reviews from "../../../public/config/reviews";
import options from "./options";
import ReviewItem from "@/components/hero/review-hero/ReviewItem";

// import TinySliderComponent dynamically
const TinySliderComponent = dynamic(
  () => import("../../tinySlider/NextTinySlider"),
  {
    ssr: false,
  }
);

const renderReviewItems = (): JSX.Element[] =>
  reviews.map((review, index) => {
    return <ReviewItem key={index} {...review} />;
  });

const ReviewHero = (): ReactElement => {
  return (
    <TinySliderComponent
      options={options}
      classNames={
        "dots-white dots-bordered dots-end arrow-bordered arrow-large " +
        "arrow-round arrow-start-bottom arrow-md-none"
      }
    >
      {renderReviewItems()}
    </TinySliderComponent>
  );
};

export default ReviewHero;
