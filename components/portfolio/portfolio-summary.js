import React from 'react';

const PortfolioSummary = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-sm-8 mb-3">
                    <h2 className="display-5 mb-0 mb-sm-4 text-dark-stroke">Our Portfolio</h2>
                </div>
                <div className="col-sm-4 mb-4 text-start text-sm-end">
                    <a href="#" className="btn btn-line text-dark mt-3">View our work</a>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="tiny-slider dots-bordered">
                        <div className="tns-outer" id="tns3-ow">
                            <div className="tns-liveregion tns-visually-hidden" aria-live="polite"
                                 aria-atomic="true">slide <span className="current">13</span> of 7
                            </div>
                            <div id="tns3-mw" className="tns-ovh">
                                <div className="tns-inner" id="tns3-iw">
                                    <div
                                        className="tiny-slider-inner  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                                        data-arrow="false" data-dots="true" data-items-xl="3" data-items-lg="3"
                                        data-items-md="3" data-items-sm="2" data-items-xs="1" id="tns3"
                                        style="transform: translate3d(-80%, 0px, 0px);">

                                    </div>
                                </div>
                            </div>
                            <div className="tns-nav" aria-label="Carousel Pagination">
                                <button type="button" data-nav="0" aria-controls="tns3" style=""
                                        aria-label="Carousel Page 1" className="" tabIndex="-1"></button>
                                <button type="button" data-nav="1" aria-controls="tns3" style=""
                                        aria-label="Carousel Page 2 (Current Slide)"
                                        className="tns-nav-active"></button>
                                <button type="button" data-nav="2" aria-controls="tns3" style=""
                                        aria-label="Carousel Page 3" className="" tabIndex="-1"></button>
                                <button type="button" data-nav="3" aria-controls="tns3" style=""
                                        aria-label="Carousel Page 4" className="" tabIndex="-1"></button>
                                <button type="button" data-nav="4" aria-controls="tns3" style=""
                                        aria-label="Carousel Page 5" className="" tabIndex="-1"></button>
                                <button type="button" data-nav="5" aria-controls="tns3" style=""
                                        aria-label="Carousel Page 6" className="" tabIndex="-1"></button>
                                <button type="button" data-nav="6" aria-controls="tns3" style=""
                                        aria-label="Carousel Page 7" className="" tabIndex="-1"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSummary;