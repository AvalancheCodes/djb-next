import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import path from "path";
import Link from "next/link";
import ServicesHero from "../../components/hero/services/services-hero";

// export const getStaticProps = async () => {
//     //const servicesFiles = require.context('../../content/services', true, /\.md$/);
// }
const Services = () => {
    return (
        <>
            <ServicesHero />
        </>
    );
};

export default Services;