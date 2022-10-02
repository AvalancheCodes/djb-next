import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import path from "path";
import Link from "next/link";

export const getStaticProps = async () => {
    //const servicesFiles = require.context('../../content/services', true, /\.md$/);
}
const Services = () => {
    return (
        <div>
            <h1>Services</h1>
        </div>
    );
};

export default Services;