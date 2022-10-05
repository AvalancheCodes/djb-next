import Script from "next/script";
import Illustrated from "../components/hero/illustrated/illustrated";
import Testimonials from "../components/testimonials/testimonials";
import PortfolioSummary from "../components/portfolio/portfolio-summary";
import React from "react";
import FeaturesBanner from "../components/features/features-banner";
import LogoBanner from "../components/logos/technology-banner";
import ProjectCta from "../components/cta/project-cta";

export default function Home() {


  return (
    <>
        <title>David J. Barel Creative Full Stack Developer</title>
        <meta name="description" content="David J. Barel is a top rated full stack developer" />
        <link rel="icon" href="/favicon.ico" />
        {/*<script type="text/javascript" src="/test.js" />*/}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossOrigin="anonymous"
                type={"module"}
        ></Script>
        {/*<Script type={"text/javascript"} src={"vendor/tiny-slider/tiny-slider.js"}></Script>*/}
        {/*<Script type={"text/javascript"} src={"vendor/js/theme.js"}></Script>*/}

        <section className="pt-4">
            <Illustrated />
        </section>
        {/* END HEAD */}

        {/*  Services  */}
        <section className="bg-dark position-relative pattern-overlay-5 mx-xl-3 mx-xxxl-9 rounded">
            <FeaturesBanner />
        </section>

        <section className="pt-4">
            <Testimonials />
        </section>
        {/*    Technology   */}
        <section className="pt-0 mt-7">
            <LogoBanner />
        </section>
        <section className="pt-4">
            <PortfolioSummary />
        </section>


        <section className="pt-0 position-relative">
            {/*<ProjectCta />*/}
        </section>

    </>
  )
}
