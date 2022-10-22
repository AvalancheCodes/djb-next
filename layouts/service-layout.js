import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Testimonials from "../components/testimonials/Testimonials";
import Head from "next/head";
import Script from "next/script";

const ServiceLayout = ({ children }) => {
  return <MDXProvider>{children}</MDXProvider>;
};

export default ServiceLayout;
