import React from 'react';

const IllustratedHero = () => {
    return (
        <section className="pt-4">
            <div className="container">
                <div className="row d-flex justify-content-end align-items-center">
                    <div className="col-12 col-md-6">
                        <span>Top rated <span className="badge bg-primary">#1</span> on Upwork.com </span>
                        <h1 className="text-dark mt-4">I will turn your idea into a <u>working product</u>
                             <span className="text-primary">.</span></h1>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate felis
                            eget
                            ex rhoncus, vitae gravida enim ultricies. Nam sit amet commodo neque.</p>
                        <a href="#" className="btn btn-dark me-2">Schedule Your Complimentary Consultation</a>
                        {/*<a className="btn btn-link" data-glightbox data-gallery="office-tour"*/}
                        {/*   href="https://youtu.be/n_Cn8eFo7u8"><i className="bi bi-play-btn-fill lead me-1"></i> View*/}
                        {/*    video </a>*/}

                    </div>

                    <div className="col-12 col-md-6  mb-5 mt-3 pt-5">
                        <img src="/assets/images/paint-splash.jpeg"
                             className="position-relative hero-main-img d-md-none d-lg-none d-xl-none d-xxl-none"
                             alt="" />
                        <img src="/assets/images/polyhead.png" className="position-relative
                              hero-main-img d-none d-md-block d-large-block d-xl-block d-xxl-block" alt="" />

                    </div>

                </div>
            </div>
        </section>
    );
};

export default IllustratedHero;