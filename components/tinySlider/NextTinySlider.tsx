import { FC, ReactNode, useEffect, useRef } from "react";

const { tns } = require("tiny-slider/dist/tiny-slider");

interface IProps {
  options: any;
  children: ReactNode;
  classNames: string;
  // Class names for the inner slider
  innerClassNames?: string;
}

const NextTinySlider: FC<IProps> = ({ options, children, classNames }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const slider = tns({
        container: innerRef.current,
        ...options,
      } as any);

      if (classNames) {
        classNames.split(" ").forEach((className) => {
          containerRef.current?.classList.add(className);
        });
      }
    }
  }, [classNames, options]);

  return (
    <div
      ref={containerRef}
      className="tiny-slider arrow-md-none arrow-bordered arrow-large arrow-round"
    >
      <div className="tiny-slider-inner h-500 h-sm-700 h-xl-900" ref={innerRef}>
        {children}
      </div>
    </div>
  );
};

export default NextTinySlider;
