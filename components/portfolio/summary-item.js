import React from 'react';
import Link from "next/link";
import Image from "next/image";

const SummaryItem = ({
    title,
    description,
    mainImage, mainImageAlt,
    secondaryImage, secondaryImageAlt,
    text,
    link, linkText }) => {
    return (
        <div className="item">
            <a href="#" className="card card-metro">
                <div className="card-image">
                    {/*<Image src={mainImage} alt="card image" width={770} height={770}/>*/}
                    <img src={mainImage} alt={mainImageAlt} />
                </div>
                <div className="card-img-overlay d-flex flex-column">
                    {/*<Image className="w-40" src={secondaryImage} alt="" width={100} height={32}/>*/}
                    <img className="w-40" src={secondaryImage} alt={secondaryImageAlt} />
                        <div className="mt-auto card-text">
                            <h5 className="text-white">{title}</h5>
                            <p className="small text-white mb-0 text-truncate">{text}</p>
                        </div>
                </div>
            </a>
        </div>
    );
};

export default SummaryItem;