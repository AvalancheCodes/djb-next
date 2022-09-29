import React from 'react';

const Preloader = () => {

    // init preloader
    React.useEffect(() => {
        const preloader = document.querySelector('.preloader');
        debugger
        if(!!preloader && (preloader) !== 'undefined' && (preloader) !== null) {
            preloader.classList.add('animate__animated', 'animate__fadeOut');
            setTimeout(() => {
                preloader.classList.add('d-none');
            }, 1000);
        }
    } , []);

    return (
        <div className="preloader">
            <img className="preloader-item" src='/images/loader/02.gif' alt="Loading" />
        </div>
    );
};

export default Preloader;