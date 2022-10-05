import React from 'react';
import PublicLayout from "./layouts/public-layout";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";

const About = () => {
    return (
        <>
            <title>About David J. Barel</title>
            <meta name="description" content="This is the about page" />
            <link rel="icon" href="/favicon.ico" />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                    crossOrigin="anonymous"
                    type={"module"}
            ></Script>
            <Script type={"text/javascript"} src={"vendor/tiny-slider/tiny-slider.js"}></Script>
            <Script type={"text/javascript"} src={"vendor/js/theme.js"}></Script>
            <div className="container">
                <h1>About</h1>
            </div>

        </>



    );
};

export default About;