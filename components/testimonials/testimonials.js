import React, { useEffect } from 'react';
import { testimonialsData } from "../../config/testimonials-data";
import TestimonialItem from "./testimonial-item";
// import * as tns from "tiny-slider/src/tiny-slider.module";


const Testimonials = () => {

    // Init tiny slider in useEffect
    useEffect(() => {
            const tns = import("tiny-slider/src/tiny-slider.js")
                .then(module => {
                    const container = document.querySelector('.tiny-slider-inner');
                    const slider = module.tns({
                        container: container,
                        items: 1,
                        autoplay: true,
                        autoplayButtonOutput: false,
                        navPosition: 'top',
                        controls: true,
                        nav:false
                    });
                    console.log('slider: ', slider);
                }
            );
            console.log('testimonials loaded and tns: ', tns);

        },
        []);
    return (
        <div className="container">
            <div className="row position-relative">
                <div className="col-sm-8 mb-3 mx-auto text-center pt-7">
                    <h2 className="display-5 mb-5 text-dark-stroke">Testimonials</h2>
                </div>
                <div className="col-md-10 mx-auto text-center pb-7">
                    <div className="tiny-slider arrow-md-none arrow-bordered arrow-large arrow-round">
                        <div className="tiny-slider-inner" data-gutter="0"
                             data-edge="50"
                             data-autoplay="true"
                             data-arrow="true"
                             data-dots="false"
                             data-items="1">
                            {testimonialsData.map((testimonial, index) => (
                               <TestimonialItem key={index}
                                                id={index}
                                                title={testimonial.title}
                                                text={testimonial.text}
                                                name={testimonial.name} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;