import React from 'react';
import Link from "next/link";

const SummaryItem = ({
    title,
    description,
    mainImage, mainImageAlt,
    secondaryImage, secondaryImageAlt,
    link, linkText }) => {
    return (
        // <!-- Could be also tns-slide -->
        // todo: why tns-item-cloned
        <div className="item tns-item tns-slide-cloned" aria-hidden="true"
             tabIndex="-1">
            <Link href={link}>
                <a href="#" className="card card-metro">
                    <div className="card-image">
                        <img src={secondaryImage} alt={secondaryImageAlt} />
                    </div>
                    <div className="card-img-overlay d-flex flex-column">
                        <img className="w-40" src={mainImage} alt={mainImageAlt} />
                        <div className="mt-auto card-text">
                            <h5 className="text-white">{title}</h5>
                            <p className="small text-white mb-0 text-truncate">Ten
                                wineries with strong personalities, individual stories
                                and multi-faceted wines</p>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default SummaryItem;