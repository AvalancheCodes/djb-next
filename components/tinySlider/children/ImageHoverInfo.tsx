import React from "react";
import CartIcon from "../../shop/CartIcon";
import ShopContext from "../../../context/shop/ShopContext";

const ImageHoverInfo = ({ children, ...props }) => {
  const {
    id,
    title,
    description,
    image,
    imageAlt,
    showDescription,
    descriptionLength,
  } = props;

  return (
    <div className="item">
      <div className="action-container">{children}</div>
      <div className="card card-metro">
        <div className="card-image grayscale">
          <img src={image} alt={imageAlt} />
        </div>
        <div className="card-img-overlay"></div>
        <div className="card-img-overlay d-flex flex-column">
          <div className="mt-auto card-text">
            <h5 className="text-white">{title}</h5>
            {showDescription &&
              (() => {
                if (description.length) {
                  return (
                    <p className="small text-white mb-0 text-truncate">
                      {description.substring(0, descriptionLength)}...
                    </p>
                  );
                }
              })()}
          </div>
          <div className="d-flex justify-content-center ">
            <button className="btn btn-primary mt-3 col-6 col-sm-8">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHoverInfo;
