import React from 'react';
import Link from "next/link";
import Routes from "../../config/routes";
import Newsletter from "../shared/newsletter";

const Footer = () => {
    const socialCore = Routes.socialRoutes.filter(route => route.isCore === true);
    const footerRoutes = Routes.footerEssentials;

    return (
        <footer className="bg-dark footer-sticky pt-6">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 mb-5">
                        <h3 className="text-white">David J<span className="text-primary">.</span> Barel</h3>
                        <p>A full-Stack Developer && Fine Art Artist</p>
                        <div className="d-flex me-auto">
                            <h6 className="mt-2 me-4 text-white">Follow on:</h6>
                            <div className="list-group-inline list-unstyled text-primary-hover">
                                {socialCore.map((route, index) => (
                                    <Link href={route.path} key={index}>
                                        <a className="list-group-item text-white bg-transparent">
                                            <i className={route.icon}></i>
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5">
                        <Newsletter />
                    </div>
                </div>
                <div className="divider-light opacity-1"></div>
                <div className="row align-items-center justify-content-md-between py-4">
                    <div className="col-md-6">
                        <div className="text-center text-md-start">©2022
                            <a href="https://www.davidbarel.com/">David J. Barel</a>. All rights reserved
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                            {footerRoutes.map((route, index) => (
                                <li className="nav-item" key={index}>
                                    <Link href={route.path}>
                                        <a className="nav-link text-body text-primary-hover">{
                                            route.friendlyName}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;