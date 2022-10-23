import React, { useEffect } from "react";
import { testimonialsData } from "../../public/config/testimonials-data";
import TestimonialItem from "./TestemonialItem";
import dynamic from "next/dynamic";

const options = {
  items: 1,
  autoplay: true,
  autoplayButtonOutput: false,
  navPosition: "top",
  controls: true,
  nav: false,
  controlsText: [
    "<i class=\"fas fa-chevron-left\"></i>",
    "<i class=\"fas fa-chevron-right\"></i>",
  ],
  // todo: add responsive options
  // responsive: {
  //     0: {
  //         items: Number(sliderItemsXs)
  //     },
  //     576: {
  //         items: Number(sliderItemsSm)
  //     },
  //     768: {
  //         items: Number(sliderItemsMd)
  //     },
  //     992: {
  //         items: Number(sliderItemsLg)
  //     },
  //     1200: {
  //         items: Number(sliderItemsXl)
  //     }
  // }
};

const TinySliderComponent = dynamic(
  () => import("../tinySlider/NextTinySlider"),
  {
    ssr: false,
  }
);

const Testimonials = () => {
  // Init tiny slider in useEffect
  const items = testimonialsData.map((testimonial, index) => {
    return (
      <TestimonialItem
        key={index}
        title={testimonial.title}
        name={testimonial.name}
        text={testimonial.text}
        avatar={testimonial.avatar}
      />
    );
  });
  return (
    <div className="container">
      <div className="row position-relative">
        <div className="col-sm-8 mb-3 mx-auto text-center pt-7">
          <h2 className="display-5 mb-5 text-dark-stroke">Testimonials</h2>
        </div>
        <div className="col-md-10 mx-auto text-center pb-7">
          <TinySliderComponent options={options} classNames={""}>
            {items}
          </TinySliderComponent>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
