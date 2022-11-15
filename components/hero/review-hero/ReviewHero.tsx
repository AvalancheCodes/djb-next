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

const ReviewHero = (): ReactElement => {
  const [tnsIndex, setTnsIndex] = React.useState(0);

  const onIndexChanged = (info: any): void => {
    setTnsIndex(info.index);
    console.log("Index:", info.displayIndex);
  };

  return (
    <TinySliderComponent
      options={options}
      classNames={
        "dots-white dots-bordered dots-end arrow-bordered arrow-large " +
        "arrow-round arrow-start-bottom arrow-md-none"
      }
      onIndexChanged={onIndexChanged}
      innerClassNames="h-600 h-sm-700 h-xl-900"
    >
      {reviews.map((review, index) => {
        return <ReviewItem key={index} {...review} sliderIndex={tnsIndex} />;
      })}
    </TinySliderComponent>
  );
};

export default ReviewHero;
