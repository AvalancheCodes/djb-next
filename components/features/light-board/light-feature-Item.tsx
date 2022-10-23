import Link from "next/link";
import { FC } from "react";

interface IProps {
  title: string;
  slug: string;
  excerpt: string;
  iconClass: string;
  subServices: any[];
}

const LightFeatureItem: FC<IProps> = (props) => {
  const { title, slug, excerpt, iconClass, subServices } = props;

  if (!subServices) {
    console.log(props);
    return null;
  }

  const items = subServices.map((subService, index) => {
    return (
      <Link href={`/services/${subService.slug}`} key={index}>
        <a className="list-group-item bg-transparent">
          {subService.title}
          {/*<div className="card-body p-0">*/}
          {/*    <h5 className="card-title">{subService.title}</h5>*/}
          {/*    <p className="card-text">{subService.excerpt}</p>*/}
          {/*</div>*/}
        </a>
      </Link>
    );
  });
  return (
    <div className="col-md-6 col-lg-4">
      <div className="mb-6">
        <span className="text-primary display-6">
          <i className={iconClass}></i>
        </span>
        <h4 className="mt-4 mb-4">
          <Link href={`/services/${slug}`}>
            <a className="text-dark">{title}</a>
          </Link>
        </h4>
        <p>{excerpt}</p>
        <div className="list-group list-group-borderless list-unstyled">
          {" "}
          {items}
        </div>
      </div>
    </div>
  );
};

export default LightFeatureItem;
