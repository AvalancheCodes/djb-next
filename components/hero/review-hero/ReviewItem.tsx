import React, { ReactElement, FC } from "react";

export interface IReviewItemProps {
  reviewerName: string;
  trait: string;
  title: string;
  project: string;
  review: string;
  image: string;
  imageAlt: string;
}

const ReviewItem: FC<IReviewItemProps> = (
  props: IReviewItemProps
): ReactElement => {
  const { reviewerName, trait, review, image, imageAlt, project, title } =
    props;
  return (
    <div
      className={`h-100 bg-dark-overlay-4 bg-dark`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      data-bg-image={image}
    >
      <div className="container h-100">
        <div className="row d-flex h-100">
          <div className="col-md-8 justify-content-center align-self-center align-items-start">
            <div className="slider-content text-start">
              <h5 className="animate__animated animate__fadeInUp animate__delay-1s text-white mb-1 mb-md-4">
                {project}
              </h5>
              <h2 className="display-1 text-white-stroke text-primary-shadow d-block animate__animated animate__fadeInUp animate__delay-2s">
                Agency
              </h2>
              <p className="animate__animated animate__fadeInUp animate__delay-3s lead text-white">
                {review}
              </p>
              <div className="animate__animated animate__fadeInUp mt-4 animate__delay-4s">
                <a href="#" className="btn btn-line text-white">
                  {reviewerName + " " + title}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
