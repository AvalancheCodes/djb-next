import React from "react";
import PortfolioSummaryData from "../../public/config/portfolio-summary-data";
import ProductItem from "./ProductItem";

const items = PortfolioSummaryData.map((item, index) => {
  return (
    <ProductItem
      key={index}
      id={index}
      title={item.title}
      price={item.price}
      description={item.description}
      image={item.mainImage}
      imageAlt={item.mainImageAlt}
      link={item.link}
      linkText={item.linkText}
    />
  );
});

const ProductsGrid = ({ numberOfColumns }) => {
  const gridClass = `col-sm-6 col-lg-${numberOfColumns} mb-30`;
  return (
    <div className="container">
      <div className="row">{items}</div>
    </div>
  );
};

export default ProductsGrid;
