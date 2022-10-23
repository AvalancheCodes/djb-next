import React from "react";

const DayElement = ({ day, classList }) => {
  return (
    <>
            <button className={classList}>
                <span>{day}</span>
            </button>
    </>
  );
};

export default DayElement;