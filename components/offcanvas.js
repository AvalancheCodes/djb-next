import React from 'react';


const Offcanvas = (props) => {

    // Enable Bootstrap Offcanvas inside useEffect
    // React.useEffect(() => {
    //     const offcanvas = document.querySelector('#offcanvasEnd');
    //     const innerOffcanvasToggle = document.querySelector('[data-bs-dismiss="offcanvas"]');
    //     innerOffcanvasToggle.addEventListener('click', function () {
    //         offcanvas.classList.toggle('show');
    //         // change background visibility of offcanvas and add a fade out animation
    //
    //         debugger
    //         });
    //
    // } , []);

    return (
        <div className="offcanvas offcanvas-end bg-dark"
             tabIndex="-1"
             id="offcanvasEnd"
             aria-labelledby="offcanvasEnd">
            <div className="offcanvas-header">
                <a className="ms-auto btn btn-primary btn-round zoom-hover"
                   data-bs-dismiss="offcanvas" aria-label="Close">
                    <i className="fas fa-times p-0"></i>
                </a>
            </div>
            <div className="offcanvas-body vh-lg-100 d-flex align-items-start flex-column px-5 px-md-6">
                <ul className="nav dropdown-toggle-start-icon d-block flex-column mb-5">
                </ul>
                <div className="mt-auto mb-5">
                    <a href="#" className="font-heading text-white text-primary-hover d-block mb-3">
                        hello@DavidBarel.com</a>
                    <a href="#" className="font-heading text-white text-primary-hover">
                        +(800)300-8690</a>
                </div>
            </div>
        </div>
    );
};

export default Offcanvas;