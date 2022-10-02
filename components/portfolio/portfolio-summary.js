import React, {useEffect} from 'react';
import PortfolioSummaryData from "../../config/portfolio-summary-data";
import SummaryItem from "./summary-item";
// import useTinySlider from "../../hooks/useTinySlider/use-Tiny-Slider";

// Slider options

const PortfolioSummary = () => {
    const containerRef = React.createRef(null);
    const options = {
        items: 1,
        autoplay: true,
        autoplayButtonOutput: false,
        controls: false,
        nav:true
    }
    // const tns = useTinySlider(containerRef.current, options, null);

    useEffect(() => {
        const tns = import("tiny-slider/src/tiny-slider.js")
            .then(module => {
                // const container = document.querySelector('.tiny-slider-inner');
                const slider = module.tns({
                    container: containerRef.current,
                    ...options
                });
                console.log('slider: ', slider);
            }
            );
        console.log('testimonials loaded and tns: ', tns);
    } , []);

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
                        <div ref={containerRef}
                             className="tiny-slider-inner"
                             data-arrow="false" data-dots="true" data-items-xl="3"
                             data-items-lg="3" data-items-md="3" data-items-sm="2" data-items-xs="1">
                                {/*// style="transform: translate3d(-80%, 0px, 0px);"                                    >*/}
                                {PortfolioSummaryData.map((summaryItem, index) => {
                                    return <SummaryItem key={index}
                                                        id={index}
                                                        title={summaryItem.title}
                                                        text={summaryItem.text}
                                                        name={summaryItem.name}
                                                        mainImage={summaryItem.mainImage}
                                                        secondaryImage={summaryItem.secondaryImage}
                                                        link={summaryItem.link}
                                    />
                                }  )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSummary;