import React, { FC, ReactElement } from "react";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IStarProps {
  checked: boolean;
  filled: number;
  classNames?: string;
}

const StarRating: FC<IStarProps> = ({
  checked,
  filled,
  classNames,
}): ReactElement => {
  return (
    <span className="rating-star">
      <i className={`fa fa-star ${checked ? "checked" : ""} ${classNames}`}></i>
    </span>
  );
};

interface IRatingProps {
  baseCount: number;
  rating: number;
  classNames?: string;
}

const Rating: FC<IRatingProps> = ({
  baseCount,
  rating,
  classNames,
}): ReactElement => {
  const stars = [];
  for (let i = 0; i < baseCount; i++) {
    stars.push(
      <StarRating
        key={i}
        checked={i < rating}
        filled={i < rating ? 1 : 0}
        classNames={classNames}
      />
    );
  }
  return <div>{stars}</div>;
};

export default Rating;
