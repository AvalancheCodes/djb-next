import { FC } from "react";

interface IProps {
  day: any;
  classList?: string;
}

const DayElement: FC<IProps> = ({ day, classList }) => {
  return (
    <>
      <button className={classList}>
        <span>{day}</span>
      </button>
    </>
  );
};

export default DayElement;
