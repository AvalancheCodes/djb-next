import React from 'react';
import PublicLayout from "./layouts/public-layout";
import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <title>About David J. Barel</title>
                <meta name="description" content="This is the about page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <h1>About</h1>
            </div>
        </>

    );
};

export default About;