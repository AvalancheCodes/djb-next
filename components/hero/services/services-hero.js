import React from "react";
import Image from "next/image";
import DottedRectangle from "../../figures/dotted-rectangle";

const ServicesHero = () => {
  const srcMain = "https://via.placeholder.com/770x770/999999";
  const srcSecondary = "https://via.placeholder.com/770x770/666666";
  return (
        <section className="bg-white pattern-overlay-3 pt-0 position-relative h-400
                        h-md-600 h-lg-700 h-xl-800">
            <div className="container position-relative">
                <div className="row g-0 d-flex justify-content-end">
                    <div className="col-6 mt-5 d-none d-md-block">
                        {/*  main left image */}
                        <Image className="rounded " loader={() => srcMain}
                               src={srcMain} width={770} height={770} alt="placeholder" />

                    </div>
                    <div className="col-2 mt-auto mb-8 d-none d-md-block">
                        <DottedRectangle classList={"d-none d-lg-block mb-7"} />
                        <div className={"relative-left-25 relative-top-25"}>
                            <Image className="rounded ms-n4" loader={() => srcSecondary}
                                   src={srcSecondary} width={770} height={770} alt="secondary placeholder" />
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8 position-absolute start-0 top-0 text-start mt-5 mt-md-9 z-index-99">
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