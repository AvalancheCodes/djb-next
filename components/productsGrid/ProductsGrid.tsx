import PortfolioSummaryData from "../../public/config/portfolio-summary-data";
import ProductItem from "./ProductItem";
import { FC } from "react";

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

interface IProps {
  numberOfColumns: string;
}

const ProductsGrid: FC<IProps> = ({ numberOfColumns }) => {
  const gridClass = `col-sm-6 col-lg-${numberOfColumns} mb-30`;
  return (
    <div className="container">
      <div className="row">{items}</div>
    </div>
  );
};

export default ProductsGrid;
