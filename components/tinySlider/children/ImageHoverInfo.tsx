import React from "react";
import Image from "next/image";
import SlideInfo from "../model/SlideInfo";
import Link from "next/link";

const ImageHoverInfo: React.FC<SlideInfo> = (props) => {
  const { title, description, image, imageAlt } = props;
  return (
    <div className="item">
      <div className="card card-metro">
        <div className="card-image grayscale">
          <img src={image} alt={imageAlt} />
        </div>
        <div className="card-img-overlay d-flex flex-column card-element-hover">
          <ul className="list-unstyled d-flex text-primary-hover justify-content-end">
            <li className="ms-3">
              <Link href="/">
                <a className="text-white">Fb</a>
              </Link>
            </li>
            <li className="ms-3">
              <Link href="/">
                <a className="text-white">Tw</a>
              </Link>
            </li>
            <li className="ms-3">
              <Link href="/">
                <a className="text-white">Iq</a>
              </Link>
            </li>
          </ul>
          <div className="mt-auto card-text">
            <h5 className="text-white">{title}</h5>
            <p className="small text-white mb-0">{description}</p>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-outline-secondary btn-sm mt-3 col-2">
              <i className="bi bi-cart fs-3"></i>
            </button>
            <button className="btn btn-primary mt-3 col-6">View Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHoverInfo;
