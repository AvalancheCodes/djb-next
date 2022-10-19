import React from "react";
import ProductInfo from "../../model/directory/ProductInfo";
import Link from "next/link";

const ProductItem: React.FC<ProductInfo | null> = (props) => {
  const {
    title,
    description,
    price,
    image,
    imageAlt,
    link,
    majorTechnology,
    linkText,
  } = props;
  return (
    <div className={"col-sm-6 col-lg-4 mb-30"}>
      <div className="card mb-4">
        <div className="position-relative">
          <img className="card-img-top rounded" src={image} alt={imageAlt} />
          <div className="position-absolute top-50 start-50 translate-middle card-element-hover p-0">
            <Link href={link}>
              <a
                href="portfolio-detail-1.html"
                className="btn btn-white btn-sm btn-line"
              >
                {linkText}
              </a>
            </Link>
          </div>
        </div>
        <div className="card-body px-0 mt-n5 position-relative zindex-9">
          <span
            className="display-9 mb-0 mt-2
            font-alt fw-normal bg-primary rounded
            text-white px-2 py-1 ms-3 mb-3 d-inline-block"
          >
            ${price}
          </span>
          <h5 className="card-title">
            <Link href={link}>
              <a>{title}</a>
            </Link>
          </h5>
          <p className="small">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
