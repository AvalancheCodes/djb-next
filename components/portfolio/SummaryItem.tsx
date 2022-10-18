import React from "react";
import Link from "next/link";
import Image from "next/image";

const SummaryItem = ({
  title,
  description,
  mainImage,
  mainImageAlt,
  secondaryImage,
  secondaryImageAlt,
  text,
  link,
  linkText,
}) => {
  // Todo: Replace temporary images with real images
  const tempMainImage = mainImage;
  const tempSecondaryImage = secondaryImage;

  return (
    <div className="item">
      <div className="card card-metro">
        <div className="card-image grayscale">
          {/*<Image src={mainImage} alt="card image" width={770} height={770}/>*/}
          {/*<img src={mainImage} alt={mainImageAlt} />*/}
          <Image
            loader={() => tempMainImage}
            src={tempMainImage}
            alt={mainImageAlt}
            width={520}
            height={696}
          />
        </div>
        <div className="card-img-overlay d-flex flex-column card-element-hover">
          {/*<Image className="w-40" src={secondaryImage} alt="" width={100} height={32}/>*/}
          {/*<img className="w-40" src={secondaryImage} alt={secondaryImageAlt} />*/}
          <Image
            className="w-40"
            loader={() => tempSecondaryImage}
            src={tempSecondaryImage}
            alt={secondaryImageAlt}
            width={192}
            height={61}
          />
          <div className="mt-auto card-text">
            <h5 className="text-white">{title}</h5>
            <p className="small text-white mb-0 text-truncate">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryItem;
