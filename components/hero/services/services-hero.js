import React from 'react';
import Image from 'next/image';
import DottedRectangle from "../../figures/dotted-rectangle";

const ServicesHero = () => {
    return (
        <section className="bg-white pattern-overlay-3 pt-0 position-relative h-400 h-md-600 h-lg-700 h-xl-800">
            <div className="container position-relative">
                <div className="row g-0 d-flex justify-content-end">
                    <div className="col-6 mt-5 d-none d-md-block">
                        {/*  main left image */}
                        <Image className="rounded" src="/images/about/03.jpg" alt="" width={770} height={770} />
                    </div>
                    <div className="col-2 mt-auto mb-8 d-none d-md-block">
                        <DottedRectangle classList={"d-none d-lg-block mb-7"} />
                        <Image className="rounded ms-n4" src="/images/about/04.jpg" alt="" width={770} height={770} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8 position-absolute start-0 top-0 text-start mt-5 mt-md-9">
                        <h1 className="display-4 text-dark">
                            <span className="text-dark-stroke text-primary-shadow">This is how I roll</span> your
                            business online</h1>
                        <a href="#" className="btn btn-dark btn-line">Schedule a call with me</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServicesHero;