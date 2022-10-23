import ProductsGrid from "../../components/productsGrid/ProductsGrid";
import { FC } from "react";

const Projects: FC = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row d-flex justify-content-lg-between">
            <div className="col-12">
              <h1 className="display-4 text-dark-stroke text-primary-shadow">
                Find your next Project
              </h1>
              <p className="lead">
                Select from a wide range of prebuilt projects, which you can use
                as the foundations for your next amazing project.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <ProductsGrid numberOfColumns={"3"} />
      </section>
    </>
  );
};

export default Projects;
