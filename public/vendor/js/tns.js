// START: 05 Tiny Slider

const e = {
    selectAll : (selectors)=>{
        return document.querySelectorAll(selectors);
    },
    select : (selector)=>{
        return document.querySelector(selector);
    },

    isVariableDefined : (el)=>{
        return typeof !!el && (el) != 'undefined' && el != null;
    },

    tinySlider: function () {
        const tnsCarousel = e.selectAll('.tiny-slider-inner');
        const $carousel = e.select('.tiny-slider-inner');
        if (!isVariableDefined($carousel)) {
            return true;
        }

        tnsCarousel.forEach(slider => {
            const slider1 = slider;
            const sliderMode = slider1.getAttribute('data-mode') ? slider1.getAttribute('data-mode') : 'carousel';
            const sliderAxis = slider1.getAttribute('data-axis') ? slider1.getAttribute('data-axis') : 'horizontal';
            const sliderSpace = slider1.getAttribute('data-gutter') ? slider1.getAttribute('data-gutter') : 30;
            const sliderEdge = slider1.getAttribute('data-edge') ? slider1.getAttribute('data-edge') : 0;

            const sliderItems = slider1.getAttribute('data-items') ? slider1.getAttribute('data-items') : 4; //option: number (items in all device)
            const sliderItemsXl = slider1.getAttribute('data-items-xl') ? slider1.getAttribute('data-items-xl') : Number(sliderItems); //option: number (items in 1200 to end )
            const sliderItemsLg = slider1.getAttribute('data-items-lg') ? slider1.getAttribute('data-items-lg') : Number(sliderItemsXl); //option: number (items in 992 to 1199 )
            const sliderItemsMd = slider1.getAttribute('data-items-md') ? slider1.getAttribute('data-items-md') : Number(sliderItemsLg); //option: number (items in 768 to 991 )
            const sliderItemsSm = slider1.getAttribute('data-items-sm') ? slider1.getAttribute('data-items-sm') : Number(sliderItemsMd); //option: number (items in 576 to 767 )
            const sliderItemsXs = slider1.getAttribute('data-items-xs') ? slider1.getAttribute('data-items-xs') : Number(sliderItemsSm); //option: number (items in start to 575 )

            const sliderSpeed = slider1.getAttribute('data-speed') ? slider1.getAttribute('data-speed') : 500;
            const sliderautoWidth = slider1.getAttribute('data-autowidth') === 'true'; //option: true or false
            const sliderArrow = slider1.getAttribute('data-arrow') !== 'false'; //option: true or false
            const sliderDots = slider1.getAttribute('data-dots') !== 'false'; //option: true or false

            const sliderAutoPlay = slider1.getAttribute('data-autoplay') !== 'false'; //option: true or false
            const sliderAutoPlayTime = slider1.getAttribute('data-autoplaytime') ? slider1.getAttribute('data-autoplaytime') : 4000;
            const sliderHoverPause = slider1.getAttribute('data-hoverpause') === 'true'; //option: true or false
            const sliderLoop = slider1.getAttribute('data-loop') !== 'false'; //option: true or false
            const sliderRewind = slider1.getAttribute('data-rewind') === 'true'; //option: true or false
            const sliderAutoHeight = slider1.getAttribute('data-autoheight') === 'true'; //option: true or false
            const sliderfixedWidth = slider1.getAttribute('data-fixedwidth') === 'true'; //option: true or false
            const sliderTouch = slider1.getAttribute('data-touch') !== 'false'; //option: true or false
            const sliderDrag = slider1.getAttribute('data-drag') !== 'false'; //option: true or false
            // Check if document DIR is RTL
            const ifRtl = document.getElementsByTagName("html")[0].getAttribute("dir");
            let sliderDirection;
            if (ifRtl === 'rtl') {
                sliderDirection = 'rtl';
            }

            const tnsSlider = tns({
                container: slider,
                mode: sliderMode,
                axis: sliderAxis,
                gutter: sliderSpace,
                edgePadding: sliderEdge,
                speed: sliderSpeed,
                autoWidth: sliderautoWidth,
                controls: sliderArrow,
                nav: sliderDots,
                autoplay: sliderAutoPlay,
                autoplayTimeout: sliderAutoPlayTime,
                autoplayHoverPause: sliderHoverPause,
                autoplayButton: false,
                autoplayButtonOutput: false,
                controlsPosition: top,
                navPosition: top,
                autoplayPosition: top,
                controlsText: [
                    '<i class="fas fa-chevron-left"></i>',
                    '<i class="fas fa-chevron-right"></i>'
                ],
                loop: sliderLoop,
                rewind: sliderRewind,
                autoHeight: sliderAutoHeight,
                fixedWidth: sliderfixedWidth,
                touch: sliderTouch,
                mouseDrag: sliderDrag,
                arrowKeys: true,
                items: sliderItems,
                textDirection: sliderDirection,
                responsive: {
                    0: {
                        items: Number(sliderItemsXs)
                    },
                    576: {
                        items: Number(sliderItemsSm)
                    },
                    768: {
                        items: Number(sliderItemsMd)
                    },
                    992: {
                        items: Number(sliderItemsLg)
                    },
                    1200: {
                        items: Number(sliderItemsXl)
                    }
                }
            });
        });
    },
}

e.tinySlider()