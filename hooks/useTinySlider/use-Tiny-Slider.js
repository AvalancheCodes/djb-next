// The useTinySlider hook is used to initiate a tiny slider object
// it takes the following parameters:
// 1. options: an object containing the options for the slider
// 2. The location of the tiny-slider.js file. If this file is not provided then
//    the default location is used: ./tiny-slider/tiny-slider.js
import {useEffect, useState} from 'react';

const useTinySlider = (options, tinyFilename, containerRef) => {
    const [tns, setTns] = useState(null);
    console.log('useTinySlider: ', tns);
    //tinyFilename = tinyFilename || "./tiny-slider/tiny-slider.module.js";
    tinyFilename = '/vendor/tiny-slider/tiny-slider.js';
    useEffect(() => {
            const tns = import(tinyFilename)
                .then(module => {
                    const slider = module.tns({
                        container: containerRef.current,
                        ...options
                    });
                    console.log('Init slider: ', slider);
                    setTns(slider);
                    debugger
                }
            );
            console.log('testimonials loaded and tns: ', tns);

        },
        []);

    return tns;
}

export default useTinySlider;
