import React, { useEffect, useState } from "react";
import { tns } from "tiny-slider/dist/tiny-slider";

const NextTinySlider = ({ options, children, classNames }) => {
  const containerRef = React.createRef<HTMLDivElement>();
  const innerRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    if (containerRef.current) {
      const slider = tns({
        container: innerRef.current,
        ...options,
      } as any);

      if (classNames) {
        classNames.split(" ").forEach((className) => {
          containerRef.current.classList.add(className);
        });
      }
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="tiny-slider arrow-md-none arrow-bordered arrow-large arrow-round"
    >
      <div className="tiny-slider-inner" ref={innerRef}>
        {children}
      </div>
    </div>
  );
};

export default NextTinySlider;
