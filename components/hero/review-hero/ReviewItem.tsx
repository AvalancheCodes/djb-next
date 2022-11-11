import React, { ReactElement, FC, useEffect } from "react";
// import fas, { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "@/components/rating/rating";

export interface IReviewItemProps {
  reviewerName: string;
  trait: string;
  title: string;
  project: string;
  review: string;
  image: string;
  imageAlt: string;
  ratingImage: string;
  // states
  sliderIndex?: number;
}

const ReviewItem: FC<IReviewItemProps> = (
  props: IReviewItemProps
): ReactElement => {
  const {
    reviewerName,
    trait,
    review,
    image,
    imageAlt,
    project,
    title,
    sliderIndex,
  } = props;
  const itemRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (itemRef.current) {
      // console.log(
      //   "index changed inside ReviewItem",
      //   sliderIndex,
      //   itemRef.current
      // );
      // animated elements
      const h2 = itemRef.current.querySelector("h2");
      const h5 = itemRef.current.querySelector("h5");
      const review = itemRef.current.querySelector("p");
      const ratingImage = itemRef.current.querySelector(".rating-image");
      const reviewer = itemRef.current.querySelector(".reviewer");
    }
  }, [sliderIndex]);

  return (
    <div
      className={`h-100 bg-dark-overlay-4 bg-dark pt-5`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      data-bg-image={image}
      ref={itemRef}
    >
      <div className="container h-100 px-4 ">
        <div className="row d-flex h-100">
          <div className="col-md-8 justify-content-center align-self-center align-items-start">
            <div className="slider-content text-start pt-4">
              {/* */}
              <h2
                className="
                    animate__animated
                    animate__fadeInUp
                    animate__delay-2s
                    display-3 text-white-stroke text-primary-shadow d-block "
              >
                {trait}
              </h2>
              <h4
                className=" ps-1
                    animate__animated
                    animate__fadeInUp
                    animate__delay-1s 
                    text-white mb-1 mb-md-4 "
              >
                {project}
                <hr className="hr-light my-4" />
              </h4>
              {/*animate__animated animate__fadeInUp */}

              {/*animate__animated animate__delay-1s*/}
              <p
                className="
                    lead text-white
                    animate__animated
                    animate__fadeInUp
                    animate__delay-3s
                    "
              >
                {review}
              </p>
              {/*animate__animated animate__fadeInUp*/}
              <div
                className="overflow-hidden rating-image
                    animate__animated
                    animate__bounceIn
                    animate__delay-4s
                    "
              >
                <Rating
                  baseCount={5}
                  rating={5}
                  classNames="fs-3 text-secondary"
                />
                {/*<span className="fa fa-star checked fs-3"></span>*/}
                {/*<FontAwesomeIcon icon={["fas", "star"]} className="fs-3" />*/}
                {/*<img src={props.ratingImage} alt="rating" className="w-40" />*/}
              </div>
              {/*animate__animated */}
              <div
                className="reviewer mt-4
                      animate__animated
                      animate__fadeInUp animate__delay-5s
g
              "
              >
                <div></div>
                <div className="btn btn-line text-white mb-0">
                  {reviewerName}
                </div>
                <div className="text-white">
                  {" "}
                  <span className="fw-bold">{title.split(",")[0]}</span>,
                  {title.split(",")[1]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
