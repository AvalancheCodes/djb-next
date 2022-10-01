import React from 'react';
import PublicLayout from "./layouts/public-layout";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";

const About = () => {
    return (
        <>
            <title>About David J. Barel</title>
            <meta name="description" content="This is the about page" />
            <link rel="icon" href="/favicon.ico" />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                    crossOrigin="anonymous"
                    type={"module"}
            ></Script>
            <Script type={"text/javascript"} src={"vendor/tiny-slider/tiny-slider.js"}></Script>
            <Script type={"text/javascript"} src={"vendor/js/theme.js"}></Script>
            <div className="container">
                <h1>About</h1>
            </div>

            <section className="p-0">
                <div className="container">
                    <div className="row position-relative">
                        <div className="col-sm-8 mb-3 mx-auto text-center pt-7">
                            <h2 className="display-5 mb-5 text-dark-stroke">Testimonials</h2>
                        </div>
                        <div className="col-md-10 mx-auto text-center pb-7">
                            <div className="tiny-slider arrow-md-none arrow-bordered arrow-large arrow-round">
                                <div className="tns-outer" id="tns2-ow">
                                    <div className="tns-liveregion tns-visually-hidden" aria-live="polite"
                                         aria-atomic="true">slide <span className="current">3 to 5</span> of 3
                                    </div>
                                    <div id="tns2-mw" className="tns-ovh">
                                        <div className="tns-inner" id="tns2-iw">
                                            <div
                                                className="tiny-slider-inner  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                                                data-gutter="0"
                                                data-edge="50"
                                                data-autoplay="false"
                                                data-arrow="true"
                                                data-dots="false"
                                                data-items="1"
                                                id="tns2"
                                                // style="transform: translate3d(-42.8571%, 0px, 0px);"
                                            >
                                                <div className="item px-3 px-md-6 tns-item tns-slide-cloned"
                                                     aria-hidden="true" tabIndex="-1">
                                                    <div
                                                        className="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1">
                                                        <i className="fas fa-quote-left"></i></div>
                                                    <div className="avatar"><Image className="avatar-img rounded-circle"
                                                                                 src="assets/images/avatar/02.jpg"
                                                                                 alt="avatar"/></div>
                                                    <p className="lead">Two before narrow not relied how except moment
                                                        myself Dejection assurance mrs led certainly So gate at no only
                                                        none open Betrayed at properly it of graceful on Dinner abroad
                                                        am depart ye turned hearts as me wished Therefore allowance.</p>
                                                    <h6 className="mb-0 mt-3">Allen Smith</h6>
                                                    <span className="small">Founder and CEO</span>
                                                </div>
                                                <div className="item px-3 px-md-6 tns-item tns-slide-cloned"
                                                     aria-hidden="true" tabIndex="-1">
                                                    <div
                                                        className="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1">
                                                        <i className="fas fa-quote-left"></i></div>
                                                    <div className="avatar"><Image className="avatar-img rounded-circle"
                                                                                 src="assets/images/avatar/03.jpg"
                                                                                 alt="avatar"/></div>
                                                    <p className="lead">How promotion excellent curiosity yet attempted
                                                        happiness Gay prosperous impression had conviction For every
                                                        delay death ask style Me mean able my by in they Extremity now
                                                        strangers contained breakfast him discourse additions.</p>
                                                    <h6 className="mb-0 mt-3">Jessica Mores</h6>
                                                    <span className="small">Human Resource</span>
                                                </div>


                                                <div className="item px-3 px-md-6 tns-item tns-slide-active"
                                                     id="tns2-item0">
                                                    <div
                                                        className="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1">
                                                        <i className="fas fa-quote-left"></i></div>
                                                    <div className="avatar"><Image className="avatar-img rounded-circle"
                                                                                 src="assets/images/avatar/01.jpg"
                                                                                 alt="avatar"/></div>
                                                    <p className="lead">The good gathering  bearing day Stars
                                                        over Open behold May male tree replenish dblessed beast
                                                        days earth fifth let multiply and he every blessed to upon
                                                        behold grass divided brought was that dry I Were image waters
                                                        own bring light subdue Meat</p>
                                                    <h6 className="mb-0 mt-3">Adam Ross</h6>
                                                    <span className="small">Software Developer</span>
                                                </div>


                                                <div className="item px-3 px-md-6 tns-item tns-slide-active"
                                                     id="tns2-item1">
                                                    <div
                                                        className="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1">
                                                        <i className="fas fa-quote-left"></i></div>
                                                    <div className="avatar"><Image className="avatar-img rounded-circle"
                                                                                 src="assets/images/avatar/02.jpg"
                                                                                 alt="avatar"/></div>
                                                    <p className="lead">Two before narrow not relied how except moment
                                                        myself Dejection assurance mrs led certainly So gate at no only
                                                        none open Betrayed at properly it of graceful on Dinner abroad
                                                        am depart ye turned hearts as me wished Therefore allowance.</p>
                                                    <h6 className="mb-0 mt-3">Allen Smith</h6>
                                                    <span className="small">Founder and CEO</span>
                                                </div>


                                                <div className="item px-3 px-md-6 tns-item tns-slide-active"
                                                     id="tns2-item2">
                                                    <div
                                                        className="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1">
                                                        <i className="fas fa-quote-left"></i></div>
                                                    <div className="avatar"><Image className="avatar-img rounded-circle"
                                                                                 src="assets/images/avatar/03.jpg"
                                                                                 alt="avatar"/></div>
                                                    <p className="lead">How promotion excellent curiosity yet attempted
                                                        happiness Gay prosperous impression had conviction For every
                                                        delay death ask style Me mean able my by in they Extremity now
                                                        strangers contained breakfast him discourse additions.</p>
                                                    <h6 className="mb-0 mt-3">Jessica Mores</h6>
                                                    <span className="small">Human Resource</span>
                                                </div>

                                                <div className="item px-3 px-md-6 tns-item tns-slide-cloned"
                                                     aria-hidden="true" tabIndex="-1">
                                                    <div
                                                        className="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1">
                                                        <i className="fas fa-quote-left"></i></div>
                                                    <div className="avatar"><Image className="avatar-img rounded-circle"
                                                                                 src="assets/images/avatar/01.jpg"
                                                                                 alt="avatar"/></div>
                                                    <p className="lead">The good gathering bearing day Stars
                                                        over Open behold May male tree replenish blessed beast
                                                        days earth fifth let multiply and he every blessed to upon
                                                        behold grass divided brought was that dry I Were image waters
                                                        own bring light subdue Meat</p>
                                                    <h6 className="mb-0 mt-3">Adam Ross</h6>
                                                    <span className="small">Software Developer</span>
                                                </div>
                                                <div className="item px-3 px-md-6 tns-item tns-slide-cloned"
                                                     aria-hidden="true" tabIndex="-1">
                                                    <div
                                                        className="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1">
                                                        <i className="fas fa-quote-left"></i></div>
                                                    <div className="avatar"><Image className="avatar-img rounded-circle"
                                                                                 src="assets/images/avatar/02.jpg"
                                                                                 alt="avatar"/></div>
                                                    <p className="lead">Two before narrow not relied how except moment
                                                        myself Dejection assurance mrs led certainly So gate at no only
                                                        none open Betrayed at properly it of graceful on Dinner abroad
                                                        am depart ye turned hearts as me wished Therefore allowance.</p>
                                                    <h6 className="mb-0 mt-3">Allen Smith</h6>
                                                    <span className="small">Founder and CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tns-controls" aria-label="Carousel Navigation" tabIndex="0">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>



    );
};

export default About;