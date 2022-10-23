import LightFeatureItem from "./light-feature-Item";
import { FC } from "react";

interface IProps {
  features: any[];
}

const LightFeaturesBoard: FC<IProps> = ({ features }) => {
  const items = features.map((feature, index) => {
    return <LightFeatureItem key={index} {...feature} />;
  });

  return (
    <section className="position-relative">
      {/*<Fireworks classList={"position-absolute end-0 top-0 m-4 d-none d-lg-block"} />*/}
      {/*<RedCircleDottedCircle classList={"position-absolute start-0 bottom-0 mb-6 ms-4 d-none d-lg-block"} />*/}
      <div className="container">
        <div className="row">{items} </div>
      </div>
    </section>
  );
};

export default LightFeaturesBoard;
