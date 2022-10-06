import React from 'react';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {serialize} from "next-mdx-remote/serialize";
import ServiceLayout from "../layouts/service-layout";
import BreadCrumbs from "../../components/breadcrumb/bread-crumbs";
import {MDXRemote} from "next-mdx-remote";
import Image from "next/image";
import Head from "next/head";
import Calendly from "../../components/calendly/calendly";


export const getStaticPaths = async () => {
    const filesPath = path.join(process.cwd(), 'content', 'services');
    const servicesFiles = fs.readdirSync(filesPath);
    const paths = servicesFiles.map((filename) => {
        return {
            params: {
                slug: filename.replace('.mdx', '')
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const { slug } = context.params;
    const filesPath = path.join(path.join(process.cwd(), 'content', 'services', slug + '.mdx'));
    const markdownWithMeta = fs.readFileSync(filesPath, 'utf-8');
    const { data: frontMatter, content} = matter(markdownWithMeta);
    const mdxSource = await serialize(content);
    debugger
    return {
        props: {
            frontMatter,
            slug,
            mdxSource
        }
    }
}
const ServiceDetails = (props) => {
    const { frontMatter, mdxSource, slug } = props;
    return (
        <ServiceLayout>
            <Head>
                <title>{frontMatter.title}</title>
            </Head>
            <section>
                <div className="container">
                    <div className="row ">
                        <div className="col-md-8">
                            <BreadCrumbs />
                            <h2 className="display-6">{frontMatter.title}</h2>
                            <p className="lead">{frontMatter.excerpt}</p>
                        </div>
                    </div>
                </div>
            </section>
            <MDXRemote {...mdxSource} components={{Image}} />
        </ServiceLayout>
    );
};

export default ServiceDetails;