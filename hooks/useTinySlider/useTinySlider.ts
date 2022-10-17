// The useTinySlider hook is used to initiate a tiny slider object
// it takes the following parameters:
// 1. options: an object containing the options for the slider
// 2. The location of the tiny-slider.js file. If this file is not provided then
//    the default location is used: ./tiny-slider/tiny-slider.js
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { tns } from "tiny-slider/dist/tiny-slider";

const useTinySlider = (options, containerRef) => {
  const [slider, setSlider] = useState(null);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainer(containerRef.current);
      const slider = tns({
        container: containerRef.current,
        ...options,
      } as any);
      setSlider(slider);
    }
  }, []);

  return slider;
};

export default useTinySlider;
