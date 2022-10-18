import React from "react";
import Calendar from "../../calendar/calendar";
import Image from "next/image";

const IllustratedHero = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-end align-items-center">
        <div className="col-12 col-md-6">
          <span>
            Top rated <span className="badge bg-primary">#1</span> on Upwork.com{" "}
          </span>
          <h1 className="text-dark mt-4">
            Schedule your <u>complimentary consultation</u>
            <span className="text-primary">.</span>
          </h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vulputate felis eget ex rhoncus, vitae gravida enim ultricies. Nam
            sit amet commodo neque.
          </p>
          {/*<Calendar />*/}

          {/*<a className="btn btn-link" data-glightbox data-gallery="office-tour"*/}
          {/*   href="https://youtu.be/n_Cn8eFo7u8"><i className="bi bi-play-btn-fill lead me-1"></i> View*/}
          {/*    video </a>*/}
        </div>

        <div className="col-12 col-md-6  mb-5 ">
          {/*<Image*/}
          {/*  src="images/paint-splash.jpeg"*/}
          {/*  layout={"fill"}*/}
          {/*  className="position-relative hero-main-img d-md-none d-lg-none d-xl-none d-xxl-none"*/}
          {/*  alt=""*/}
          {/*/>*/}
          {/*<Image src="/caltest.png" */}
          {/*       layout={"fill"}*/}
          {/*       className="position-relative hero-main-img mb-3" />*/}
          {/*<a href="#" className="btn btn-dark me-2 ">Schedule Your Complimentary Consultation</a>*/}
          {/*<Image src="/assets/images/polyhead.png"*/}
          {/*       layout={"fill"}*/}
          {/*       className="position-relative*/}
          {/*      hero-main-img d-none d-md-block d-large-block d-xl-block d-xxl-block" alt="" />*/}
        </div>
      </div>
    </div>
  );
};

export default IllustratedHero;
