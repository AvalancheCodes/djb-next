import React from 'react';

const TopNav = (props) => {
    return (
        <nav className="navbar navbar-expand">
            <div className="container">
                <a className="navbar-brand " href="index.html">
                    {/*<img className="navbar-brand-item"*/}
                    {/*     src="assets/images/logo.png" alt="Logo" />*/}
                    <h3 className="me-2 mb-0">David J<span className="text-primary">.</span> Barel</h3>
                    <h6 className="smaller text-muted mb-0">Creative FUll-Stack Developer</h6>
                </a>
                <div className="navbar-nav navbar-nav flex-row align-items-center">
                    <div className="nav-item ms-4">
                        <a className="nav-link p-0 flex-row"
                           data-bs-toggle="offcanvas"
                           href="#offcanvasEnd"
                           role="button" aria-controls="offcanvasEnd">
                                <span className="font-heading fw-bold"
                                      data-bs-target="#offcanvasEnd">Menu</span>
                            <i className="bi bi-text-right rtl-flip display-8 align-middle"
                               data-bs-target="#offcanvasEnd"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;