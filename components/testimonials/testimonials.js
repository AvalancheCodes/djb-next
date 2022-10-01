import React, { useEffect } from 'react';
import { testimonialsData } from "../../config/testimonials-data";
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
                        autoplay: container.getAttribute('data-autoplay'),
                        autoplayButtonOutput: false,
                        navPosition: 'top',
                        arrowKeys: container.getAttribute('data-arrow')
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
                             data-autoplay="false"
                             data-arrow="false"
                             data-dots="false"
                             data-items="1">
                            {testimonialsData.map((testimonial, index) => (
                                <div className="item px-3 px-md-6" key={index}>
                                    <div
                                        className="position-absolute top-50 start-50 translate-middle display-1
                                    text-body z-index-n9 opacity-1">
                                        <i className="fas fa-quote-left"></i></div>
                                    <div className="avatar">
                                        <img className="avatar-img rounded-circle" src={testimonial.avatar} alt="avatar" /></div>
                                    <p className="lead">{testimonial.text}</p>
                                    <h6 className="mb-0 mt-3">{testimonial.name}</h6>
                                    <span className="small">{testimonial.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;